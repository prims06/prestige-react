const CATEGORIES = [
  { emoji: '🎨', name: 'Art',           count: 6, img: '/images/index/robert-keane-rlbG0p_nQOU-unsplash-1-300x300.jpg', href: '/shop' },
  { emoji: '✨', name: 'Collectibles',  count: 4, img: '/images/index/8machine-_-wIuF0-I6H_Y-unsplash-1-1-300x300.jpg', href: '/shop' },
  { emoji: '🎵', name: 'Music',         count: 2, img: '/images/index/erik-mclean-9y1cTVKe1IY-unsplash-1-300x300.jpg', href: '/shop' },
  { emoji: '📸', name: 'Photography',   count: 7, img: '/images/index/ricardo-gomez-angel-PzYiCWOHtfU-unsplash-1-300x300.jpg', href: '/shop' },
  { emoji: '⚽', name: 'Sports',        count: 1, img: '/images/index/pan-yunbo-EgL0EtzL0Wc-unsplash-1-300x300.jpg', href: '/shop' },
  { emoji: '🔥', name: 'Trading cards', count: 3, img: '/images/index/antique-statue-dressed-in-down-jacket-and-sunglass-2022-01-11-04-36-07-utc-1-1-1-300x300.jpg', href: '/shop' },
  { emoji: '⚡', name: 'Utility',       count: 2, img: '/images/index/niklas-liniger-fIPXnxN7-9A-unsplash-1-e1652950002551-300x300.jpg', href: '/shop-2' },
  { emoji: '🌐', name: 'Virtual worlds',count: 5, img: '/images/index/mo-DP0LMBAIzZQ-unsplash-1-e1654762954141-300x300.jpg', href: '/shop' },
];

function CategoryCard({ cat, first, last }) {
  const cls = `product-category product${first ? ' first' : ''}${last ? ' last' : ''}`;
  return (
    <li className={cls}>
      <a aria-label={`Visit product category ${cat.emoji} ${cat.name}`} href={cat.href}>
        <img loading="lazy" decoding="async" src={cat.img} alt={`${cat.emoji} ${cat.name}`} width="300" height="300" sizes="(max-width: 300px) 100vw, 300px" />
        <h2 className="woocommerce-loop-category__title">
          {cat.emoji} {cat.name} <mark className="count">({cat.count})</mark>
        </h2>
      </a>
    </li>
  );
}

export default function BrowseByCategory() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-ab55dc4 elementor-section-boxed elementor-section-height-default" data-id="ab55dc4" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b0cce55" data-id="b0cce55" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-d813f07 elementor-widget elementor-widget-heading" data-id="d813f07" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
              <div className="elementor-widget-container"><h3 className="elementor-heading-title elementor-size-default">Browse by category</h3></div>
            </div>
            <div className="elementor-element elementor-element-a54542f elementor-product-loop-item--align-center elementor-grid-tablet-2 elementor-grid-mobile-2 elementor-hidden-mobile elementor-grid-4 elementor-products-grid elementor-wc-products elementor-invisible elementor-widget elementor-widget-wc-categories" data-id="a54542f" data-element_type="widget" data-e-type="widget" data-settings='{"_animation":"fadeInUp"}' data-widget_type="wc-categories.default">
              <div className="elementor-widget-container"><div className="woocommerce columns-4"><ul className="products elementor-grid columns-4">
                {CATEGORIES.map((cat, i) => (<CategoryCard key={i} cat={cat} first={i === 0 || i === 4} last={i === 3 || i === 7} />))}
              </ul></div></div>
            </div>
            <div className="elementor-element elementor-element-2a53388 elementor-product-loop-item--align-center elementor-grid-tablet-2 elementor-grid-mobile-2 elementor-hidden-desktop elementor-hidden-tablet elementor-grid-4 elementor-products-grid elementor-wc-products elementor-invisible elementor-widget elementor-widget-wc-categories" data-id="2a53388" data-element_type="widget" data-e-type="widget" data-settings='{"_animation":"fadeInUp"}' data-widget_type="wc-categories.default">
              <div className="elementor-widget-container"><div className="woocommerce columns-4"><ul className="products elementor-grid columns-4">
                {CATEGORIES.map((cat, i) => (<CategoryCard key={i} cat={cat} first={i === 0 || i === 4} last={i === 3 || i === 7} />))}
              </ul></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
