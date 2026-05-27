import MdpButton from './MdpButton';

export default function FeaturedCollectionsHeader() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-50dacfc elementor-section-content-middle elementor-section-boxed elementor-section-height-default" data-id="50dacfc" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-56492ba" data-id="56492ba" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-06eb980 elementor-widget elementor-widget-heading" data-id="06eb980" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <h3 className="elementor-heading-title elementor-size-default">Featured collections⚡</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-3baee0d elementor-hidden-mobile" data-id="3baee0d" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-3dd93c9 elementor-animation-push elementor-widget__width-auto elementor-widget elementor-widget-mdp-buttoner-elementor" data-id="3dd93c9" data-element_type="widget" data-e-type="widget" data-widget_type="mdp-buttoner-elementor.default">
              <div className="elementor-widget-container">
                <MdpButton id="3dd93c9" text="View all collections" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
