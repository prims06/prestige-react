import CollectionCard from './CollectionCard';
import { COLLECTIONS_ROW1 } from '../../data/home2';
import { useTopEscorts } from '../../hooks/useCatalog';
import { resolveMediaUrl } from '../../api/client';
import EscortsGrid from '../escortes/EscortsGrid';

const PLACEHOLDER_IMG = '/images/shop/anunay-rai-awMWm6ayLTc-unsplash-600x600.jpg';

const ROW1_SLOTS = [
  { outerColId: 'bb1ee8f', outerColCls: '', innerSecId: 'e8df942', innerColId: '09516ab', titleId: '4a5f7f5', nftId: '8f4112a', imgBoxId: '36ac3bf', mobileHandleId: '85aba68', spacerId: '1bce2ac', galleryId: 'f1bd42c' },
  { outerColId: 'e5a6fcb', outerColCls: '', innerSecId: '557658b', innerColId: '6de3ebb', titleId: '900a455', nftId: '27d1ebb', imgBoxId: '667b19a', mobileHandleId: '585c903', spacerId: 'fc928f8', galleryId: '875e3c4' },
  { outerColId: 'b77ff68', outerColCls: 'elementor-hidden-tablet', innerSecId: '27c2567', innerColId: '727009c', titleId: '2c4b08f', nftId: 'af0bdbe', imgBoxId: '1597c72', mobileHandleId: 'a1d0783', spacerId: 'abad823', galleryId: '429d969' },
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
    nftCount: (services.length) + ' service' + (services.length > 1 ? 's' : ''),
    avatarSrc: resolveMediaUrl(esc.avatarUrl) || PLACEHOLDER_IMG,
    avatarTitle: esc.escort?.displayName || 'Escorte',
    handle: location || '—',
    galleryAspectRatio: '31.197170922875955%',
    galleryItems,
  };
}

export default function CollectionsRow1Section() {
  // const { data: apiData } = useTopEscorts(3);
  // const apiEscorts = Array.isArray(apiData) ? apiData : [];

  // const useApi = apiEscorts.length > 0;
  // const cards = useApi
  //   ? apiEscorts.map((esc, i) => mapEscortToCard(esc, ROW1_SLOTS[i % ROW1_SLOTS.length]))
  //   : COLLECTIONS_ROW1;

  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-45b7777 elementor-section-boxed elementor-section-height-default elementor-invisible" data-id="45b7777" data-element_type="section" data-e-type="section" data-settings='{"animation":"fadeInUp","mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">
        <EscortsGrid filters={{limit:6}} />
      </div>
    </section>
  );
}
