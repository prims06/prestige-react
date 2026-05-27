const BLOG_POSTS = [
  { img: '/images/index/warren-umoh-YmTIxQbQo4I-unsplash-1-1-1024x576.jpg',   w: 800, h: 450,  title: 'Features of NFT games that have gained popularity in 2022',              author: 'merkulove', date: 'August 15, 2020', comments: 'No Comments', href: '/blog' },
  { img: '/images/index/tezos-6TeIOdNnMaM-unsplash-1-1-1024x683.jpg',         w: 800, h: 534,  title: 'The rise of the non fungible token internet having trouble',              author: 'merkulove', date: 'August 15, 2020', comments: 'No Comments', href: '/blog' },
  { img: '/images/index/simon-lee-ldg40aCeOXo-unsplash-1-2-768x1024.jpg',     w: 768, h: 1024, title: 'Top 10 NFT projects that shocked the Internet with their uniqueness',   author: 'merkulove', date: 'August 15, 2020', comments: 'No Comments', href: '/blog' },
];

export default function BlogSection() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-73bec7a elementor-section-boxed elementor-section-height-default" data-id="73bec7a" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-eacb39e" data-id="eacb39e" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-fc439b8 elementor-widget elementor-widget-heading" data-id="fc439b8" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
              <div className="elementor-widget-container"><h3 className="elementor-heading-title elementor-size-default">Our blog</h3></div>
            </div>
            <div className="elementor-element elementor-element-51c4a86 elementor-grid-3 elementor-grid-tablet-2 elementor-grid-mobile-1 elementor-posts--thumbnail-top elementor-invisible elementor-widget elementor-widget-posts" data-id="51c4a86" data-element_type="widget" data-e-type="widget" data-settings='{"classic_row_gap":{"unit":"px","size":40,"sizes":[]},"classic_row_gap_tablet":{"unit":"px","size":30,"sizes":[]},"_animation":"fadeInUp","classic_columns":"3","classic_columns_tablet":"2","classic_columns_mobile":"1","classic_row_gap_mobile":{"unit":"px","size":"","sizes":[]}}' data-widget_type="posts.classic">
              <div className="elementor-widget-container">
                <div className="elementor-posts-container elementor-posts elementor-posts--skin-classic elementor-grid elementor-has-item-ratio" role="list">
                  {BLOG_POSTS.map((post, i) => (
                    <article className="elementor-post elementor-grid-item post-67 post type-post status-publish format-standard has-post-thumbnail hentry category-nft category-uncategorized tag-finance tag-games tag-trends" role="listitem" key={i}>
                      <a className="elementor-post__thumbnail__link" href={post.href} tabIndex={-1}>
                        <div className="elementor-post__thumbnail"><img loading="lazy" decoding="async" width={post.w} height={post.h} src={post.img} className="attachment-large size-large" alt="" sizes={`(max-width: ${post.w}px) 100vw, ${post.w}px`} /></div>
                      </a>
                      <div className="elementor-post__text">
                        <h3 className="elementor-post__title"><a href={post.href}>{post.title}</a></h3>
                        <div className="elementor-post__meta-data">
                          <span className="elementor-post-author">{post.author}</span>
                          <span className="elementor-post-date">{post.date}</span>
                          <span className="elementor-post-avatar">{post.comments}</span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
