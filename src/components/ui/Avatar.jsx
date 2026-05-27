function initials(name = '') {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map(s => s[0].toUpperCase())
    .join('');
}

export default function Avatar({ src, name = '', size = 'md', className = '' }) {
  return (
    <span className={`xc-avatar xc-avatar--${size} ${className}`.trim()} aria-label={name || 'avatar'}>
      {src ? <img src={src} alt={name} loading="lazy" /> : initials(name) || '?'}
    </span>
  );
}
