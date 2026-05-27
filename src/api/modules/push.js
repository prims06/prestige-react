import { api } from '../client';

export const pushApi = {
  register:   (token, platform) => api.post('/me/device-tokens', { token, platform }),
  unregister: (token)           => api.delete('/me/device-tokens', { body: { token } }),
};
