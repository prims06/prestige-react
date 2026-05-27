export default function OurMission() {
  return (
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
  );
}
