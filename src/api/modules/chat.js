import { api } from '../client';

function qs(p) {
  const q = new URLSearchParams();
  if (p?.cursor) q.set('cursor', p.cursor);
  if (p?.limit)  q.set('limit', String(p.limit));
  const s = q.toString();
  return s ? `?${s}` : '';
}

export const chatApi = {
  openConversation:  (escortUserId) => api.post('/chat/conversations', { escortUserId }),
  listConversations: (params)       => api.get(`/chat/conversations${qs(params)}`),
  getConversation:   (id)           => api.get(`/chat/conversations/${id}`),
  listMessages:      (id, params)   => api.get(`/chat/conversations/${id}/messages${qs(params)}`),
  sendMessage:       (id, body)     => api.post(`/chat/conversations/${id}/messages`, { body }),
  markAsRead:        (id)           => api.post(`/chat/conversations/${id}/mark-read`),
};
