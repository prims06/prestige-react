import { TEAM } from '../../data/about';
import TeamMember from './TeamMember';

export default function TeamSection() {
  return (
    <>
      {/* S11 — En-tête section équipe */}
      <section className="elementor-section elementor-top-section elementor-element elementor-element-741d7ac elementor-section-content-middle elementor-section-boxed elementor-section-height-default"
               data-id="741d7ac" data-element_type="section" data-e-type="section"
               data-settings='{"mdp_selection_sticky_effect_enable":false}'>
        <div className="elementor-container elementor-column-gap-no">
          <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-61bab0c"
               data-id="61bab0c" data-element_type="column" data-e-type="column"
               data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-cf59615 elementor-widget elementor-widget-heading"
                   data-id="cf59615" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h3 className="elementor-heading-title elementor-size-default">Meet the team⚡</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-5ed38ac elementor-hidden-mobile"
               data-id="5ed38ac" data-element_type="column" data-e-type="column"
               data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-f19e466 elementor-align-right elementor-widget elementor-widget-button"
                   data-id="f19e466" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
                <div className="elementor-widget-container">
                  <div className="elementor-button-wrapper">
                    <a className="elementor-button elementor-button-link elementor-size-sm elementor-animation-push" href="/about#">
                      <span className="elementor-button-content-wrapper">
                        <span className="elementor-button-text">View all team</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S12 — Équipe ligne 1 (Robert + Amanda) */}
      <section className="elementor-section elementor-top-section elementor-element elementor-element-f7a18ee elementor-section-boxed elementor-section-height-default"
               data-id="f7a18ee" data-element_type="section" data-e-type="section"
               data-settings='{"mdp_selection_sticky_effect_enable":false}'>
        <div className="elementor-container elementor-column-gap-no">
          {TEAM.slice(0, 2).map(m => <TeamMember key={m.outerColId} m={m} />)}
        </div>
      </section>

      {/* S13 — Équipe ligne 2 (Kirk + Thomas) */}
      <section className="elementor-section elementor-top-section elementor-element elementor-element-9043142 elementor-section-boxed elementor-section-height-default"
               data-id="9043142" data-element_type="section" data-e-type="section"
               data-settings='{"mdp_selection_sticky_effect_enable":false}'>
        <div className="elementor-container elementor-column-gap-no">
          {TEAM.slice(2, 4).map(m => <TeamMember key={m.outerColId} m={m} />)}
        </div>
      </section>

      {/* S14 — Bouton "View all team" mobile seulement */}
      <section className="elementor-section elementor-top-section elementor-element elementor-element-0619496 elementor-section-content-middle elementor-hidden-desktop elementor-hidden-tablet elementor-section-boxed elementor-section-height-default"
               data-id="0619496" data-element_type="section" data-e-type="section"
               data-settings='{"mdp_selection_sticky_effect_enable":false}'>
        <div className="elementor-container elementor-column-gap-no">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-819fb1c"
               data-id="819fb1c" data-element_type="column" data-e-type="column"
               data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-16c8a35 elementor-align-right elementor-mobile-align-justify elementor-widget elementor-widget-button"
                   data-id="16c8a35" data-element_type="widget" data-e-type="widget"
                   data-settings='{"_animation_mobile":"fadeInUp"}' data-widget_type="button.default">
                <div className="elementor-widget-container">
                  <div className="elementor-button-wrapper">
                    <a className="elementor-button elementor-button-link elementor-size-sm elementor-animation-push" href="/about#">
                      <span className="elementor-button-content-wrapper">
                        <span className="elementor-button-text">View all team</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
