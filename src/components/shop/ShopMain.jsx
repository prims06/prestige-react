import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { catalogApi } from '../../api/modules/catalog';
import { resolveMediaUrl } from '../../api/client';
import { getErrorMessage } from '../../api/errorHandler';
import { FilterHeading, DesktopHeading, DesktopDivider, FilterNavClickList } from './ShopFilters';
import ShopProductGrid from './ShopProductGrid';
import { Spinner, EmptyState } from '../ui';

// ─────────────────────────────────────────────────────────────
// ANCIENNES IMPORTS / DATA NFT — gardes commentes pour rollback
// ─────────────────────────────────────────────────────────────
// import { CATEGORIES, STATUS_FILTERS, TYPE_FILTERS, STATUS_MENU_IDS, TYPE_MENU_IDS } from '../../data/shop';
// import { FilterNavHorizontal, FilterNavVertical, DesktopHeading } from './ShopFilters';
//
// function ShopCategories() { ... rendu des categories NFT hardcoded ... }

const PLACEHOLDER_IMG = '/images/shop/anunay-rai-awMWm6ayLTc-unsplash-600x600.jpg';

// Villes & quartiers Cameroun representes. A enrichir / brancher sur un
// endpoint backend plus tard si besoin.
const REGIONS = [
  { city: 'Douala',   quartiers: ['Akwa', 'Bonanjo', 'Bonapriso', 'Bonamoussadi', 'Bali'] },
  { city: 'Yaoundé',  quartiers: ['Bastos', 'Mvog-Mbi', 'Mvan', 'Nlongkak', 'Centre-ville'] },
  { city: 'Bafoussam', quartiers: ['Centre', 'Tougang'] },
  { city: 'Kribi',    quartiers: ['Centre', 'Mboa-Manga'] },
];

// ── Top escortes (sidebar — remplace les categories) ───────────
function TopEscorts() {
  const { data, isLoading, error } = useFetch(
    () => catalogApi.homepageTopEscorts(6),
    [],
  );
  const escorts = Array.isArray(data) ? data : [];

  if (isLoading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem 0' }}>
        <Spinner size="md" />
      </div>
    );
  }
  if (error) {
    return <div style={{ padding: '1rem', color: '#e74c3c', fontSize: 13 }}>{getErrorMessage(error)}</div>;
  }
  if (!escorts.length) {
    return <EmptyState title="Aucune escorte" description="Aucune escorte top pour le moment." />;
  }

  return (
    <div className="elementor-element elementor-element-e2f26ee elementor-grid-3 elementor-product-loop-item--align-left elementor-grid-tablet-5 elementor-grid-mobile-2 elementor-products-grid elementor-wc-products elementor-widget elementor-widget-wc-categories" data-id="e2f26ee" data-element_type="widget" data-e-type="widget" data-widget_type="wc-categories.default">
      <div className="elementor-widget-container">
        <div className="woocommerce columns-3">
          <ul className="products elementor-grid columns-3">
            {escorts.map((esc, i) => {
              const liCls = i % 3 === 0 ? 'product-category product first'
                : i % 3 === 2 ? 'product-category product last'
                : 'product-category product';
              const name = esc.escort?.displayName || '—';
              const img = resolveMediaUrl(esc.avatarUrl) || resolveMediaUrl(esc.coverUrl) || PLACEHOLDER_IMG;
              return (
                <li key={esc.id} className={liCls}>
                  <Link aria-label={`Voir l'escorte ${name}`} to={`/product?escort=${esc.id}`}>
                    <img
                      {...(i === 0 ? { fetchPriority: 'high' } : { loading: 'lazy' })}
                      src={img}
                      alt={name}
                      width="300"
                      height="300"
                      sizes="(max-width: 300px) 100vw, 300px"
                    />
                    <h2 className="woocommerce-loop-category__title">
                      {name}
                      {esc.city && <> <mark className="count">({esc.city})</mark></>}
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

// ── Formulaire de filtres libres (en bas — pour plus de precision) ─
function CatalogFiltersForm({ city, quartier, onApply, onReset }) {
  const [cityLocal, setCityLocal]         = useState(city ?? '');
  const [quartierLocal, setQuartierLocal] = useState(quartier ?? '');

  // Resync quand l'etat externe change (ex : clic sur la liste de villes)
  useEffect(() => { setCityLocal(city ?? ''); }, [city]);
  useEffect(() => { setQuartierLocal(quartier ?? ''); }, [quartier]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onApply({
      city:     cityLocal.trim() || undefined,
      quartier: quartierLocal.trim() || undefined,
    });
  };
  const handleReset = () => {
    setCityLocal(''); setQuartierLocal('');
    onReset();
  };

  return (
    <form className="elementor-widget-container" onSubmit={handleSubmit} style={{ paddingTop: '1rem' }}>
      <div className="elementor-form-fields-wrapper">
        <div className="elementor-field-type-text elementor-field-group elementor-column elementor-col-100" style={{ marginBottom: '0.75rem' }}>
          <input
            type="text" name="city" placeholder="Ville (libre)"
            className="elementor-field elementor-field-textual elementor-size-sm"
            value={cityLocal}
            onChange={(e) => setCityLocal(e.target.value)}
          />
        </div>
        <div className="elementor-field-type-text elementor-field-group elementor-column elementor-col-100" style={{ marginBottom: '0.75rem' }}>
          <input
            type="text" name="quartier" placeholder="Quartier (libre)"
            className="elementor-field elementor-field-textual elementor-size-sm"
            value={quartierLocal}
            onChange={(e) => setQuartierLocal(e.target.value)}
          />
        </div>
        <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100" style={{ display: 'flex', gap: '0.5rem' }}>
          <button type="submit" className="elementor-size-sm elementor-button" style={{ flex: 1 }}>
            <span className="elementor-button-text">Appliquer</span>
          </button>
          <div className="elementor-button-wrapper xc-elementor-cancel" style={{ flex: 1 }}>
            <a
              className="elementor-button elementor-button-link elementor-size-sm elementor-animation-push"
              href="#"
              onClick={(e) => { e.preventDefault(); handleReset(); }}
              role="button"
              style={{ width: '100%' }}
            >
              <span className="elementor-button-content-wrapper">
                <span className="elementor-button-text">Réinitialiser</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </form>
  );
}

export default function ShopMain() {
  const [filters, setFilters] = useState({});

  // Construction des items cliquables ville / quartier
  const cityItems = [
    { value: '', label: 'Toutes les villes' },
    ...REGIONS.map((r) => ({ value: r.city, label: r.city })),
  ];
  const currentRegion = REGIONS.find((r) => r.city === filters.city);
  const quartierItems = currentRegion
    ? [
        { value: '', label: 'Tous les quartiers' },
        ...currentRegion.quartiers.map((q) => ({ value: q, label: q })),
      ]
    : [];

  const onCityClick = (value) => {
    // Changer de ville reset le quartier
    setFilters({ city: value || undefined, quartier: undefined });
  };
  const onQuartierClick = (value) => {
    setFilters((f) => ({ ...f, quartier: value || undefined }));
  };

  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-10bc2a5 elementor-section-boxed elementor-section-height-default" data-id="10bc2a5" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">
        {/* Sidebar */}
        <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-2f274bb" data-id="2f274bb" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">

            <FilterHeading dataId="7a2f5c5" title="Top escortes" />
            <TopEscorts />

            <DesktopDivider dataId="d85f855" />

            {/* Listes cliquables ville / quartier — reutilise les dataIds et
                menuIds du theme original (Status / Type) pour heriter du CSS
                scope a .elementor-element-2d6e778 / .elementor-element-16c4498 */}
            <DesktopHeading dataId="dada6eb" title="Villes" />
            <FilterNavClickList
              dataId="2d6e778"
              items={cityItems}
              menuIds={[1766, 1767, 1768, 1769, 1770]}
              activeValue={filters.city ?? ''}
              onItemClick={onCityClick}
            />

            {quartierItems.length > 0 && (
              <>
                <DesktopDivider dataId="2c43708" />
                <DesktopHeading dataId="c7f6844" title="Quartiers" />
                <FilterNavClickList
                  dataId="16c4498"
                  items={quartierItems}
                  menuIds={[5149, 5150, 5151, 5152, 5153, 5154]}
                  activeValue={filters.quartier ?? ''}
                  onItemClick={onQuartierClick}
                />
              </>
            )}

            <DesktopDivider dataId="2c43708" />

            {/* Form libre — pour plus de precision */}
            <FilterHeading dataId="form-h" title="Recherche libre" />
            <CatalogFiltersForm
              city={filters.city}
              quartier={filters.quartier}
              onApply={(next) => setFilters(next)}
              onReset={() => setFilters({})}
            />
          </div>
        </div>

        {/* Grille des services */}
        <div className="elementor-column elementor-col-75 elementor-top-column elementor-element elementor-element-2da72a2" data-id="2da72a2" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <ShopProductGrid filters={filters} />
          </div>
        </div>
      </div>
    </section>
  );
}
