export default function Tabs({ tabs = [], activeTab, onChange, children }) {
  return (
    <div className="xc-tabs">
      <ul className="xc-tabs__bar" role="tablist">
        {tabs.map((t) => {
          const isActive = t.id === activeTab;
          return (
            <li
              key={t.id}
              role="tab"
              tabIndex={0}
              aria-selected={isActive}
              className={`xc-tabs__tab ${isActive ? 'xc-tabs__tab--active' : ''}`}
              onClick={() => onChange?.(t.id)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onChange?.(t.id); } }}
            >
              {t.label}
            </li>
          );
        })}
      </ul>
      <div className="xc-tabs__panel" role="tabpanel">{children}</div>
    </div>
  );
}
