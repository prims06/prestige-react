import WhoWeAreLeft from './WhoWeAreLeft';
import WhoWeAreRight from './WhoWeAreRight';

export default function WhoWeAre() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-0bc2c7d elementor-section-content-bottom elementor-section-boxed elementor-section-height-default"
             data-id="0bc2c7d" data-element_type="section" data-e-type="section"
             data-settings='{"mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">
        <WhoWeAreLeft />
        <WhoWeAreRight />
      </div>
    </section>
  );
}
