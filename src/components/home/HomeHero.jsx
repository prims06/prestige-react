import { Link } from 'react-router-dom';

const HERO_PRODUCTS = [
  { id: 2472, cls: ' post-2472 product first instock shipping-taxable product-type-external', img: '/images/index/pawel-czerwinski-hNrd99q5peI-unsplash-1-1536x1536.jpg', hot: false, cat: '📸 Photography', name: 'Abstract image', price: '$2,560.00', sku: '1234598-2' },
  { id: 1660, cls: ' post-1660 product  instock featured shipping-taxable product-type-external', img: '/images/index/milad-fakurian-PjG_SXDkpwQ-unsplash-1536x1536.jpg', hot: true, cat: '✨ Collectibles', name: 'Сolorful 3D object', price: '$890.00', sku: '123455-1-1-1' },
  { id: 214,  cls: ' post-214 product  instock featured shipping-taxable product-type-external', img: '/images/index/anunay-rai-awMWm6ayLTc-unsplash-1536x1536.jpg', hot: true, cat: '🔥 Trading cards', name: 'Logical impact', price: '$1,400.00', sku: '123455-1-1' },
  { id: 212,  cls: ' post-212 product last instock shipping-taxable product-type-external', img: '/images/index/simon-lee-fyZOY0HiF9A-unsplash-1-1536x1536.jpg', hot: false, cat: '🎨 Art', name: 'Infinite figure', price: '$890.00', sku: '123455' },
  { id: 211,  cls: ' post-211 product first instock featured shipping-taxable product-type-external', img: '/images/index/simon-lee-zA66MV4EyXc-unsplash.jpg', hot: true, cat: '🎨 Art', name: 'The image of a man', price: '$1,200.00', sku: '1234511' },
];

function ProductCarouselItem({ product, tabIdx = 0, cloneId = true }) {
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
              <a href="/" aria-describedby={`woocommerce_loop_add_to_cart_link_describedby_${product.id}`} data-quantity="1" className="button product_type_external" data-product_id={product.id} data-product_sku={product.sku} aria-label="Buy now" rel={'"nofollow"'} tabIndex={tabIdx}>Buy now</a>
              <span id={cloneId ? `woocommerce_loop_add_to_cart_link_describedby_${product.id}` : ''} className="screen-reader-text"></span>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default function HomeHero() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-9029686 elementor-section-boxed elementor-section-height-default" data-id="9029686" data-element_type="section" data-e-type="section" data-settings='{"background_background":"classic","mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-background-overlay"></div>
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b6438e5" data-id="b6438e5" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <section className="elementor-section elementor-inner-section elementor-element elementor-element-d7639a2 elementor-section-boxed elementor-section-height-default" data-id="d7639a2" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
              <div className="elementor-container elementor-column-gap-no">
                <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-653d450" data-id="653d450" data-element_type="column" data-e-type="column" data-settings='{"background_background":"classic","mdp_selection_sticky_column_effect_enable":false}'>
                  <div className="elementor-widget-wrap elementor-element-populated">
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
                    <div className="elementor-element elementor-element-56323c6 e-transform elementor-widget elementor-widget-spacer animated fadeIn" data-id="56323c6" data-element_type="widget" data-e-type="widget" data-settings='{"_animation":"fadeIn","_animation_delay":700,"_transform_rotateZ_effect":{"unit":"px","size":-3,"sizes":[]},"_transform_rotateZ_effect_tablet":{"unit":"deg","size":"","sizes":[]},"_transform_rotateZ_effect_mobile":{"unit":"deg","size":"","sizes":[]}}' data-widget_type="spacer.default">
                      <div className="elementor-widget-container"><div className="elementor-spacer"><div className="elementor-spacer-inner"></div></div></div>
                    </div>

                    <div className="elementor-element elementor-element-9746e14 premium-woo-product-align-left premium-qv-hidden-yes elementor-widget elementor-widget-premium-woo-products" data-id="9746e14" data-element_type="widget" data-e-type="widget" data-settings='{"products_show":1,"products_show_tablet":1,"arrows_position":"default","products_show_mobile":1,"products_on_scroll":1}' data-widget_type="premium-woo-products.grid-3">
                      <div className="elementor-widget-container">
                        <div className="premium-woocommerce premium-woo-products-carousel premium-woo-skin-grid-3 premium-woo-query-all" data-woo_carousel='{"slidesToShow":1,"slidesToScroll":1,"autoplaySpeed":3500,"autoplay":true,"infinite":true,"pauseOnHover":true,"speed":550,"arrows":true,"dots":true,"rtl":false,"prevArrow":"<a type=\"button\" data-role=\"none\" class=\"carousel-arrow carousel-prev\" aria-label=\"Previous\" role=\"button\" style=\"\"><i class=\"fas fa-angle-left\" aria-hidden=\"true\"><\\/i><\\/a>","nextArrow":"<a type=\"button\" data-role=\"none\" class=\"carousel-arrow carousel-next\" aria-label=\"Next\" role=\"button\" style=\"\"><i class=\"fas fa-angle-right\" aria-hidden=\"true\"><\\/i><\\/a>","responsive":[{"breakpoint":1024,"settings":{"slidesToShow":1,"slidesToScroll":1}},{"breakpoint":767,"settings":{"slidesToShow":1,"slidesToScroll":1}}]}' data-page-id="5548" data-skin="grid_3" data-quick-view="yes">
                          <div className="premium-woo-products-inner premium-woo-product__hover-zoomin">
                            <ul className="products columns-4 slick-initialized slick-slider slick-dotted" data-is-loaded="true">
                              <a type="button" data-role="none" className="carousel-arrow carousel-prev slick-arrow" aria-label="Previous" role="button" style={{}}><i className="fas fa-angle-left" aria-hidden="true"></i></a>
                              <div className="slick-list draggable">
                                <div className="slick-track" style={{ opacity: 1, width: '5753px', transform: 'translate3d(-2092px, 0px, 0px)' }}>
                                  <div className="slick-slide slick-cloned" data-slick-index={-1} id="" aria-hidden="true" tabIndex={-1} style={{ width: '523px' }}>
                                    <div><ProductCarouselItem product={HERO_PRODUCTS[4]} tabIdx={-1} cloneId={false} /></div>
                                  </div>
                                  {HERO_PRODUCTS.map((p, i) => (
                                    <div
                                      key={p.id}
                                      className={`slick-slide${i === 3 ? ' slick-current slick-active' : ''}`}
                                      data-slick-index={i}
                                      aria-hidden={i !== 3}
                                      role="tabpanel"
                                      id={`slick-slide0${i}`}
                                      style={{ width: '523px' }}
                                      {...(i !== 3 ? { tabIndex: -1 } : {})}
                                    >
                                      <div><ProductCarouselItem product={p} tabIdx={i === 3 ? 0 : -1} cloneId={true} /></div>
                                    </div>
                                  ))}
                                  {HERO_PRODUCTS.map((p, i) => (
                                    <div
                                      key={`clone-post-${p.id}`}
                                      className="slick-slide slick-cloned"
                                      data-slick-index={5 + i}
                                      id=""
                                      aria-hidden="true"
                                      tabIndex={-1}
                                      style={{ width: '523px' }}
                                    >
                                      <div><ProductCarouselItem product={p} tabIdx={-1} cloneId={false} /></div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              <a type="button" data-role="none" className="carousel-arrow carousel-next slick-arrow" aria-label="Next" role="button" style={{}}><i className="fas fa-angle-right" aria-hidden="true"></i></a>
                              <ul className="slick-dots" role="tablist" style={{}}>
                                {HERO_PRODUCTS.map((_, i) => (
                                  <li key={i} role="presentation" className={i === 3 ? 'slick-active' : ''}><i className="fas fa-circle"></i></li>
                                ))}
                              </ul>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-bdec3f5 elementor-hidden-tablet elementor-hidden-mobile" data-id="bdec3f5" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-b6ea0b4 elementor-widget__width-auto elementor-absolute elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-image elementor-motion-effects-parent animated rotateIn" data-id="b6ea0b4" data-element_type="widget" data-e-type="widget" data-settings='{"_position":"absolute","motion_fx_motion_fx_mouse":"yes","motion_fx_mouseTrack_effect":"yes","motion_fx_mouseTrack_speed":{"unit":"px","size":0.3,"sizes":[]},"_animation":"rotateIn"}' data-widget_type="image.default">
                      <div className="elementor-widget-container elementor-motion-effects-element" style={{ transform: 'translateX(var(--translateX))translateY(var(--translateY))', '--translateX': '-2.6484375px', '--translateY': '5.417422867513611px' }}>
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
                    <div className="elementor-element elementor-element-da5ed64 elementor-widget__width-auto elementor-absolute elementor-hidden-tablet elementor-hidden-mobile elementor-invisible elementor-widget elementor-widget-image elementor-motion-effects-parent" data-id="da5ed64" data-element_type="widget" data-e-type="widget" data-settings='{"motion_fx_motion_fx_scrolling":"yes","motion_fx_motion_fx_mouse":"yes","motion_fx_mouseTrack_effect":"yes","motion_fx_mouseTrack_speed":{"unit":"px","size":0.3,"sizes":[]},"motion_fx_mouseTrack_direction":"negative","_animation":"rotateIn","_position":"absolute","motion_fx_devices":["desktop","tablet","mobile"]}' data-widget_type="image.default">
                      <div className="elementor-widget-container elementor-motion-effects-element">
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
