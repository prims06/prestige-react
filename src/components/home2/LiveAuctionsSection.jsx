import MdpButton from './MdpButton';

export default function LiveAuctionsSection() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-fb043dd elementor-section-content-middle elementor-section-boxed elementor-section-height-default" data-id="fb043dd" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-d46315d" data-id="d46315d" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-27bff61 elementor-widget elementor-widget-heading" data-id="27bff61" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <h3 className="elementor-heading-title elementor-size-default">Live auctions💥</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-e3879a2 elementor-hidden-mobile" data-id="e3879a2" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-2c2a421 elementor-animation-push elementor-widget__width-auto elementor-widget elementor-widget-mdp-buttoner-elementor" data-id="2c2a421" data-element_type="widget" data-e-type="widget" data-widget_type="mdp-buttoner-elementor.default">
              <div className="elementor-widget-container">
                <MdpButton id="2c2a421" text="Explore more" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
