import { useState, useEffect, useRef } from 'react';

export function useCarousel(count, interval = 3500) {
  const [idx, setIdx] = useState(0);
  const paused = useRef(false);

  useEffect(() => {
    if (!interval || count <= 1) return;
    const id = setInterval(() => {
      if (!paused.current) setIdx(i => (i + 1) % count);
    }, interval);
    return () => clearInterval(id);
  }, [count, interval]);

  return {
    idx,
    next:   () => setIdx(i => (i + 1) % count),
    prev:   () => setIdx(i => (i - 1 + count) % count),
    go:     (i) => setIdx(i),
    pause:  () => { paused.current = true; },
    resume: () => { paused.current = false; },
  };
}
