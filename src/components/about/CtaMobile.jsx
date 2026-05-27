import CtaMobileLeft from './CtaMobileLeft';
import CtaMobileRight from './CtaMobileRight';

export default function CtaMobile() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-cec11fe elementor-section-content-middle elementor-hidden-desktop elementor-section-boxed elementor-section-height-default"
             data-id="cec11fe" data-element_type="section" data-e-type="section"
             data-settings='{"mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">
        <CtaMobileLeft />
        <CtaMobileRight />
      </div>
    </section>
  );
}
