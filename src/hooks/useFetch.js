import { useState, useEffect, useCallback, useRef } from 'react';
import { ApiError } from '../api/ApiError';

/**
 * Generic hook for data queries — fires on mount and whenever deps change.
 *
 * Usage:
 *   const { data, error, isLoading, refetch } = useFetch(
 *     () => api.get('/products'),
 *     []
 *   );
 *
 * Pass `enabled: false` to skip the initial fetch (useful for conditional queries).
 */
export function useFetch(asyncFn, deps = [], { enabled = true } = {}) {
  const [state, setState] = useState({ data: null, error: null, isLoading: enabled });
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    return () => { mountedRef.current = false; };
  }, []);

  const fetch = useCallback(async () => {
    if (!mountedRef.current) return;
    setState((s) => ({ ...s, isLoading: true, error: null }));
    try {
      const data = await asyncFn();
      if (mountedRef.current) setState({ data, error: null, isLoading: false });
    } catch (err) {
      if (!mountedRef.current) return;
      const error = err instanceof ApiError ? err : new ApiError({
        statusCode: 0,
        code: 'NETWORK_ERROR',
        message: err?.message ?? 'Network error',
      });
      setState({ data: null, error, isLoading: false });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  useEffect(() => {
    if (enabled) fetch();
  }, [fetch, enabled]);

  return { ...state, refetch: fetch };
}
