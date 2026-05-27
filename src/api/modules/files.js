import { api } from '../client';

export const filesApi = {
  // POST /files  multipart/form-data  — purpose: FilePurpose
  upload: (file, purpose) => {
    const form = new FormData();
    form.append('file', file);
    form.append('purpose', purpose);
    return api.upload('/files', form);
  },

  // GET /files/:id
  get: (id) => api.get(`/files/${id}`),

  // DELETE /files/:id  — only if not linked
  delete: (id) => api.delete(`/files/${id}`),
};
