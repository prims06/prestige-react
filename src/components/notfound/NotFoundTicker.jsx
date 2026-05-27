export default function NotFoundTicker() {
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
