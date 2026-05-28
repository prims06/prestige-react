import { useState, useEffect } from 'react';
import { FilterHeading, DesktopHeading, DesktopDivider, FilterNavClickList } from '../shop/ShopFilters';
import EscortsGrid from './EscortsGrid';

// Villes & quartiers Cameroun representes. A enrichir / brancher sur un
// endpoint backend plus tard si besoin.
const REGIONS = [
  { city: 'Douala',   quartiers: ['Akwa', 'Bonanjo', 'Bonapriso', 'Bonamoussadi', 'Bali'] },
  { city: 'Yaoundé',  quartiers: ['Bastos', 'Mvog-Mbi', 'Mvan', 'Nlongkak', 'Centre-ville'] },
  { city: 'Bafoussam', quartiers: ['Centre', 'Tougang'] },
  { city: 'Kribi',    quartiers: ['Centre', 'Mboa-Manga'] },
];

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

export default function EscortsMain() {
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
        <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-2f274bb" data-id="2f274bb" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">

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

        {/* Grille des escortes */}
        <div className="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-2da72a2" data-id="2da72a2" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <EscortsGrid filters={filters} />
          </div>
        </div>
      </div>
    </section>
  );
}
