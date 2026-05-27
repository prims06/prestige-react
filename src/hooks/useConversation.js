import { useState, useEffect, useCallback } from 'react';
import { chatApi } from '../api/modules/chat';
import { usePrestigeSocket } from './usePrestigeSocket';
import { ApiError } from '../api/ApiError';

export function useConversation(conversationId) {
  const [messages, setMessages] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError]       = useState(null);
  const [cursor, setCursor]     = useState(null);
  const [hasMore, setHasMore]   = useState(true);
  const { socket } = usePrestigeSocket();

  const loadMessages = useCallback(async (reset = false) => {
    if (isLoading || (!reset && !hasMore)) return;
    setLoading(true); setError(null);
    try {
      const res = await chatApi.listMessages(conversationId, {
        cursor: reset ? undefined : (cursor ?? undefined), limit: 30,
      });
      setMessages((prev) => reset ? res.data : [...res.data, ...prev]);
      setCursor(res.pageInfo.nextCursor);
      setHasMore(res.pageInfo.hasNextPage);
    } catch (e) {
      setError(e instanceof ApiError ? e : new ApiError({ statusCode: 0, code: 'NETWORK_ERROR', message: e?.message }));
    } finally { setLoading(false); }
  }, [conversationId, cursor, hasMore, isLoading]);

  // New messages via WS
  useEffect(() => {
    if (!socket) return;
    const onMessage = (msg) => {
      if (msg.conversationId !== conversationId) return;
      setMessages((prev) => [...prev, msg]);
    };
    const onRead = (data) => {
      if (data.conversationId !== conversationId) return;
      setMessages((prev) => prev.map((m) => m.readAt ? m : { ...m, readAt: data.readAt }));
    };
    socket.on('chat.message.created', onMessage);
    socket.on('chat.messages.read', onRead);
    return () => { socket.off('chat.message.created', onMessage); socket.off('chat.messages.read', onRead); };
  }, [socket, conversationId]);

  const send     = useCallback((body) => chatApi.sendMessage(conversationId, body), [conversationId]);
  const markRead = useCallback(()     => chatApi.markAsRead(conversationId),        [conversationId]);

  return { messages, isLoading, error, hasMore, loadMessages, send, markRead };
}
