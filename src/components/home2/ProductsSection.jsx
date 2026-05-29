import { HOME2_PRODUCTS } from '../../data/home2';
import { useFeaturedServices } from '../../hooks/useCatalog';
import { resolveMediaUrl } from '../../api/client';

const PLACEHOLDER_IMG = '/images/shop/anunay-rai-awMWm6ayLTc-unsplash-600x600.jpg';

function mapServiceToProduct(svc, i) {
  const firstMedia = Array.isArray(svc.media) && svc.media.length > 0 ? svc.media[0] : null;
  const imgUrl = firstMedia ? resolveMediaUrl(firstMedia.url) : null;
  const price = svc.priceXaf ? (svc.priceXaf / 1000).toFixed(0) + 'k XAF' : '—';
  const firstLast = i === 0 ? 'first' : i === 3 ? 'last' : '';
  return {
    id: svc.id,
    cls: `post-${svc.id} product ${firstLast} instock shipping-taxable product-type-external`,
    img: imgUrl || PLACEHOLDER_IMG,
    cat: svc.escort?.displayName ? '👤 ' + svc.escort.displayName : '✨ Service',
    title: svc.title || 'Service',
    price,
    sku: svc.id?.slice(0, 8) || '',
    badge: null,
  };
}

export default function ProductsSection() {
  const { data: apiData } = useFeaturedServices(8);
  const apiServices = Array.isArray(apiData) ? apiData : [];

  const products = apiServices.length > 0
    ? apiServices.map((svc, i) => mapServiceToProduct(svc, i))
    : HOME2_PRODUCTS;

  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-d0f55e2 elementor-section-boxed elementor-section-height-default elementor-invisible" data-id="d0f55e2" data-element_type="section" data-e-type="section" data-settings='{"animation":"fadeInUp","mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-bf4603a" data-id="bf4603a" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-ed14530 premium-woo-product-align-left premium-qv-hidden-yes elementor-widget elementor-widget-premium-woo-products" data-id="ed14530" data-element_type="widget" data-e-type="widget" data-widget_type="premium-woo-products.grid-3">
              <div className="elementor-widget-container">
                <div className="premium-woocommerce premium-woo-products-grid premium-woo-skin-grid-3 premium-woo-query-all" data-page-id="18" data-skin="grid_3" data-quick-view="yes">
                  <div className="premium-woo-products-inner premium-woo-product__hover-zoomin">
                    <ul className="products columns-4">
                      {products.map((p, i) => (
                        <li key={p.id} className={` ${p.cls}`}>
                          <div className="premium-woo-product-wrapper premium-con-lq__none">
                            <div className="premium-woo-product-thumbnail">
                              {p.badge && (
                                <div className="premium-woo-ribbon-container">
                                  <div className="premium-woo-product-featured-wrap">
                                    <span className="premium-woo-product-featured">{p.badge}</span>
                                  </div>
                                </div>
                              )}
                              <a href="/product" className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                <img decoding="async" src={p.img} alt="" style={{ aspectRatio: "1/1", objectFit: "cover", width: "100%", height: "auto" }} {...(i === 0 ? { fetchPriority: "high" } : { loading: "lazy" })} />
                              </a>
                              <div className="premium-woo-qv-data" data-product-id={p.id}></div>
                            </div>
                            <div className="premium-woo-products-details-wrap">
                              <span className="premium-woo-product-category">{p.cat}</span>
                              <a href="/product" className="premium-woo-product__link">
                                <h2 className="woocommerce-loop-product__title">{p.title}</h2>
                              </a>
                              <span className="price">
                                <span className="woocommerce-Price-amount amount">
                                  <bdi>{p.price}</bdi>
                                </span>
                              </span>
                              <div className="premium-woo-product-actions-wrapper">
                                <div className="premium-woo-atc-button" data-variations={'"true"'}>
                                  <a href="/home-2" aria-describedby={`woocommerce_loop_add_to_cart_link_describedby_${p.id}`}
                                    data-quantity="1" className="button product_type_external"
                                    data-product_id={p.id} data-product_sku={p.sku}
                                    aria-label="Buy now" rel="nofollow">Buy now</a>
                                  <span id={`woocommerce_loop_add_to_cart_link_describedby_${p.id}`} className="screen-reader-text"></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
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
