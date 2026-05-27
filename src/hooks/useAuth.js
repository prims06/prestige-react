import { useCallback } from 'react';
import { useAuthStore } from '../store/authStore';
import { authApi } from '../api/modules/auth';
import { useAsync } from './useAsync';

export function useAuth() {
  const { user, isAuthenticated, sessionId, accessExpiresAt, setSession, clearSession, updateUser } = useAuthStore();
  const { isLoading, error, execute, reset } = useAsync();

  const login = useCallback((credentials) =>
    execute(async () => {
      const data = await authApi.login(credentials);
      setSession(data);
      return data;
    }), [execute, setSession]);

  // register may return tokens directly (auto-login) or just a message (OTP flow)
  const register = useCallback((params) =>
    execute(async () => {
      const data = await authApi.register(params);
      if (data?.accessToken) setSession(data);
      return data;
    }), [execute, setSession]);

  // verifyOtp may return tokens after email verification
  const verifyOtp = useCallback((params) =>
    execute(async () => {
      const data = await authApi.verifyOtp(params);
      if (data?.accessToken) setSession(data);
      return data;
    }), [execute, setSession]);

  const sendOtp = useCallback((params) =>
    execute(() => authApi.sendOtp(params)), [execute]);

  const forgotPassword = useCallback((params) =>
    execute(() => authApi.forgotPassword(params)), [execute]);

  const resetPassword = useCallback((params) =>
    execute(() => authApi.resetPassword(params)), [execute]);

  const logout = useCallback(() =>
    execute(async () => {
      try { await authApi.logout(); } finally { clearSession(); }
    }), [execute, clearSession]);

  const logoutAll = useCallback(() =>
    execute(async () => {
      try { await authApi.logoutAll(); } finally { clearSession(); }
    }), [execute, clearSession]);

  const refreshProfile = useCallback(() =>
    execute(async () => {
      const data = await authApi.me();
      updateUser(data.user ?? data);
      return data;
    }), [execute, updateUser]);

  return {
    user, isAuthenticated, sessionId, accessExpiresAt,
    isLoading, error,
    login, register, verifyOtp, sendOtp,
    forgotPassword, resetPassword,
    logout, logoutAll, refreshProfile,
    resetError: reset,
  };
}
