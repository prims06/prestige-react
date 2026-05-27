import { useState, useCallback } from 'react';
import { ApiError } from '../api/ApiError';

/**
 * Generic hook for one-shot mutations (POST, PUT, PATCH, DELETE).
 *
 * Usage:
 *   const { isLoading, error, data, execute } = useAsync();
 *   const handleSubmit = () => execute(() => api.post('/items', payload));
 */
export function useAsync() {
  const [state, setState] = useState({ data: null, error: null, isLoading: false });

  const execute = useCallback(async (asyncFn) => {
    setState({ data: null, error: null, isLoading: true });
    try {
      const data = await asyncFn();
      setState({ data, error: null, isLoading: false });
      return { data, error: null };
    } catch (err) {
      const error = err instanceof ApiError ? err : new ApiError({
        statusCode: 0,
        code: 'NETWORK_ERROR',
        message: err?.message ?? 'Network error',
      });
      setState({ data: null, error, isLoading: false });
      return { data: null, error };
    }
  }, []);

  const reset = useCallback(() => setState({ data: null, error: null, isLoading: false }), []);

  return { ...state, execute, reset };
}
