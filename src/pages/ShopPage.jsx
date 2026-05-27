import { Link } from 'react-router-dom';

const CATEGORIES = [
  { name: '🔥 Trading cards', count: 3, href: '/shop', img: '/images/shop/antique-statue-dressed-in-down-jacket-and-sunglass-2022-01-11-04-36-07-utc-1-1-1-300x300.jpg' },
  { name: '📸 Photography', count: 7, href: '/shop', img: '/images/shop/ricardo-gomez-angel-PzYiCWOHtfU-unsplash-1-300x300.jpg' },
  { name: '🎵 Music', count: 2, href: '/shop', img: '/images/shop/erik-mclean-9y1cTVKe1IY-unsplash-1-300x300.jpg' },
  { name: '🎨 Art', count: 6, href: '/shop', img: '/images/shop/robert-keane-rlbG0p_nQOU-unsplash-1-300x300.jpg' },
  { name: '🌐 Virtual worlds', count: 5, href: '/shop', img: '/images/shop/mo-DP0LMBAIzZQ-unsplash-1-e1654762954141-300x300.jpg' },
  { name: '✨ Collectibles', count: 4, href: '/shop', img: '/images/shop/8machine-_-wIuF0-I6H_Y-unsplash-1-1-300x300.jpg' },
  { name: 'Uncategorized', count: null, href: '/shop', img: '/images/shop/mo-gJzpzEajT6c-unsplash-1-300x300.jpg' },
  { name: '⚽ Sports', count: 1, href: '/shop', img: '/images/shop/pan-yunbo-EgL0EtzL0Wc-unsplash-1-300x300.jpg' },
  { name: '⚡ Utility', count: 2, href: '/shop-2', img: '/images/shop/niklas-liniger-fIPXnxN7-9A-unsplash-1-e1652950002551-300x300.jpg' },
];

const STATUS_FILTERS = ['Buy now', 'New', 'On auction'];
const TYPE_FILTERS = ['Video', 'Image', '3D'];
const STATUS_MENU_IDS = [1766, 1767, 1768];
const TYPE_MENU_IDS = [5149, 5150, 5151];

const PRODUCTS = [
  { id: 2472, liCls: ' post-2472 product first instock shipping-taxable product-type-external', img: '/images/shop/pawel-czerwinski-hNrd99q5peI-unsplash-1-600x600.jpg', hot: false, cat: '📸 Photography', name: 'Abstract image', price: '$2,560.00', sku: '1234598-2' },
  { id: 1660, liCls: ' post-1660 product  instock featured shipping-taxable product-type-external', img: '/images/shop/milad-fakurian-PjG_SXDkpwQ-unsplash-600x600.jpg', hot: true, cat: '✨ Collectibles', name: 'Сolorful 3D object', price: '$890.00', sku: '123455-1-1-1' },
  { id: 214, liCls: ' post-214 product last instock featured shipping-taxable product-type-external', img: '/images/shop/anunay-rai-awMWm6ayLTc-unsplash-600x600.jpg', hot: true, cat: '🔥 Trading cards', name: 'Logical impact', price: '$1,400.00', sku: '123455-1-1' },
  { id: 212, liCls: ' post-212 product first instock shipping-taxable product-type-external', img: '/images/shop/simon-lee-fyZOY0HiF9A-unsplash-1-600x600.jpg', hot: false, cat: '🎨 Art', name: 'Infinite figure', price: '$890.00', sku: '123455' },
  { id: 211, liCls: ' post-211 product  instock featured shipping-taxable product-type-external', img: '/images/shop/simon-lee-zA66MV4EyXc-unsplash-600x600.jpg', hot: true, cat: '🎨 Art', name: 'The image of a man', price: '$1,200.00', sku: '1234511' },
  { id: 210, liCls: ' post-210 product last instock featured shipping-taxable product-type-external', img: '/images/shop/kevin-chin-HvdRVnyV0PQ-unsplash-1-1-600x600.jpg', hot: true, cat: '⚡ Utility', name: '3D object Loppi', price: '$2,560.00', sku: '1234598-1-1' },
  { id: 209, liCls: ' post-209 product first instock featured shipping-taxable product-type-external', img: '/images/shop/mo-DP0LMBAIzZQ-unsplash-1-600x600.jpg', hot: true, cat: '🌐 Virtual worlds', name: '3D renders', price: '$2,560.00', sku: '1234598-1' },
  { id: 208, liCls: ' post-208 product  instock featured shipping-taxable product-type-external', img: '/images/shop/simon-lee-Ue97JK9S0QE-unsplash-2-1-600x600.jpg', hot: true, cat: '🎨 Art', name: 'Pixel art', price: '$2,560.00', sku: '1234598' },
  { id: 207, liCls: ' post-207 product last instock shipping-taxable product-type-external', img: '/images/shop/vadim-bogulov-rP_pS1VMd7c-unsplash-1-600x600.jpg', hot: false, cat: '🔥 Trading cards', name: 'Pixel art', price: '$230.00', sku: '12345234-1-1-1-1' },
  { id: 206, liCls: ' post-206 product first instock featured shipping-taxable product-type-external', img: '/images/shop/johan-lindberg-IcWtW5WsmTg-unsplash-1-600x600.jpg', hot: true, cat: '🎨 Art', name: '3d art figure', price: '$230.00', sku: '12345234-1-1-1' },
  { id: 205, liCls: ' post-205 product  instock shipping-taxable product-type-external', img: '/images/shop/davisuko-rhUU1pemhQ0-unsplash-1-600x600.jpg', hot: false, cat: '📸 Photography', name: 'Abstract image', price: '$230.00', sku: '12345234-1-1' },
  { id: 204, liCls: ' post-204 product last instock shipping-taxable product-type-external', img: '/images/shop/hans-eiskonen-8Pm_A-OHJGg-unsplash-1-1-600x600.jpg', hot: false, cat: '🌐 Virtual worlds', name: '3d art figure', price: '$230.00', sku: '12345234-1' },
];

const PAGES = [1, 2, 3];

export default function ShopPage() {
  return (
    <div data-elementor-type="product-archive" data-elementor-id="1592" className="elementor elementor-1592 elementor-location-archive product" data-elementor-post-type="elementor_library">
      <ShopHeader />
      <ShopMain />
    </div>
  );
}

function ShopHeader() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-3cfa651 elementor-section-boxed elementor-section-height-default" data-id="3cfa651" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-f91960d" data-id="f91960d" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-c514bed elementor-widget elementor-widget-theme-archive-title elementor-page-title elementor-widget-heading" data-id="c514bed" data-element_type="widget" data-e-type="widget" data-widget_type="theme-archive-title.default">
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">Category: {'🎨'} Art</h2>
              </div>
            </div>
            <div className="elementor-element elementor-element-1b637e3 elementor-widget elementor-widget-mdp-crumber-elementor" data-id="1b637e3" data-element_type="widget" data-e-type="widget" data-widget_type="mdp-crumber-elementor.default">
              <div className="elementor-widget-container">
                <div className="mdp-crumber-elementor-box">
                  <div className="mdp-crumber-elementor-breadcrumbs">
                    <div className="mdp-crumber-elementor-breadcrumbs-item  mdp-crumber-elementor-breadcrumbs-icon-position-">
                      <span>Home</span>
                    </div>
                    <span className="mdp-crumber-elementor-separator mdp-crumber-elementor-separator-hide-last"> {'•'} </span>
                    <div className="mdp-crumber-elementor-breadcrumbs-item mdp-crumber-elementor-breadcrumbs-item-active mdp-crumber-elementor-breadcrumbs-icon-position-">
                      <span>Shop</span>
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



function ShopMain() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-10bc2a5 elementor-section-boxed elementor-section-height-default" data-id="10bc2a5" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-2f274bb" data-id="2f274bb" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-7a2f5c5 elementor-widget elementor-widget-heading" data-id="7a2f5c5" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <h5 className="elementor-heading-title elementor-size-default">Categories</h5>
              </div>
            </div>
            <div className="elementor-element elementor-element-e2f26ee elementor-grid-3 elementor-product-loop-item--align-left elementor-grid-tablet-5 elementor-grid-mobile-2 elementor-products-grid elementor-wc-products elementor-widget elementor-widget-wc-categories" data-id="e2f26ee" data-element_type="widget" data-e-type="widget" data-widget_type="wc-categories.default">
              <div className="elementor-widget-container">
                <div className="woocommerce columns-3">
                  <ul className="products elementor-grid columns-3">
                    {CATEGORIES.map((cat, i) => {
                      const liCls = i % 3 === 0 ? 'product-category product first' : i % 3 === 2 ? 'product-category product last' : 'product-category product';
                      return (
                        <li key={cat.name} className={liCls}>
                          <Link aria-label={`Visit product category ${cat.name}`} to={cat.href}>
                            <img
                              {...(i === 0 ? { fetchPriority: 'high' } : { loading: 'lazy' })}
                              src={cat.img}
                              alt={cat.name}
                              width="300"
                              height="300"
                              sizes="(max-width: 300px) 100vw, 300px"
                            />
                            <h2 className="woocommerce-loop-category__title">
                              {cat.name}{cat.count != null && <> <mark className="count">({cat.count})</mark></>}
                            </h2>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-d85f855 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="d85f855" data-element_type="widget" data-e-type="widget" data-widget_type="divider.default">
              <div className="elementor-widget-container">
                <div className="elementor-divider">
                  <span className="elementor-divider-separator"></span>
                </div>
              </div>
            </div>
            <section className="elementor-section elementor-inner-section elementor-element elementor-element-24f7c01 elementor-hidden-desktop elementor-section-boxed elementor-section-height-default" data-id="24f7c01" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
              <div className="elementor-container elementor-column-gap-no">
                <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-a638030" data-id="a638030" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <FilterHeading dataId="e8a24b2" title="Status" />
                    <FilterNavHorizontal dataId="da874d7" items={STATUS_FILTERS} menuIds={STATUS_MENU_IDS} />
                  </div>
                </div>
                <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-256d4cb" data-id="256d4cb" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <FilterHeading dataId="402656c" title="Type" />
                    <FilterNavHorizontal dataId="e8ccf26" items={TYPE_FILTERS} menuIds={TYPE_MENU_IDS} />
                  </div>
                </div>
              </div>
            </section>
            <DesktopHeading dataId="dada6eb" title="Status" />
            <FilterNavVertical dataId="2d6e778" items={STATUS_FILTERS} menuIds={STATUS_MENU_IDS} />
            <DesktopDivider dataId="2c43708" />
            <DesktopHeading dataId="c7f6844" title="Type" />
            <FilterNavVertical dataId="16c4498" items={TYPE_FILTERS} menuIds={TYPE_MENU_IDS} />
          </div>
        </div>
        <div className="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-2da72a2" data-id="2da72a2" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <ShopProductGrid />
          </div>
        </div>
      </div>
    </section>
  );
}


function ProductCard({ product }) {
  return (
    <li className={product.liCls}>
      <div className="premium-woo-product-wrapper premium-con-lq__none">
        <div className="premium-woo-product-thumbnail">
          {product.hot && (
            <div className="premium-woo-ribbon-container">
              <div className="premium-woo-product-featured-wrap">
                <span className="premium-woo-product-featured">Hot</span>
              </div>
            </div>
          )}
          <Link to="/product" className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
            <img src={product.img} alt="" />
          </Link>
          <div className="premium-woo-qv-data" data-product-id={product.id}></div>
        </div>
        <div className="premium-woo-products-details-wrap">
          <span className="premium-woo-product-category">{product.cat}</span>
          <Link to="/product" className="premium-woo-product__link"><h2 className="woocommerce-loop-product__title">{product.name}</h2></Link>
          <span className="price"><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>{product.price.replace('$', '')}</bdi></span></span>
          <div className="premium-woo-product-actions-wrapper">
            <div className="premium-woo-atc-button" data-variations={JSON.stringify('true')}>
              <Link to="/shop" aria-describedby={`woocommerce_loop_add_to_cart_link_describedby_${product.id}`} data-quantity="1" className="button product_type_external" data-product_id={product.id} data-product_sku={product.sku} aria-label="Buy now" rel="nofollow">Buy now</Link>
              <span id={`woocommerce_loop_add_to_cart_link_describedby_${product.id}`} className="screen-reader-text"></span>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

function ShopProductGrid() {
  return (
    <div className="elementor-element elementor-element-785758d premium-woo-product-align-left premium-qv-hidden-yes elementor-widget elementor-widget-premium-woo-products" data-id="785758d" data-element_type="widget" data-e-type="widget" data-widget_type="premium-woo-products.grid-3">
      <div className="elementor-widget-container">
        <div className="premium-woocommerce premium-woo-products-grid premium-woo-skin-grid-3 premium-woo-query-all" data-page-id="1592" data-skin="grid_3" data-quick-view="yes">
          <div className="premium-woo-products-inner premium-woo-product__hover-zoomin">
            <ul className="products columns-3">
              {PRODUCTS.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </ul>
            <ShopPagination />
          </div>
        </div>
      </div>
    </div>
  );
}

function ShopPagination() {
  return (
    <nav className="premium-woo-products-pagination">
      <ul className="page-numbers">
        {PAGES.map(page => (
          <li key={page}>
            {page === 1 ? (
              <span aria-label={`Page ${page}`} aria-current="page" className="page-numbers current">{page}</span>
            ) : (
              <Link aria-label={`Page ${page}`} className="page-numbers" to="/shop">{page}</Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}


function FilterHeading({ dataId, title }) {
  return (
    <div className={`elementor-element elementor-element-${dataId} elementor-widget elementor-widget-heading`} data-id={dataId} data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      <div className="elementor-widget-container">
        <h5 className="elementor-heading-title elementor-size-default">{title}</h5>
      </div>
    </div>
  );
}

function FilterNavHorizontal({ dataId, items, menuIds, href = '/shop' }) {
  const menu1Id = `menu-1-${dataId}`;
  const menu2Id = `menu-2-${dataId}`;
  return (
    <div className={`elementor-element elementor-element-${dataId} elementor-nav-menu__align-start elementor-nav-menu--dropdown-none elementor-widget elementor-widget-nav-menu`} data-id={dataId} data-element_type="widget" data-e-type="widget" data-settings='{"submenu_icon":{"value":"<i class=\"\" aria-hidden=\"true\"><\/i>","library":""},"layout":"horizontal"}' data-widget_type="nav-menu.default">
      <div className="elementor-widget-container">
        <nav aria-label="Menu" className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-text e--animation-none">
          <ul id={menu1Id} className="elementor-nav-menu">
            {items.map((item, i) => (
              <li key={item} className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-${menuIds[i]}`}>
                <Link to={href} className="elementor-item elementor-item-anchor">{item}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="elementor-nav-menu--dropdown elementor-nav-menu__container" aria-hidden="true" style={{ '--menu-height': 0 }}>
          <ul id={menu2Id} className="elementor-nav-menu">
            {items.map((item, i) => (
              <li key={item} className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-${menuIds[i]}`}>
                <Link to={href} className="elementor-item elementor-item-anchor" tabIndex={-1}>{item}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

function DesktopHeading({ dataId, title }) {
  return (
    <div className={`elementor-element elementor-element-${dataId} elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-heading`} data-id={dataId} data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      <div className="elementor-widget-container">
        <h5 className="elementor-heading-title elementor-size-default">{title}</h5>
      </div>
    </div>
  );
}

function DesktopDivider({ dataId }) {
  return (
    <div className={`elementor-element elementor-element-${dataId} elementor-hidden-tablet elementor-hidden-mobile elementor-widget-divider--view-line elementor-widget elementor-widget-divider`} data-id={dataId} data-element_type="widget" data-e-type="widget" data-widget_type="divider.default">
      <div className="elementor-widget-container">
        <div className="elementor-divider">
          <span className="elementor-divider-separator"></span>
        </div>
      </div>
    </div>
  );
}

function FilterNavVertical({ dataId, items, menuIds, href = '/shop' }) {
  const menu1Id = `menu-1-${dataId}`;
  const menu2Id = `menu-2-${dataId}`;
  return (
    <div className={`elementor-element elementor-element-${dataId} elementor-nav-menu__align-start elementor-nav-menu--dropdown-none elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-nav-menu`} data-id={dataId} data-element_type="widget" data-e-type="widget" data-settings='{"layout":"vertical","submenu_icon":{"value":"<i class=\"\" aria-hidden=\"true\"><\/i>","library":""}}' data-widget_type="nav-menu.default">
      <div className="elementor-widget-container">
        <nav aria-label="Menu" className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-vertical e--pointer-background e--animation-fade">
          <ul id={menu1Id} className="elementor-nav-menu sm-vertical">
            {items.map((item, i) => (
              <li key={item} className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-${menuIds[i]}`}>
                <Link to={href} className="elementor-item elementor-item-anchor">{item}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="elementor-nav-menu--dropdown elementor-nav-menu__container" aria-hidden="true" style={{ '--menu-height': 0 }}>
          <ul id={menu2Id} className="elementor-nav-menu sm-vertical">
            {items.map((item, i) => (
              <li key={item} className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-${menuIds[i]}`}>
                <Link to={href} className="elementor-item elementor-item-anchor" tabIndex={-1}>{item}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
