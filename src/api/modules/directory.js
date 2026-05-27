import { api } from '../client';

function qs(params) {
  const q = new URLSearchParams();
  if (params?.city)     q.set('city', params.city);
  if (params?.quartier) q.set('quartier', params.quartier);
  if (params?.cursor)   q.set('cursor', params.cursor);
  if (params?.limit)    q.set('limit', String(params.limit));
  const s = q.toString();
  return s ? `?${s}` : '';
}

export const directoryApi = {
  listTransporters:         (params) => api.get(`/directory/transporters${qs(params)}`),
  getTransporter:           (id)     => api.get(`/directory/transporters/${id}`),
  revealTransporterContact: (id)     => api.post(`/directory/transporters/${id}/reveal-contact`),

  listPropertyOwners:         (params) => api.get(`/directory/property-owners${qs(params)}`),
  getPropertyOwner:           (id)     => api.get(`/directory/property-owners/${id}`),
  revealPropertyOwnerContact: (id)     => api.post(`/directory/property-owners/${id}/reveal-contact`),
};
