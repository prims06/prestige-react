import { useCallback, useEffect } from 'react';
import { useInfinitePage } from '../../hooks/useInfinitePage';
import { catalogApi } from '../../api/modules/catalog';
import { getErrorMessage } from '../../api/errorHandler';
import ProductCard from './ProductCard';
import { Spinner, EmptyState } from '../ui';

// ─────────────────────────────────────────────────────────────
// ANCIENNE VERSION (NFT shop avec PRODUCTS statiques)
// ─────────────────────────────────────────────────────────────
// import { Link } from 'react-router-dom';
// import { PRODUCTS, PAGES } from '../../data/shop';
//
// function ShopPagination() {
//   return (
//     <nav className="premium-woo-products-pagination">
//       <ul className="page-numbers">
//         {PAGES.map(page => (
//           <li key={page}>
//             {page === 1 ? (
//               <span aria-label={`Page ${page}`} aria-current="page" className="page-numbers current">{page}</span>
//             ) : (
//               <Link aria-label={`Page ${page}`} className="page-numbers" to="/shop">{page}</Link>
//             )}
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }
//
// export default function ShopProductGrid() {
//   return (
//     <div className="elementor-element elementor-element-785758d ...">
//       ...
//       <ul className="products columns-3">
//         {PRODUCTS.map(p => (<ProductCard key={p.id} product={p} />))}
//       </ul>
//       <ShopPagination />
//       ...
//     </div>
//   );
// }

const PAGE_SIZE = 12;

function gridPosition(i) {
  const m = i % 3;
  if (m === 0) return 'first';
  if (m === 2) return 'last';
  return '';
}

// "Charger plus" stylé comme la pagination originale du theme
function LoadMore({ onClick, isLoading, hasMore }) {
  if (!hasMore) return null;
  return (
    <nav className="premium-woo-products-pagination">
      <ul className="page-numbers">
        <li>
          <a
            href="#"
            className="page-numbers"
            onClick={(e) => { e.preventDefault(); if (!isLoading) onClick(); }}
            aria-disabled={isLoading}
          >
            {isLoading ? 'Chargement…' : 'Charger plus'}
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default function ShopProductGrid({ filters = {} }) {
  const fetcher = useCallback(
    (cursor) => catalogApi.listServices({ ...filters, cursor, limit: PAGE_SIZE }),
    [filters],
  );
  const { items, isLoading, error, hasMore, loadMore } = useInfinitePage(fetcher);

  // Reset + initial load a chaque changement de fetcher (= de filters)
  useEffect(() => {
    loadMore(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetcher]);

  return (
    <div className="elementor-element elementor-element-785758d premium-woo-product-align-left premium-qv-hidden-yes elementor-widget elementor-widget-premium-woo-products" data-id="785758d" data-element_type="widget" data-e-type="widget" data-widget_type="premium-woo-products.grid-3">
      <div className="elementor-widget-container">
        <div className="premium-woocommerce premium-woo-products-grid premium-woo-skin-grid-3 premium-woo-query-all" data-page-id="1592" data-skin="grid_3" data-quick-view="yes">
          <div className="premium-woo-products-inner premium-woo-product__hover-zoomin">

            {error && (
              <div style={{ padding: '1rem', color: '#e74c3c', marginBottom: '1rem' }}>
                {getErrorMessage(error)}
              </div>
            )}

            {items.length > 0 && (
              <ul className="products columns-3">
                {items.map((svc, i) => (
                  <ProductCard key={svc.id} service={svc} position={gridPosition(i)} />
                ))}
              </ul>
            )}

            {isLoading && items.length === 0 && (
              <div style={{ display: 'flex', justifyContent: 'center', padding: '3rem 0' }}>
                <Spinner size="lg" />
              </div>
            )}

            {!isLoading && !error && items.length === 0 && (
              <EmptyState
                icon={<i className="fas fa-search" />}
                title="Aucun service trouvé"
                description="Aucun service ne correspond à vos critères. Essayez d'élargir vos filtres."
              />
            )}

            <LoadMore onClick={() => loadMore()} isLoading={isLoading} hasMore={hasMore} />
          </div>
        </div>
      </div>
    </div>
  );
}
