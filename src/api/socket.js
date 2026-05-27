import { io } from 'socket.io-client';
import { tokenStorage } from './client';

const WS_URL = import.meta.env.VITE_WS_URL ?? 'http://localhost:3000';

let socket = null;

export function connectSocket() {
  if (socket?.connected) return socket;

  socket = io(WS_URL, {
    path: '/ws',
    auth: { token: tokenStorage.getAccess() },
    transports: ['websocket'],
    reconnectionAttempts: 5,
    reconnectionDelay: 2000,
  });

  socket.on('connect_error', (err) => {
    console.warn('[WS] connect_error', err.message);
  });

  return socket;
}

export function disconnectSocket() {
  socket?.disconnect();
  socket = null;
}

export function getSocket() { return socket; }
