import { api } from '../client';

const BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3000';

export const filesApi = {
  // Construit l'URL complète à partir d'un chemin relatif renvoyé par l'API
  // ex. filesApi.streamUrl('/api/v1/files/<id>/stream') → 'http://localhost:3001/api/v1/files/<id>/stream'
  // Accepte null/undefined → retourne null (pratique dans les expressions JSX)
  streamUrl: (relativePath) => (relativePath ? `${BASE_URL}${relativePath}` : null),

  // POST /files  multipart/form-data  — purpose: FilePurpose
  upload: (file, purpose) => {
    const form = new FormData();
    form.append('file', file);
    form.append('purpose', purpose);
    return api.upload('/files', form);
  },

  // GET /files/:id  — retourne métadonnées + downloadUrl (chemin relatif /stream)
  get: (id) => api.get(`/files/${id}`),

  // DELETE /files/:id  — only if not linked
  delete: (id) => api.delete(`/files/${id}`),
};
