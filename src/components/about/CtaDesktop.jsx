import CtaDesktopLeft from './CtaDesktopLeft';
import CtaDesktopRight from './CtaDesktopRight';

export default function CtaDesktop() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-0b16851 elementor-section-content-middle elementor-hidden-tablet elementor-hidden-mobile elementor-section-boxed elementor-section-height-default"
             data-id="0b16851" data-element_type="section" data-e-type="section"
             data-settings='{"background_background":"classic","mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">
        <CtaDesktopLeft />
        <CtaDesktopRight />
      </div>
    </section>
  );
}
