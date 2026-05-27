export default function AuthorCard({ author, isFirst }) {
  return (
    <section className={`elementor-section elementor-inner-section elementor-element elementor-element-${author.sId} elementor-section-content-middle elementor-section-boxed elementor-section-height-default`} data-id={author.sId} data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">
        <div className={`elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-${author.lcId}`} data-id={author.lcId} data-element_type="column" data-e-type="column" data-settings='{"background_background":"classic","mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className={`elementor-element elementor-element-${author.imgId} elementor-widget__width-auto elementor-widget-mobile__width-inherit elementor-widget elementor-widget-image`} data-id={author.imgId} data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
              <div className="elementor-widget-container">
                <img {...(isFirst ? { fetchPriority: 'high' } : { loading: 'lazy' })} decoding="async" width="300" height="300" src={author.img} className={`elementor-animation-shrink attachment-medium size-medium wp-image-${author.wpImg}`} alt="" sizes="(max-width: 300px) 100vw, 300px" />
              </div>
            </div>
          </div>
        </div>
        <div className={`elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-${author.rcId}`} data-id={author.rcId} data-element_type="column" data-e-type="column" data-settings='{"background_background":"classic","mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className={`elementor-element elementor-element-${author.hId} elementor-widget elementor-widget-heading`} data-id={author.hId} data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
              <div className="elementor-widget-container"><h6 className="elementor-heading-title elementor-size-default">{author.name}</h6></div>
            </div>
            <div className={`elementor-element elementor-element-${author.ilId} elementor-icon-list--layout-inline elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list`} data-id={author.ilId} data-element_type="widget" data-e-type="widget" data-widget_type="icon-list.default">
              <div className="elementor-widget-container">
                <ul className="elementor-icon-list-items elementor-inline-items">
                  <li className="elementor-icon-list-item elementor-inline-item">
                    <span className="elementor-icon-list-icon"><i aria-hidden="true" className="fas fa-clock"></i></span>
                    <span className="elementor-icon-list-text">{author.date}</span>
                  </li>
                  <li className="elementor-icon-list-item elementor-inline-item">
                    <span className="elementor-icon-list-icon"><i aria-hidden="true" className="fas fa-tags"></i></span>
                    <span className="elementor-icon-list-text">{author.cat}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className={`elementor-element elementor-element-${author.teId} elementor-widget elementor-widget-text-editor`} data-id={author.teId} data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
              <div className="elementor-widget-container">{author.desc}</div>
            </div>
            <div className={`elementor-element elementor-element-${author.btnId} elementor-align-left elementor-mobile-align-justify elementor-widget elementor-widget-button`} data-id={author.btnId} data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
              <div className="elementor-widget-container">
                <div className="elementor-button-wrapper">
                  <a className="elementor-button elementor-button-link elementor-size-sm elementor-animation-push" href="/authors#">
                    <span className="elementor-button-content-wrapper"><span className="elementor-button-text">View profile</span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
