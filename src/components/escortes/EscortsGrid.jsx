import { useCallback, useEffect } from 'react';
import { useInfinitePage } from '../../hooks/useInfinitePage';
import { catalogApi } from '../../api/modules/catalog';
import { resolveMediaUrl } from '../../api/client';
import { getErrorMessage } from '../../api/errorHandler';
import CollectionCard from '../home2/CollectionCard';
import { Spinner, EmptyState } from '../ui';

const PAGE_SIZE = 12;
const PLACEHOLDER_IMG = '/images/shop/anunay-rai-awMWm6ayLTc-unsplash-600x600.jpg';

// Slots reutilisant les IDs des cartes des sections CollectionsRow1/Row2 de la
// home-2. Permet d'heriter du CSS Elementor (post-18.css) pour la mise en page
// des cartes — padding, border-radius, overlay, gallery, etc. — sans dupliquer
// le CSS. Le background hardcode par data-id est surcharge dynamiquement par
// la prop `coverUrl` de CollectionCard (photo de couverture de l'escorte).
const CARD_SLOTS = [
  { outerColId: 'bb1ee8f', innerSecId: 'e8df942', innerColId: '09516ab', titleId: '4a5f7f5', nftId: '8f4112a', imgBoxId: '36ac3bf', mobileHandleId: '85aba68', spacerId: '1bce2ac', galleryId: 'f1bd42c' },
  { outerColId: 'e5a6fcb', innerSecId: '557658b', innerColId: '6de3ebb', titleId: '900a455', nftId: '27d1ebb', imgBoxId: '667b19a', mobileHandleId: '585c903', spacerId: 'fc928f8', galleryId: '875e3c4' },
  { outerColId: 'b77ff68', innerSecId: '27c2567', innerColId: '727009c', titleId: '2c4b08f', nftId: 'af0bdbe', imgBoxId: '1597c72', mobileHandleId: 'a1d0783', spacerId: 'abad823', galleryId: '429d969' },
  { outerColId: 'a13bc42', innerSecId: 'f0c702e', innerColId: '35c54cc', titleId: 'bc7a82f', nftId: 'c546649', imgBoxId: 'd759e75', mobileHandleId: '18bd5a1', spacerId: '30a1b3f', galleryId: '0491c85' },
  { outerColId: 'c7832be', innerSecId: '511c192', innerColId: '6502cde', titleId: '8e60cd7', nftId: '7f079b2', imgBoxId: 'f3da4c0', mobileHandleId: '6cf1cbc', spacerId: '5cf19b8', galleryId: '0746266' },
  { outerColId: 'b9e9e5c', innerSecId: '1f504f4', innerColId: '0236a14', titleId: 'f46251d', nftId: '5b310b5', imgBoxId: 'aee6900', mobileHandleId: 'f50e880', spacerId: '187aa28', galleryId: 'e6c3b81' },
];

const GALLERY_ASPECT_RATIO = '31.197170922875955%';

function buildCardData(esc, i) {
  const slot = CARD_SLOTS[i % CARD_SLOTS.length];
  const services = Array.isArray(esc.services) ? esc.services.slice(0, 3) : [];
  const galleryItems = services
    .map((s) => {
      const url = resolveMediaUrl(s.mediaUrl);
      return url ? { thumb: url, w: '300', h: '300' } : null;
    })
    .filter(Boolean);
  if (galleryItems.length === 0) {
    const fallback = resolveMediaUrl(esc.avatarUrl) || PLACEHOLDER_IMG;
    galleryItems.push({ thumb: fallback, w: '300', h: '300' });
  }
  const location = [esc.quartier, esc.city].filter(Boolean).join(', ');
  return {
    ...slot,
    title: esc.escort?.displayName || '—',
    nftCount: `${services.length} service${services.length > 1 ? 's' : ''}`,
    avatarSrc: resolveMediaUrl(esc.avatarUrl) || PLACEHOLDER_IMG,
    avatarTitle: esc.escort?.displayName || 'Escorte',
    handle: location || '—',
    galleryAspectRatio: GALLERY_ASPECT_RATIO,
    galleryItems,
  };
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

export default function EscortsGrid({ filters = {} }) {
  const fetcher = useCallback(
    (cursor) => catalogApi.listEscorts({ ...filters, cursor, limit: PAGE_SIZE }),
    [filters],
  );
  const { items, isLoading, error, hasMore, loadMore } = useInfinitePage(fetcher);

  useEffect(() => {
    loadMore(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetcher]);

  // Wrapper widget identique a ShopProductGrid (elementor-element-785758d) :
  // c'est sous ce scope (.elementor-1592 ...-785758d .premium-woo-products-pagination)
  // que post-1592.css stylise la pagination "Charger plus".
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

            {/* Le CSS des CollectionCard (post-18.css) est scope sous .elementor-18.
                On reproduit donc le contexte exact de la home-2 : wrapper
                .elementor-18 + section 45b7777 + container. Largeur des colonnes
                = 50% (defini par post-18.css) => 2 cartes par ligne. */}
            {items.length > 0 && (
              <div className="elementor elementor-18">
                <section className="elementor-section elementor-top-section elementor-element elementor-element-45b7777 elementor-section-boxed elementor-section-height-default" data-id="45b7777" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
                  <div className="elementor-container elementor-column-gap-no">
                    {items.map((esc, i) => {
                      const cover = resolveMediaUrl(esc.coverUrl) || resolveMediaUrl(esc.avatarUrl) || PLACEHOLDER_IMG;
                      return (
                        <CollectionCard
                          key={esc.id}
                          c={buildCardData(esc, i)}
                          coverUrl={cover}
                        />
                      );
                    })}
                  </div>
                </section>
              </div>
            )}

            {isLoading && items.length === 0 && (
              <div style={{ display: 'flex', justifyContent: 'center', padding: '3rem 0' }}>
                <Spinner size="lg" />
              </div>
            )}

            {!isLoading && !error && items.length === 0 && (
              <EmptyState
                icon={<i className="fas fa-search" />}
                title="Aucune escorte trouvée"
                description="Aucune escorte ne correspond à vos critères. Essayez d'élargir vos filtres."
              />
            )}

            <LoadMore onClick={() => loadMore()} isLoading={isLoading} hasMore={hasMore} />
          </div>
        </div>
      </div>
    </div>
  );
}
