# Prestige — Documentation d'intégration API frontend

> Destiné au frontend React + Vite. Ce document est la source de vérité pour la couche de
> communication API : types TypeScript, shapes de requêtes / réponses, codes d'erreur, et
> patterns de hooks / mutations fetch à implémenter.

---

## Table des matières

1. [Configuration globale](#1-configuration-globale)
2. [Couche fetch — client HTTP](#2-couche-fetch--client-http)
3. [Gestion des tokens et sessions](#3-gestion-des-tokens-et-sessions)
4. [Types partagés](#4-types-partagés)
5. [Module Auth](#5-module-auth)
6. [Module Files (upload)](#6-module-files-upload)
7. [Module Service Providers (auto-onboarding)](#7-module-service-providers-auto-onboarding)
8. [Module Catalog (public)](#8-module-catalog-public)
9. [Module Directory (annuaire)](#9-module-directory-annuaire)
10. [Module Chat](#10-module-chat)
11. [Module Subscriptions](#11-module-subscriptions)
12. [Module Payments](#12-module-payments)
13. [Module Push Tokens](#13-module-push-tokens)
14. [WebSocket (temps réel)](#14-websocket-temps-réel)
15. [Codes d'erreur métier](#15-codes-derreur-métier)
16. [Pagination curseur — helper](#16-pagination-curseur--helper)
17. [Structure de fichiers recommandée](#17-structure-de-fichiers-recommandée)

---

## 1. Configuration globale

```ts
// src/lib/api/config.ts

export const API_BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3000';
export const WS_URL       = import.meta.env.VITE_WS_URL  ?? 'http://localhost:3000';

// Durée (ms) avant de considérer la requête en timeout
export const REQUEST_TIMEOUT_MS = 15_000;
```

Variables `.env` requises dans le frontend :

| Variable          | Exemple                        | Rôle                          |
|-------------------|--------------------------------|-------------------------------|
| `VITE_API_URL`    | `https://api.prestige.app`     | Base URL de l'API REST         |
| `VITE_WS_URL`     | `wss://api.prestige.app`       | URL du serveur WebSocket       |

---

## 2. Couche fetch — client HTTP

### 2.1 Shape de l'erreur API normalisée

Toute réponse d'erreur a cette forme :

```ts
// src/lib/api/types.ts

export interface ApiError {
  statusCode: number;
  code: string;       // ex. 'AUTH_INVALID_OTP', 'CARRIER_PROFILE_NOT_FOUND'
  message: string;
  requestId?: string;
  details?: unknown;  // ex. { retryAfterSeconds: 42 } pour le rate-limit
}

export class PrestigeApiError extends Error {
  constructor(
    public readonly statusCode: number,
    public readonly code: string,
    message: string,
    public readonly requestId?: string,
    public readonly details?: unknown,
  ) {
    super(message);
    this.name = 'PrestigeApiError';
  }
}
```

### 2.2 Client fetch central

```ts
// src/lib/api/client.ts

import { API_BASE_URL, REQUEST_TIMEOUT_MS } from './config';
import { PrestigeApiError, type ApiError } from './types';
import { getAccessToken, refreshAccessToken } from './auth-store';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

interface RequestOptions {
  method?: HttpMethod;
  body?: unknown;
  headers?: Record<string, string>;
  isFormData?: boolean;   // pour les uploads multipart
  skipAuth?: boolean;     // pour les routes publiques
  idempotencyKey?: string;
}

async function apiFetch<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const { method = 'GET', body, headers = {}, isFormData, skipAuth, idempotencyKey } = options;

  const requestHeaders: Record<string, string> = { ...headers };

  if (!isFormData) {
    requestHeaders['Content-Type'] = 'application/json';
  }

  if (!skipAuth) {
    const token = getAccessToken();
    if (token) requestHeaders['Authorization'] = `Bearer ${token}`;
  }

  if (idempotencyKey) {
    requestHeaders['Idempotency-Key'] = idempotencyKey;
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  let response: Response;
  try {
    response = await fetch(`${API_BASE_URL}${path}`, {
      method,
      headers: requestHeaders,
      body: isFormData ? (body as FormData) : body !== undefined ? JSON.stringify(body) : undefined,
      signal: controller.signal,
    });
  } catch (err) {
    clearTimeout(timeoutId);
    if ((err as Error).name === 'AbortError') {
      throw new PrestigeApiError(408, 'REQUEST_TIMEOUT', 'La requête a dépassé le délai imparti.');
    }
    throw new PrestigeApiError(0, 'NETWORK_ERROR', 'Erreur réseau, veuillez réessayer.');
  }
  clearTimeout(timeoutId);

  // 401 → tentative de refresh silencieux, puis retry
  if (response.status === 401 && !skipAuth) {
    const refreshed = await refreshAccessToken();
    if (refreshed) {
      return apiFetch<T>(path, { ...options, headers: { ...headers } });
    }
    // refresh échoué → déconnexion gérée dans refreshAccessToken()
    throw new PrestigeApiError(401, 'SESSION_EXPIRED', 'Session expirée, veuillez vous reconnecter.');
  }

  // 204 No Content
  if (response.status === 204) return undefined as unknown as T;

  const json = await response.json().catch(() => null);

  if (!response.ok) {
    const err = json as ApiError | null;
    throw new PrestigeApiError(
      response.status,
      err?.code ?? 'UNKNOWN_ERROR',
      err?.message ?? 'Une erreur est survenue.',
      err?.requestId,
      err?.details,
    );
  }

  return json as T;
}

export const api = {
  get: <T>(path: string, opts?: Omit<RequestOptions, 'method' | 'body'>) =>
    apiFetch<T>(path, { ...opts, method: 'GET' }),
  post: <T>(path: string, body?: unknown, opts?: Omit<RequestOptions, 'method'>) =>
    apiFetch<T>(path, { ...opts, method: 'POST', body }),
  patch: <T>(path: string, body?: unknown, opts?: Omit<RequestOptions, 'method'>) =>
    apiFetch<T>(path, { ...opts, method: 'PATCH', body }),
  put: <T>(path: string, body?: unknown, opts?: Omit<RequestOptions, 'method'>) =>
    apiFetch<T>(path, { ...opts, method: 'PUT', body }),
  delete: <T>(path: string, opts?: Omit<RequestOptions, 'method'>) =>
    apiFetch<T>(path, { ...opts, method: 'DELETE' }),
  upload: <T>(path: string, formData: FormData, opts?: Omit<RequestOptions, 'method' | 'body' | 'isFormData'>) =>
    apiFetch<T>(path, { ...opts, method: 'POST', body: formData, isFormData: true }),
};
```

---

## 3. Gestion des tokens et sessions

```ts
// src/lib/api/auth-store.ts
// Couche de persistance légère (localStorage). À remplacer par votre state manager si besoin.

const KEYS = {
  accessToken:  'prestige:access_token',
  refreshToken: 'prestige:refresh_token',
  sessionId:    'prestige:session_id',
  userId:       'prestige:user_id',
};

export function setSession(data: {
  accessToken: string;
  refreshToken: string;
  sessionId: string;
  userId: string;
}): void {
  localStorage.setItem(KEYS.accessToken,  data.accessToken);
  localStorage.setItem(KEYS.refreshToken, data.refreshToken);
  localStorage.setItem(KEYS.sessionId,    data.sessionId);
  localStorage.setItem(KEYS.userId,       data.userId);
}

export function getAccessToken(): string | null  { return localStorage.getItem(KEYS.accessToken); }
export function getRefreshToken(): string | null { return localStorage.getItem(KEYS.refreshToken); }
export function getSessionId(): string | null     { return localStorage.getItem(KEYS.sessionId); }
export function getUserId(): string | null        { return localStorage.getItem(KEYS.userId); }

export function clearSession(): void {
  Object.values(KEYS).forEach((k) => localStorage.removeItem(k));
  // Déclencher un événement pour que le state manager réagisse
  window.dispatchEvent(new CustomEvent('prestige:session-cleared'));
}

// Appelé automatiquement par client.ts sur 401
export async function refreshAccessToken(): Promise<boolean> {
  const refreshToken = getRefreshToken();
  if (!refreshToken) { clearSession(); return false; }

  try {
    const { API_BASE_URL } = await import('./config');
    const resp = await fetch(`${API_BASE_URL}/auth/refresh`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ refreshToken }),
    });
    if (!resp.ok) { clearSession(); return false; }
    const data = await resp.json() as import('./types').AuthResponse;
    setSession({
      accessToken:  data.accessToken,
      refreshToken: data.refreshToken,
      sessionId:    data.sessionId,
      userId:       data.user.id,
    });
    return true;
  } catch {
    clearSession();
    return false;
  }
}
```

---

## 4. Types partagés

```ts
// src/lib/api/types.ts  (à compléter avec les sections suivantes)

// ── Pagination ───────────────────────────────────────────────────────────────

export interface PageInfo {
  nextCursor: string | null;
  hasNextPage: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  pageInfo: PageInfo;
}

// Ancienne pagination simple renvoyée par catalog/directory (sans pageInfo)
export interface SimplePaginatedResponse<T> {
  data: T[];
  nextCursor: string | null;
}

// ── Enums ────────────────────────────────────────────────────────────────────

export type UserStatus        = 'pending' | 'active' | 'suspended' | 'deleted';
export type OtpChannel        = 'email' | 'sms';
export type OtpPurpose        = 'register' | 'login' | 'reset_password' | 'verify_email' | 'verify_phone';
export type KycStatus         = 'pending' | 'submitted' | 'approved' | 'rejected' | 'suspended';
export type KycDocumentType   = 'cni_front' | 'cni_back' | 'selfie_with_cni' | 'selfie_with_distinctive_sign' | 'license_front' | 'license_back';
export type KycDocumentStatus = 'pending' | 'approved' | 'rejected';
export type ServiceProviderType = 'escort' | 'transporter' | 'property_owner';
export type FilePurpose       = 'kyc_document' | 'user_avatar' | 'provider_avatar' | 'provider_cover' | 'service_photo' | 'service_video';
export type MediaType         = 'photo' | 'video';
export type SubscriptionStatus = 'pending_payment' | 'active' | 'expired' | 'cancelled';
export type SubscriptionTier  = 'bronze' | 'premium' | 'vip';
export type BillingPeriod     = 'monthly' | 'yearly';
export type PaymentMethod     = 'mtn_momo' | 'orange_money';
export type PaymentStatus     = 'pending' | 'processing' | 'succeeded' | 'failed' | 'cancelled';
export type DevicePlatform    = 'android' | 'ios' | 'web';
```

---

## 5. Module Auth

Base path : `/auth`

### 5.1 Types

```ts
// src/lib/api/modules/auth.types.ts

export interface AuthUser {
  id: string;
  email: string | null;
  phone: string | null;
  status: UserStatus;
}

export interface AuthResponse {
  user: AuthUser;
  accessToken: string;
  accessExpiresAt: string;   // ISO 8601
  refreshToken: string;
  refreshExpiresAt: string;  // ISO 8601
  sessionId: string;
}

export interface RegisterResponse {
  userId: string;
  otpExpiresAt: string;      // ISO 8601 — OTP de vérification à confirmer
  message: string;
}

export interface OtpSentResponse {
  expiresAt: string;         // ISO 8601
}

export interface OtpVerifyResponse {
  verified: true;
  userId?: string;           // présent quand purpose = 'register'
}

export interface ForgotPasswordResponse {
  message: string;
}

export interface MeResponse {
  id: string;
  email: string | null;
  phone: string | null;
  firstName: string;
  lastName: string;
  status: UserStatus;
  emailVerifiedAt: string | null;
  phoneVerifiedAt: string | null;
  lastLoginAt: string | null;
}
```

### 5.2 API functions

```ts
// src/lib/api/modules/auth.api.ts

import { api } from '../client';
import { setSession, clearSession } from '../auth-store';
import type {
  AuthResponse, RegisterResponse, OtpSentResponse,
  OtpVerifyResponse, ForgotPasswordResponse, MeResponse,
} from './auth.types';
import type { OtpChannel, OtpPurpose } from '../types';

// POST /auth/register
// Au moins un parmi email / phone doit être fourni.
export async function register(params: {
  email?: string;
  phone?: string;     // E.164 ex. '+237691234567'
  password: string;   // min 8, max 72 chars
  firstName: string;
  lastName: string;
}): Promise<RegisterResponse> {
  return api.post<RegisterResponse>('/auth/register', params, {
    skipAuth: true,
    idempotencyKey: crypto.randomUUID(),
  });
}

// POST /auth/login
// identifier = email ou phone
export async function login(params: {
  identifier: string;
  password: string;
}): Promise<AuthResponse> {
  const data = await api.post<AuthResponse>('/auth/login', params, { skipAuth: true });
  setSession({ accessToken: data.accessToken, refreshToken: data.refreshToken, sessionId: data.sessionId, userId: data.user.id });
  return data;
}

// POST /auth/refresh  (appelé automatiquement par client.ts — rarement en direct)
export async function refresh(refreshToken: string): Promise<AuthResponse> {
  return api.post<AuthResponse>('/auth/refresh', { refreshToken }, { skipAuth: true });
}

// POST /auth/logout
export async function logout(): Promise<void> {
  await api.post<void>('/auth/logout').catch(() => {});
  clearSession();
}

// POST /auth/logout-all
export async function logoutAll(): Promise<void> {
  await api.post<void>('/auth/logout-all').catch(() => {});
  clearSession();
}

// POST /auth/otp/send
export async function sendOtp(params: {
  destination: string;   // email ou phone
  channel: OtpChannel;
  purpose: OtpPurpose;
}): Promise<OtpSentResponse> {
  return api.post<OtpSentResponse>('/auth/otp/send', params, {
    skipAuth: true,
    idempotencyKey: crypto.randomUUID(),
  });
}

// POST /auth/otp/verify
export async function verifyOtp(params: {
  destination: string;
  channel: OtpChannel;
  purpose: OtpPurpose;
  code: string;          // 4–10 chiffres
}): Promise<OtpVerifyResponse> {
  return api.post<OtpVerifyResponse>('/auth/otp/verify', params, { skipAuth: true });
}

// POST /auth/password/forgot
export async function forgotPassword(params: {
  destination: string;
  channel: OtpChannel;
}): Promise<ForgotPasswordResponse> {
  return api.post<ForgotPasswordResponse>('/auth/password/forgot', params, { skipAuth: true });
}

// POST /auth/password/reset
export async function resetPassword(params: {
  destination: string;
  channel: OtpChannel;
  code: string;
  newPassword: string;   // min 8, max 72
}): Promise<void> {
  return api.post<void>('/auth/password/reset', params, { skipAuth: true });
}

// GET /auth/me
export async function getMe(): Promise<MeResponse> {
  return api.get<MeResponse>('/auth/me');
}
```

### 5.3 Hooks React

```ts
// src/hooks/useAuth.ts

import { useState, useCallback } from 'react';
import * as authApi from '../lib/api/modules/auth.api';
import type { MeResponse } from '../lib/api/modules/auth.types';
import { PrestigeApiError } from '../lib/api/types';

// Hook d'inscription en deux étapes (register → verifyOtp)
export function useRegister() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<PrestigeApiError | null>(null);

  const register = useCallback(async (params: Parameters<typeof authApi.register>[0]) => {
    setIsLoading(true); setError(null);
    try {
      return await authApi.register(params);
    } catch (e) {
      setError(e as PrestigeApiError);
      throw e;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { register, isLoading, error };
}

export function useLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<PrestigeApiError | null>(null);

  const login = useCallback(async (identifier: string, password: string) => {
    setIsLoading(true); setError(null);
    try {
      return await authApi.login({ identifier, password });
    } catch (e) {
      setError(e as PrestigeApiError);
      throw e;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { login, isLoading, error };
}

export function useMe() {
  const [me, setMe] = useState<MeResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<PrestigeApiError | null>(null);

  const fetch = useCallback(async () => {
    setIsLoading(true); setError(null);
    try {
      const data = await authApi.getMe();
      setMe(data);
      return data;
    } catch (e) {
      setError(e as PrestigeApiError);
      throw e;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { me, fetch, isLoading, error };
}
```

### 5.4 Flux d'inscription complet

```
1. register({ email, password, firstName, lastName })
   → RegisterResponse { userId, otpExpiresAt }

2. verifyOtp({ destination: email, channel: 'email', purpose: 'register', code })
   → OtpVerifyResponse { verified: true, userId }

3. login({ identifier: email, password })
   → AuthResponse  (tokens sauvegardés automatiquement via setSession)
```

### 5.5 Réponses d'erreur Auth fréquentes

| Code HTTP | `code`                       | Déclencheur                                |
|-----------|------------------------------|--------------------------------------------|
| 400       | `AUTH_INVALID_OTP`           | OTP expiré ou incorrect                    |
| 401       | `AUTH_INVALID_CREDENTIALS`   | Mauvais mot de passe                       |
| 409       | `AUTH_EMAIL_TAKEN`           | Email déjà utilisé                         |
| 409       | `AUTH_PHONE_TAKEN`           | Téléphone déjà utilisé                     |
| 429       | `RATE_LIMIT_EXCEEDED`        | Trop de tentatives ; `details.retryAfterSeconds` |

---

## 6. Module Files (upload)

Base path : `/files`

### 6.1 Types

```ts
// src/lib/api/modules/files.types.ts

export interface FileResponse {
  id: string;
  purpose: FilePurpose;
  mimeType: string;
  sizeBytes: number;
  originalName: string;
  downloadUrl: string;   // URL signée valable ~15 min — NE PAS stocker en base côté frontend
  createdAt: string;
}
```

### 6.2 API functions

```ts
// src/lib/api/modules/files.api.ts

import { api } from '../client';
import type { FileResponse } from './files.types';
import type { FilePurpose } from '../types';

// POST /files  — multipart/form-data
// Champ 'file' : le fichier ; champ 'purpose' : FilePurpose
// Taille max : 10 MB. MIME autorisés : jpeg/png/webp pour images, pdf pour kyc_document.
export async function uploadFile(file: File, purpose: FilePurpose): Promise<FileResponse> {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('purpose', purpose);
  return api.upload<FileResponse>('/files', formData);
}

// GET /files/:id  — owner ou admin uniquement
export async function getFile(id: string): Promise<FileResponse> {
  return api.get<FileResponse>(`/files/${id}`);
}

// DELETE /files/:id  — owner uniquement, seulement si linked = false
export async function deleteFile(id: string): Promise<void> {
  return api.delete<void>(`/files/${id}`);
}
```

### 6.3 Hook upload avec progression

```ts
// src/hooks/useFileUpload.ts

import { useState, useCallback } from 'react';
import { uploadFile } from '../lib/api/modules/files.api';
import type { FileResponse } from '../lib/api/modules/files.types';
import type { FilePurpose } from '../lib/api/types';
import { PrestigeApiError } from '../lib/api/types';

export function useFileUpload() {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<PrestigeApiError | null>(null);

  const upload = useCallback(async (file: File, purpose: FilePurpose): Promise<FileResponse> => {
    setIsUploading(true); setError(null);
    try {
      return await uploadFile(file, purpose);
    } catch (e) {
      setError(e as PrestigeApiError);
      throw e;
    } finally {
      setIsUploading(false);
    }
  }, []);

  return { upload, isUploading, error };
}
```

### 6.4 Erreurs Files

| Code HTTP | `code`                        | Déclencheur                          |
|-----------|-------------------------------|--------------------------------------|
| 400       | `FILE_MIME_NOT_ALLOWED`       | MIME non autorisé pour ce `purpose`  |
| 400       | `FILE_TOO_LARGE`              | Dépasse 10 MB                        |
| 403       | `FILE_FORBIDDEN`              | Fichier d'un autre utilisateur       |
| 409       | `FILE_STILL_LINKED`           | Suppression d'un fichier encore lié  |

---

## 7. Module Service Providers (auto-onboarding)

Base path : `/service-providers/me`  
Toutes les routes nécessitent un Bearer token.

### 7.1 Types

```ts
// src/lib/api/modules/service-providers.types.ts

export interface KycDocumentResponse {
  id: string;
  type: KycDocumentType;
  fileId: string;
  status: KycDocumentStatus;
  reviewNote: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface ServiceProviderProfileResponse {
  id: string;
  userId: string;
  type: ServiceProviderType;
  city: string | null;
  quartier: string | null;
  profilePhotoFileId: string | null;
  coverPhotoFileId: string | null;
  kycStatus: KycStatus;
  submittedAt: string | null;
  reviewedAt: string | null;
  rejectionReason: string | null;
  suspensionReason: string | null;
  documents: KycDocumentResponse[];
  createdAt: string;
  updatedAt: string;
}

export interface EscortProfile {
  displayName: string;
  bio: string | null;
  hourlyRateXaf: number | null;
  tags: string[] | null;         // max 20 tags
  availabilityNote: string | null;
  isAvailable: boolean;
}

export interface TransporterProfile {
  displayName: string;
  whatsappNumber: string;        // masqué tant que non révélé
  vehicleDescription: string | null;
  serviceZone: string | null;
  indicativeRateNote: string | null;
}

export interface PropertyOwnerProfile {
  establishmentName: string;
  whatsappNumber: string;
  address: string | null;
  roomTypesNote: string | null;
}

export interface ServiceMediaResponse {
  id: string;
  fileId: string;
  mediaType: MediaType;
  position: number;
  url: string;                   // URL signée TTL configurable
  createdAt: string;
}

export interface EscortServiceResponse {
  id: string;
  escortProfileId: string;
  title: string;
  description: string | null;
  priceXaf: number | null;
  isActive: boolean;
  media: ServiceMediaResponse[];
  createdAt: string;
  updatedAt: string;
}
```

### 7.2 API functions

```ts
// src/lib/api/modules/service-providers.api.ts

import { api } from '../client';
import type {
  ServiceProviderProfileResponse, EscortProfile,
  TransporterProfile, PropertyOwnerProfile,
  EscortServiceResponse, ServiceMediaResponse,
} from './service-providers.types';
import type { ServiceProviderType, KycDocumentType, MediaType } from '../types';

// ── Profil de base ────────────────────────────────────────────────────────────

// POST /service-providers/me  — démarre l'onboarding
export async function startOnboarding(params: {
  type: ServiceProviderType;
  city?: string;
  quartier?: string;
}): Promise<ServiceProviderProfileResponse> {
  return api.post<ServiceProviderProfileResponse>('/service-providers/me', params);
}

// GET /service-providers/me
export async function getMyProfile(): Promise<ServiceProviderProfileResponse> {
  return api.get<ServiceProviderProfileResponse>('/service-providers/me');
}

// PATCH /service-providers/me
export async function updateMyProfile(params: {
  city?: string;
  quartier?: string;
  profilePhotoFileId?: string;
  coverPhotoFileId?: string;
}): Promise<ServiceProviderProfileResponse> {
  return api.patch<ServiceProviderProfileResponse>('/service-providers/me', params);
}

// ── KYC ───────────────────────────────────────────────────────────────────────

// POST /service-providers/me/kyc/documents
export async function uploadKycDocument(params: {
  type: KycDocumentType;
  fileId: string;
}): Promise<{ id: string }> {
  return api.post<{ id: string }>('/service-providers/me/kyc/documents', params);
}

// DELETE /service-providers/me/kyc/documents/:type
export async function deleteKycDocument(type: KycDocumentType): Promise<void> {
  return api.delete<void>(`/service-providers/me/kyc/documents/${type}`);
}

// POST /service-providers/me/submit
export async function submitForReview(): Promise<ServiceProviderProfileResponse> {
  return api.post<ServiceProviderProfileResponse>('/service-providers/me/submit');
}

// ── Escort sub-profil ─────────────────────────────────────────────────────────

// PATCH /service-providers/me/escort
export async function updateEscortProfile(params: Partial<EscortProfile>): Promise<void> {
  return api.patch<void>('/service-providers/me/escort', params);
}

// POST /service-providers/me/escort/services
export async function createEscortService(params: {
  title: string;        // max 150 chars
  description?: string;
  priceXaf?: number;    // entier XAF, indicatif
}): Promise<EscortServiceResponse> {
  return api.post<EscortServiceResponse>('/service-providers/me/escort/services', params);
}

// GET /service-providers/me/escort/services
export async function listMyEscortServices(): Promise<EscortServiceResponse[]> {
  return api.get<EscortServiceResponse[]>('/service-providers/me/escort/services');
}

// PATCH /service-providers/me/escort/services/:id
export async function updateEscortService(id: string, params: {
  title?: string;
  description?: string | null;
  priceXaf?: number | null;
  isActive?: boolean;
}): Promise<EscortServiceResponse> {
  return api.patch<EscortServiceResponse>(`/service-providers/me/escort/services/${id}`, params);
}

// DELETE /service-providers/me/escort/services/:id
export async function deleteEscortService(id: string): Promise<void> {
  return api.delete<void>(`/service-providers/me/escort/services/${id}`);
}

// POST /service-providers/me/escort/services/:id/media
// max 10 médias par service
export async function addServiceMedia(serviceId: string, params: {
  fileId: string;
  mediaType: MediaType;
  position: number;
}): Promise<ServiceMediaResponse> {
  return api.post<ServiceMediaResponse>(`/service-providers/me/escort/services/${serviceId}/media`, params);
}

// DELETE /service-providers/me/escort/services/:id/media/:mediaId
export async function deleteServiceMedia(serviceId: string, mediaId: string): Promise<void> {
  return api.delete<void>(`/service-providers/me/escort/services/${serviceId}/media/${mediaId}`);
}

// PATCH /service-providers/me/escort/services/:id/media/reorder
export async function reorderServiceMedia(serviceId: string, mediaIds: string[]): Promise<void> {
  return api.patch<void>(`/service-providers/me/escort/services/${serviceId}/media/reorder`, { mediaIds });
}

// ── Transporter sub-profil ────────────────────────────────────────────────────

// PATCH /service-providers/me/transporter
export async function updateTransporterProfile(params: Partial<TransporterProfile>): Promise<void> {
  return api.patch<void>('/service-providers/me/transporter', params);
}

// ── PropertyOwner sub-profil ──────────────────────────────────────────────────

// PATCH /service-providers/me/property-owner
export async function updatePropertyOwnerProfile(params: Partial<PropertyOwnerProfile>): Promise<void> {
  return api.patch<void>('/service-providers/me/property-owner', params);
}
```

### 7.3 Erreurs Service Providers

| Code HTTP | `code`                            | Déclencheur                              |
|-----------|-----------------------------------|------------------------------------------|
| 409       | `CARRIER_PROFILE_ALREADY_EXISTS`  | Onboarding déjà démarré                 |
| 404       | `CARRIER_PROFILE_NOT_FOUND`       | Pas de profil pour cet utilisateur       |
| 400       | `KYC_DOC_FILE_PURPOSE_MISMATCH`   | `fileId` uploadé avec un mauvais purpose |
| 409       | `KYC_DOC_NOT_REMOVABLE`           | Doc approuvé, ne peut plus être supprimé |
| 422       | `CARRIER_KYC_INCOMPLETE`          | Docs manquants à la soumission           |
| 409       | `CARRIER_ALREADY_SUBMITTED`       | Déjà soumis et en attente                |

---

## 8. Module Catalog (public)

Base path : `/catalog`  
**Aucune authentification requise.**

### 8.1 Types

```ts
// src/lib/api/modules/catalog.types.ts

// Réponse raw de listEscorts (getRawMany TypeORM — clés préfixées)
export interface CatalogEscortRow {
  sp_id: string;
  sp_city: string | null;
  sp_quartier: string | null;
  sp_profilePhotoFileId: string | null;
  sp_coverPhotoFileId: string | null;
  sp_createdAt: string;
  ep_id: string;
  ep_displayName: string;
  ep_bio: string | null;
  ep_hourlyRateXaf: number | null;
  ep_tags: string[] | null;
  ep_availabilityNote: string | null;
}

export interface CatalogEscortsResponse {
  data: CatalogEscortRow[];
  nextCursor: string | null;
}

// Réponse de getEscortDetail
export interface CatalogEscortDetail {
  sp: {
    id: string;
    city: string | null;
    quartier: string | null;
    profilePhotoFileId: string | null;
    coverPhotoFileId: string | null;
    createdAt: string;
    kycStatus: KycStatus;
  };
  escort: {
    id: string;
    displayName: string;
    bio: string | null;
    hourlyRateXaf: number | null;
    tags: string[] | null;
    availabilityNote: string | null;
    isAvailable: boolean;
    createdAt: string;
    updatedAt: string;
  };
  services: Array<{
    id: string;
    title: string;
    description: string | null;
    priceXaf: number | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    media: Array<{
      id: string;
      fileId: string;
      mediaType: MediaType;
      position: number;
      createdAt: string;
    }>;
  }>;
}

// Réponse raw de listServices
export interface CatalogServiceRow {
  svc_id: string;
  svc_title: string;
  svc_description: string | null;
  svc_priceXaf: number | null;
  svc_createdAt: string;
  ep_id: string;
  ep_displayName: string;
  ep_tags: string[] | null;
  sp_id: string;
  sp_city: string | null;
  sp_quartier: string | null;
  sp_profilePhotoFileId: string | null;
}

export interface CatalogServicesResponse {
  data: CatalogServiceRow[];
  nextCursor: string | null;
}
```

### 8.2 API functions

```ts
// src/lib/api/modules/catalog.api.ts

import { api } from '../client';
import type {
  CatalogEscortsResponse, CatalogEscortDetail,
  CatalogServicesResponse,
} from './catalog.types';

// GET /catalog/escorts
// Filtres : city (exact, case-insensitive), quartier, tags (virgule-séparé, OR match)
// Tri : createdAt DESC. Pagination curseur sur sp.id
export async function listEscorts(params?: {
  city?: string;
  quartier?: string;
  tags?: string;        // ex. 'massage,travel'
  cursor?: string;
  limit?: number;       // défaut 20, max 50
}): Promise<CatalogEscortsResponse> {
  const q = new URLSearchParams();
  if (params?.city)     q.set('city', params.city);
  if (params?.quartier) q.set('quartier', params.quartier);
  if (params?.tags)     q.set('tags', params.tags);
  if (params?.cursor)   q.set('cursor', params.cursor);
  if (params?.limit)    q.set('limit', String(params.limit));
  return api.get<CatalogEscortsResponse>(`/catalog/escorts?${q}`, { skipAuth: true });
}

// GET /catalog/escorts/:id
export async function getEscortDetail(id: string): Promise<CatalogEscortDetail> {
  return api.get<CatalogEscortDetail>(`/catalog/escorts/${id}`, { skipAuth: true });
}

// GET /catalog/services
export async function listServices(params?: {
  city?: string;
  quartier?: string;
  cursor?: string;
  limit?: number;
}): Promise<CatalogServicesResponse> {
  const q = new URLSearchParams();
  if (params?.city)     q.set('city', params.city);
  if (params?.quartier) q.set('quartier', params.quartier);
  if (params?.cursor)   q.set('cursor', params.cursor);
  if (params?.limit)    q.set('limit', String(params.limit));
  return api.get<CatalogServicesResponse>(`/catalog/services?${q}`, { skipAuth: true });
}

// GET /catalog/services/:id
export async function getServiceDetail(id: string) {
  return api.get(`/catalog/services/${id}`, { skipAuth: true });
}
```

### 8.3 Hook pagination infinie

```ts
// src/hooks/useCatalogEscorts.ts

import { useState, useCallback, useRef } from 'react';
import { listEscorts } from '../lib/api/modules/catalog.api';
import type { CatalogEscortRow } from '../lib/api/modules/catalog.types';
import { PrestigeApiError } from '../lib/api/types';

interface Filters { city?: string; quartier?: string; tags?: string; }

export function useCatalogEscorts(filters: Filters = {}) {
  const [escorts, setEscorts] = useState<CatalogEscortRow[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<PrestigeApiError | null>(null);
  const cursorRef = useRef<string | null>(null);
  const hasMoreRef = useRef(true);

  const loadMore = useCallback(async () => {
    if (isLoading || !hasMoreRef.current) return;
    setIsLoading(true); setError(null);
    try {
      const res = await listEscorts({ ...filters, cursor: cursorRef.current ?? undefined });
      setEscorts((prev) => [...prev, ...res.data]);
      cursorRef.current = res.nextCursor;
      hasMoreRef.current = res.nextCursor !== null;
    } catch (e) {
      setError(e as PrestigeApiError);
    } finally {
      setIsLoading(false);
    }
  }, [filters, isLoading]);

  const reset = useCallback(() => {
    setEscorts([]);
    cursorRef.current = null;
    hasMoreRef.current = true;
  }, []);

  return { escorts, isLoading, error, loadMore, hasMore: hasMoreRef.current, reset };
}
```

---

## 9. Module Directory (annuaire)

Base path : `/directory`  
**Authentification requise** (Bearer token). Le numéro WhatsApp est masqué par défaut.

### 9.1 Types

```ts
// src/lib/api/modules/directory.types.ts

export interface DirectoryProviderBase {
  id: string;           // service_provider_profiles.id
  city: string | null;
  quartier: string | null;
  profilePhotoFileId: string | null;
  kycStatus: KycStatus;
  createdAt: string;
  updatedAt: string;
}

// Le whatsappNumber n'est jamais dans la liste, seulement après reveal
export interface TransporterListItem extends DirectoryProviderBase {
  displayName: string;
  vehicleDescription: string | null;
  serviceZone: string | null;
  indicativeRateNote: string | null;
}

export interface PropertyOwnerListItem extends DirectoryProviderBase {
  establishmentName: string;
  address: string | null;
  roomTypesNote: string | null;
}

export interface DirectoryPaginatedResponse<T> {
  data: T[];
  nextCursor: string | null;
}

export interface RevealContactResponse {
  whatsappNumber: string;  // E.164, ex. '+237691234567'
}
```

### 9.2 API functions

```ts
// src/lib/api/modules/directory.api.ts

import { api } from '../client';
import type {
  TransporterListItem, PropertyOwnerListItem,
  DirectoryPaginatedResponse, RevealContactResponse,
} from './directory.types';

// GET /directory/transporters
export async function listTransporters(params?: {
  city?: string; quartier?: string; cursor?: string; limit?: number;
}): Promise<DirectoryPaginatedResponse<TransporterListItem>> {
  const q = new URLSearchParams();
  if (params?.city)     q.set('city', params.city);
  if (params?.quartier) q.set('quartier', params.quartier);
  if (params?.cursor)   q.set('cursor', params.cursor);
  if (params?.limit)    q.set('limit', String(params.limit));
  return api.get(`/directory/transporters?${q}`);
}

// GET /directory/transporters/:id
export async function getTransporter(id: string): Promise<TransporterListItem> {
  return api.get(`/directory/transporters/${id}`);
}

// POST /directory/transporters/:id/reveal-contact
// Prérequis : avoir au moins une conversation active avec une escorte approuvée.
// 200 → { whatsappNumber }  /  404 → DIRECTORY_REVEAL_NOT_ALLOWED
export async function revealTransporterContact(id: string): Promise<RevealContactResponse> {
  return api.post<RevealContactResponse>(`/directory/transporters/${id}/reveal-contact`);
}

// GET /directory/property-owners
export async function listPropertyOwners(params?: {
  city?: string; quartier?: string; cursor?: string; limit?: number;
}): Promise<DirectoryPaginatedResponse<PropertyOwnerListItem>> {
  const q = new URLSearchParams();
  if (params?.city)     q.set('city', params.city);
  if (params?.quartier) q.set('quartier', params.quartier);
  if (params?.cursor)   q.set('cursor', params.cursor);
  if (params?.limit)    q.set('limit', String(params.limit));
  return api.get(`/directory/property-owners?${q}`);
}

// GET /directory/property-owners/:id
export async function getPropertyOwner(id: string): Promise<PropertyOwnerListItem> {
  return api.get(`/directory/property-owners/${id}`);
}

// POST /directory/property-owners/:id/reveal-contact
export async function revealPropertyOwnerContact(id: string): Promise<RevealContactResponse> {
  return api.post<RevealContactResponse>(`/directory/property-owners/${id}/reveal-contact`);
}
```

### 9.3 Erreurs Directory

| Code HTTP | `code`                         | Déclencheur                                    |
|-----------|--------------------------------|------------------------------------------------|
| 404       | `DIRECTORY_REVEAL_NOT_ALLOWED` | Pas de conversation active avec une escorte    |
| 404       | `TRANSPORTER_NOT_FOUND`        | ID inconnu ou non approuvé                     |
| 404       | `PROPERTY_OWNER_NOT_FOUND`     | ID inconnu ou non approuvé                     |

---

## 10. Module Chat

Base path : `/chat`  
**Authentification requise.**

### 10.1 Types

```ts
// src/lib/api/modules/chat.types.ts

export interface ConversationResponse {
  id: string;
  clientUserId: string;
  senderUserId: string;    // alias clientUserId pour compatibilité DTO
  escortUserId: string;
  closedAt: string | null; // non-null = fermée par admin
  lastMessageAt: string | null;
  createdAt: string;
}

export interface MessageResponse {
  id: string;
  conversationId: string;
  senderUserId: string;
  body: string;
  readAt: string | null;
  createdAt: string;
}

export interface PaginatedConversations {
  data: ConversationResponse[];
  pageInfo: { nextCursor: string | null; hasNextPage: boolean };
}

export interface PaginatedMessages {
  data: MessageResponse[];
  pageInfo: { nextCursor: string | null; hasNextPage: boolean };
}
```

### 10.2 API functions

```ts
// src/lib/api/modules/chat.api.ts

import { api } from '../client';
import type {
  ConversationResponse, MessageResponse,
  PaginatedConversations, PaginatedMessages,
} from './chat.types';

// POST /chat/conversations  — idempotent (renvoie la conv existante si elle existe)
// Un client USER envoie l'ID du compte de l'escorte (pas du service_provider)
export async function openConversation(escortUserId: string): Promise<ConversationResponse> {
  return api.post<ConversationResponse>('/chat/conversations', { escortUserId });
}

// GET /chat/conversations  — triées last_message_at DESC
export async function listConversations(params?: {
  cursor?: string; limit?: number;
}): Promise<PaginatedConversations> {
  const q = new URLSearchParams();
  if (params?.cursor) q.set('cursor', params.cursor);
  if (params?.limit)  q.set('limit', String(params.limit));
  return api.get<PaginatedConversations>(`/chat/conversations?${q}`);
}

// GET /chat/conversations/:id
export async function getConversation(id: string): Promise<ConversationResponse> {
  return api.get<ConversationResponse>(`/chat/conversations/${id}`);
}

// GET /chat/conversations/:id/messages  — order: createdAt ASC (plus ancien en premier)
export async function listMessages(conversationId: string, params?: {
  cursor?: string; limit?: number;
}): Promise<PaginatedMessages> {
  const q = new URLSearchParams();
  if (params?.cursor) q.set('cursor', params.cursor);
  if (params?.limit)  q.set('limit', String(params.limit));
  return api.get<PaginatedMessages>(`/chat/conversations/${conversationId}/messages?${q}`);
}

// POST /chat/conversations/:id/messages
// body max 2000 chars, rejeté si la conversation est fermée (closedAt non-null)
export async function sendMessage(conversationId: string, body: string): Promise<MessageResponse> {
  return api.post<MessageResponse>(`/chat/conversations/${conversationId}/messages`, { body });
}

// POST /chat/conversations/:id/mark-read  — marque les messages de l'autre partie comme lus
export async function markAsRead(conversationId: string): Promise<void> {
  return api.post<void>(`/chat/conversations/${conversationId}/mark-read`);
}
```

### 10.3 Hook conversation temps réel

```ts
// src/hooks/useConversation.ts
// Combine fetch HTTP initial + mises à jour WebSocket

import { useState, useEffect, useCallback } from 'react';
import { listMessages, sendMessage, markAsRead } from '../lib/api/modules/chat.api';
import { usePrestigeSocket } from './usePrestigeSocket';
import type { MessageResponse } from '../lib/api/modules/chat.types';
import { PrestigeApiError } from '../lib/api/types';

export function useConversation(conversationId: string) {
  const [messages, setMessages] = useState<MessageResponse[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<PrestigeApiError | null>(null);
  const [cursor, setCursor] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const { socket } = usePrestigeSocket();

  // Chargement initial / page suivante
  const loadMessages = useCallback(async (reset = false) => {
    if (isLoading || (!reset && !hasMore)) return;
    setIsLoading(true); setError(null);
    try {
      const res = await listMessages(conversationId, {
        cursor: reset ? undefined : (cursor ?? undefined),
        limit: 30,
      });
      setMessages((prev) => reset ? res.data : [...res.data, ...prev]);
      setCursor(res.pageInfo.nextCursor);
      setHasMore(res.pageInfo.hasNextPage);
    } catch (e) {
      setError(e as PrestigeApiError);
    } finally {
      setIsLoading(false);
    }
  }, [conversationId, cursor, hasMore, isLoading]);

  // Écoute WS pour nouveaux messages
  useEffect(() => {
    if (!socket) return;
    const handler = (msg: MessageResponse) => {
      if (msg.conversationId !== conversationId) return;
      setMessages((prev) => [...prev, msg]);
    };
    socket.on('chat.message.created', handler);
    return () => { socket.off('chat.message.created', handler); };
  }, [socket, conversationId]);

  // Écoute WS pour accusés de lecture
  useEffect(() => {
    if (!socket) return;
    const handler = (data: { conversationId: string; readAt: string }) => {
      if (data.conversationId !== conversationId) return;
      setMessages((prev) =>
        prev.map((m) => (m.readAt ? m : { ...m, readAt: data.readAt }))
      );
    };
    socket.on('chat.messages.read', handler);
    return () => { socket.off('chat.messages.read', handler); };
  }, [socket, conversationId]);

  const send = useCallback(async (body: string) => {
    return sendMessage(conversationId, body);
  }, [conversationId]);

  const markRead = useCallback(async () => {
    return markAsRead(conversationId);
  }, [conversationId]);

  return { messages, isLoading, error, hasMore, loadMessages, send, markRead };
}
```

### 10.4 Erreurs Chat

| Code HTTP | `code`                          | Déclencheur                               |
|-----------|---------------------------------|-------------------------------------------|
| 403       | `CHAT_FORBIDDEN`                | La conv n'appartient pas à l'utilisateur  |
| 404       | `CHAT_CONVERSATION_NOT_FOUND`   | ID inconnu                                |
| 409       | `CHAT_CONVERSATION_CLOSED`      | Envoi de message sur une conv fermée      |
| 422       | `CHAT_ESCORT_NOT_APPROVED`      | L'escorte ciblée n'est pas approuvée      |

---

## 11. Module Subscriptions

```ts
// src/lib/api/modules/subscriptions.types.ts

export interface SubscriptionPlan {
  id: string;
  tier: SubscriptionTier;
  billingPeriod: BillingPeriod;
  priceXaf: number;
  boostWeight: number;
  name: string;
  description: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface EscortSubscription {
  id: string;
  escortProfileId: string;
  planId: string;
  status: SubscriptionStatus;
  startsAt: string;
  endsAt: string;
  activatedAt: string | null;
  expiredAt: string | null;
  cancelledAt: string | null;
  autoRenew: boolean;
  createdAt: string;
  updatedAt: string;
}
```

```ts
// src/lib/api/modules/subscriptions.api.ts

import { api } from '../client';
import type { SubscriptionPlan, EscortSubscription } from './subscriptions.types';

// GET /subscriptions/plans  — PUBLIC, sans auth
export async function listPlans(): Promise<SubscriptionPlan[]> {
  return api.get<SubscriptionPlan[]>('/subscriptions/plans', { skipAuth: true });
}

// GET /subscriptions/me  — escorte authentifiée
export async function listMySubscriptions(): Promise<EscortSubscription[]> {
  return api.get<EscortSubscription[]>('/subscriptions/me');
}

// POST /subscriptions/me  — crée un abonnement en status 'pending_payment'
// L'escorte doit ensuite initier le paiement via POST /me/payments/subscribe
export async function createSubscription(planId: string): Promise<EscortSubscription> {
  return api.post<EscortSubscription>('/subscriptions/me', { planId });
}

// POST /subscriptions/me/:id/cancel
export async function cancelSubscription(id: string): Promise<EscortSubscription> {
  return api.post<EscortSubscription>(`/subscriptions/me/${id}/cancel`);
}
```

---

## 12. Module Payments

Base path : `/me/payments`  
**Authentification requise.**

### 12.1 Types

```ts
// src/lib/api/modules/payments.types.ts

export interface Payment {
  id: string;
  subscriptionId: string;
  payerUserId: string;
  provider: 'sandbox' | 'mtn_momo' | 'orange_money';
  providerTransactionId: string | null;
  paymentMethod: PaymentMethod;
  amountXaf: number;
  platformFeeXaf: number;
  status: PaymentStatus;
  expiresAt: string;
  initiatedAt: string | null;
  succeededAt: string | null;
  failedAt: string | null;
  cancelledAt: string | null;
  failureReason: string | null;
  paymentUrl: string | null;   // URL MoMo/OM à ouvrir dans un WebView si non null
  createdAt: string;
  updatedAt: string;
}

export interface InitiatePaymentResponse {
  payment: Payment;
  subscription: import('./subscriptions.types').EscortSubscription;
}
```

### 12.2 API functions

```ts
// src/lib/api/modules/payments.api.ts

import { api } from '../client';
import type { Payment, InitiatePaymentResponse } from './payments.types';
import type { PaginatedResponse } from '../types';

// POST /me/payments/subscribe  — crée abonnement + initie paiement en une seule requête
// paymentMethod : 'mtn_momo' | 'orange_money'
// Si paymentUrl est non-null, ouvrir dans un WebView pour que l'utilisateur confirme sur son téléphone
export async function subscribe(params: {
  planId: string;
  paymentMethod: PaymentMethod;
}): Promise<InitiatePaymentResponse> {
  return api.post<InitiatePaymentResponse>('/me/payments/subscribe', params, {
    idempotencyKey: crypto.randomUUID(),
  });
}

// GET /me/payments  — historique paginé
export async function listMyPayments(params?: {
  cursor?: string; limit?: number;
}): Promise<{ data: Payment[]; nextCursor: string | null }> {
  const q = new URLSearchParams();
  if (params?.cursor) q.set('cursor', params.cursor);
  if (params?.limit)  q.set('limit', String(params.limit));
  return api.get(`/me/payments?${q}`);
}

// GET /me/payments/:id
export async function getPayment(id: string): Promise<Payment> {
  return api.get<Payment>(`/me/payments/${id}`);
}
```

### 12.3 Flux de paiement côté client

```
1. subscribe({ planId, paymentMethod: 'mtn_momo' })
   → { payment, subscription }
   
2. Si payment.paymentUrl non-null :
   → Ouvrir payment.paymentUrl dans un iframe / WebView
   → L'utilisateur confirme le paiement sur son téléphone
   
3. Le backend reçoit le webhook du provider (automatique)
   → payment.status passe à 'succeeded'
   → subscription.status passe à 'active'
   
4. Côté frontend : polling de GET /me/payments/:id jusqu'à status ≠ 'processing'
   OU écouter un futur événement WebSocket payment.succeeded (non implémenté en v1)
```

### 12.4 Erreurs Payments

| Code HTTP | `code`                       | Déclencheur                          |
|-----------|------------------------------|--------------------------------------|
| 402       | `PAYMENT_PROVIDER_ERROR`     | Erreur technique du provider         |
| 404       | `PAYMENT_NOT_FOUND`          | ID inconnu                           |
| 403       | `PAYMENT_FORBIDDEN`          | Paiement d'un autre utilisateur      |

---

## 13. Module Push Tokens

Base path : `/me/device-tokens`

```ts
// src/lib/api/modules/push.api.ts

import { api } from '../client';
import type { DevicePlatform } from '../types';

// POST /me/device-tokens  — idempotent (pas d'erreur si token déjà enregistré)
export async function registerDeviceToken(params: {
  token: string;       // FCM registration token
  platform: DevicePlatform;
}): Promise<void> {
  return api.post<void>('/me/device-tokens', params);
}

// DELETE /me/device-tokens  — à appeler lors du logout pour ne plus recevoir de push
export async function unregisterDeviceToken(token: string): Promise<void> {
  return api.delete<void>('/me/device-tokens', { body: { token } } as never);
}
```

> **Note implémentation** : pour DELETE avec body, passer `body` via les headers custom ou utiliser `apiFetch` directement car `api.delete` ne prend pas de body dans l'abstraction proposée.

```ts
// Variante correcte pour DELETE avec body
import { apiFetch } from '../client'; // exporter apiFetch si nécessaire

export async function unregisterDeviceToken(token: string): Promise<void> {
  return apiFetch<void>('/me/device-tokens', { method: 'DELETE', body: { token } });
}
```

---

## 14. WebSocket (temps réel)

Path de connexion : `/ws`  
Authentification : JWT dans le handshake via query param `token` ou header `Authorization`.

### 14.1 Événements serveur

| Événement                    | Room                    | Payload                                         |
|------------------------------|-------------------------|-------------------------------------------------|
| `chat.message.created`       | `conversation:{id}`     | `MessageResponse`                               |
| `chat.messages.read`         | `conversation:{id}`     | `{ conversationId: string; readAt: string }`    |
| `chat.conversation.closed`   | `conversation:{id}`     | `{ conversationId: string; closedAt: string }`  |
| `chat.conversation.opened`   | `user:{userId}`         | `ConversationResponse`                          |

> **Règle importante** : les clients ne **peuvent pas émettre** d'événements. Tout écrit passe par HTTP. Le WS est en lecture seule.

### 14.2 Client Socket.io

```ts
// src/lib/api/socket.ts

import { io, type Socket } from 'socket.io-client';
import { WS_URL } from './config';
import { getAccessToken } from './auth-store';

let socket: Socket | null = null;

export function connectSocket(): Socket {
  if (socket?.connected) return socket;

  socket = io(WS_URL, {
    path: '/ws',
    auth: { token: getAccessToken() },
    transports: ['websocket'],
    reconnectionAttempts: 5,
    reconnectionDelay: 2000,
  });

  socket.on('connect_error', (err) => {
    // code 1008 = auth invalide → déconnecter l'utilisateur
    console.warn('[WS] connect_error', err.message);
  });

  return socket;
}

export function disconnectSocket(): void {
  socket?.disconnect();
  socket = null;
}

export function getSocket(): Socket | null { return socket; }
```

### 14.3 Hook React

```ts
// src/hooks/usePrestigeSocket.ts

import { useEffect, useState } from 'react';
import type { Socket } from 'socket.io-client';
import { connectSocket, disconnectSocket, getSocket } from '../lib/api/socket';
import { getAccessToken } from '../lib/api/auth-store';

export function usePrestigeSocket() {
  const [socket, setSocket] = useState<Socket | null>(getSocket());
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    if (!getAccessToken()) return; // pas de connexion si non authentifié

    const s = connectSocket();
    setSocket(s);

    const onConnect    = () => setIsConnected(true);
    const onDisconnect = () => setIsConnected(false);

    s.on('connect',    onConnect);
    s.on('disconnect', onDisconnect);
    if (s.connected) setIsConnected(true);

    return () => {
      s.off('connect',    onConnect);
      s.off('disconnect', onDisconnect);
    };
  }, []);

  return { socket, isConnected };
}
```

---

## 15. Codes d'erreur métier

Référence complète des `code` strings renvoyés dans les erreurs API :

### Auth

| Code                         | Description                                      |
|------------------------------|--------------------------------------------------|
| `AUTH_INVALID_OTP`           | OTP expiré, déjà utilisé ou incorrect            |
| `AUTH_OTP_MAX_ATTEMPTS`      | Trop de tentatives sur cet OTP                   |
| `AUTH_INVALID_CREDENTIALS`   | Identifiant ou mot de passe incorrect            |
| `AUTH_ACCOUNT_SUSPENDED`     | Compte suspendu, contacter le support            |
| `AUTH_EMAIL_TAKEN`           | Email déjà associé à un compte                   |
| `AUTH_PHONE_TAKEN`           | Téléphone déjà associé à un compte               |
| `AUTH_REFRESH_TOKEN_INVALID` | Refresh token expiré ou révoqué                  |
| `SESSION_EXPIRED`            | Session expirée (refresh échoué)                 |

### Service Providers / KYC

| Code                              | Description                                        |
|-----------------------------------|----------------------------------------------------|
| `CARRIER_PROFILE_ALREADY_EXISTS`  | Profil prestataire déjà créé                       |
| `CARRIER_PROFILE_NOT_FOUND`       | Pas de profil pour cet utilisateur                 |
| `CARRIER_ALREADY_SUBMITTED`       | Déjà soumis, en attente de revue                   |
| `KYC_DOC_FILE_PURPOSE_MISMATCH`   | Fichier uploadé avec un mauvais `purpose`          |
| `KYC_DOC_NOT_FOUND`               | Document KYC introuvable                           |
| `KYC_DOC_NOT_REMOVABLE`           | Impossible de supprimer un doc approuvé            |
| `CARRIER_KYC_INCOMPLETE`          | Docs KYC requis manquants avant soumission         |

### Chat

| Code                            | Description                                    |
|---------------------------------|------------------------------------------------|
| `CHAT_CONVERSATION_NOT_FOUND`   | Conversation introuvable                       |
| `CHAT_FORBIDDEN`                | Pas membre de cette conversation               |
| `CHAT_CONVERSATION_CLOSED`      | Conversation fermée (admin-forced)             |
| `CHAT_ESCORT_NOT_APPROVED`      | Escorte cible non approuvée                    |

### Directory

| Code                           | Description                                      |
|--------------------------------|--------------------------------------------------|
| `DIRECTORY_REVEAL_NOT_ALLOWED` | Pas de conversation active avec une escorte      |
| `TRANSPORTER_NOT_FOUND`        | Transporteur inconnu ou non approuvé             |
| `PROPERTY_OWNER_NOT_FOUND`     | Propriétaire inconnu ou non approuvé             |

### Payments

| Code                     | Description                                 |
|--------------------------|---------------------------------------------|
| `PAYMENT_NOT_FOUND`      | Paiement introuvable                        |
| `PAYMENT_FORBIDDEN`      | Paiement appartenant à un autre utilisateur |
| `PAYMENT_PROVIDER_ERROR` | Erreur technique du provider MoMo/OM        |

### Génériques

| Code                   | Description                                 |
|------------------------|---------------------------------------------|
| `RATE_LIMIT_EXCEEDED`  | Trop de requêtes ; voir `details.retryAfterSeconds` |
| `VALIDATION_ERROR`     | Corps de requête invalide (class-validator) |
| `NOT_FOUND`            | Ressource introuvable (404 générique)       |
| `UNAUTHORIZED`         | Token absent ou invalide                    |
| `FORBIDDEN`            | Rôle insuffisant                            |
| `NETWORK_ERROR`        | Erreur réseau côté client                   |
| `REQUEST_TIMEOUT`      | Timeout 15 s dépassé côté client            |

### Gestion dans l'UI

```ts
// src/lib/api/error-handler.ts

import { PrestigeApiError } from './types';

// Message utilisateur lisible à partir d'un code d'erreur
export function getErrorMessage(error: unknown): string {
  if (!(error instanceof PrestigeApiError)) return 'Une erreur inattendue est survenue.';

  switch (error.code) {
    case 'AUTH_INVALID_CREDENTIALS':  return 'Identifiant ou mot de passe incorrect.';
    case 'AUTH_INVALID_OTP':          return 'Code invalide ou expiré.';
    case 'AUTH_EMAIL_TAKEN':          return 'Cet email est déjà utilisé.';
    case 'AUTH_PHONE_TAKEN':          return 'Ce numéro est déjà utilisé.';
    case 'AUTH_ACCOUNT_SUSPENDED':    return 'Votre compte est suspendu.';
    case 'RATE_LIMIT_EXCEEDED': {
      const secs = (error.details as { retryAfterSeconds?: number })?.retryAfterSeconds;
      return secs ? `Trop de tentatives. Réessayez dans ${secs} secondes.` : 'Trop de tentatives.';
    }
    case 'CHAT_CONVERSATION_CLOSED':  return 'Cette conversation a été fermée.';
    case 'DIRECTORY_REVEAL_NOT_ALLOWED': return 'Vous devez avoir une conversation active avec une escorte pour voir ce contact.';
    case 'NETWORK_ERROR':             return 'Pas de connexion réseau.';
    case 'REQUEST_TIMEOUT':           return 'La requête a pris trop de temps.';
    default: return error.message;
  }
}

// Vrai si l'erreur est une erreur de validation (400 VALIDATION_ERROR)
export function isValidationError(error: unknown): boolean {
  return error instanceof PrestigeApiError && error.statusCode === 400 && error.code === 'VALIDATION_ERROR';
}

// Vrai si l'erreur indique que l'utilisateur n'est plus authentifié
export function isAuthError(error: unknown): boolean {
  return error instanceof PrestigeApiError && (error.statusCode === 401 || error.code === 'SESSION_EXPIRED');
}
```

---

## 16. Pagination curseur — helper

```ts
// src/lib/api/pagination.ts

export interface CursorPage<T> {
  items: T[];
  nextCursor: string | null;
  hasMore: boolean;
}

// Normalise les deux formats retournés par l'API
// (chat utilise { data, pageInfo } ; catalog/directory utilisent { data, nextCursor })
export function normalizePage<T>(
  raw: { data: T[]; pageInfo?: { nextCursor: string | null; hasNextPage: boolean }; nextCursor?: string | null }
): CursorPage<T> {
  if (raw.pageInfo !== undefined) {
    return { items: raw.data, nextCursor: raw.pageInfo.nextCursor, hasMore: raw.pageInfo.hasNextPage };
  }
  const next = raw.nextCursor ?? null;
  return { items: raw.data, nextCursor: next, hasMore: next !== null };
}

// Hook générique de pagination infinie
import { useState, useCallback, useRef } from 'react';
import { PrestigeApiError } from './types';

type Fetcher<T> = (cursor: string | undefined) => Promise<
  | { data: T[]; pageInfo: { nextCursor: string | null; hasNextPage: boolean } }
  | { data: T[]; nextCursor: string | null }
>;

export function useInfinitePage<T>(fetcher: Fetcher<T>) {
  const [items, setItems] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<PrestigeApiError | null>(null);
  const cursorRef = useRef<string | null>(null);
  const hasMoreRef = useRef(true);

  const loadMore = useCallback(async (reset = false) => {
    if (isLoading || (!reset && !hasMoreRef.current)) return;
    if (reset) { cursorRef.current = null; hasMoreRef.current = true; }
    setIsLoading(true); setError(null);
    try {
      const raw = await fetcher(cursorRef.current ?? undefined);
      const page = normalizePage(raw);
      setItems((prev) => reset ? page.items : [...prev, ...page.items]);
      cursorRef.current = page.nextCursor;
      hasMoreRef.current = page.hasMore;
    } catch (e) {
      setError(e as PrestigeApiError);
    } finally {
      setIsLoading(false);
    }
  }, [fetcher, isLoading]);

  return { items, isLoading, error, hasMore: hasMoreRef.current, loadMore };
}
```

---

## 17. Structure de fichiers recommandée

```
src/
├── lib/
│   └── api/
│       ├── config.ts             # URLs et constantes
│       ├── types.ts              # Enums et types partagés (PrestigeApiError)
│       ├── client.ts             # apiFetch + api.{get,post,patch,delete,upload}
│       ├── auth-store.ts         # Persistence tokens, refreshAccessToken
│       ├── socket.ts             # connectSocket / disconnectSocket
│       ├── pagination.ts         # normalizePage + useInfinitePage
│       ├── error-handler.ts      # getErrorMessage, isAuthError
│       └── modules/
│           ├── auth.types.ts
│           ├── auth.api.ts
│           ├── files.types.ts
│           ├── files.api.ts
│           ├── service-providers.types.ts
│           ├── service-providers.api.ts
│           ├── catalog.types.ts
│           ├── catalog.api.ts
│           ├── directory.types.ts
│           ├── directory.api.ts
│           ├── chat.types.ts
│           ├── chat.api.ts
│           ├── subscriptions.types.ts
│           ├── subscriptions.api.ts
│           ├── payments.types.ts
│           ├── payments.api.ts
│           └── push.api.ts
└── hooks/
    ├── useAuth.ts
    ├── useFileUpload.ts
    ├── usePrestigeSocket.ts
    ├── useConversation.ts
    └── useCatalogEscorts.ts
```

---

## Notes d'implémentation importantes

1. **Tokens signés** : les `downloadUrl` dans `FileResponse` et les `url` dans `ServiceMediaResponse` sont des URLs signées avec une TTL de ~15 min. Ne **jamais** les persister en base ou les afficher longtemps. Les re-fetcher si elles expirent.

2. **Argent** : tous les montants sont des **entiers en XAF** (Franc CFA). Diviser par 1000 pour afficher en milliers. Pas de décimales.

3. **Téléphones** : format E.164 obligatoire (`+237691234567`). Valider avant envoi.

4. **WS rooms** : les rooms sont auto-jointes côté serveur selon l'identité JWT. Le client ne demande jamais à rejoindre une room.

5. **Idempotency-Key** : générer un UUID v4 pour chaque appel `register`, `sendOtp`, `subscribe`. Permet de rejouer la requête en cas de coupure réseau sans créer de doublon.

6. **city / quartier** : envoyés en minuscules (`toLowerCase()`) par le backend. Appliquer le même traitement côté frontend avant de construire les filtres catalog/directory.

7. **Rôles et accès** : vérifier `me.status === 'active'` avant d'accéder aux routes protégées. Un compte `pending` (non vérifié) ou `suspended` ne peut pas se connecter normalement.
