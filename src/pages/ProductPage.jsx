import ProductBreadcrumb from '../components/product/ProductBreadcrumb';
import ProductDetailSection from '../components/product/ProductDetailSection';

export default function ProductPage() {
  return (
    <>
      <div className="woocommerce-notices-wrapper"></div>
      <div data-elementor-type="product" data-elementor-id="1614" className="elementor elementor-1614 elementor-location-single post-214 product type-product status-publish has-post-thumbnail product_cat-trading-cards product_tag-nft first instock featured shipping-taxable product-type-external product" data-elementor-post-type="elementor_library">
        <ProductBreadcrumb />
        <ProductDetailSection />
      </div>
    </>
  );
}
