import { useEffect, useState, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function MediaViewer({ items = [], initialIndex = 0, onClose }) {
  const [index, setIndex] = useState(initialIndex);

  const next = useCallback(() => setIndex((i) => (i + 1) % items.length), [items.length]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + items.length) % items.length), [items.length]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose?.();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, next, prev]);

  if (!items.length) return null;
  const current = items[index];
  const isVideo = current?.mediaType === 'video' || /\.(mp4|webm|mov)$/i.test(current?.url || '');

  return (
    <div className="xc-mv" onClick={onClose} role="dialog" aria-modal="true">
      <span
        role="button" tabIndex={0}
        className="xc-icon-btn xc-mv__close"
        onClick={(e) => { e.stopPropagation(); onClose?.(); }}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClose?.(); } }}
        aria-label="Fermer"
      >
        <X size={28} strokeWidth={1.5} />
      </span>

      {items.length > 1 && (
        <>
          <span
            role="button" tabIndex={0}
            className="xc-icon-btn xc-mv__nav xc-mv__nav--prev"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); prev(); } }}
            aria-label="Précédent"
          >
            <ChevronLeft size={36} strokeWidth={1.5} />
          </span>
          <span
            role="button" tabIndex={0}
            className="xc-icon-btn xc-mv__nav xc-mv__nav--next"
            onClick={(e) => { e.stopPropagation(); next(); }}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); next(); } }}
            aria-label="Suivant"
          >
            <ChevronRight size={36} strokeWidth={1.5} />
          </span>
        </>
      )}

      <div className="xc-mv__stage" onClick={(e) => e.stopPropagation()}>
        {isVideo
          ? <video src={current.url} controls autoPlay />
          : <img src={current.url} alt="" />}
      </div>

      {items.length > 1 && (
        <div className="xc-mv__counter">{index + 1} / {items.length}</div>
      )}
    </div>
  );
}
