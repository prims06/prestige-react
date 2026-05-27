import { FEATURES } from '../../data/about';

export default function FeaturesSection() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-1678d40 elementor-section-boxed elementor-section-height-default"
             data-id="1678d40" data-element_type="section" data-e-type="section"
             data-settings='{"mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-extended">
        {FEATURES.map(f => (
          <div key={f.colId}
               className={`elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-${f.colId}`}
               data-id={f.colId} data-element_type="column" data-e-type="column"
               data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className={`elementor-element elementor-element-${f.widgetId} elementor-position-top elementor-widget elementor-widget-image-box`}
                   data-id={f.widgetId} data-element_type="widget" data-e-type="widget" data-widget_type="image-box.default">
                <div className="elementor-widget-container">
                  <div className="elementor-image-box-wrapper">
                    <figure className="elementor-image-box-img">
                      <img loading="lazy" decoding="async" width="60" height="60"
                           src={f.img}
                           className={`elementor-animation-shrink attachment-full size-full wp-image-${f.wpImg}`}
                           alt="" />
                    </figure>
                    <div className="elementor-image-box-content">
                      <h3 className="elementor-image-box-title">{f.line1}<br />{f.line2}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
