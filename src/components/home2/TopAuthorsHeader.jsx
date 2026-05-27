import MdpButton from './MdpButton';

export default function TopAuthorsHeader() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-9b38f8f elementor-section-content-middle elementor-section-boxed elementor-section-height-default" data-id="9b38f8f" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-156bf00" data-id="156bf00" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-fcdf98e elementor-widget elementor-widget-heading" data-id="fcdf98e" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <h3 className="elementor-heading-title elementor-size-default">Top authors🔥</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-23a44d9 elementor-hidden-mobile" data-id="23a44d9" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-fa81f08 elementor-animation-push elementor-widget__width-auto elementor-widget elementor-widget-mdp-buttoner-elementor" data-id="fa81f08" data-element_type="widget" data-e-type="widget" data-widget_type="mdp-buttoner-elementor.default">
              <div className="elementor-widget-container">
                <MdpButton id="fa81f08" text="View all authors" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
