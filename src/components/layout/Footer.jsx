const SOCIAL_ICONS = [
  { repeater: '56ed774',  name: 'Twitter',       icon: 'fab fa-twitter' },
  { repeater: '75c5971',  name: 'Facebook-f',    icon: 'fab fa-facebook-f' },
  { repeater: '021326e',  name: 'Instagram',     icon: 'fab fa-instagram' },
  { repeater: '71cdd6a',  name: 'Youtube',       icon: 'fab fa-youtube' },
  { repeater: 'a0296bf',  name: 'Linkedin-in',   icon: 'fab fa-linkedin-in' },
  { repeater: '934ac1c',  name: 'Telegram-plane',icon: 'fab fa-telegram-plane' },
  { repeater: '6f3d2bf',  name: 'Discord',       icon: 'fab fa-discord' },
];

const NAV_MENUS = [
  {
    headingId: '988d370', title: 'My account',
    widgetId: '5f3d16b', menuId1: 'menu-1-5f3d16b', menuId2: 'menu-2-5f3d16b',
    items: [
      { id: 1003, label: 'Profile' },
      { id: 1004, label: 'My Collections' },
      { id: 1005, label: 'Create item' },
      { id: 1006, label: 'Settings' },
    ],
  },
  {
    headingId: '99a1659', title: 'Resources',
    widgetId: '866765b', menuId1: 'menu-1-866765b', menuId2: 'menu-2-866765b',
    items: [
      { id: 1007, label: 'Help center' },
      { id: 1008, label: 'Partners' },
      { id: 1009, label: 'Activity' },
      { id: 1010, label: 'Rankings' },
    ],
  },
  {
    headingId: '68fe9c4', title: 'Company',
    widgetId: '541a2bf', menuId1: 'menu-1-541a2bf', menuId2: 'menu-2-541a2bf',
    items: [
      { id: 1012, label: 'About' },
      { id: 1011, label: 'Careers' },
      { id: 1013, label: 'Blog' },
      { id: 1014, label: 'Contact us' },
    ],
  },
];

const NAV_MENU_SETTINGS = '{"layout":"vertical","submenu_icon":{"value":"<i class=\\\"\\\" aria-hidden=\\\"true\\\"><\\/i>","library":""}}';
const INNER_COL_IDS = ['45d552d', 'd7d446c', '610acff'];

function FooterNavMenu({ menu, colId }) {
  return (
    <div className={`elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-${colId}`}
         data-id={colId} data-element_type="column" data-e-type="column"
         data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
      <div className="elementor-widget-wrap elementor-element-populated">
        <div className={`elementor-element elementor-element-${menu.headingId} elementor-widget elementor-widget-heading`}
             data-id={menu.headingId} data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
          <div className="elementor-widget-container">
            <h2 className="elementor-heading-title elementor-size-default">{menu.title}</h2>
          </div>
        </div>
        <div className={`elementor-element elementor-element-${menu.widgetId} elementor-nav-menu--dropdown-none elementor-widget elementor-widget-nav-menu`}
             data-id={menu.widgetId} data-element_type="widget" data-e-type="widget"
             data-settings={NAV_MENU_SETTINGS} data-widget_type="nav-menu.default">
          <div className="elementor-widget-container">
            <nav aria-label="Menu" className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-vertical e--pointer-text e--animation-none">
              <ul id={menu.menuId1} className="elementor-nav-menu sm-vertical">
                {menu.items.map(item => (
                  <li key={item.id} className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-${item.id}`}>
                    <a href="#" className="elementor-item elementor-item-anchor">{item.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <nav className="elementor-nav-menu--dropdown elementor-nav-menu__container" aria-hidden="true" style={{ '--menu-height': '0' }}>
              <ul id={menu.menuId2} className="elementor-nav-menu sm-vertical">
                {menu.items.map(item => (
                  <li key={item.id} className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-${item.id}`}>
                    <a href="#" className="elementor-item elementor-item-anchor" tabIndex={-1}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer data-elementor-type="footer" data-elementor-id="478"
            className="elementor elementor-478 elementor-location-footer"
            data-elementor-post-type="elementor_library">

      {/* Section 1 — newsletter + social icons */}
      <section className="elementor-section elementor-top-section elementor-element elementor-element-ed8cdd9 elementor-section-boxed elementor-section-height-default"
               data-id="ed8cdd9" data-element_type="section" data-e-type="section"
               data-settings='{"mdp_selection_sticky_effect_enable":false}'>
        <div className="elementor-container elementor-column-gap-no">

          <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-1ac23b5"
               data-id="1ac23b5" data-element_type="column" data-e-type="column"
               data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
            <div className="elementor-widget-wrap elementor-element-populated">

              <div className="elementor-element elementor-element-0e32c0f elementor-widget__width-auto elementor-widget-mobile__width-inherit elementor-hidden-desktop elementor-hidden-tablet elementor-widget elementor-widget-theme-site-logo elementor-widget-image"
                   data-id="0e32c0f" data-element_type="widget" data-e-type="widget" data-widget_type="theme-site-logo.default">
                <div className="elementor-widget-container">
                  <a href="/"><img width="133" height="38" src="/images/cropped-logo.png" className="attachment-full size-full wp-image-4737" alt="" /></a>
                </div>
              </div>

              <div className="elementor-element elementor-element-ba43388 elementor-hidden-desktop elementor-hidden-tablet elementor-widget elementor-widget-text-editor"
                   data-id="ba43388" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat.
                </div>
              </div>

              <div className="elementor-element elementor-element-6472565 elementor-widget elementor-widget-heading"
                   data-id="6472565" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h4 className="elementor-heading-title elementor-size-default">Stay in the loop</h4>
                </div>
              </div>

              <div className="elementor-element elementor-element-5b1f80c elementor-button-align-start elementor-mobile-button-align-stretch elementor-widget elementor-widget-form"
                   data-id="5b1f80c" data-element_type="widget" data-e-type="widget"
                   data-settings='{"button_width":"25","step_type":"number_text","step_icon_shape":"circle"}'
                   data-widget_type="form.default">
                <div className="elementor-widget-container">
                  <form className="elementor-form" method="post" name="New Form" aria-label="New Form">
                    <input type="hidden" name="post_id" value="478" readOnly />
                    <input type="hidden" name="form_id" value="5b1f80c" readOnly />
                    <input type="hidden" name="referer_title" value="Top 10 NFT projects that shocked the Internet with their uniqueness" readOnly />
                    <input type="hidden" name="queried_id" value="70" readOnly />
                    <div className="elementor-form-fields-wrapper elementor-labels-">
                      <div className="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-email elementor-col-75 elementor-md-100 elementor-field-required">
                        <label htmlFor="form-field-email" className="elementor-field-label elementor-screen-only">Email</label>
                        <input size={1} type="email" name="form_fields[email]" id="form-field-email"
                               className="elementor-field elementor-size-sm elementor-field-textual"
                               placeholder="Email here..." required />
                      </div>
                      <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-25 e-form__buttons">
                        <button className="elementor-button elementor-size-sm elementor-animation-push" type="submit">
                          <span className="elementor-button-content-wrapper">
                            <span className="elementor-button-text">Subscribe</span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

            </div>
          </div>

          <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-4b33557"
               data-id="4b33557" data-element_type="column" data-e-type="column"
               data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
            <div className="elementor-widget-wrap elementor-element-populated">

              <div className="elementor-element elementor-element-6c06eec elementor-widget elementor-widget-heading"
                   data-id="6c06eec" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h4 className="elementor-heading-title elementor-size-default">Join the community</h4>
                </div>
              </div>

              <div className="elementor-element elementor-element-851abec e-grid-align-left elementor-grid-tablet-0 elementor-shape-rounded elementor-grid-0 elementor-widget elementor-widget-social-icons"
                   data-id="851abec" data-element_type="widget" data-e-type="widget" data-widget_type="social-icons.default">
                <div className="elementor-widget-container">
                  <div className="elementor-social-icons-wrapper elementor-grid" role="list">
                    {SOCIAL_ICONS.map(({ repeater, name, icon }) => (
                      <span key={repeater} className="elementor-grid-item" role="listitem">
                        <a className={`elementor-icon elementor-social-icon elementor-social-icon-${name.toLowerCase()} elementor-repeater-item-${repeater}`}
                           target="_blank" rel="noreferrer">
                          <span className="elementor-screen-only">{name}</span>
                          <i aria-hidden="true" className={icon}></i>
                        </a>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Section 2 — logo desktop + nav menus */}
      <section className="elementor-section elementor-top-section elementor-element elementor-element-957b0b5 elementor-section-boxed elementor-section-height-default"
               data-id="957b0b5" data-element_type="section" data-e-type="section"
               data-settings='{"mdp_selection_sticky_effect_enable":false}'>
        <div className="elementor-container elementor-column-gap-no">

          <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-b9d4667 elementor-hidden-mobile"
               data-id="b9d4667" data-element_type="column" data-e-type="column"
               data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
            <div className="elementor-widget-wrap elementor-element-populated">

              <div className="elementor-element elementor-element-cbd1282 elementor-widget__width-auto elementor-widget elementor-widget-theme-site-logo elementor-widget-image"
                   data-id="cbd1282" data-element_type="widget" data-e-type="widget" data-widget_type="theme-site-logo.default">
                <div className="elementor-widget-container">
                  <a href="/"><img width="133" height="38" src="/images/cropped-logo.png" className="attachment-full size-full wp-image-4737" alt="" loading="lazy" /></a>
                </div>
              </div>

              <div className="elementor-element elementor-element-6845233 elementor-widget elementor-widget-text-editor"
                   data-id="6845233" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat.
                </div>
              </div>

            </div>
          </div>

          <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-3891228"
               data-id="3891228" data-element_type="column" data-e-type="column"
               data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
            <div className="elementor-widget-wrap elementor-element-populated">

              <section className="elementor-section elementor-inner-section elementor-element elementor-element-dc371ad elementor-section-boxed elementor-section-height-default"
                       data-id="dc371ad" data-element_type="section" data-e-type="section"
                       data-settings='{"mdp_selection_sticky_effect_enable":false}'>
                <div className="elementor-container elementor-column-gap-no">
                  {NAV_MENUS.map((menu, i) => (
                    <FooterNavMenu key={menu.widgetId} menu={menu} colId={INNER_COL_IDS[i]} />
                  ))}
                </div>
              </section>

            </div>
          </div>

        </div>
      </section>

      {/* Section 3 — copyright + legal links */}
      <section className="elementor-section elementor-top-section elementor-element elementor-element-7890a5e elementor-section-content-middle elementor-section-boxed elementor-section-height-default"
               data-id="7890a5e" data-element_type="section" data-e-type="section"
               data-settings='{"mdp_selection_sticky_effect_enable":false}'>
        <div className="elementor-container elementor-column-gap-no">

          <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-ad59622"
               data-id="ad59622" data-element_type="column" data-e-type="column"
               data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-468a146 elementor-widget elementor-widget-heading"
                   data-id="468a146" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <div className="elementor-heading-title elementor-size-default">Merkulove © 2022 Xchain template. All rights reserved.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-14c5633"
               data-id="14c5633" data-element_type="column" data-e-type="column"
               data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-9643ef5 elementor-widget elementor-widget-heading"
                   data-id="9643ef5" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <div className="elementor-heading-title elementor-size-default">Privacy policy  |  Terms of service</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </footer>
  );
}
