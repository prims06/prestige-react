import { Link } from 'react-router-dom';
import { SHOP2_PRODUCTS } from '../../data/shop2';

function Shop2Grid() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-03b5817 elementor-section-boxed elementor-section-height-default" data-id="03b5817" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-caa85da" data-id="caa85da" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-8903d4e premium-woo-product-align-left premium-qv-hidden-yes elementor-widget elementor-widget-premium-woo-products" data-id="8903d4e" data-element_type="widget" data-e-type="widget" data-widget_type="premium-woo-products.grid-3">
              <div className="elementor-widget-container">
                <div className="premium-woocommerce premium-woo-products-grid premium-woo-skin-grid-3 premium-woo-query-all" data-page-id="5542" data-skin="grid_3" data-quick-view="yes">
                  <div className="premium-woo-products-inner premium-woo-product__hover-zoomin">
                    <ul className="products columns-4">
                      {SHOP2_PRODUCTS.map(p => (
                        <li key={p.id} className={p.liCls}>
                          <div className="premium-woo-product-wrapper premium-con-lq__none">
                            <div className="premium-woo-product-thumbnail">
                              {p.hot && (
                                <div className="premium-woo-ribbon-container">
                                  <div className="premium-woo-product-featured-wrap">
                                    <span className="premium-woo-product-featured">Hot</span>
                                  </div>
                                </div>
                              )}
                              <Link to="/product" className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                <img {...(p.fetchPri ? { fetchPriority: 'high' } : {})} src={p.img} alt="" />
                              </Link>
                              <div className="premium-woo-qv-data" data-product-id={p.id}></div>
                            </div>
                            <div className="premium-woo-products-details-wrap">
                              <span className="premium-woo-product-category">{p.cat}</span>
                              <Link to="/product" className="premium-woo-product__link"><h2 className="woocommerce-loop-product__title">{p.name}</h2></Link>
                              <span className="price"><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>{p.price.replace('$', '')}</bdi></span></span>
                              <div className="premium-woo-product-actions-wrapper">
                                <div className="premium-woo-atc-button" data-variations='"true"'>
                                  <Link to="/shop-2" aria-describedby={`woocommerce_loop_add_to_cart_link_describedby_${p.id}`} data-quantity="1" className="button product_type_external" data-product_id={p.id} data-product_sku={p.sku} aria-label="Buy now" rel="nofollow">Buy now</Link>
                                  <span id={`woocommerce_loop_add_to_cart_link_describedby_${p.id}`} className="screen-reader-text"></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <nav className="premium-woo-products-pagination">
                      <ul className="page-numbers">
                        <li><span aria-label="Page 1" aria-current="page" className="page-numbers current">1</span></li>
                        <li><Link aria-label="Page 2" className="page-numbers" to="/shop">2</Link></li>
                        <li><Link aria-label="Page 3" className="page-numbers" to="/shop">3</Link></li>
                      </ul>
                    </nav>
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

export default Shop2Grid;
