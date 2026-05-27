import ProductTabs from './ProductTabs';
import ProductCountdown from './ProductCountdown';
import ProductButtons from './ProductButtons';
import ProductGallery from './ProductGallery';

export default function ProductDetailSection() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-c1bf035 elementor-section-boxed elementor-section-height-default" data-id="c1bf035" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-b600661" data-id="b600661" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <ProductGallery />
          </div>
        </div>
        <ProductDetailInfo />
      </div>
    </section>
  );
}

function ProductDetailInfo() {
  return (
    <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-72770b3" data-id="72770b3" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
      <div className="elementor-widget-wrap elementor-element-populated">
        <div className="elementor-element elementor-element-f6373d0 elementor-widget elementor-widget-woocommerce-product-title elementor-page-title elementor-widget-heading" data-id="f6373d0" data-element_type="widget" data-e-type="widget" data-widget_type="woocommerce-product-title.default">
          <div className="elementor-widget-container"><h3 className="product_title entry-title elementor-heading-title elementor-size-default">Logical impact</h3></div>
        </div>
        <div className="elementor-element elementor-element-4ab04b6 elementor-widget__width-auto elementor-widget elementor-widget-heading" data-id="4ab04b6" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
          <div className="elementor-widget-container"><h2 className="elementor-heading-title elementor-size-default">On sale for</h2></div>
        </div>
        <div className="elementor-element elementor-element-6729774 elementor-widget__width-auto elementor-widget elementor-widget-woocommerce-product-price" data-id="6729774" data-element_type="widget" data-e-type="widget" data-widget_type="woocommerce-product-price.default">
          <div className="elementor-widget-container"><p className="price"><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>1,400.00</bdi></span></p></div>
        </div>
        <div className="elementor-element elementor-element-00f084a elementor-widget__width-auto elementor-widget elementor-widget-heading" data-id="00f084a" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
          <div className="elementor-widget-container"><h2 className="elementor-heading-title elementor-size-default">Highest bid</h2></div>
        </div>
        <div className="elementor-element elementor-element-7d21e8b elementor-widget__width-auto elementor-widget elementor-widget-heading" data-id="7d21e8b" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
          <div className="elementor-widget-container"><h2 className="elementor-heading-title elementor-size-default">$15.00</h2></div>
        </div>
        <div className="elementor-element elementor-element-ffaa487 elementor-widget elementor-widget-woocommerce-product-short-description" data-id="ffaa487" data-element_type="widget" data-e-type="widget" data-widget_type="woocommerce-product-short-description.default">
          <div className="elementor-widget-container">
            <div className="woocommerce-product-details__short-description">
              <p>Suspendisse rhoncus erat gravida finibus hendrerit. Nunc dictum, neque ut ornare vestibulum, arcu justo tempus mauris, ullamcorper volutpat est velit eu nulla. Curabitur eget est pretium quam ornare venenatis ac ac nisi. Fusce quam quam, semper quis sagittis in, mattis vel dui.</p>
            </div>
          </div>
        </div>
        <ProductTabs />
        <ProductCountdown />
        <ProductButtons />
      </div>
    </div>
  );
}
