import { Link } from 'react-router-dom';

export default function ProductBreadcrumb() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-65ce020 elementor-section-boxed elementor-section-height-default" data-id="65ce020" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3a63f55" data-id="3a63f55" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-3b6cd40 elementor-widget elementor-widget-heading" data-id="3b6cd40" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
              <div className="elementor-widget-container"><h2 className="elementor-heading-title elementor-size-default">Single product</h2></div>
            </div>
            <div className="elementor-element elementor-element-af2eb35 elementor-widget elementor-widget-woocommerce-breadcrumb" data-id="af2eb35" data-element_type="widget" data-e-type="widget" data-widget_type="woocommerce-breadcrumb.default">
              <div className="elementor-widget-container">
                <nav className="woocommerce-breadcrumb" aria-label="Breadcrumb">
                  <Link to="/">Home</Link>&nbsp;/&nbsp;<Link to="/shop">{'🔥'} Trading cards</Link>&nbsp;/&nbsp;Logical impact
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
