import { useEffect, useState } from 'react';
import { connectSocket, disconnectSocket, getSocket } from '../api/socket';
import { tokenStorage } from '../api/client';

export function usePrestigeSocket() {
  const [socket, setSocket] = useState(getSocket);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    if (!tokenStorage.getAccess()) return;
    const s = connectSocket();
    setSocket(s);
    const onConnect    = () => setIsConnected(true);
    const onDisconnect = () => setIsConnected(false);
    s.on('connect', onConnect);
    s.on('disconnect', onDisconnect);
    if (s.connected) setIsConnected(true);
    return () => { s.off('connect', onConnect); s.off('disconnect', onDisconnect); };
  }, []);

  return { socket, isConnected };
}
