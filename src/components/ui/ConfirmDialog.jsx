import { useEffect } from 'react';
import Spinner from './Spinner';

export default function ConfirmDialog({
  isOpen,
  title,
  message,
  confirmLabel = 'Confirmer',
  cancelLabel = 'Annuler',
  onConfirm,
  onCancel,
  isLoading = false,
  variant = 'primary', // 'primary' | 'danger'
}) {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => { if (e.key === 'Escape' && !isLoading) onCancel?.(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, isLoading, onCancel]);

  if (!isOpen) return null;

  const confirmClass = variant === 'danger' ? 'xc-btn xc-btn--danger' : 'xc-btn xc-btn--primary';
  const wrapperClass = `elementor-button-wrapper xc-elementor-cancel${isLoading ? ' xc-elementor-cancel--disabled' : ''}`;

  return (
    <div className="xc-dialog-backdrop" onClick={() => !isLoading && onCancel?.()} role="dialog" aria-modal="true">
      <div className="xc-dialog" onClick={(e) => e.stopPropagation()}>
        {title && (
          <div className="xc-dialog__head">
            <h3 className="xc-dialog__title">{title}</h3>
          </div>
        )}
        {message && (
          <div className="xc-dialog__body">
            <p className="xc-dialog__message">{message}</p>
          </div>
        )}
        <div className="xc-dialog__foot">
          <div className={wrapperClass}>
            <a
              className="elementor-button elementor-button-link elementor-size-sm elementor-animation-push"
              href="#"
              onClick={(e) => { e.preventDefault(); if (!isLoading) onCancel?.(); }}
              role="button"
            >
              <span className="elementor-button-content-wrapper">
                <span className="elementor-button-text">{cancelLabel}</span>
              </span>
            </a>
          </div>
          <button type="button" className={confirmClass} onClick={onConfirm} disabled={isLoading}>
            {isLoading && <Spinner size="sm" />}
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
