import CollectionCard from './CollectionCard';
import { COLLECTIONS_ROW1 } from '../../data/home2';

export default function CollectionsRow1Section() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-45b7777 elementor-section-boxed elementor-section-height-default elementor-invisible" data-id="45b7777" data-element_type="section" data-e-type="section" data-settings='{"animation":"fadeInUp","mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">
        {COLLECTIONS_ROW1.map(c => <CollectionCard key={c.outerColId} c={c} />)}
      </div>
    </section>
  );
}
