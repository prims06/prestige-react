import { useCallback, useEffect, useRef } from 'react';
import { directoryApi } from '../api';
import { useAsync } from './useAsync';
import { useFetch } from './useFetch';
import { useInfinitePage } from './useInfinitePage';

function useFilteredList(apiFn, filters) {
  const filtersKey = JSON.stringify(filters);
  const latestFilters = useRef(filters);
  latestFilters.current = filters;

  const fetcher = useCallback(
    (cursor) => apiFn({ ...latestFilters.current, cursor }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [apiFn],
  );

  const pager = useInfinitePage(fetcher);
  const resetRef = useRef(pager.reset);
  resetRef.current = pager.reset;

  useEffect(() => {
    resetRef.current();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtersKey]);

  return pager;
}

// ── Transporteurs ─────────────────────────────────────────────────────────────

/**
 * Liste paginée de transporteurs avec scroll infini.
 * @param {{ city?: string, quartier?: string, limit?: number }} filters
 * @returns {{ transporters, isLoading, error, hasMore, loadMore }}
 */
export function useTransporters(filters = {}) {
  const { items, isLoading, error, hasMore, loadMore } = useFilteredList(
    directoryApi.listTransporters,
    filters,
  );
  return { transporters: items, isLoading, error, hasMore, loadMore };
}

/**
 * Détail d'un transporteur.
 * @param {string|null} id
 */
export function useTransporter(id) {
  return useFetch(() => directoryApi.getTransporter(id), [id], { enabled: !!id });
}

/**
 * Révèle le numéro WhatsApp d'un transporteur (requiert conversation active avec une escorte).
 * @param {string} id  — ID du transporteur
 * @returns {{ whatsappNumber, isLoading, error, reveal }}
 */
export function useRevealTransporterContact(id) {
  const { data, isLoading, error, execute } = useAsync();
  const reveal = useCallback(
    () => execute(() => directoryApi.revealTransporterContact(id)),
    [execute, id],
  );
  return { whatsappNumber: data?.whatsappNumber ?? null, isLoading, error, reveal };
}

// ── Propriétaires de logement ─────────────────────────────────────────────────

/**
 * Liste paginée de propriétaires avec scroll infini.
 * @param {{ city?: string, quartier?: string, limit?: number }} filters
 * @returns {{ propertyOwners, isLoading, error, hasMore, loadMore }}
 */
export function usePropertyOwners(filters = {}) {
  const { items, isLoading, error, hasMore, loadMore } = useFilteredList(
    directoryApi.listPropertyOwners,
    filters,
  );
  return { propertyOwners: items, isLoading, error, hasMore, loadMore };
}

/**
 * Détail d'un propriétaire de logement.
 * @param {string|null} id
 */
export function usePropertyOwner(id) {
  return useFetch(() => directoryApi.getPropertyOwner(id), [id], { enabled: !!id });
}

/**
 * Révèle le numéro WhatsApp d'un propriétaire (requiert conversation active avec une escorte).
 * @param {string} id  — ID du propriétaire
 * @returns {{ whatsappNumber, isLoading, error, reveal }}
 */
export function useRevealPropertyOwnerContact(id) {
  const { data, isLoading, error, execute } = useAsync();
  const reveal = useCallback(
    () => execute(() => directoryApi.revealPropertyOwnerContact(id)),
    [execute, id],
  );
  return { whatsappNumber: data?.whatsappNumber ?? null, isLoading, error, reveal };
}
