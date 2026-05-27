import { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User } from 'lucide-react';

function ProfileButton() {
  return (
    <Link to="/login" className="xc-profile-btn" aria-label="Profil utilisateur">
      <User size={24} strokeWidth={1} />
    </Link>
  );
}

const NAV_ITEMS = [
  { id: 5551, label: 'Home', to: '/', children: [
    { id: 370, label: 'Home 2', to: '/home-2' },
  ]},
  { id: 4982, label: 'Shop', to: '/shop', children: [
    { id: 5552, label: 'Shop 2', to: '/shop-2' },
    { id: 1657, label: 'Single product', to: '/product' },
  ]},
  { id: 373, label: 'Pages', to: '#', anchor: true, children: [
    { id: 4470, label: 'About', to: '/about' },
    { id: 377,  label: 'Help center', to: '/about' },
    { id: 4471, label: 'Team', to: '/authors' },
    { id: 6168, label: 'Authors', to: '/authors' },
    { id: 4474, label: 'Login', to: '/login' },
    { id: 4467, label: 'Error page', to: '/404' },
  ]},
  { id: 4696, label: 'Blog', to: '/blog', children: [
    { id: 4697, label: 'Blog 2', to: '/blog-2' },
    { id: 1281, label: 'Single post', to: '/blog' },
  ]},
  { id: 375, label: 'Contacts', to: '/contacts' },
];

function NavItem({ item, tabIndex, pathname }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);
  const hasChildren = item.children?.length > 0;
  const isActive = pathname === item.to || item.children?.some(c => pathname === c.to);
  const liCls = [
    'menu-item menu-item-type-custom menu-item-object-custom',
    `menu-item-${item.id}`,
    hasChildren ? 'menu-item-has-children' : '',
    isActive ? 'current-menu-item' : '',
  ].filter(Boolean).join(' ');
  const linkCls = [
    'elementor-item',
    item.anchor ? 'elementor-item-anchor' : '',
    hasChildren ? 'has-submenu' : '',
    isActive ? 'elementor-item-active' : '',
  ].filter(Boolean).join(' ');

  const handleEnter = () => {
    clearTimeout(closeTimer.current);
    if (hasChildren) setOpen(true);
  };
  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <li
      className={liCls}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {item.anchor ? (
        <a href="#" className={linkCls} {...(tabIndex != null ? { tabIndex } : {})}>
          {item.label}
          {hasChildren && <span className="sub-arrow"><i className="fas fa-angle-down" aria-hidden="true"></i></span>}
        </a>
      ) : (
        <Link to={item.to} className={linkCls} {...(tabIndex != null ? { tabIndex } : {})}>
          {item.label}
          {hasChildren && <span className="sub-arrow"><i className="fas fa-angle-down" aria-hidden="true"></i></span>}
        </Link>
      )}
      {hasChildren && (
        <ul className="sub-menu elementor-nav-menu--dropdown" style={{ display: open ? 'block' : 'none' }} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
          {item.children.map(child => (
            <li key={child.id} className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-${child.id}`}>
              <Link to={child.to} className="elementor-sub-item" {...(tabIndex != null ? { tabIndex } : {})}>
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

function NavMenuWidget({ pathname }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="elementor-element elementor-element-1eeb09b elementor-widget__width-auto elementor-nav-menu__align-end elementor-nav-menu--dropdown-tablet elementor-nav-menu__text-align-aside elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu" data-id="1eeb09b" data-element_type="widget" data-e-type="widget" data-settings='{"submenu_icon":{"value":"<i class=\"fas fa-angle-down\" aria-hidden=\"true\"><\/i>","library":"fa-solid"},"layout":"horizontal","toggle":"burger"}' data-widget_type="nav-menu.default">
      <div className="elementor-widget-container">
        {/* Desktop horizontal nav */}
        <nav aria-label="Menu" className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-underline e--animation-fade">
          <ul id="menu-1-1eeb09b" className="elementor-nav-menu">
            {NAV_ITEMS.map(item => (
              <NavItem key={item.id} item={item} pathname={pathname} />
            ))}
          </ul>
        </nav>

        {/* Burger toggle button (visible on tablet via CSS) */}
        <div
          className="elementor-menu-toggle"
          role="button"
          tabIndex={0}
          aria-label="Menu Toggle"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(o => !o)}
          onKeyDown={e => e.key === 'Enter' && setMobileOpen(o => !o)}
        >
          <i aria-hidden="true" role="presentation" className="elementor-menu-toggle__icon--open eicon-menu-bar"></i>
          <i aria-hidden="true" role="presentation" className="elementor-menu-toggle__icon--close eicon-close"></i>
        </div>

        {/* Mobile/tablet dropdown nav (shown when burger is toggled) */}
        <nav
          className="elementor-nav-menu--dropdown elementor-nav-menu__container"
          aria-hidden={!mobileOpen}
          style={{ '--menu-height': mobileOpen ? 'auto' : 0, display: mobileOpen ? 'block' : 'none' }}
        >
          <ul id="menu-2-1eeb09b" className="elementor-nav-menu">
            {NAV_ITEMS.map(item => (
              <NavItem key={item.id} item={item} tabIndex={mobileOpen ? undefined : -1} pathname={pathname} />
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="elementor-element elementor-element-907b95e elementor-widget elementor-widget-theme-site-logo elementor-widget-image" data-id="907b95e" data-element_type="widget" data-e-type="widget" data-widget_type="theme-site-logo.default">
      <div className="elementor-widget-container">
        <Link to="/">
          <img width="133" height="38" src="/images/cropped-logo.png" className="attachment-thumbnail size-thumbnail wp-image-4737" alt="" />
        </Link>
      </div>
    </div>
  );
}

function SearchForm({ widgetId }) {
  return (
    <div className={`elementor-element elementor-element-${widgetId} elementor-search-form--skin-minimal elementor-widget elementor-widget-search-form`} data-id={widgetId} data-element_type="widget" data-e-type="widget" data-settings='{"skin":"minimal"}' data-widget_type="search-form.default">
      <div className="elementor-widget-container">
        <search role="search">
          <form className="elementor-search-form" action="#" method="get">
            <div className="elementor-search-form__container">
              <label className="elementor-screen-only" htmlFor={`elementor-search-form-${widgetId}`}>Search</label>
              <div className="elementor-search-form__icon">
                <i aria-hidden="true" className="fas fa-search"></i>
                <span className="elementor-screen-only">Search</span>
              </div>
              <input id={`elementor-search-form-${widgetId}`} placeholder="Search items, collection or user" className="elementor-search-form__input" type="search" name="s" defaultValue="" />
            </div>
          </form>
        </search>
      </div>
    </div>
  );
}

function DesktopNavSection({ isSpacerRef, pathname }) {
  const sectionCls = [
    'elementor-section elementor-top-section elementor-element elementor-element-e2ac055',
    'elementor-section-content-middle elementor-hidden-tablet elementor-hidden-mobile',
    'elementor-section-boxed elementor-section-height-default',
    isSpacerRef
      ? 'elementor-section-height-default elementor-sticky elementor-sticky__spacer'
      : 'elementor-sticky elementor-sticky--active elementor-section--handles-inside elementor-sticky--effects',
  ].join(' ');
  const sectionStyle = isSpacerRef
    ? { visibility: 'hidden', transition: 'none', animation: 'auto ease 0s 1 normal none running none' }
    : { position: 'fixed', width: '100%', marginTop: 0, marginBottom: 0, top: 0 };

  return (
    <section
      className={sectionCls}
      data-id="e2ac055"
      data-element_type="section"
      data-e-type="section"
      data-settings='{"background_background":"classic","sticky":"top","mdp_selection_sticky_effect_enable":false,"sticky_on":["desktop","tablet","mobile"],"sticky_offset":0,"sticky_effects_offset":0,"sticky_anchor_link_offset":0}'
      style={sectionStyle}
    >
      <div className="elementor-container elementor-column-gap-no">
        {/* Left column: Logo + Search */}
        <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-621bb0f" data-id="621bb0f" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <section className="elementor-section elementor-inner-section elementor-element elementor-element-fd7c80f elementor-section-content-middle elementor-section-boxed elementor-section-height-default" data-id="fd7c80f" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
              <div className="elementor-container elementor-column-gap-no">
                <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-9daa1a0" data-id="9daa1a0" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <Logo />
                  </div>
                </div>
                <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-aae9ab4" data-id="aae9ab4" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <SearchForm widgetId="6282b8b" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Right column: Nav + Connect wallet */}
        <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-4eefed0" data-id="4eefed0" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <section className="elementor-section elementor-inner-section elementor-element elementor-element-19baa61 elementor-section-content-middle elementor-section-boxed elementor-section-height-default" data-id="19baa61" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
              <div className="elementor-container elementor-column-gap-no">
                <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-fce539c" data-id="fce539c" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <NavMenuWidget pathname={pathname} />
                  </div>
                </div>
                <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-f0c7eb3" data-id="f0c7eb3" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                  {/* <div className="elementor-widget-wrap elementor-element-populated" style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="elementor-element elementor-element-0175cca elementor-widget__width-auto elementor-widget elementor-widget-button" data-id="0175cca" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
                      <div className="elementor-widget-container">
                        <div className="elementor-button-wrapper">
                          <a className="elementor-button elementor-button-link elementor-size-sm elementor-animation-push" href="#">
                            <span className="elementor-button-content-wrapper"><span className="elementor-button-text">Connect wallet</span></span>
                          </a>
                        </div>
                      </div>
                    </div>
                    
                  </div> */}
                </div><ProfileButton />
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

function TabletNavSection({ isSpacerRef }) {
  const sectionCls = [
    'elementor-section elementor-top-section elementor-element elementor-element-bcbe4c3',
    'elementor-section-content-middle elementor-hidden-desktop elementor-hidden-mobile',
    'elementor-section-full_width elementor-section-height-default',
    isSpacerRef
      ? 'elementor-section-height-default elementor-sticky elementor-sticky__spacer'
      : 'elementor-sticky elementor-sticky--active elementor-section--handles-inside elementor-sticky--effects',
  ].join(' ');
  const sectionStyle = isSpacerRef
    ? { visibility: 'hidden', transition: 'none', animation: 'auto ease 0s 1 normal none running none' }
    : { position: 'fixed', marginTop: 0, marginBottom: 0, top: 0, width: '100%' };

  return (
    <section
      className={sectionCls}
      data-id="bcbe4c3"
      data-element_type="section"
      data-e-type="section"
      data-settings='{"background_background":"classic","sticky":"top","sticky_offset_tablet":0,"sticky_effects_offset_tablet":0,"mdp_selection_sticky_effect_enable":false,"sticky_on":["desktop","tablet","mobile"],"sticky_offset":0,"sticky_effects_offset":0,"sticky_anchor_link_offset":0}'
      style={sectionStyle}
    >
      <div className="elementor-container elementor-column-gap-no">
        {/* Logo */}
        <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-731d54f" data-id="731d54f" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-e7394a2 elementor-widget__width-auto elementor-widget elementor-widget-theme-site-logo elementor-widget-image" data-id="e7394a2" data-element_type="widget" data-e-type="widget" data-widget_type="theme-site-logo.default">
              <div className="elementor-widget-container">
                <Link to="/"><img width="133" height="38" src="/images/cropped-logo.png" className="attachment-thumbnail size-thumbnail wp-image-4737" alt="" /></Link>
              </div>
            </div>
          </div>
        </div>
        {/* Search */}
        <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-ad578a2" data-id="ad578a2" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <SearchForm widgetId="2f88488" />
          </div>
        </div>
        {/* Connect + hamburger */}
        <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-84d6087" data-id="84d6087" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated" style={{ display: 'flex', alignItems: 'center' }}>
            <div className="elementor-element elementor-element-1aa0967 elementor-widget__width-auto elementor-widget elementor-widget-button" data-id="1aa0967" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
              <div className="elementor-widget-container">
                <div className="elementor-button-wrapper">
                  <a className="elementor-button elementor-button-link elementor-size-sm elementor-animation-push" href="#">
                    <span className="elementor-button-content-wrapper"><span className="elementor-button-text">Connect</span></span>
                  </a>
                </div>
              </div>
            </div>
            <ProfileButton />
            <div className="elementor-element elementor-element-a991583 elementor-widget-mobile__width-auto elementor-widget-tablet__width-auto elementor-view-default elementor-widget elementor-widget-icon" data-id="a991583" data-element_type="widget" data-e-type="widget" data-widget_type="icon.default">
              <div className="elementor-widget-container">
                <div className="elementor-icon-wrapper">
                  <a className="elementor-icon" href="#"><i aria-hidden="true" className="fas fa-bars"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Header() {
  const { pathname } = useLocation();
  return (
    <header data-elementor-type="header" data-elementor-id="80" className="elementor elementor-80 elementor-location-header" data-elementor-post-type="elementor_library">
      <DesktopNavSection pathname={pathname} isSpacerRef={false} />
      <DesktopNavSection pathname={pathname} isSpacerRef={true} />
      <TabletNavSection isSpacerRef={false} />
      <TabletNavSection isSpacerRef={true} />
    </header>
  );
}
