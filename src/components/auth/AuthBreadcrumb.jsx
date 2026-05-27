import { Link } from 'react-router-dom';

export default function AuthBreadcrumb({ title }) {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-e641378 elementor-section-boxed elementor-section-height-default" data-id="e641378" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-676a1fc" data-id="676a1fc" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-b2b0d06 elementor-widget elementor-widget-heading" data-id="b2b0d06" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">{title}</h2>
              </div>
            </div>
            <div className="elementor-element elementor-element-8e1858b elementor-widget elementor-widget-mdp-crumber-elementor" data-id="8e1858b" data-element_type="widget" data-e-type="widget" data-widget_type="mdp-crumber-elementor.default">
              <div className="elementor-widget-container">
                <div className="mdp-crumber-elementor-box">
                  <div className="mdp-crumber-elementor-breadcrumbs">
                    <div className="mdp-crumber-elementor-breadcrumbs-item mdp-crumber-elementor-breadcrumbs-icon-position-">
                      <Link to="/"><span>Home</span></Link>
                    </div>
                    <span className="mdp-crumber-elementor-separator mdp-crumber-elementor-separator-hide-last"> {'•'} </span>
                    <div className="mdp-crumber-elementor-breadcrumbs-item mdp-crumber-elementor-breadcrumbs-item-active mdp-crumber-elementor-breadcrumbs-icon-position-">
                      <span>{title}</span>
                    </div>
                    <span className="mdp-crumber-elementor-separator mdp-crumber-elementor-separator-hide-last"> {'•'} </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
