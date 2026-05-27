import CollectionCard from './CollectionCard';
import { COLLECTIONS_ROW2 } from '../../data/home2';

export default function CollectionsRow2Section() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-21714a8 elementor-section-boxed elementor-section-height-default elementor-invisible" data-id="21714a8" data-element_type="section" data-e-type="section" data-settings='{"animation":"fadeInUp","mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">
        {COLLECTIONS_ROW2.map(c => <CollectionCard key={c.outerColId} c={c} />)}
      </div>
    </section>
  );
}
