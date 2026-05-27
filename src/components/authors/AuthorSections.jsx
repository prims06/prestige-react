import { AUTHORS, QUICK_LINKS } from '../../data/authors';
import AuthorCard from './AuthorCard.jsx';

export function FilterNavMenu({ dataId, layout = 'horizontal' }) {
  const menu1Id = `menu-1-${dataId}`;
  const menu2Id = `menu-2-${dataId}`;
  const pointerClass = layout === 'vertical' ? ' e--pointer-background e--animation-fade' : ' e--pointer-text e--animation-none';
  const layoutClass = layout === 'vertical' ? ' elementor-nav-menu--layout-vertical' : ' elementor-nav-menu--layout-horizontal';
  const smClass = layout === 'vertical' ? ' sm-vertical' : '';
  return (
    <div className={`elementor-element elementor-element-${dataId} elementor-nav-menu__align-start elementor-nav-menu--dropdown-none elementor-widget elementor-widget-nav-menu`} data-id={dataId} data-element_type="widget" data-e-type="widget" data-settings={`{"submenu_icon":{"value":"<i class=\\"\\" aria-hidden=\\"true\\"><\\/i>","library":""},"layout":"${layout}"}`} data-widget_type="nav-menu.default">
      <div className="elementor-widget-container">
        <nav aria-label="Menu" className={`elementor-nav-menu--main elementor-nav-menu__container${layoutClass}${pointerClass}`}>
          <ul id={menu1Id} className={`elementor-nav-menu${smClass}`}>
            {QUICK_LINKS.map((link) => (
              <li key={link.id} className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-${link.id}`}>
                <a href="/authors#" className="elementor-item elementor-item-anchor">{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="elementor-nav-menu--dropdown elementor-nav-menu__container" aria-hidden="true" style={{ '--menu-height': 0 }}>
          <ul id={menu2Id} className={`elementor-nav-menu${smClass}`}>
            {QUICK_LINKS.map((link) => (
              <li key={link.id} className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-${link.id}`}>
                <a href="/authors#" className="elementor-item elementor-item-anchor" tabIndex={-1}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export function AuthorsHeader() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-89a4cbb elementor-section-boxed elementor-section-height-default" data-id="89a4cbb" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-dccb0e1" data-id="dccb0e1" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-3f4332d elementor-widget elementor-widget-heading" data-id="3f4332d" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
              <div className="elementor-widget-container"><h2 className="elementor-heading-title elementor-size-default">Authors</h2></div>
            </div>
            <div className="elementor-element elementor-element-f7056c2 elementor-widget elementor-widget-mdp-crumber-elementor" data-id="f7056c2" data-element_type="widget" data-e-type="widget" data-widget_type="mdp-crumber-elementor.default">
              <div className="elementor-widget-container">
                <div className="mdp-crumber-elementor-box">
                  <div className="mdp-crumber-elementor-breadcrumbs">
                    <div className="mdp-crumber-elementor-breadcrumbs-item mdp-crumber-elementor-breadcrumbs-icon-position-"><span>Home</span></div>
                    <span className="mdp-crumber-elementor-separator mdp-crumber-elementor-separator-hide-last"> {'•'} </span>
                    <div className="mdp-crumber-elementor-breadcrumbs-item mdp-crumber-elementor-breadcrumbs-item-active mdp-crumber-elementor-breadcrumbs-icon-position-"><span>Authors</span></div>
                    <span className="mdp-crumber-elementor-separator mdp-crumber-elementor-separator-hide-last"> {'•'} </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MobileFilterNav() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-122b1ba elementor-hidden-desktop elementor-section-boxed elementor-section-height-default" data-id="122b1ba" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-8bf8869" data-id="8bf8869" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-2c52821 elementor-widget elementor-widget-heading" data-id="2c52821" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
              <div className="elementor-widget-container"><h5 className="elementor-heading-title elementor-size-default">Filters</h5></div>
            </div>
            <FilterNavMenu dataId="450dd2b" layout="horizontal" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function AuthorsMain() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-a464f1f elementor-section-boxed elementor-section-height-default" data-id="a464f1f" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-2f20353" data-id="2f20353" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            {AUTHORS.map((author, i) => (
              <AuthorCard key={author.sId} author={author} isFirst={i === 0} />
            ))}
          </div>
        </div>
        <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-c1b31d2 elementor-hidden-tablet elementor-hidden-mobile" data-id="c1b31d2" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-d2810f9 elementor-widget elementor-widget-heading" data-id="d2810f9" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
              <div className="elementor-widget-container"><h5 className="elementor-heading-title elementor-size-default">Quick links</h5></div>
            </div>
            <FilterNavMenu dataId="afe3ae8" layout="vertical" />
          </div>
        </div>
      </div>
    </section>
  );
}
