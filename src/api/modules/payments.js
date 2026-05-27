import { api } from '../client';

export const paymentsApi = {
  // POST /me/payments/subscribe — creates subscription + initiates payment atomically
  subscribe: (params) =>
    api.post('/me/payments/subscribe', params, { idempotencyKey: crypto.randomUUID() }),

  list: (params) => {
    const q = new URLSearchParams();
    if (params?.cursor) q.set('cursor', params.cursor);
    if (params?.limit)  q.set('limit', String(params.limit));
    const s = q.toString();
    return api.get(`/me/payments${s ? `?${s}` : ''}`);
  },

  get: (id) => api.get(`/me/payments/${id}`),
};
