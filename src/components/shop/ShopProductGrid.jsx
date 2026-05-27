import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { PRODUCTS, PAGES } from '../../data/shop';

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

export default function ShopProductGrid() {
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
