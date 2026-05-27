import { useState, useCallback, useRef } from 'react';
import { normalizePage } from '../api/pagination';
import { ApiError } from '../api/ApiError';

/**
 * Generic infinite-scroll hook.
 * @param {(cursor: string|undefined) => Promise<any>} fetcher
 */
export function useInfinitePage(fetcher) {
  const [items, setItems]       = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError]       = useState(null);
  const cursorRef  = useRef(null);
  const hasMoreRef = useRef(true);

  const loadMore = useCallback(async (reset = false) => {
    if (isLoading || (!reset && !hasMoreRef.current)) return;
    if (reset) { cursorRef.current = null; hasMoreRef.current = true; }
    setLoading(true); setError(null);
    try {
      const raw  = await fetcher(cursorRef.current ?? undefined);
      const page = normalizePage(raw);
      setItems((prev) => reset ? page.items : [...prev, ...page.items]);
      cursorRef.current  = page.nextCursor;
      hasMoreRef.current = page.hasMore;
    } catch (e) {
      setError(e instanceof ApiError ? e : new ApiError({ statusCode: 0, code: 'NETWORK_ERROR', message: e?.message ?? 'Network error' }));
    } finally {
      setLoading(false);
    }
  }, [fetcher, isLoading]);

  return { items, isLoading, error, hasMore: hasMoreRef.current, loadMore, reset: () => loadMore(true) };
}
