import { useState, useEffect, useRef } from 'react';

/**
 * Returns [ref, isVisible]. Once the element enters the viewport it stays
 * visible — use this for one-shot lazy rendering of below-fold sections.
 *
 * @param {IntersectionObserverInit} options
 */
export function useIntersection(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { rootMargin: '200px', threshold: 0, ...options });

    observer.observe(el);
    return () => observer.disconnect();
  }, [visible, options]);

  return [ref, visible];
}
