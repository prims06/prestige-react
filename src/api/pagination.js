/** Normalise les deux formats de pagination du backend */
export function normalizePage(raw) {
  if (raw.pageInfo !== undefined) {
    return { items: raw.data, nextCursor: raw.pageInfo.nextCursor, hasMore: raw.pageInfo.hasNextPage };
  }
  const next = raw.nextCursor ?? null;
  return { items: raw.data, nextCursor: next, hasMore: next !== null };
}
