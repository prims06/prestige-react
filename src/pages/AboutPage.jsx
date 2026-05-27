const FEATURES = [
  { colId: 'bd72cff', widgetId: 'c7e554d', img: '/images/about/shield-check.png',  wpImg: 784, line1: 'High security',    line2: 'assets transfer' },
  { colId: '6e70562', widgetId: '813dbe5', img: '/images/about/support.png',        wpImg: 785, line1: '24/7 live support', line2: 'with skype & email' },
  { colId: '36b50fb', widgetId: '28d3393', img: '/images/about/trophy-star.png',    wpImg: 786, line1: 'Top class & NFT',   line2: 'products' },
  { colId: '767830d', widgetId: 'e8f8136', img: '/images/about/rocket-launch.png',  wpImg: 783, line1: 'Regular training',  line2: '& seller courses' },
];

const TEAM = [
  {
    outerColId: '4ef03f5', innerSectionId: '0d3ac4a',
    imgColId: '8aa2f5d', imgWidgetId: '2a96086',
    infoColId: 'f65d04e', nameWidgetId: '6dd0831', roleWidgetId: 'f4efeea', textWidgetId: 'f52020b', socialWidgetId: '3b0bb5c',
    img: '/images/about/aldi-sigun-rTCDPl3C_os-unsplash-1-pqla1easv8lq1avf2dwfzep3lhc712awi6ucys1jd0.jpg',
    name: 'Robert Atkins', role: 'Developer',
    bio: 'Mattis molestie a iaculis at erat. Ultricies leo integer malesuada nunc vel risus commodo. Nisi est sit amet facilisis.',
  },
  {
    outerColId: 'c25809d', innerSectionId: '86c5776',
    imgColId: '53f0082', imgWidgetId: '9d490a9',
    infoColId: 'ed417e4', nameWidgetId: '82235de', roleWidgetId: 'aba3798', textWidgetId: '4dc182c', socialWidgetId: '67cd3f0',
    img: '/images/about/aldi-sigun-pmACe385Ruo-unsplash-pqla3buuwz8xwg2ds7yu3x57jztcunz1fr4ah96ekk.jpg',
    name: 'Amanda Murphy', role: 'Developer',
    bio: 'Ligula ullamcorper malesuada proin libero nunc. Scelerisque felis imperdiet proin fermentum. Praesent elementum facilisis leo vel fringilla.',
  },
  {
    outerColId: '1d5538e', innerSectionId: '5ec5efa',
    imgColId: '81e4638', imgWidgetId: '2ec8dbe',
    infoColId: '0503275', nameWidgetId: 'ff7829a', roleWidgetId: '5ec1c14', textWidgetId: 'e97bf89', socialWidgetId: 'd4c5e0c',
    img: '/images/about/aldi-sigun-unt3066GV-E-unsplash-1-pqla26hyk9obplqghq3927kxf1h7fzeum2exd2vq6c.jpg',
    name: 'Kirk Miller', role: 'CEO & 3D Designer',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    outerColId: 'e78cd7b', innerSectionId: '3a021c1',
    imgColId: 'b5239ed', imgWidgetId: 'b04fa07',
    infoColId: 'f64d1be', nameWidgetId: '4bcd901', roleWidgetId: '7525039', textWidgetId: '0da80a6', socialWidgetId: '5d1d884',
    img: '/images/about/aldi-sigun-K-sdQ12jZeY-unsplash-1-pqla1sedpr50vgaxs1zuit50i9ep8iuvk4mn5xgmro.jpg',
    name: 'Thomas Rodriguez', role: 'Developer',
    bio: 'Purus sit amet volutpat consequat mauris nunc congue nisi vitae. Vel eros donec ac odio tempor orci dapibus ultrices.',
  },
];

const TEAM_SOCIAL = [
  { repeater: '05be2cd', name: 'Twitter',    icon: 'fab fa-twitter' },
  { repeater: '5498b4f', name: 'Facebook-f', icon: 'fab fa-facebook-f' },
  { repeater: '418ce82', name: 'Instagram',  icon: 'fab fa-instagram' },
];

const COUNTER_ROWS = [
  {
    sectionId: '93b90d4',
    items: [
      { colId: 'ab6bfb9', counterWidgetId: 'f20b8b1', headingWidgetId: '80ce7d2', toValue: '250', suffix: 'K', label: "All NFT's" },
      { colId: 'fc0e0f2', counterWidgetId: 'da8fa2f', headingWidgetId: '05884e4', toValue: '3.5', suffix: 'K', label: 'All creators' },
    ],
  },
  {
    sectionId: '3c7461c',
    items: [
      { colId: 'c9febc1', counterWidgetId: 'c282066', headingWidgetId: 'a741b95', toValue: '56',  suffix: 'K', label: 'Сollections' },
      { colId: '34ed22a', counterWidgetId: '7a1b17d', headingWidgetId: 'f9201f6', toValue: '490', suffix: '',  label: 'Level one seller' },
    ],
  },
];

function TeamMember({ m }) {
  return (
    <div className={`elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-${m.outerColId} elementor-invisible`}
         data-id={m.outerColId} data-element_type="column" data-e-type="column"
         data-settings='{"animation":"fadeInUp","mdp_selection_sticky_column_effect_enable":false}'>
      <div className="elementor-widget-wrap elementor-element-populated">
        <section className={`elementor-section elementor-inner-section elementor-element elementor-element-${m.innerSectionId} elementor-section-boxed elementor-section-height-default`}
                 data-id={m.innerSectionId} data-element_type="section" data-e-type="section"
                 data-settings='{"mdp_selection_sticky_effect_enable":false}'>
          <div className="elementor-container elementor-column-gap-no">

            <div className={`elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-${m.imgColId}`}
                 data-id={m.imgColId} data-element_type="column" data-e-type="column"
                 data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className={`elementor-element elementor-element-${m.imgWidgetId} elementor-widget__width-auto elementor-widget elementor-widget-image`}
                     data-id={m.imgWidgetId} data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                  <div className="elementor-widget-container">
                    <img decoding="async" src={m.img} title={m.name} alt={m.name}
                         className="elementor-animation-shrink" loading="lazy" />
                  </div>
                </div>
              </div>
            </div>

            <div className={`elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-${m.infoColId}`}
                 data-id={m.infoColId} data-element_type="column" data-e-type="column"
                 data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
              <div className="elementor-widget-wrap elementor-element-populated">

                <div className={`elementor-element elementor-element-${m.nameWidgetId} elementor-widget elementor-widget-heading`}
                     data-id={m.nameWidgetId} data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h3 className="elementor-heading-title elementor-size-default">{m.name}</h3>
                  </div>
                </div>

                <div className={`elementor-element elementor-element-${m.roleWidgetId} elementor-widget elementor-widget-heading`}
                     data-id={m.roleWidgetId} data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h3 className="elementor-heading-title elementor-size-default">{m.role}</h3>
                  </div>
                </div>

                <div className={`elementor-element elementor-element-${m.textWidgetId} elementor-widget elementor-widget-text-editor`}
                     data-id={m.textWidgetId} data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">{m.bio}</div>
                </div>

                <div className={`elementor-element elementor-element-${m.socialWidgetId} elementor-grid-3 e-grid-align-left e-grid-align-mobile-center elementor-shape-rounded elementor-widget elementor-widget-social-icons`}
                     data-id={m.socialWidgetId} data-element_type="widget" data-e-type="widget" data-widget_type="social-icons.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-social-icons-wrapper elementor-grid" role="list">
                      {TEAM_SOCIAL.map(s => (
                        <span key={s.repeater} className="elementor-grid-item" role="listitem">
                          <a className={`elementor-icon elementor-social-icon elementor-social-icon-${s.name.toLowerCase()} elementor-repeater-item-${s.repeater}`} target="_blank" rel="noreferrer">
                            <span className="elementor-screen-only">{s.name}</span>
                            <i aria-hidden="true" className={s.icon}></i>
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
      </div>
    </div>
  );
}

function CounterRow({ row }) {
  return (
    <section className={`elementor-section elementor-top-section elementor-element elementor-element-${row.sectionId} elementor-section-boxed elementor-section-height-default elementor-invisible`}
             data-id={row.sectionId} data-element_type="section" data-e-type="section"
             data-settings='{"animation":"fadeInUp","mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">
        {row.items.map(item => (
          <div key={item.colId}
               className={`elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-${item.colId}`}
               data-id={item.colId} data-element_type="column" data-e-type="column"
               data-settings='{"background_background":"classic","mdp_selection_sticky_column_effect_enable":false}'>
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className={`elementor-element elementor-element-${item.counterWidgetId} elementor-widget elementor-widget-counter`}
                   data-id={item.counterWidgetId} data-element_type="widget" data-e-type="widget" data-widget_type="counter.default">
                <div className="elementor-widget-container">
                  <div className="elementor-counter">
                    <div className="elementor-counter-number-wrapper">
                      <span className="elementor-counter-number-prefix"></span>
                      <span className="elementor-counter-number" data-duration="2000" data-to-value={item.toValue} data-from-value="0" data-delimiter=",">0</span>
                      <span className="elementor-counter-number-suffix">{item.suffix}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`elementor-element elementor-element-${item.headingWidgetId} elementor-widget elementor-widget-heading`}
                   data-id={item.headingWidgetId} data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">{item.label}</h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main id="content" className="site-main post-417 envato_tk_templates type-envato_tk_templates status-publish has-post-thumbnail hentry">
      <div className="page-content">
        <div data-elementor-type="wp-post" data-elementor-id="417" className="elementor elementor-417" data-elementor-post-type="envato_tk_templates">

          {/* S1 — Hero banner : titre + breadcrumb */}
          <section className="elementor-section elementor-top-section elementor-element elementor-element-282f482 elementor-section-full_width elementor-section-content-middle elementor-section-height-default"
                   data-id="282f482" data-element_type="section" data-e-type="section"
                   data-settings='{"mdp_selection_sticky_effect_enable":false}'>
            <div className="elementor-background-overlay"></div>
            <div className="elementor-container elementor-column-gap-no">

              <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-5a41120 elementor-hidden-tablet elementor-hidden-mobile"
                   data-id="5a41120" data-element_type="column" data-e-type="column"
                   data-settings='{"background_background":"classic","mdp_selection_sticky_column_effect_enable":false}'>
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-7f80401 elementor-widget elementor-widget-spacer"
                       data-id="7f80401" data-element_type="widget" data-e-type="widget" data-widget_type="spacer.default">
                    <div className="elementor-widget-container">
                      <div className="elementor-spacer"><div className="elementor-spacer-inner"></div></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-015b364"
                   data-id="015b364" data-element_type="column" data-e-type="column"
                   data-settings='{"background_background":"classic","mdp_selection_sticky_column_effect_enable":false}'>
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-bdb1f58 elementor-widget elementor-widget-heading"
                       data-id="bdb1f58" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">About Us</h2>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-99470c4 elementor-widget elementor-widget-mdp-crumber-elementor"
                       data-id="99470c4" data-element_type="widget" data-e-type="widget" data-widget_type="mdp-crumber-elementor.default">
                    <div className="elementor-widget-container">
                      <div className="mdp-crumber-elementor-box">
                        <div className="mdp-crumber-elementor-breadcrumbs">
                          <div className="mdp-crumber-elementor-breadcrumbs-item mdp-crumber-elementor-breadcrumbs-icon-position-"><span>Home</span></div>
                          <span className="mdp-crumber-elementor-separator mdp-crumber-elementor-separator-hide-last"> • </span>
                          <div className="mdp-crumber-elementor-breadcrumbs-item mdp-crumber-elementor-breadcrumbs-item-active mdp-crumber-elementor-breadcrumbs-icon-position-"><span>About</span></div>
                          <span className="mdp-crumber-elementor-separator mdp-crumber-elementor-separator-hide-last"> • </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-8ef7835 elementor-hidden-tablet elementor-hidden-mobile"
                   data-id="8ef7835" data-element_type="column" data-e-type="column"
                   data-settings='{"background_background":"classic","mdp_selection_sticky_column_effect_enable":false}'>
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-4977f4b elementor-widget elementor-widget-spacer"
                       data-id="4977f4b" data-element_type="widget" data-e-type="widget" data-widget_type="spacer.default">
                    <div className="elementor-widget-container">
                      <div className="elementor-spacer"><div className="elementor-spacer-inner"></div></div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* S2 — Image principale + "Who we are?" */}
          <section className="elementor-section elementor-top-section elementor-element elementor-element-0bc2c7d elementor-section-content-bottom elementor-section-boxed elementor-section-height-default"
                   data-id="0bc2c7d" data-element_type="section" data-e-type="section"
                   data-settings='{"mdp_selection_sticky_effect_enable":false}'>
            <div className="elementor-container elementor-column-gap-no">

              {/* Col gauche — image portrait + éléments flottants */}
              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-4284c6e"
                   data-id="4284c6e" data-element_type="column" data-e-type="column"
                   data-settings='{"background_background":"classic","mdp_selection_sticky_column_effect_enable":false}'>
                <div className="elementor-widget-wrap elementor-element-populated">

                  {/* Image principale — fetchPriority high (première image de la page) */}
                  <div className="elementor-element elementor-element-62d6990 elementor-widget elementor-widget-image"
                       data-id="62d6990" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                    <div className="elementor-widget-container">
                      <img fetchPriority="high" decoding="async" width="800" height="800"
                           src="/images/about/ferhat-deniz-fors-e1qoosfnAvA-unsplash-1024x1024.jpg"
                           className="attachment-large size-large wp-image-4225" alt=""
                           sizes="(max-width: 800px) 100vw, 800px" />
                    </div>
                  </div>

                  {/* Élément flottant 1 — caché mobile + tablet */}
                  <div className="elementor-element elementor-element-ec7af39 elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-initial elementor-absolute elementor-hidden-mobile elementor-hidden-tablet elementor-widget elementor-widget-image elementor-motion-effects-parent"
                       data-id="ec7af39" data-element_type="widget" data-e-type="widget"
                       data-settings='{"_position":"absolute","motion_fx_motion_fx_mouse":"yes","motion_fx_mouseTrack_effect":"yes","motion_fx_mouseTrack_direction":"negative","motion_fx_mouseTrack_speed":{"unit":"px","size":0.2,"sizes":[]}}'
                       data-widget_type="image.default">
                    <div className="elementor-widget-container elementor-motion-effects-element">
                      <img loading="lazy" decoding="async" width="400" height="274"
                           src="/images/about/element-2-e1655113849501.png"
                           className="attachment-full size-full wp-image-5507" alt=""
                           sizes="(max-width: 400px) 100vw, 400px" />
                    </div>
                  </div>

                  {/* Élément flottant 2 */}
                  <div className="elementor-element elementor-element-7515ccd elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-initial elementor-absolute elementor-hidden-mobile elementor-hidden-tablet elementor-widget elementor-widget-image elementor-motion-effects-parent"
                       data-id="7515ccd" data-element_type="widget" data-e-type="widget"
                       data-settings='{"_position":"absolute","motion_fx_motion_fx_mouse":"yes","motion_fx_mouseTrack_effect":"yes","motion_fx_mouseTrack_speed":{"unit":"px","size":0.2,"sizes":[]}}'
                       data-widget_type="image.default">
                    <div className="elementor-widget-container elementor-motion-effects-element">
                      <img loading="lazy" decoding="async" width="400" height="143"
                           src="/images/about/element-3-e1655113712872.png"
                           className="attachment-full size-full wp-image-5508" alt=""
                           sizes="(max-width: 400px) 100vw, 400px" />
                    </div>
                  </div>

                  {/* Élément flottant 3 */}
                  <div className="elementor-element elementor-element-3de6102 elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-initial elementor-absolute elementor-hidden-mobile elementor-hidden-tablet elementor-widget elementor-widget-image elementor-motion-effects-parent"
                       data-id="3de6102" data-element_type="widget" data-e-type="widget"
                       data-settings='{"_position":"absolute","motion_fx_motion_fx_mouse":"yes","motion_fx_mouseTrack_effect":"yes","motion_fx_mouseTrack_direction":"negative","motion_fx_mouseTrack_speed":{"unit":"px","size":0.2,"sizes":[]}}'
                       data-widget_type="image.default">
                    <div className="elementor-widget-container elementor-motion-effects-element">
                      <img loading="lazy" decoding="async" width="400" height="237"
                           src="/images/about/element-4-e1655113726369.png"
                           className="attachment-full size-full wp-image-5509" alt=""
                           sizes="(max-width: 400px) 100vw, 400px" />
                    </div>
                  </div>

                </div>
              </div>

              {/* Col droite — image scroll + texte "Who we are?" */}
              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-4b18f60"
                   data-id="4b18f60" data-element_type="column" data-e-type="column"
                   data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                <div className="elementor-widget-wrap elementor-element-populated">

                  {/* Image avec scroll animation — cachée tablet + mobile */}
                  <section className="elementor-section elementor-inner-section elementor-element elementor-element-37ac0c2 elementor-section-boxed elementor-section-height-default"
                           data-id="37ac0c2" data-element_type="section" data-e-type="section"
                           data-settings='{"mdp_selection_sticky_effect_enable":false}'>
                    <div className="elementor-container elementor-column-gap-no">
                      <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-50f4123 elementor-hidden-tablet elementor-hidden-mobile"
                           data-id="50f4123" data-element_type="column" data-e-type="column"
                           data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-2ceeed1 elementor-widget__width-auto elementor-widget elementor-widget-image elementor-motion-effects-parent"
                               data-id="2ceeed1" data-element_type="widget" data-e-type="widget"
                               data-settings='{"motion_fx_motion_fx_scrolling":"yes","motion_fx_translateY_effect":"yes","motion_fx_translateY_speed":{"unit":"px","size":1,"sizes":[]},"motion_fx_translateY_affectedRange":{"unit":"%","size":"","sizes":{"start":0,"end":100}},"motion_fx_devices":["desktop","tablet","mobile"]}'
                               data-widget_type="image.default">
                            <div className="elementor-widget-container elementor-motion-effects-element">
                              <img loading="lazy" decoding="async" width="300" height="217"
                                   src="/images/about/simon-lee-ldg40aCeOXo-unsplash-1-1-300x217.png"
                                   className="attachment-medium size-medium wp-image-678" alt=""
                                   sizes="(max-width: 300px) 100vw, 300px" />
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-9c438c2 elementor-widget elementor-widget-spacer"
                               data-id="9c438c2" data-element_type="widget" data-e-type="widget" data-widget_type="spacer.default">
                            <div className="elementor-widget-container">
                              <div className="elementor-spacer"><div className="elementor-spacer-inner"></div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Texte "Who we are?" */}
                  <section className="elementor-section elementor-inner-section elementor-element elementor-element-d9467e3 elementor-section-boxed elementor-section-height-default"
                           data-id="d9467e3" data-element_type="section" data-e-type="section"
                           data-settings='{"mdp_selection_sticky_effect_enable":false}'>
                    <div className="elementor-container elementor-column-gap-no">
                      <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-c5c0188"
                           data-id="c5c0188" data-element_type="column" data-e-type="column"
                           data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-145ef3a elementor-widget elementor-widget-heading"
                               data-id="145ef3a" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                              <h3 className="elementor-heading-title elementor-size-default">Who we are?</h3>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-a7dcbb6 elementor-widget elementor-widget-text-editor"
                               data-id="a7dcbb6" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                            <div className="elementor-widget-container">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                </div>
              </div>

            </div>
          </section>

          {/* S3 — Ticker "new creative economy" */}
          <section className="elementor-section elementor-top-section elementor-element elementor-element-98b7ab9 elementor-section-full_width elementor-section-height-default"
                   data-id="98b7ab9" data-element_type="section" data-e-type="section"
                   data-settings='{"background_background":"classic","mdp_selection_sticky_effect_enable":false}'>
            <div className="elementor-container elementor-column-gap-no">
              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-a1a74fe"
                   data-id="a1a74fe" data-element_type="column" data-e-type="column"
                   data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-43d708f elementor-widget elementor-widget-mdp-crawler-elementor"
                       data-id="43d708f" data-element_type="widget" data-e-type="widget" data-widget_type="mdp-crawler-elementor.default">
                    <div className="elementor-widget-container">
                      <div className="mdp-crawler-elementor-box mdp-crawler-elementor-box-0" data-ticker-type="ticker">
                        <div className="mdp-crawler-elementor-ticker mdp-crawler-elementor-ticker-ticker-type mdp-crawler-elementor-ticker-label-align-">
                          <div className="mdp-crawler-elementor-content-wrapper">
                            <div className="mdp-crawler-elementor-ticker-content mdp-crawler-elementor-ticker-animation-normal">
                              {[...Array(6)].map((_, i) => (
                                <div key={i} className="mdp-crawler-elementor-ticker-item">
                                  <a>new creative economy</a>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* S4 — Features (4 boxes) */}
          <section className="elementor-section elementor-top-section elementor-element elementor-element-1678d40 elementor-section-boxed elementor-section-height-default"
                   data-id="1678d40" data-element_type="section" data-e-type="section"
                   data-settings='{"mdp_selection_sticky_effect_enable":false}'>
            <div className="elementor-container elementor-column-gap-extended">
              {FEATURES.map(f => (
                <div key={f.colId}
                     className={`elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-${f.colId}`}
                     data-id={f.colId} data-element_type="column" data-e-type="column"
                     data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className={`elementor-element elementor-element-${f.widgetId} elementor-position-top elementor-widget elementor-widget-image-box`}
                         data-id={f.widgetId} data-element_type="widget" data-e-type="widget" data-widget_type="image-box.default">
                      <div className="elementor-widget-container">
                        <div className="elementor-image-box-wrapper">
                          <figure className="elementor-image-box-img">
                            <img loading="lazy" decoding="async" width="60" height="60"
                                 src={f.img}
                                 className={`elementor-animation-shrink attachment-full size-full wp-image-${f.wpImg}`}
                                 alt="" />
                          </figure>
                          <div className="elementor-image-box-content">
                            <h3 className="elementor-image-box-title">{f.line1}<br />{f.line2}</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* S5 — Bouton play vidéo */}
          <section className="elementor-section elementor-top-section elementor-element elementor-element-ec63f5b elementor-section-boxed elementor-section-height-default"
                   data-id="ec63f5b" data-element_type="section" data-e-type="section"
                   data-settings='{"mdp_selection_sticky_effect_enable":false}'>
            <div className="elementor-container elementor-column-gap-no">
              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-36a8e83"
                   data-id="36a8e83" data-element_type="column" data-e-type="column"
                   data-settings='{"background_background":"classic","mdp_selection_sticky_column_effect_enable":false}'>
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-ee93c07 elementor-widget elementor-widget-image animated zoomIn"
                       data-id="ee93c07" data-element_type="widget" data-e-type="widget"
                       data-settings='{"_animation":"zoomIn"}' data-widget_type="image.default">
                    <div className="elementor-widget-container">
                      <a href="/about#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJ0eXBlIjoidmlkZW8iLCJ2aWRlb1R5cGUiOiJ5b3V0dWJlIiwidXJsIjoiaHR0cHM6XC9cL3d3dy55b3V0dWJlLmNvbVwvZW1iZWRcL1hIT21CVjRqc19FP2ZlYXR1cmU9b2VtYmVkIn0%3D">
                        <img loading="lazy" decoding="async" width="110" height="110"
                             src="/images/about/play.png"
                             className="elementor-animation-push attachment-medium size-medium wp-image-816"
                             alt="" sizes="(max-width: 110px) 100vw, 110px" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* S6 — Notre mission */}
          <section className="elementor-section elementor-top-section elementor-element elementor-element-c9d4be4 elementor-section-boxed elementor-section-height-default"
                   data-id="c9d4be4" data-element_type="section" data-e-type="section"
                   data-settings='{"mdp_selection_sticky_effect_enable":false}'>
            <div className="elementor-container elementor-column-gap-no">

              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-8fed450 elementor-motion-effects-parent animated fadeInUp"
                   data-id="8fed450" data-element_type="column" data-e-type="column"
                   data-settings='{"background_background":"classic","motion_fx_motion_fx_scrolling":"yes","motion_fx_translateY_effect":"yes","motion_fx_translateY_speed":{"unit":"px","size":0.5,"sizes":[]},"animation":"fadeInUp","mdp_selection_sticky_column_effect_enable":false,"motion_fx_translateY_affectedRange":{"unit":"%","size":"","sizes":{"start":0,"end":100}},"motion_fx_devices":["desktop","tablet","mobile"]}'>
                <div className="elementor-widget-wrap elementor-element-populated elementor-motion-effects-element">
                  <div className="elementor-element elementor-element-935819f elementor-widget elementor-widget-heading"
                       data-id="935819f" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h3 className="elementor-heading-title elementor-size-default">Our mission</h3>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-6a793c4 elementor-widget elementor-widget-text-editor"
                       data-id="6a793c4" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                    <div className="elementor-widget-container">
                      Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-4a23d39 elementor-align-left elementor-mobile-align-justify elementor-widget elementor-widget-button animated fadeInUp"
                       data-id="4a23d39" data-element_type="widget" data-e-type="widget"
                       data-settings='{"_animation":"fadeInUp"}' data-widget_type="button.default">
                    <div className="elementor-widget-container">
                      <div className="elementor-button-wrapper">
                        <a className="elementor-button elementor-button-link elementor-size-sm elementor-animation-push" href="/about#">
                          <span className="elementor-button-content-wrapper">
                            <span className="elementor-button-text">See our blog</span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Col droite — image statistiques (cachée mobile) */}
              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-1dea0eb elementor-hidden-mobile"
                   data-id="1dea0eb" data-element_type="column" data-e-type="column"
                   data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-3ce0a85 elementor-widget__width-initial elementor-absolute elementor-widget-tablet__width-initial elementor-widget elementor-widget-image"
                       data-id="3ce0a85" data-element_type="widget" data-e-type="widget"
                       data-settings='{"_position":"absolute"}' data-widget_type="image.default">
                    <div className="elementor-widget-container">
                      <img loading="lazy" decoding="async" width="1735" height="1010"
                           src="/images/about/element_statistic-e1652868023640.png"
                           className="attachment-full size-full wp-image-841" alt=""
                           sizes="(max-width: 1735px) 100vw, 1735px" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* S7 — Élément décoratif (caché mobile) */}
          <section className="elementor-section elementor-top-section elementor-element elementor-element-81b06ae elementor-section-full_width elementor-hidden-mobile elementor-section-height-default"
                   data-id="81b06ae" data-element_type="section" data-e-type="section"
                   data-settings='{"mdp_selection_sticky_effect_enable":false}'>
            <div className="elementor-container elementor-column-gap-no">
              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6e44363"
                   data-id="6e44363" data-element_type="column" data-e-type="column"
                   data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-bf32bc8 elementor-widget-tablet__width-initial elementor-hidden-mobile elementor-widget__width-initial elementor-absolute elementor-invisible elementor-widget elementor-widget-image elementor-motion-effects-parent"
                       data-id="bf32bc8" data-element_type="widget" data-e-type="widget"
                       data-settings='{"motion_fx_motion_fx_scrolling":"yes","motion_fx_translateY_effect":"yes","motion_fx_translateY_direction":"negative","motion_fx_translateY_speed":{"unit":"px","size":0.5,"sizes":[]},"_animation":"rotateIn","motion_fx_devices":["desktop"],"_position":"absolute","motion_fx_translateY_affectedRange":{"unit":"%","size":"","sizes":{"start":0,"end":100}}}'
                       data-widget_type="image.default">
                    <div className="elementor-widget-container elementor-motion-effects-element">
                      <img loading="lazy" decoding="async" width="450" height="444"
                           src="/images/about/element_about-e1654591202723.png"
                           className="attachment-medium_large size-medium_large wp-image-3644" alt=""
                           sizes="(max-width: 450px) 100vw, 450px" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* S8 — Titre statistiques */}
          <section className="elementor-section elementor-top-section elementor-element elementor-element-f83135b elementor-section-boxed elementor-section-height-default"
                   data-id="f83135b" data-element_type="section" data-e-type="section"
                   data-settings='{"mdp_selection_sticky_effect_enable":false}'>
            <div className="elementor-container elementor-column-gap-no">
              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-154585d"
                   data-id="154585d" data-element_type="column" data-e-type="column"
                   data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-2eca955 elementor-widget elementor-widget-heading"
                       data-id="2eca955" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h3 className="elementor-heading-title elementor-size-default">Xchain statistics</h3>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-02e83be elementor-widget elementor-widget-text-editor"
                       data-id="02e83be" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                    <div className="elementor-widget-container">
                      Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* S9+S10 — Compteurs (2 lignes) */}
          {COUNTER_ROWS.map(row => (
            <CounterRow key={row.sectionId} row={row} />
          ))}

          {/* S11 — En-tête section équipe */}
          <section className="elementor-section elementor-top-section elementor-element elementor-element-741d7ac elementor-section-content-middle elementor-section-boxed elementor-section-height-default"
                   data-id="741d7ac" data-element_type="section" data-e-type="section"
                   data-settings='{"mdp_selection_sticky_effect_enable":false}'>
            <div className="elementor-container elementor-column-gap-no">
              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-61bab0c"
                   data-id="61bab0c" data-element_type="column" data-e-type="column"
                   data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-cf59615 elementor-widget elementor-widget-heading"
                       data-id="cf59615" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h3 className="elementor-heading-title elementor-size-default">Meet the team⚡</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-5ed38ac elementor-hidden-mobile"
                   data-id="5ed38ac" data-element_type="column" data-e-type="column"
                   data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-f19e466 elementor-align-right elementor-widget elementor-widget-button"
                       data-id="f19e466" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
                    <div className="elementor-widget-container">
                      <div className="elementor-button-wrapper">
                        <a className="elementor-button elementor-button-link elementor-size-sm elementor-animation-push" href="/about#">
                          <span className="elementor-button-content-wrapper">
                            <span className="elementor-button-text">View all team</span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* S12 — Équipe ligne 1 (Robert + Amanda) */}
          <section className="elementor-section elementor-top-section elementor-element elementor-element-f7a18ee elementor-section-boxed elementor-section-height-default"
                   data-id="f7a18ee" data-element_type="section" data-e-type="section"
                   data-settings='{"mdp_selection_sticky_effect_enable":false}'>
            <div className="elementor-container elementor-column-gap-no">
              {TEAM.slice(0, 2).map(m => <TeamMember key={m.outerColId} m={m} />)}
            </div>
          </section>

          {/* S13 — Équipe ligne 2 (Kirk + Thomas) */}
          <section className="elementor-section elementor-top-section elementor-element elementor-element-9043142 elementor-section-boxed elementor-section-height-default"
                   data-id="9043142" data-element_type="section" data-e-type="section"
                   data-settings='{"mdp_selection_sticky_effect_enable":false}'>
            <div className="elementor-container elementor-column-gap-no">
              {TEAM.slice(2, 4).map(m => <TeamMember key={m.outerColId} m={m} />)}
            </div>
          </section>

          {/* S14 — Bouton "View all team" mobile seulement */}
          <section className="elementor-section elementor-top-section elementor-element elementor-element-0619496 elementor-section-content-middle elementor-hidden-desktop elementor-hidden-tablet elementor-section-boxed elementor-section-height-default"
                   data-id="0619496" data-element_type="section" data-e-type="section"
                   data-settings='{"mdp_selection_sticky_effect_enable":false}'>
            <div className="elementor-container elementor-column-gap-no">
              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-819fb1c"
                   data-id="819fb1c" data-element_type="column" data-e-type="column"
                   data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-16c8a35 elementor-align-right elementor-mobile-align-justify elementor-widget elementor-widget-button"
                       data-id="16c8a35" data-element_type="widget" data-e-type="widget"
                       data-settings='{"_animation_mobile":"fadeInUp"}' data-widget_type="button.default">
                    <div className="elementor-widget-container">
                      <div className="elementor-button-wrapper">
                        <a className="elementor-button elementor-button-link elementor-size-sm elementor-animation-push" href="/about#">
                          <span className="elementor-button-content-wrapper">
                            <span className="elementor-button-text">View all team</span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* S15 — CTA desktop (caché tablet + mobile) */}
          <section className="elementor-section elementor-top-section elementor-element elementor-element-0b16851 elementor-section-content-middle elementor-hidden-tablet elementor-hidden-mobile elementor-section-boxed elementor-section-height-default"
                   data-id="0b16851" data-element_type="section" data-e-type="section"
                   data-settings='{"background_background":"classic","mdp_selection_sticky_effect_enable":false}'>
            <div className="elementor-container elementor-column-gap-no">

              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-e66aacd"
                   data-id="e66aacd" data-element_type="column" data-e-type="column"
                   data-settings='{"background_background":"classic","mdp_selection_sticky_column_effect_enable":false}'>
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-11ea93f elementor-widget elementor-widget-heading"
                       data-id="11ea93f" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h3 className="elementor-heading-title elementor-size-default">🔥🔥🔥<br />Create, sell and collect<br />NFT digital assests</h3>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-afcdd2b elementor-widget elementor-widget-text-editor"
                       data-id="afcdd2b" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                    <div className="elementor-widget-container">
                      Buy and sell over 100 cryptocurrencies in the marketplace over 20 fixed currencies using bank transfers or credit/debit cards.
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-e05fe2b elementor-align-left elementor-tablet-align-center elementor-mobile-align-justify elementor-invisible elementor-widget elementor-widget-button"
                       data-id="e05fe2b" data-element_type="widget" data-e-type="widget"
                       data-settings='{"_animation":"fadeInUp"}' data-widget_type="button.default">
                    <div className="elementor-widget-container">
                      <div className="elementor-button-wrapper">
                        <a className="elementor-button elementor-button-link elementor-size-sm elementor-animation-push" href="/about#">
                          <span className="elementor-button-content-wrapper">
                            <span className="elementor-button-text">Create NFT</span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-78ebfe6"
                   data-id="78ebfe6" data-element_type="column" data-e-type="column"
                   data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                <div className="elementor-widget-wrap elementor-element-populated">
                  <section className="elementor-section elementor-inner-section elementor-element elementor-element-581fdf8 elementor-section-content-middle elementor-section-boxed elementor-section-height-default"
                           data-id="581fdf8" data-element_type="section" data-e-type="section"
                           data-settings='{"mdp_selection_sticky_effect_enable":false}'>
                    <div className="elementor-container elementor-column-gap-no">
                      <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-2c228c1"
                           data-id="2c228c1" data-element_type="column" data-e-type="column"
                           data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-9d6c29d elementor-invisible elementor-widget elementor-widget-image"
                               data-id="9d6c29d" data-element_type="widget" data-e-type="widget"
                               data-settings='{"_animation":"fadeInDown"}' data-widget_type="image.default">
                            <div className="elementor-widget-container">
                              <img loading="lazy" decoding="async" width="156" height="156"
                                   src="/images/about/img-1.png"
                                   className="attachment-medium size-medium wp-image-919" alt=""
                                   sizes="(max-width: 156px) 100vw, 156px" />
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-0e42577 elementor-widget__width-auto elementor-widget-mobile__width-inherit elementor-invisible elementor-widget elementor-widget-image"
                               data-id="0e42577" data-element_type="widget" data-e-type="widget"
                               data-settings='{"_animation":"fadeInLeft"}' data-widget_type="image.default">
                            <div className="elementor-widget-container">
                              <img loading="lazy" decoding="async" width="230" height="280"
                                   src="/images/about/img-4.png"
                                   className="attachment-medium_large size-medium_large wp-image-922" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-4ba799b"
                           data-id="4ba799b" data-element_type="column" data-e-type="column"
                           data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-75c9506 elementor-widget__width-auto elementor-invisible elementor-widget elementor-widget-image"
                               data-id="75c9506" data-element_type="widget" data-e-type="widget"
                               data-settings='{"_animation":"fadeInRight"}' data-widget_type="image.default">
                            <div className="elementor-widget-container">
                              <img loading="lazy" decoding="async" width="460" height="560"
                                   src="/images/about/img@2x.jpg"
                                   className="attachment-medium_large size-medium_large wp-image-5067" alt=""
                                   sizes="(max-width: 460px) 100vw, 460px" />
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-4c94d0e elementor-invisible elementor-widget elementor-widget-image"
                               data-id="4c94d0e" data-element_type="widget" data-e-type="widget"
                               data-settings='{"_animation":"fadeInUp"}' data-widget_type="image.default">
                            <div className="elementor-widget-container">
                              <img loading="lazy" decoding="async" width="390" height="156"
                                   src="/images/about/img-3.png"
                                   className="attachment-full size-full wp-image-921" alt=""
                                   sizes="(max-width: 390px) 100vw, 390px" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>

            </div>
          </section>

          {/* S16 — CTA mobile/tablet (caché desktop) */}
          <section className="elementor-section elementor-top-section elementor-element elementor-element-cec11fe elementor-section-content-middle elementor-hidden-desktop elementor-section-boxed elementor-section-height-default"
                   data-id="cec11fe" data-element_type="section" data-e-type="section"
                   data-settings='{"mdp_selection_sticky_effect_enable":false}'>
            <div className="elementor-container elementor-column-gap-no">

              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-0207e49"
                   data-id="0207e49" data-element_type="column" data-e-type="column"
                   data-settings='{"background_background":"gradient","mdp_selection_sticky_column_effect_enable":false}'>
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-7b93936 elementor-widget elementor-widget-heading"
                       data-id="7b93936" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h3 className="elementor-heading-title elementor-size-default">🔥🔥🔥<br />Create, sell and collect<br />NFT digital assests</h3>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-6368ee3 elementor-widget elementor-widget-text-editor"
                       data-id="6368ee3" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                    <div className="elementor-widget-container">
                      Buy and sell over 100 cryptocurrencies in the marketplace over 20 fixed currencies using bank transfers or credit/debit cards.
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-15dec81 elementor-align-left elementor-tablet-align-center elementor-mobile-align-justify elementor-invisible elementor-widget elementor-widget-button"
                       data-id="15dec81" data-element_type="widget" data-e-type="widget"
                       data-settings='{"_animation":"fadeInUp"}' data-widget_type="button.default">
                    <div className="elementor-widget-container">
                      <div className="elementor-button-wrapper">
                        <a className="elementor-button elementor-button-link elementor-size-sm elementor-animation-push" href="/about#">
                          <span className="elementor-button-content-wrapper">
                            <span className="elementor-button-text">Create NFT</span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-6e35843"
                   data-id="6e35843" data-element_type="column" data-e-type="column"
                   data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                <div className="elementor-widget-wrap elementor-element-populated">
                  <section className="elementor-section elementor-inner-section elementor-element elementor-element-4724d07 elementor-section-content-middle elementor-hidden-mobile elementor-section-boxed elementor-section-height-default"
                           data-id="4724d07" data-element_type="section" data-e-type="section"
                           data-settings='{"background_background":"gradient","mdp_selection_sticky_effect_enable":false}'>
                    <div className="elementor-container elementor-column-gap-no">
                      <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-0640d65"
                           data-id="0640d65" data-element_type="column" data-e-type="column"
                           data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-60e9ee4 elementor-invisible elementor-widget elementor-widget-image"
                               data-id="60e9ee4" data-element_type="widget" data-e-type="widget"
                               data-settings='{"_animation":"fadeInDown"}' data-widget_type="image.default">
                            <div className="elementor-widget-container">
                              <img loading="lazy" decoding="async" width="156" height="156"
                                   src="/images/about/img-1.png"
                                   className="attachment-medium size-medium wp-image-919" alt=""
                                   sizes="(max-width: 156px) 100vw, 156px" />
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-268dbc8 elementor-widget__width-auto elementor-widget-mobile__width-inherit elementor-invisible elementor-widget elementor-widget-image"
                               data-id="268dbc8" data-element_type="widget" data-e-type="widget"
                               data-settings='{"_animation":"fadeInLeft"}' data-widget_type="image.default">
                            <div className="elementor-widget-container">
                              <img loading="lazy" decoding="async" width="230" height="280"
                                   src="/images/about/img-4.png"
                                   className="attachment-medium_large size-medium_large wp-image-922" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-e85c875"
                           data-id="e85c875" data-element_type="column" data-e-type="column"
                           data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-96916eb elementor-widget__width-auto elementor-invisible elementor-widget elementor-widget-image"
                               data-id="96916eb" data-element_type="widget" data-e-type="widget"
                               data-settings='{"_animation":"fadeInRight"}' data-widget_type="image.default">
                            <div className="elementor-widget-container">
                              <img loading="lazy" decoding="async" width="460" height="560"
                                   src="/images/about/img@2x.jpg"
                                   className="attachment-medium_large size-medium_large wp-image-5067" alt=""
                                   sizes="(max-width: 460px) 100vw, 460px" />
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-7896940 elementor-invisible elementor-widget elementor-widget-image"
                               data-id="7896940" data-element_type="widget" data-e-type="widget"
                               data-settings='{"_animation":"fadeInUp"}' data-widget_type="image.default">
                            <div className="elementor-widget-container">
                              <img loading="lazy" decoding="async" width="390" height="156"
                                   src="/images/about/img-3.png"
                                   className="attachment-full size-full wp-image-921" alt=""
                                   sizes="(max-width: 390px) 100vw, 390px" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>

            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
