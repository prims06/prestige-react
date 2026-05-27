import { Link } from 'react-router-dom';
import { useCarousel } from '../../hooks/useCarousel';

const HERO_PRODUCTS = [
  { id: 2472, cls: ' post-2472 product first instock shipping-taxable product-type-external', img: '/images/index/pawel-czerwinski-hNrd99q5peI-unsplash-1-1536x1536.jpg', hot: false, cat: '📸 Photography', name: 'Abstract image', price: '$2,560.00', sku: '1234598-2' },
  { id: 1660, cls: ' post-1660 product  instock featured shipping-taxable product-type-external', img: '/images/index/milad-fakurian-PjG_SXDkpwQ-unsplash-1536x1536.jpg', hot: true, cat: '✨ Collectibles', name: 'Сolorful 3D object', price: '$890.00', sku: '123455-1-1-1' },
  { id: 214,  cls: ' post-214 product  instock featured shipping-taxable product-type-external', img: '/images/index/anunay-rai-awMWm6ayLTc-unsplash-1536x1536.jpg', hot: true, cat: '🔥 Trading cards', name: 'Logical impact', price: '$1,400.00', sku: '123455-1-1' },
  { id: 212,  cls: ' post-212 product last instock shipping-taxable product-type-external', img: '/images/index/simon-lee-fyZOY0HiF9A-unsplash-1-1536x1536.jpg', hot: false, cat: '🎨 Art', name: 'Infinite figure', price: '$890.00', sku: '123455' },
  { id: 211,  cls: ' post-211 product first instock featured shipping-taxable product-type-external', img: '/images/index/simon-lee-zA66MV4EyXc-unsplash.jpg', hot: true, cat: '🎨 Art', name: 'The image of a man', price: '$1,200.00', sku: '1234511' },
];

function ProductCarouselItem({ product, tabIdx = 0 }) {
  return (
    <li className={product.cls} style={{ width: '100%', display: 'inline-block' }}>
      <div className="premium-woo-product-wrapper premium-con-lq__none">
        <div className="premium-woo-product-thumbnail">
          {product.hot && (
            <div className="premium-woo-ribbon-container">
              <div className="premium-woo-product-featured-wrap">
                <span className="premium-woo-product-featured">Hot</span>
              </div>
            </div>
          )}
          <Link to="/product" className="woocommerce-LoopProduct-link woocommerce-loop-product__link" tabIndex={tabIdx}>
            <img decoding="async" src={product.img} alt="" />
          </Link>
          <div className="premium-woo-qv-data" data-product-id={product.id}></div>
        </div>
        <div className="premium-woo-products-details-wrap">
          <span className="premium-woo-product-category">{product.cat}</span>
          <Link to="/product" className="premium-woo-product__link" tabIndex={tabIdx}>
            <h2 className="woocommerce-loop-product__title">{product.name}</h2>
          </Link>
          <span className="price">
            <span className="woocommerce-Price-amount amount">
              <bdi><span className="woocommerce-Price-currencySymbol">$</span>{product.price.replace('$', '')}</bdi>
            </span>
          </span>
          <div className="premium-woo-product-actions-wrapper">
            <div className="premium-woo-atc-button" data-variations={'"true"'}>
              <a href="/" data-quantity="1" className="button product_type_external"
                data-product_id={product.id} data-product_sku={product.sku}
                aria-label="Buy now" rel={'"nofollow"'} tabIndex={tabIdx}>Buy now</a>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default function HomeHero() {
  const { idx, next, prev, go, pause, resume } = useCarousel(HERO_PRODUCTS.length, 3500);

  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-9029686 elementor-section-boxed elementor-section-height-default" data-id="9029686" data-element_type="section" data-e-type="section" data-settings='{"background_background":"classic","mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-background-overlay"></div>
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b6438e5" data-id="b6438e5" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <section className="elementor-section elementor-inner-section elementor-element elementor-element-d7639a2 elementor-section-boxed elementor-section-height-default" data-id="d7639a2" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
              <div className="elementor-container elementor-column-gap-no">
                {/* Left: carousel */}
                <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-653d450" data-id="653d450" data-element_type="column" data-e-type="column" data-settings='{"background_background":"classic","mdp_selection_sticky_column_effect_enable":false}'>
                  <div className="elementor-widget-wrap elementor-element-populated">
                    {/* Mobile text/buttons */}
                    <div className="elementor-element elementor-element-8525432 elementor-hidden-desktop elementor-invisible elementor-widget elementor-widget-heading" data-id="8525432" data-element_type="widget" data-e-type="widget" data-settings='{"_animation":"fadeInDown"}' data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">Discover the unique digital art of NFT</h2>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-fc66e6d elementor-hidden-desktop elementor-widget elementor-widget-text-editor" data-id="fc66e6d" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                      <div className="elementor-widget-container">
                        Digital marketplace for crypto collectibles and non-fungible tokens. <br /> Buy, sell, and discover exclusive digital assets.
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-7001381 elementor-align-left elementor-widget__width-auto elementor-mobile-align-justify elementor-widget-mobile__width-inherit elementor-hidden-desktop elementor-invisible elementor-widget elementor-widget-button" data-id="7001381" data-element_type="widget" data-e-type="widget" data-settings='{"_animation":"fadeInUp"}' data-widget_type="button.default">
                      <div className="elementor-widget-container">
                        <div className="elementor-button-wrapper">
                          <a className="elementor-button elementor-button-link elementor-size-sm elementor-animation-push" href="#"><span className="elementor-button-content-wrapper"><span className="elementor-button-text">Explore</span></span></a>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-5788de4 elementor-align-left elementor-widget__width-auto elementor-mobile-align-justify elementor-widget-mobile__width-inherit elementor-hidden-desktop elementor-invisible elementor-widget elementor-widget-button" data-id="5788de4" data-element_type="widget" data-e-type="widget" data-settings='{"_animation":"fadeInUp"}' data-widget_type="button.default">
                      <div className="elementor-widget-container">
                        <div className="elementor-button-wrapper">
                          <a className="elementor-button elementor-button-link elementor-size-sm elementor-animation-push" href="#"><span className="elementor-button-content-wrapper"><span className="elementor-button-text">Create</span></span></a>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-56323c6 e-transform elementor-widget elementor-widget-spacer animated fadeIn" data-id="56323c6" data-element_type="widget" data-e-type="widget" data-widget_type="spacer.default">
                      <div className="elementor-widget-container"><div className="elementor-spacer"><div className="elementor-spacer-inner"></div></div></div>
                    </div>

                    {/* Carousel */}
                    <div className="elementor-element elementor-element-9746e14 premium-woo-product-align-left premium-qv-hidden-yes elementor-widget elementor-widget-premium-woo-products" data-id="9746e14" data-element_type="widget" data-e-type="widget" data-widget_type="premium-woo-products.grid-3">
                      <div className="elementor-widget-container">
                        <div className="premium-woocommerce premium-woo-products-carousel premium-woo-skin-grid-3 premium-woo-query-all">
                          <div className="premium-woo-products-inner premium-woo-product__hover-zoomin">
                            <ul
                              className="products columns-4 slick-initialized slick-slider slick-dotted"
                              onMouseEnter={pause}
                              onMouseLeave={resume}
                            >
                              <a
                                type="button"
                                data-role="none"
                                className="carousel-arrow carousel-prev slick-arrow"
                                aria-label="Previous"
                                role="button"
                                onClick={prev}
                                style={{ cursor: 'pointer' }}
                              >
                                <i className="fas fa-angle-left" aria-hidden="true"></i>
                              </a>

                              <div className="slick-list draggable">
                                <div
                                  className="slick-track"
                                  style={{
                                    display: 'flex',
                                    transition: 'transform 0.55s ease',
                                    transform: `translate3d(-${idx * 100}%, 0, 0)`,
                                  }}
                                >
                                  {HERO_PRODUCTS.map((p, i) => (
                                    <div
                                      key={p.id}
                                      className={`slick-slide${i === idx ? ' slick-current slick-active' : ''}`}
                                      data-slick-index={i}
                                      aria-hidden={i !== idx}
                                      role="tabpanel"
                                      id={`slick-slide0${i}`}
                                      style={{ minWidth: '100%' }}
                                      tabIndex={i !== idx ? -1 : undefined}
                                    >
                                      <div>
                                        <ProductCarouselItem product={p} tabIdx={i === idx ? 0 : -1} />
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <a
                                type="button"
                                data-role="none"
                                className="carousel-arrow carousel-next slick-arrow"
                                aria-label="Next"
                                role="button"
                                onClick={next}
                                style={{ cursor: 'pointer' }}
                              >
                                <i className="fas fa-angle-right" aria-hidden="true"></i>
                              </a>

                              <ul className="slick-dots" role="tablist">
                                {HERO_PRODUCTS.map((_, i) => (
                                  <li
                                    key={i}
                                    role="presentation"
                                    className={i === idx ? 'slick-active' : ''}
                                    onClick={() => go(i)}
                                    style={{ cursor: 'pointer' }}
                                  >
                                    <i className="fas fa-circle"></i>
                                  </li>
                                ))}
                              </ul>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: text (desktop) */}
                <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-bdec3f5 elementor-hidden-tablet elementor-hidden-mobile" data-id="bdec3f5" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-b6ea0b4 elementor-widget__width-auto elementor-absolute elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-image elementor-motion-effects-parent animated rotateIn" data-id="b6ea0b4" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                      <div className="elementor-widget-container">
                        <img fetchPriority="high" decoding="async" width="550" height="550" src="/images/index/element-1.png" className="attachment-large size-large wp-image-3184" alt="" sizes="(max-width: 550px) 100vw, 550px" />
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-ee63fc7 elementor-widget elementor-widget-heading animated fadeInDown" data-id="ee63fc7" data-element_type="widget" data-e-type="widget" data-settings='{"_animation":"fadeInDown"}' data-widget_type="heading.default">
                      <div className="elementor-widget-container"><h2 className="elementor-heading-title elementor-size-default">Discover the unique digital art of NFT</h2></div>
                    </div>
                    <div className="elementor-element elementor-element-99839a2 elementor-widget elementor-widget-text-editor" data-id="99839a2" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                      <div className="elementor-widget-container">Digital marketplace for crypto collectibles and non-fungible tokens. <br /> Buy, sell, and discover exclusive digital assets.</div>
                    </div>
                    <div className="elementor-element elementor-element-23d4be9 elementor-align-left elementor-widget__width-auto elementor-widget elementor-widget-button animated fadeInUp" data-id="23d4be9" data-element_type="widget" data-e-type="widget" data-settings='{"_animation":"fadeInUp"}' data-widget_type="button.default">
                      <div className="elementor-widget-container"><div className="elementor-button-wrapper"><a className="elementor-button elementor-button-link elementor-size-sm elementor-animation-push" href="#"><span className="elementor-button-content-wrapper"><span className="elementor-button-text">Explore</span></span></a></div></div>
                    </div>
                    <div className="elementor-element elementor-element-ab790a2 elementor-align-left elementor-widget__width-auto elementor-widget elementor-widget-button animated fadeInUp" data-id="ab790a2" data-element_type="widget" data-e-type="widget" data-settings='{"_animation":"fadeInUp"}' data-widget_type="button.default">
                      <div className="elementor-widget-container"><div className="elementor-button-wrapper"><a className="elementor-button elementor-button-link elementor-size-sm elementor-animation-push" href="#"><span className="elementor-button-content-wrapper"><span className="elementor-button-text">Create</span></span></a></div></div>
                    </div>
                    <div className="elementor-element elementor-element-da5ed64 elementor-widget__width-auto elementor-absolute elementor-hidden-tablet elementor-hidden-mobile elementor-invisible elementor-widget elementor-widget-image elementor-motion-effects-parent" data-id="da5ed64" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                      <div className="elementor-widget-container">
                        <img loading="lazy" decoding="async" width="267" height="266" src="/images/index/element.png" className="attachment-medium_large size-medium_large wp-image-471" alt="" sizes="(max-width: 267px) 100vw, 267px" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
