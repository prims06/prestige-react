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

function limitQs(limit) {
  return limit ? `?limit=${limit}` : '';
}

// All routes are public — skipAuth: true
export const catalogApi = {
  // ── Escorts ────────────────────────────────────────────────────────────────
  listEscorts:  (params) => api.get(`/catalog/escorts${qs(params)}`, { skipAuth: true }),
  getEscort:    (id)     => api.get(`/catalog/escorts/${id}`, { skipAuth: true }),

  // ── Services ───────────────────────────────────────────────────────────────
  listServices: (params) => api.get(`/catalog/services${qs(params)}`, { skipAuth: true }),
  getService:   (id)     => api.get(`/catalog/services/${id}`, { skipAuth: true }),

  // ── Homepage ───────────────────────────────────────────────────────────────
  // Escortes les plus actives récemment (triées par last_message_at)
  homepageTrending:         (limit) => api.get(`/catalog/homepage/trending${limitQs(limit)}`, { skipAuth: true }),
  // Services boostés avec media (VIP → Premium → Bronze)
  homepageFeaturedServices: (limit) => api.get(`/catalog/homepage/featured-services${limitQs(limit)}`, { skipAuth: true }),
  // Escortes avec meilleur abonnement + leurs services avec media
  homepageTopEscorts:       (limit) => api.get(`/catalog/homepage/top-escorts${limitQs(limit)}`, { skipAuth: true }),
};
