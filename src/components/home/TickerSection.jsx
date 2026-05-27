export default function TickerSection() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-344e2a9 elementor-section-full_width elementor-section-height-default" data-id="344e2a9" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-1fbddf5" data-id="1fbddf5" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-2789b4e elementor-widget elementor-widget-mdp-crawler-elementor" data-id="2789b4e" data-element_type="widget" data-e-type="widget" data-widget_type="mdp-crawler-elementor.default">
              <div className="elementor-widget-container">
                <div className="mdp-crawler-elementor-box mdp-crawler-elementor-box-0" data-ticker-type="ticker">
                  <div className="mdp-crawler-elementor-ticker mdp-crawler-elementor-ticker-ticker-type mdp-crawler-elementor-ticker-label-align-">
                    <div className="mdp-crawler-elementor-content-wrapper">
                      <div className="mdp-crawler-elementor-ticker-content mdp-crawler-elementor-ticker-animation-normal">
                        {[...Array(6)].map((_, i) => (<div className="mdp-crawler-elementor-ticker-item" key={i}><a>Create {'&'} sell your NFTs</a></div>))}
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
