export default function Spinner({ size = 'md', className = '' }) {
  return <span className={`xc-spinner xc-spinner--${size} ${className}`.trim()} role="status" aria-label="Chargement" />;
}
