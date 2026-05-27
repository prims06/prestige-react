export default function EmptyState({ icon, title, description, action }) {
  return (
    <div className="xc-empty">
      {icon && <div className="xc-empty__icon">{typeof icon === 'string' ? <i className={icon} aria-hidden="true" /> : icon}</div>}
      {title && <h4 className="xc-empty__title">{title}</h4>}
      {description && <p className="xc-empty__desc">{description}</p>}
      {action}
    </div>
  );
}
