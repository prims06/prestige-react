import { useCallback } from 'react';
import { serviceProvidersApi } from '../api';
import { useAsync } from './useAsync';
import { useFetch } from './useFetch';

// ── Profil ────────────────────────────────────────────────────────────────────

/**
 * Profil du prestataire connecté (KYC docs avec fileUrl inclus).
 * Re-fetch possible via refetch().
 */
export function useMyProfile() {
  return useFetch(() => serviceProvidersApi.getMe(), []);
}

/**
 * Démarrer l'onboarding prestataire (crée le profil en statut pending).
 * @returns {{ data, isLoading, error, start }}
 */
export function useStartOnboarding() {
  const { data, isLoading, error, execute } = useAsync();
  const start = useCallback(
    (params) => execute(() => serviceProvidersApi.start(params)),
    [execute],
  );
  return { data, isLoading, error, start };
}

/**
 * Soumettre le dossier pour revue admin.
 * @returns {{ data, isLoading, error, submit }}
 */
export function useSubmitForReview() {
  const { data, isLoading, error, execute } = useAsync();
  const submit = useCallback(
    () => execute(() => serviceProvidersApi.submitForReview()),
    [execute],
  );
  return { data, isLoading, error, submit };
}

// ── KYC ───────────────────────────────────────────────────────────────────────

/**
 * Upload ou remplace un document KYC.
 * @returns {{ data, isLoading, error, upload }}
 *   upload({ type, fileId }) → Promise
 */
export function useUploadKycDoc() {
  const { data, isLoading, error, execute } = useAsync();
  const upload = useCallback(
    (params) => execute(() => serviceProvidersApi.uploadKycDoc(params)),
    [execute],
  );
  return { data, isLoading, error, upload };
}

/**
 * Supprime un document KYC (seulement si profil en pending ou rejected).
 * @returns {{ isLoading, error, remove }}
 *   remove(type) → Promise
 */
export function useDeleteKycDoc() {
  const { isLoading, error, execute } = useAsync();
  const remove = useCallback(
    (type) => execute(() => serviceProvidersApi.deleteKycDoc(type)),
    [execute],
  );
  return { isLoading, error, remove };
}

// ── Services escorte ──────────────────────────────────────────────────────────

/**
 * Liste des services de l'escorte connectée.
 * Re-fetch possible via refetch().
 */
export function useMyEscortServices() {
  return useFetch(() => serviceProvidersApi.listServices(), []);
}

/**
 * Créer un nouveau service.
 * @returns {{ data, isLoading, error, create }}
 *   create({ title, description?, priceXaf? }) → Promise
 */
export function useCreateService() {
  const { data, isLoading, error, execute } = useAsync();
  const create = useCallback(
    (params) => execute(() => serviceProvidersApi.createService(params)),
    [execute],
  );
  return { data, isLoading, error, create };
}

/**
 * Mettre à jour un service.
 * @returns {{ data, isLoading, error, update }}
 *   update(id, params) → Promise
 */
export function useUpdateService() {
  const { data, isLoading, error, execute } = useAsync();
  const update = useCallback(
    (id, params) => execute(() => serviceProvidersApi.updateService(id, params)),
    [execute],
  );
  return { data, isLoading, error, update };
}

/**
 * Supprimer un service.
 * @returns {{ isLoading, error, remove }}
 *   remove(id) → Promise
 */
export function useDeleteService() {
  const { isLoading, error, execute } = useAsync();
  const remove = useCallback(
    (id) => execute(() => serviceProvidersApi.deleteService(id)),
    [execute],
  );
  return { isLoading, error, remove };
}

// ── Media service ─────────────────────────────────────────────────────────────

/**
 * Ajouter un média à un service.
 * @returns {{ data, isLoading, error, add }}
 *   add(svcId, { fileId, mediaType, position }) → Promise
 */
export function useAddMedia() {
  const { data, isLoading, error, execute } = useAsync();
  const add = useCallback(
    (svcId, params) => execute(() => serviceProvidersApi.addMedia(svcId, params)),
    [execute],
  );
  return { data, isLoading, error, add };
}

/**
 * Supprimer un média.
 * @returns {{ isLoading, error, remove }}
 *   remove(svcId, mediaId) → Promise
 */
export function useDeleteMedia() {
  const { isLoading, error, execute } = useAsync();
  const remove = useCallback(
    (svcId, mediaId) => execute(() => serviceProvidersApi.deleteMedia(svcId, mediaId)),
    [execute],
  );
  return { isLoading, error, remove };
}

/**
 * Réordonner les médias d'un service.
 * @returns {{ isLoading, error, reorder }}
 *   reorder(svcId, mediaIds) → Promise
 */
export function useReorderMedia() {
  const { isLoading, error, execute } = useAsync();
  const reorder = useCallback(
    (svcId, mediaIds) => execute(() => serviceProvidersApi.reorderMedia(svcId, mediaIds)),
    [execute],
  );
  return { isLoading, error, reorder };
}
