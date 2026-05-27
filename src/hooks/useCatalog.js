import { useCallback, useEffect, useRef } from 'react';
import { catalogApi } from '../api';
import { useAsync } from './useAsync';
import { useFetch } from './useFetch';
import { useInfinitePage } from './useInfinitePage';

// ── Helpers ───────────────────────────────────────────────────────────────────

/**
 * Wraps useInfinitePage avec reset automatique quand les filtres changent.
 * Le premier chargement est déclenché au montage.
 */
function useFilteredList(apiFn, filters) {
  const filtersKey = JSON.stringify(filters);
  const latestFilters = useRef(filters);
  latestFilters.current = filters;

  // Fetcher stable — lit les filtres via ref pour éviter une recréation inutile
  const fetcher = useCallback(
    (cursor) => apiFn({ ...latestFilters.current, cursor }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [apiFn],
  );

  const pager = useInfinitePage(fetcher);
  const resetRef = useRef(pager.reset);
  resetRef.current = pager.reset;

  // Charge la première page au montage et re-charge si les filtres changent
  useEffect(() => {
    resetRef.current();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtersKey]);

  return pager;
}

// ── Escorts ───────────────────────────────────────────────────────────────────

/**
 * Liste paginée d'escortes avec scroll infini.
 * @param {{ city?: string, quartier?: string, tags?: string, limit?: number }} filters
 * @returns {{ escorts, isLoading, error, hasMore, loadMore }}
 */
export function useEscorts(filters = {}) {
  const { items, isLoading, error, hasMore, loadMore } = useFilteredList(
    catalogApi.listEscorts,
    filters,
  );
  return { escorts: items, isLoading, error, hasMore, loadMore };
}

/**
 * Détail d'une escorte (services + media inclus).
 * @param {string|null} id
 */
export function useEscort(id) {
  return useFetch(() => catalogApi.getEscort(id), [id], { enabled: !!id });
}

// ── Services ──────────────────────────────────────────────────────────────────

/**
 * Liste paginée de services avec scroll infini.
 * @param {{ city?: string, quartier?: string, limit?: number }} filters
 * @returns {{ services, isLoading, error, hasMore, loadMore }}
 */
export function useServices(filters = {}) {
  const { items, isLoading, error, hasMore, loadMore } = useFilteredList(
    catalogApi.listServices,
    filters,
  );
  return { services: items, isLoading, error, hasMore, loadMore };
}

/**
 * Détail d'un service (escorte + media complet).
 * @param {string|null} id
 */
export function useService(id) {
  return useFetch(() => catalogApi.getService(id), [id], { enabled: !!id });
}

// ── Homepage ──────────────────────────────────────────────────────────────────

/**
 * Escortes les plus actives récemment (triées par dernière activité conversation).
 * Tableau plat — pas de pagination.
 * @param {number} limit  max 20, défaut 10
 */
export function useTrendingEscorts(limit = 10) {
  return useFetch(() => catalogApi.homepageTrending(limit), [limit]);
}

/**
 * Services mis en avant (escortes avec abonnement actif, VIP → Bronze), avec media.
 * Tableau plat — pas de pagination.
 * @param {number} limit  max 24, défaut 12
 */
export function useFeaturedServices(limit = 12) {
  return useFetch(() => catalogApi.homepageFeaturedServices(limit), [limit]);
}

/**
 * Escortes avec meilleur abonnement (VIP → Bronze) + leurs services avec media.
 * Tableau plat — pas de pagination.
 * @param {number} limit  max 12, défaut 8
 */
export function useTopEscorts(limit = 8) {
  return useFetch(() => catalogApi.homepageTopEscorts(limit), [limit]);
}
