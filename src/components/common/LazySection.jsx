import { useIntersection } from '../../hooks/useIntersection';

/**
 * Defers rendering its children until the placeholder enters the viewport.
 * Eliminates the cost of mounting heavy sections that are below the fold.
 *
 * Usage:
 *   <LazySection minHeight="600px">
 *     <HeavyComponent />
 *   </LazySection>
 */
export default function LazySection({ children, minHeight = '200px', className = '' }) {
  const [ref, visible] = useIntersection();

  return (
    <div ref={ref} className={className} style={!visible ? { minHeight } : undefined}>
      {visible ? children : null}
    </div>
  );
}
