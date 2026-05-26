import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div data-elementor-type="error-404" data-elementor-id="2246" className="elementor elementor-2246 elementor-location-single" data-elementor-post-type="elementor_library">
      <NotFoundHero />
      <NotFoundTicker />
    </div>
  );
}

function NotFoundHero() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-b04f667 elementor-section-boxed elementor-section-height-default" data-id="b04f667" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3c958a2" data-id="3c958a2" data-element_type="column" data-e-type="column" data-settings='{"background_background":"classic","mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <section className="elementor-section elementor-inner-section elementor-element elementor-element-6096bc0 elementor-section-boxed elementor-section-height-default" data-id="6096bc0" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
              <div className="elementor-container elementor-column-gap-no">
                <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-2d63a28" data-id="2d63a28" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-cb0cdbf elementor-hidden-desktop elementor-hidden-tablet elementor-invisible elementor-widget elementor-widget-image elementor-motion-effects-parent" data-id="cb0cdbf" data-element_type="widget" data-e-type="widget" data-settings='{"motion_fx_motion_fx_scrolling":"yes","motion_fx_translateY_effect":"yes","motion_fx_translateY_speed":{"unit":"px","size":1,"sizes":[]},"_animation":"fadeIn","motion_fx_translateY_affectedRange":{"unit":"%","size":"","sizes":{"start":0,"end":100}},"motion_fx_devices":["desktop","tablet","mobile"]}' data-widget_type="image.default">
                      <div className="elementor-widget-container elementor-motion-effects-element" style={{'--translateY':'1.5px','--e-transform-transition-duration':'100ms',transform:'translateY(var(--translateY))'}}>
                        <img fetchPriority="high" width="800" height="800" src="/images/404/illustration-1024x1024.png" className="attachment-large size-large wp-image-2248" alt="" sizes="(max-width: 800px) 100vw, 800px" />
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-280c14c elementor-widget elementor-widget-heading" data-id="280c14c" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">Page not found!</h2>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-8e805b8 elementor-widget elementor-widget-text-editor" data-id="8e805b8" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                      <div className="elementor-widget-container">
                        Sorry! The page you were looking for could not be found.<br />Try searching for it or browse through our website.
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-a9ce662 elementor-align-left elementor-mobile-align-justify elementor-widget elementor-widget-button animated fadeInUp" data-id="a9ce662" data-element_type="widget" data-e-type="widget" data-settings='{"_animation":"fadeInUp"}' data-widget_type="button.default">
                      <div className="elementor-widget-container">
                        <div className="elementor-button-wrapper">
                          <Link className="elementor-button elementor-button-link elementor-size-sm elementor-animation-push" to="/">
                            <span className="elementor-button-content-wrapper">
                              <span className="elementor-button-text">Go back to home</span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-b8de4e5" data-id="b8de4e5" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-444e852 elementor-hidden-mobile elementor-widget elementor-widget-image elementor-motion-effects-parent animated fadeIn" data-id="444e852" data-element_type="widget" data-e-type="widget" data-settings='{"motion_fx_motion_fx_scrolling":"yes","motion_fx_translateY_effect":"yes","motion_fx_translateY_speed":{"unit":"px","size":1,"sizes":[]},"_animation":"fadeIn","motion_fx_translateY_affectedRange":{"unit":"%","size":"","sizes":{"start":0,"end":100}},"motion_fx_devices":["desktop","tablet","mobile"]}' data-widget_type="image.default">
                      <div className="elementor-widget-container elementor-motion-effects-element" style={{'--translateY':'24.84px',transform:'translateY(var(--translateY))'}}>
                        <img fetchPriority="high" width="800" height="800" src="/images/404/illustration-1024x1024.png" className="attachment-large size-large wp-image-2248" alt="" sizes="(max-width: 800px) 100vw, 800px" />
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
  );
}

function NotFoundTicker() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-35c1e1b elementor-section-full_width elementor-hidden-tablet elementor-section-height-default" data-id="35c1e1b" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4e3022d" data-id="4e3022d" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-d4001d5 elementor-widget elementor-widget-mdp-crawler-elementor" data-id="d4001d5" data-element_type="widget" data-e-type="widget" data-widget_type="mdp-crawler-elementor.default">
              <div className="elementor-widget-container">
                <div className="mdp-crawler-elementor-box mdp-crawler-elementor-box-0" data-ticker-type="ticker">
                  <div className="mdp-crawler-elementor-ticker   mdp-crawler-elementor-ticker-ticker-type  mdp-crawler-elementor-ticker-label-align-">
                    <div className="mdp-crawler-elementor-content-wrapper">
                      <div className="mdp-crawler-elementor-ticker-content mdp-crawler-elementor-ticker-animation-normal ">
                        {Array.from({length: 14}).map((_, i) => (
                          <span key={i}>
                            <div className="mdp-crawler-elementor-ticker-item"><a>404</a></div>
                            <span className="mdp-crawler-elementor-ticker-item-separator"><i aria-hidden="true" className="fas fa-circle"></i></span>
                          </span>
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
  );
}
