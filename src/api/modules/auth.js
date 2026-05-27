import { api } from '../client';
import { tokenStorage } from '../client';

export const authApi = {
  // POST /auth/register
  register: (params) =>
    api.post('/auth/register', params, { skipAuth: true, idempotencyKey: crypto.randomUUID() }),

  // POST /auth/login — identifier = email ou phone
  login: async (params) => {
    const data = await api.post('/auth/login', params, { skipAuth: true });
    tokenStorage.setAccess(data.accessToken);
    tokenStorage.setRefresh(data.refreshToken);
    return data;
  },

  // POST /auth/refresh
  refresh: (refreshToken) =>
    api.post('/auth/refresh', { refreshToken }, { skipAuth: true }),

  // POST /auth/logout
  logout: () => api.post('/auth/logout').catch(() => {}),

  // POST /auth/logout-all
  logoutAll: () => api.post('/auth/logout-all').catch(() => {}),

  // POST /auth/otp/send
  sendOtp: (params) =>
    api.post('/auth/otp/send', params, { skipAuth: true, idempotencyKey: crypto.randomUUID() }),

  // POST /auth/otp/verify
  verifyOtp: (params) =>
    api.post('/auth/otp/verify', params, { skipAuth: true }),

  // POST /auth/password/forgot
  forgotPassword: (params) =>
    api.post('/auth/password/forgot', params, { skipAuth: true }),

  // POST /auth/password/reset
  resetPassword: (params) =>
    api.post('/auth/password/reset', params, { skipAuth: true }),

  // GET /auth/me
  me: () => api.get('/auth/me'),
};
