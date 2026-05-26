import { Link } from 'react-router-dom';

const PRODUCTS = [
  { id: 2472, liCls: ' post-2472 product first instock shipping-taxable product-type-external', img: '/images/shop-2/pawel-czerwinski-hNrd99q5peI-unsplash-1-600x600.jpg', hot: false, fetchPri: false, cat: '📸 Photography', sku: '1234598-2', name: 'Abstract image', price: '$2,560.00' },
  { id: 1660, liCls: ' post-1660 product  instock featured shipping-taxable product-type-external', img: '/images/shop-2/milad-fakurian-PjG_SXDkpwQ-unsplash-600x600.jpg', hot: true, fetchPri: false, cat: '✨ Collectibles', sku: '123455-1-1-1', name: 'Сolorful 3D object', price: '$890.00' },
  { id: 214, liCls: ' post-214 product  instock featured shipping-taxable product-type-external', img: '/images/shop-2/anunay-rai-awMWm6ayLTc-unsplash-600x600.jpg', hot: true, fetchPri: false, cat: '🔥 Trading cards', sku: '123455-1-1', name: 'Logical impact', price: '$1,400.00' },
  { id: 212, liCls: ' post-212 product last instock shipping-taxable product-type-external', img: '/images/shop-2/simon-lee-fyZOY0HiF9A-unsplash-1-600x600.jpg', hot: false, fetchPri: true, cat: '🎨 Art', sku: '123455', name: 'Infinite figure', price: '$890.00' },
  { id: 211, liCls: ' post-211 product first instock featured shipping-taxable product-type-external', img: '/images/shop-2/simon-lee-zA66MV4EyXc-unsplash-600x600.jpg', hot: true, fetchPri: false, cat: '🎨 Art', sku: '1234511', name: 'The image of a man', price: '$1,200.00' },
  { id: 210, liCls: ' post-210 product  instock featured shipping-taxable product-type-external', img: '/images/shop-2/kevin-chin-HvdRVnyV0PQ-unsplash-1-1-600x600.jpg', hot: true, fetchPri: false, cat: '⚡ Utility', sku: '1234598-1-1', name: '3D object Loppi', price: '$2,560.00' },
  { id: 209, liCls: ' post-209 product  instock featured shipping-taxable product-type-external', img: '/images/shop-2/mo-DP0LMBAIzZQ-unsplash-1-600x600.jpg', hot: true, fetchPri: false, cat: '🌐 Virtual worlds', sku: '1234598-1', name: '3D renders', price: '$2,560.00' },
  { id: 208, liCls: ' post-208 product last instock featured shipping-taxable product-type-external', img: '/images/shop-2/simon-lee-Ue97JK9S0QE-unsplash-2-1-600x600.jpg', hot: true, fetchPri: false, cat: '🎨 Art', sku: '1234598', name: 'Pixel art', price: '$2,560.00' },
  { id: 207, liCls: ' post-207 product first instock shipping-taxable product-type-external', img: '/images/shop-2/vadim-bogulov-rP_pS1VMd7c-unsplash-1-600x600.jpg', hot: false, fetchPri: false, cat: '🔥 Trading cards', sku: '12345234-1-1-1-1', name: 'Pixel art', price: '$230.00' },
  { id: 206, liCls: ' post-206 product  instock featured shipping-taxable product-type-external', img: '/images/shop-2/johan-lindberg-IcWtW5WsmTg-unsplash-1-600x600.jpg', hot: true, fetchPri: false, cat: '🎨 Art', sku: '12345234-1-1-1', name: '3d art figure', price: '$230.00' },
  { id: 205, liCls: ' post-205 product  instock shipping-taxable product-type-external', img: '/images/shop-2/davisuko-rhUU1pemhQ0-unsplash-1-600x600.jpg', hot: false, fetchPri: false, cat: '📸 Photography', sku: '12345234-1-1', name: 'Abstract image', price: '$230.00' },
  { id: 204, liCls: ' post-204 product last instock shipping-taxable product-type-external', img: '/images/shop-2/hans-eiskonen-8Pm_A-OHJGg-unsplash-1-1-600x600.jpg', hot: false, fetchPri: false, cat: '🌐 Virtual worlds', sku: '12345234-1', name: '3d art figure', price: '$230.00' },
];

export default function Shop2Page() {
  return (
    <div data-elementor-type="product-archive" data-elementor-id="5542" className="elementor elementor-5542 elementor-location-archive product" data-elementor-post-type="elementor_library">
      <Shop2Header />
      <Shop2Grid />
    </div>
  );
}

function Shop2Header() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-c31e52a elementor-section-boxed elementor-section-height-default" data-id="c31e52a" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-74a548b" data-id="74a548b" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-ce4fb8f elementor-widget elementor-widget-theme-archive-title elementor-page-title elementor-widget-heading" data-id="ce4fb8f" data-element_type="widget" data-e-type="widget" data-widget_type="theme-archive-title.default">
              <div className="elementor-widget-container"><h2 className="elementor-heading-title elementor-size-default">Category: {'⚡'} Utility</h2></div>
            </div>
            <div className="elementor-element elementor-element-97b9c85 elementor-widget elementor-widget-mdp-crumber-elementor" data-id="97b9c85" data-element_type="widget" data-e-type="widget" data-widget_type="mdp-crumber-elementor.default">
              <div className="elementor-widget-container">
                <div className="mdp-crumber-elementor-box">
                  <div className="mdp-crumber-elementor-breadcrumbs">
                    <div className="mdp-crumber-elementor-breadcrumbs-item  mdp-crumber-elementor-breadcrumbs-icon-position-"><span>Home</span></div>
                    <span className="mdp-crumber-elementor-separator mdp-crumber-elementor-separator-hide-last"> {'•'} </span>
                    <div className="mdp-crumber-elementor-breadcrumbs-item mdp-crumber-elementor-breadcrumbs-item-active mdp-crumber-elementor-breadcrumbs-icon-position-"><span>Shop</span></div>
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
                      {PRODUCTS.map(p => (
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
