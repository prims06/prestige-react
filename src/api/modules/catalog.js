import { api } from '../client';

function qs(params) {
  const q = new URLSearchParams();
  if (params?.city)     q.set('city', params.city);
  if (params?.quartier) q.set('quartier', params.quartier);
  if (params?.tags)     q.set('tags', params.tags);
  if (params?.cursor)   q.set('cursor', params.cursor);
  if (params?.limit)    q.set('limit', String(params.limit));
  const s = q.toString();
  return s ? `?${s}` : '';
}

// All routes are public — skipAuth: true
export const catalogApi = {
  listEscorts:      (params) => api.get(`/catalog/escorts${qs(params)}`, { skipAuth: true }),
  getEscort:        (id)     => api.get(`/catalog/escorts/${id}`, { skipAuth: true }),
  listServices:     (params) => api.get(`/catalog/services${qs(params)}`, { skipAuth: true }),
  getService:       (id)     => api.get(`/catalog/services/${id}`, { skipAuth: true }),
};
