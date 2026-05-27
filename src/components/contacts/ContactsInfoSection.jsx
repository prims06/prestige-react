import { CONTACT_CARDS } from '../../data/contacts';

export default function ContactsInfoSection() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-368cdd9 elementor-section-boxed elementor-section-height-default animated fadeInUp" data-id="368cdd9" data-element_type="section" data-e-type="section" data-settings='{"animation":"fadeInUp","mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-default">
        {CONTACT_CARDS.map(c => (
          <div key={c.colId} className={`elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-${c.colId}`} data-id={c.colId} data-element_type="column" data-e-type="column" data-settings='{"background_background":"classic","mdp_selection_sticky_column_effect_enable":false}'>
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className={`elementor-element elementor-element-${c.imgId} elementor-widget elementor-widget-image`} data-id={c.imgId} data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                <div className="elementor-widget-container">
                  <img loading="lazy" decoding="async" width={c.imgW} height={c.imgH} src={c.icon} className={`attachment-thumbnail size-thumbnail wp-image-${c.imgWpId}`} alt="" />
                </div>
              </div>
              <div className={`elementor-element elementor-element-${c.titleId} elementor-widget elementor-widget-heading`} data-id={c.titleId} data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                <div className="elementor-widget-container"><h5 className="elementor-heading-title elementor-size-default">{c.title}</h5></div>
              </div>
              {c.lines.map(l => (
                <div key={l.id} className={`elementor-element elementor-element-${l.id} elementor-widget elementor-widget-text-editor`} data-id={l.id} data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">{l.text}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
