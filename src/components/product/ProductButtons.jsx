import { Link } from 'react-router-dom';

export default function ProductButtons() {
  return (
    <section className="elementor-section elementor-inner-section elementor-element elementor-element-add8227 elementor-section-boxed elementor-section-height-default" data-id="add8227" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-7dca050" data-id="7dca050" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-25c401d elementor-align-justify elementor-widget elementor-widget-button" data-id="25c401d" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
              <div className="elementor-widget-container">
                <div className="elementor-button-wrapper">
                  <Link className="elementor-button elementor-button-link elementor-size-sm elementor-animation-push" to="/product">
                    <span className="elementor-button-content-wrapper"><span className="elementor-button-text">Buy now</span></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-90ed6c8" data-id="90ed6c8" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-ebbaa75 elementor-align-justify elementor-widget elementor-widget-button" data-id="ebbaa75" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
              <div className="elementor-widget-container">
                <div className="elementor-button-wrapper">
                  <Link className="elementor-button elementor-button-link elementor-size-sm elementor-animation-push" to="/product">
                    <span className="elementor-button-content-wrapper"><span className="elementor-button-text">Place a bid</span></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
