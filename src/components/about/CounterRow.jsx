export default function CounterRow({ row }) {
  return (
    <section className={`elementor-section elementor-top-section elementor-element elementor-element-${row.sectionId} elementor-section-boxed elementor-section-height-default elementor-invisible`}
             data-id={row.sectionId} data-element_type="section" data-e-type="section"
             data-settings='{"animation":"fadeInUp","mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">
        {row.items.map(item => (
          <div key={item.colId}
               className={`elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-${item.colId}`}
               data-id={item.colId} data-element_type="column" data-e-type="column"
               data-settings='{"background_background":"classic","mdp_selection_sticky_column_effect_enable":false}'>
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className={`elementor-element elementor-element-${item.counterWidgetId} elementor-widget elementor-widget-counter`}
                   data-id={item.counterWidgetId} data-element_type="widget" data-e-type="widget" data-widget_type="counter.default">
                <div className="elementor-widget-container">
                  <div className="elementor-counter">
                    <div className="elementor-counter-number-wrapper">
                      <span className="elementor-counter-number-prefix"></span>
                      <span className="elementor-counter-number" data-duration="2000" data-to-value={item.toValue} data-from-value="0" data-delimiter=",">0</span>
                      <span className="elementor-counter-number-suffix">{item.suffix}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`elementor-element elementor-element-${item.headingWidgetId} elementor-widget elementor-widget-heading`}
                   data-id={item.headingWidgetId} data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">{item.label}</h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
