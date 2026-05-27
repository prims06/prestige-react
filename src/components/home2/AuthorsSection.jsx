import { AUTHORS } from '../../data/home2';

export default function AuthorsSection() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-36159a1 elementor-section-boxed elementor-section-height-default" data-id="36159a1" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-wider">
        {AUTHORS.map(a => (
          <div key={a.colId} className={`elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-${a.colId} ${a.colCls}`}
            data-id={a.colId} data-element_type="column" data-e-type="column"
            data-settings='{"animation":"fadeInUp","mdp_selection_sticky_column_effect_enable":false}'>
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className={`elementor-element elementor-element-${a.img1Id} elementor-widget elementor-widget-image`} data-id={a.img1Id} data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                <div className="elementor-widget-container">
                  <img decoding="async" src={a.img1} title={a.img1Title} alt={a.img1Title} loading="lazy" />
                </div>
              </div>
              <div className={`elementor-element elementor-element-${a.img2Id} elementor-widget__width-auto elementor-widget elementor-widget-image`} data-id={a.img2Id} data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                <div className="elementor-widget-container">
                  <img decoding="async" src={a.img2} title={a.img2Title} alt={a.img2Title} loading="lazy" />
                </div>
              </div>
              <div className={`elementor-element elementor-element-${a.nameId} elementor-widget elementor-widget-heading`} data-id={a.nameId} data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h6 className="elementor-heading-title elementor-size-default">{a.handle}</h6>
                </div>
              </div>
              <div className={`elementor-element elementor-element-${a.ethId} elementor-widget elementor-widget-heading`} data-id={a.ethId} data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h6 className="elementor-heading-title elementor-size-default">{a.eth}</h6>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
