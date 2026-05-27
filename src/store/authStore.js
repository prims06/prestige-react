import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { tokenStorage } from '../api/client';

export const useAuthStore = create(
  persist(
    (set) => ({
      user:              null,
      sessionId:         null,
      accessExpiresAt:   null,
      refreshExpiresAt:  null,
      isAuthenticated:   false,

      // Call after a successful login or token refresh that returns user data
      setSession: (data) => {
        tokenStorage.setAccess(data.accessToken);
        tokenStorage.setRefresh(data.refreshToken);
        set({
          user:             data.user,
          sessionId:        data.sessionId,
          accessExpiresAt:  data.accessExpiresAt,
          refreshExpiresAt: data.refreshExpiresAt,
          isAuthenticated:  true,
        });
      },

      // Update user profile without touching tokens
      updateUser: (user) => set({ user }),

      clearSession: () => {
        tokenStorage.clear();
        set({
          user:             null,
          sessionId:        null,
          accessExpiresAt:  null,
          refreshExpiresAt: null,
          isAuthenticated:  false,
        });
      },
    }),
    {
      name: 'xchain_auth',
      // Tokens stay in tokenStorage (separate keys). Only non-sensitive state persisted here.
      partialize: (state) => ({
        user:             state.user,
        sessionId:        state.sessionId,
        accessExpiresAt:  state.accessExpiresAt,
        refreshExpiresAt: state.refreshExpiresAt,
        isAuthenticated:  state.isAuthenticated,
      }),
    }
  )
);

// Forced logout when the refresh token itself is expired
if (typeof window !== 'undefined') {
  window.addEventListener('auth:expired', () => {
    useAuthStore.getState().clearSession();
  });
}
