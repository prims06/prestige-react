import { Link } from 'react-router-dom';
import { CATEGORIES, STATUS_FILTERS, TYPE_FILTERS, STATUS_MENU_IDS, TYPE_MENU_IDS } from '../../data/shop';
import { FilterHeading, FilterNavHorizontal, FilterNavVertical, DesktopHeading, DesktopDivider } from './ShopFilters';
import ShopProductGrid from './ShopProductGrid';

function ShopCategories() {
  return (
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
  );
}

export default function ShopMain() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-10bc2a5 elementor-section-boxed elementor-section-height-default" data-id="10bc2a5" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">
        {/* Sidebar: categories + filters */}
        <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-2f274bb" data-id="2f274bb" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-7a2f5c5 elementor-widget elementor-widget-heading" data-id="7a2f5c5" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <h5 className="elementor-heading-title elementor-size-default">Categories</h5>
              </div>
            </div>
            <ShopCategories />
            <div className="elementor-element elementor-element-d85f855 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="d85f855" data-element_type="widget" data-e-type="widget" data-widget_type="divider.default">
              <div className="elementor-widget-container">
                <div className="elementor-divider">
                  <span className="elementor-divider-separator"></span>
                </div>
              </div>
            </div>
            {/* Mobile filters */}
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
            {/* Desktop filters */}
            <DesktopHeading dataId="dada6eb" title="Status" />
            <FilterNavVertical dataId="2d6e778" items={STATUS_FILTERS} menuIds={STATUS_MENU_IDS} />
            <DesktopDivider dataId="2c43708" />
            <DesktopHeading dataId="c7f6844" title="Type" />
            <FilterNavVertical dataId="16c4498" items={TYPE_FILTERS} menuIds={TYPE_MENU_IDS} />
          </div>
        </div>
        {/* Product grid */}
        <div className="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-2da72a2" data-id="2da72a2" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <ShopProductGrid />
          </div>
        </div>
      </div>
    </section>
  );
}
