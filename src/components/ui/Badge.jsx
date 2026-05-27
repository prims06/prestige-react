export default function Badge({ label, variant = 'pending', className = '' }) {
  return (
    <span className={`xc-badge xc-badge--${variant} ${className}`.trim()}>
      {label}
    </span>
  );
}
