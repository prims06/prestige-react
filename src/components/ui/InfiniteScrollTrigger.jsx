import { useEffect } from 'react';
import { useIntersection } from '../../hooks/useIntersection';
import Spinner from './Spinner';

export default function InfiniteScrollTrigger({ onVisible, isLoading, hasMore, endLabel = 'Tout est chargé' }) {
  const [ref, visible] = useIntersection({ rootMargin: '300px' });

  useEffect(() => {
    if (visible && hasMore && !isLoading) onVisible?.();
  }, [visible, hasMore, isLoading, onVisible]);

  if (!hasMore) {
    return <div className="xc-infinite__end">{endLabel}</div>;
  }

  return (
    <div ref={ref} className="xc-infinite">
      {isLoading ? <Spinner size="sm" /> : <span>&nbsp;</span>}
    </div>
  );
}
