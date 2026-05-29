import CollectionCard from './CollectionCard';
import { COLLECTIONS_ROW2 } from '../../data/home2';
import { useTopEscorts } from '../../hooks/useCatalog';
import { resolveMediaUrl } from '../../api/client';

const PLACEHOLDER_IMG = '/images/shop/anunay-rai-awMWm6ayLTc-unsplash-600x600.jpg';

const ROW2_SLOTS = [
  { outerColId: 'a13bc42', outerColCls: '', innerSecId: 'f0c702e', innerColId: '35c54cc', titleId: 'bc7a82f', nftId: 'c546649', imgBoxId: 'd759e75', mobileHandleId: '18bd5a1', spacerId: '30a1b3f', galleryId: '0491c85' },
  { outerColId: 'c7832be', outerColCls: '', innerSecId: '511c192', innerColId: '6502cde', titleId: '8e60cd7', nftId: '7f079b2', imgBoxId: 'f3da4c0', mobileHandleId: '6cf1cbc', spacerId: '5cf19b8', galleryId: '0746266' },
  { outerColId: 'b9e9e5c', outerColCls: 'elementor-hidden-tablet', innerSecId: '1f504f4', innerColId: '0236a14', titleId: 'f46251d', nftId: '5b310b5', imgBoxId: 'aee6900', mobileHandleId: 'f50e880', spacerId: '187aa28', galleryId: 'e6c3b81' },
];

function mapEscortToCard(esc, slot) {
  const services = Array.isArray(esc.services) ? esc.services.slice(0, 3) : [];
  const galleryItems = services
    .map((s) => { const url = resolveMediaUrl(s.mediaUrl); return url ? { thumb: url, w: '300', h: '300' } : null; })
    .filter(Boolean);
  if (!galleryItems.length) {
    const fb = resolveMediaUrl(esc.avatarUrl) || PLACEHOLDER_IMG;
    galleryItems.push({ thumb: fb, w: '300', h: '300' });
  }
  const location = [esc.quartier, esc.city].filter(Boolean).join(', ');
  return {
    ...slot,
    title: esc.escort?.displayName || '—',
    nftCount: services.length + ' service' + (services.length > 1 ? 's' : ''),
    avatarSrc: resolveMediaUrl(esc.avatarUrl) || PLACEHOLDER_IMG,
    avatarTitle: esc.escort?.displayName || 'Escorte',
    handle: location || '—',
    galleryAspectRatio: '31.197170922875955%',
    galleryItems,
  };
}

export default function CollectionsRow2Section() {
  const { data: apiData } = useTopEscorts(6);
  const apiEscorts = Array.isArray(apiData) ? apiData.slice(3, 6) : [];

  const useApi = apiEscorts.length > 0;
  const cards = useApi
    ? apiEscorts.map((esc, i) => mapEscortToCard(esc, ROW2_SLOTS[i % ROW2_SLOTS.length]))
    : COLLECTIONS_ROW2;

  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-21714a8 elementor-section-boxed elementor-section-height-default elementor-invisible" data-id="21714a8" data-element_type="section" data-e-type="section" data-settings='{"animation":"fadeInUp","mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">
        {cards.map((c, i) => (
          <CollectionCard
            key={c.outerColId}
            c={c}
            coverUrl={useApi ? (resolveMediaUrl(apiEscorts[i]?.coverUrl) || undefined) : undefined}
          />
        ))}
      </div>
    </section>
  );
}
