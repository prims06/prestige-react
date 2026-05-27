import { Link } from 'react-router-dom';

export function FilterHeading({ dataId, title }) {
  return (
    <div className={`elementor-element elementor-element-${dataId} elementor-widget elementor-widget-heading`} data-id={dataId} data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      <div className="elementor-widget-container">
        <h5 className="elementor-heading-title elementor-size-default">{title}</h5>
      </div>
    </div>
  );
}

export function FilterNavHorizontal({ dataId, items, menuIds, href = '/shop' }) {
  const menu1Id = `menu-1-${dataId}`;
  const menu2Id = `menu-2-${dataId}`;
  return (
    <div className={`elementor-element elementor-element-${dataId} elementor-nav-menu__align-start elementor-nav-menu--dropdown-none elementor-widget elementor-widget-nav-menu`} data-id={dataId} data-element_type="widget" data-e-type="widget" data-settings='{"submenu_icon":{"value":"<i class=\"\" aria-hidden=\"true\"><\/i>","library":""},"layout":"horizontal"}' data-widget_type="nav-menu.default">
      <div className="elementor-widget-container">
        <nav aria-label="Menu" className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-text e--animation-none">
          <ul id={menu1Id} className="elementor-nav-menu">
            {items.map((item, i) => (
              <li key={item} className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-${menuIds[i]}`}>
                <Link to={href} className="elementor-item elementor-item-anchor">{item}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="elementor-nav-menu--dropdown elementor-nav-menu__container" aria-hidden="true" style={{ '--menu-height': 0 }}>
          <ul id={menu2Id} className="elementor-nav-menu">
            {items.map((item, i) => (
              <li key={item} className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-${menuIds[i]}`}>
                <Link to={href} className="elementor-item elementor-item-anchor" tabIndex={-1}>{item}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export function DesktopHeading({ dataId, title }) {
  return (
    <div className={`elementor-element elementor-element-${dataId} elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-heading`} data-id={dataId} data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      <div className="elementor-widget-container">
        <h5 className="elementor-heading-title elementor-size-default">{title}</h5>
      </div>
    </div>
  );
}

export function DesktopDivider({ dataId }) {
  return (
    <div className={`elementor-element elementor-element-${dataId} elementor-hidden-tablet elementor-hidden-mobile elementor-widget-divider--view-line elementor-widget elementor-widget-divider`} data-id={dataId} data-element_type="widget" data-e-type="widget" data-widget_type="divider.default">
      <div className="elementor-widget-container">
        <div className="elementor-divider">
          <span className="elementor-divider-separator"></span>
        </div>
      </div>
    </div>
  );
}

export function FilterNavVertical({ dataId, items, menuIds, href = '/shop' }) {
  const menu1Id = `menu-1-${dataId}`;
  const menu2Id = `menu-2-${dataId}`;
  return (
    <div className={`elementor-element elementor-element-${dataId} elementor-nav-menu__align-start elementor-nav-menu--dropdown-none elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-nav-menu`} data-id={dataId} data-element_type="widget" data-e-type="widget" data-settings='{"layout":"vertical","submenu_icon":{"value":"<i class=\"\" aria-hidden=\"true\"><\/i>","library":""}}' data-widget_type="nav-menu.default">
      <div className="elementor-widget-container">
        <nav aria-label="Menu" className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-vertical e--pointer-background e--animation-fade">
          <ul id={menu1Id} className="elementor-nav-menu sm-vertical">
            {items.map((item, i) => (
              <li key={item} className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-${menuIds[i]}`}>
                <Link to={href} className="elementor-item elementor-item-anchor">{item}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="elementor-nav-menu--dropdown elementor-nav-menu__container" aria-hidden="true" style={{ '--menu-height': 0 }}>
          <ul id={menu2Id} className="elementor-nav-menu sm-vertical">
            {items.map((item, i) => (
              <li key={item} className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-${menuIds[i]}`}>
                <Link to={href} className="elementor-item elementor-item-anchor" tabIndex={-1}>{item}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
