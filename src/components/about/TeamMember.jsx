import { TEAM_SOCIAL } from '../../data/about';

export default function TeamMember({ m }) {
  return (
    <div className={`elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-${m.outerColId} elementor-invisible`}
         data-id={m.outerColId} data-element_type="column" data-e-type="column"
         data-settings='{"animation":"fadeInUp","mdp_selection_sticky_column_effect_enable":false}'>
      <div className="elementor-widget-wrap elementor-element-populated">
        <section className={`elementor-section elementor-inner-section elementor-element elementor-element-${m.innerSectionId} elementor-section-boxed elementor-section-height-default`}
                 data-id={m.innerSectionId} data-element_type="section" data-e-type="section"
                 data-settings='{"mdp_selection_sticky_effect_enable":false}'>
          <div className="elementor-container elementor-column-gap-no">

            <div className={`elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-${m.imgColId}`}
                 data-id={m.imgColId} data-element_type="column" data-e-type="column"
                 data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className={`elementor-element elementor-element-${m.imgWidgetId} elementor-widget__width-auto elementor-widget elementor-widget-image`}
                     data-id={m.imgWidgetId} data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                  <div className="elementor-widget-container">
                    <img decoding="async" src={m.img} title={m.name} alt={m.name}
                         className="elementor-animation-shrink" loading="lazy" />
                  </div>
                </div>
              </div>
            </div>

            <div className={`elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-${m.infoColId}`}
                 data-id={m.infoColId} data-element_type="column" data-e-type="column"
                 data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
              <div className="elementor-widget-wrap elementor-element-populated">

                <div className={`elementor-element elementor-element-${m.nameWidgetId} elementor-widget elementor-widget-heading`}
                     data-id={m.nameWidgetId} data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h3 className="elementor-heading-title elementor-size-default">{m.name}</h3>
                  </div>
                </div>

                <div className={`elementor-element elementor-element-${m.roleWidgetId} elementor-widget elementor-widget-heading`}
                     data-id={m.roleWidgetId} data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h3 className="elementor-heading-title elementor-size-default">{m.role}</h3>
                  </div>
                </div>

                <div className={`elementor-element elementor-element-${m.textWidgetId} elementor-widget elementor-widget-text-editor`}
                     data-id={m.textWidgetId} data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">{m.bio}</div>
                </div>

                <div className={`elementor-element elementor-element-${m.socialWidgetId} elementor-grid-3 e-grid-align-left e-grid-align-mobile-center elementor-shape-rounded elementor-widget elementor-widget-social-icons`}
                     data-id={m.socialWidgetId} data-element_type="widget" data-e-type="widget" data-widget_type="social-icons.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-social-icons-wrapper elementor-grid" role="list">
                      {TEAM_SOCIAL.map(s => (
                        <span key={s.repeater} className="elementor-grid-item" role="listitem">
                          <a className={`elementor-icon elementor-social-icon elementor-social-icon-${s.name.toLowerCase()} elementor-repeater-item-${s.repeater}`} target="_blank" rel="noreferrer">
                            <span className="elementor-screen-only">{s.name}</span>
                            <i aria-hidden="true" className={s.icon}></i>
                          </a>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}
