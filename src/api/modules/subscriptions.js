import { api } from '../client';

export const subscriptionsApi = {
  listPlans:          ()     => api.get('/subscriptions/plans', { skipAuth: true }),
  listMine:           ()     => api.get('/subscriptions/me'),
  create:             (planId) => api.post('/subscriptions/me', { planId }),
  cancel:             (id)   => api.post(`/subscriptions/me/${id}/cancel`),
};
