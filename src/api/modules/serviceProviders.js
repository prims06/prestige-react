import { api } from '../client';

const BASE = '/service-providers/me';

export const serviceProvidersApi = {
  // ── Profil de base ────────────────────────────────────────────────────────
  start:  (params)  => api.post(BASE, params),
  getMe:  ()        => api.get(BASE),
  update: (params)  => api.patch(BASE, params),

  // ── KYC ──────────────────────────────────────────────────────────────────
  uploadKycDoc:  (params) => api.post(`${BASE}/kyc/documents`, params),
  deleteKycDoc:  (type)   => api.delete(`${BASE}/kyc/documents/${type}`),
  submitForReview: ()     => api.post(`${BASE}/submit`),

  // ── Escort ───────────────────────────────────────────────────────────────
  updateEscort:  (params) => api.patch(`${BASE}/escort`, params),

  createService:   (params)     => api.post(`${BASE}/escort/services`, params),
  listServices:    ()           => api.get(`${BASE}/escort/services`),
  updateService:   (id, params) => api.patch(`${BASE}/escort/services/${id}`, params),
  deleteService:   (id)         => api.delete(`${BASE}/escort/services/${id}`),

  addMedia:      (svcId, params)          => api.post(`${BASE}/escort/services/${svcId}/media`, params),
  deleteMedia:   (svcId, mediaId)         => api.delete(`${BASE}/escort/services/${svcId}/media/${mediaId}`),
  reorderMedia:  (svcId, mediaIds)        => api.patch(`${BASE}/escort/services/${svcId}/media/reorder`, { mediaIds }),

  // ── Transporter ──────────────────────────────────────────────────────────
  updateTransporter: (params) => api.patch(`${BASE}/transporter`, params),

  // ── Property owner ───────────────────────────────────────────────────────
  updatePropertyOwner: (params) => api.patch(`${BASE}/property-owner`, params),
};
