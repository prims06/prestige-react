import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
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
          <Link to="/product" className="premium-woo-product__link">
            <h2 className="woocommerce-loop-product__title">{product.name}</h2>
          </Link>
          <span className="price">
            <span className="woocommerce-Price-amount amount">
              <bdi><span className="woocommerce-Price-currencySymbol">$</span>{product.price.replace('$', '')}</bdi>
            </span>
          </span>
          <div className="premium-woo-product-actions-wrapper">
            <div className="premium-woo-atc-button" data-variations={JSON.stringify('true')}>
              <Link
                to="/shop"
                aria-describedby={`woocommerce_loop_add_to_cart_link_describedby_${product.id}`}
                data-quantity="1"
                className="button product_type_external"
                data-product_id={product.id}
                data-product_sku={product.sku}
                aria-label="Buy now"
                rel="nofollow"
              >Buy now</Link>
              <span id={`woocommerce_loop_add_to_cart_link_describedby_${product.id}`} className="screen-reader-text"></span>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
