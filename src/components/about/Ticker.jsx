export default function Ticker() {
  return (
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
  );
}
