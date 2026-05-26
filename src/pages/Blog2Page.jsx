import { Link } from 'react-router-dom';

const POSTS = [
  { id: 70, cls: 'post-70 post type-post status-publish format-standard has-post-thumbnail hentry category-nft category-token category-uncategorized tag-blockchain tag-internet tag-nft', img: '/images/blog-2/simon-lee-ldg40aCeOXo-unsplash-1-2-768x1024.jpg', w: 768, h: 1024, wpId: '1035', fitHeight: false, title: 'Top 10 NFT projects that shocked the Internet with their uniqueness', date: 'August 15, 2020' },
  { id: 68, cls: 'post-68 post type-post status-publish format-standard has-post-thumbnail hentry category-nft category-token category-uncategorized tag-3d tag-art tag-cryptocurrency', img: '/images/blog-2/tezos-Yu-HIuvap1s-unsplash-1-1-768x545.jpg', w: 768, h: 545, wpId: '1105', fitHeight: true, title: 'NFT art exists in the digital world collector', date: 'August 15, 2020' },
  { id: 66, cls: 'post-66 post type-post status-publish format-standard has-post-thumbnail hentry category-nft category-token category-uncategorized tag-bitcoin tag-development tag-images tag-music', img: '/images/blog-2/colored-blocks-on-a-blue-background-2022-04-07-00-38-16-utc-1-1-1-768x512.jpg', w: 768, h: 512, wpId: '1102', fitHeight: true, title: 'How will you make best NFT store effectively', date: 'August 15, 2020' },
  { id: 59, cls: 'post-59 post type-post status-publish format-standard has-post-thumbnail hentry category-nft category-token category-uncategorized tag-development tag-finance tag-internet', img: '/images/blog-2/tezos-NN8ioR6Y88A-unsplash-1-768x512.jpg', w: 768, h: 512, wpId: '1104', fitHeight: true, title: 'Crypto expert responds to a viral takedown on NFT', date: 'August 14, 2020' },
  { id: 72, cls: 'post-72 post type-post status-publish format-standard has-post-thumbnail hentry category-nft category-token category-uncategorized tag-blockchain tag-finance tag-internet tag-trends', img: '/images/blog-2/tezos-gWjlDDJdmlI-unsplash-1-1-768x512.jpg', w: 768, h: 512, wpId: '1127', fitHeight: true, title: 'Take back ownership of your data and identity with NFT domains', date: 'August 14, 2020' },
  { id: 25, cls: 'post-25 post type-post status-publish format-standard has-post-thumbnail hentry category-nft category-token category-uncategorized tag-blockchain tag-development tag-finance', img: '/images/blog-2/kevin-chin-HvdRVnyV0PQ-unsplash-1-1-768x768.jpg', w: 768, h: 768, wpId: '2439', fitHeight: true, title: 'Important updates for listing and delisting your NFTs', date: 'August 14, 2020' },
  { id: 24, cls: 'post-24 post type-post status-publish format-standard has-post-thumbnail hentry category-token category-uncategorized tag-development tag-games tag-nft', img: '/images/blog-2/niklas-liniger-fIPXnxN7-9A-unsplash-1-e1652950002551-768x390.jpg', w: 768, h: 390, wpId: '1129', fitHeight: true, title: 'Bringing virtual games into the real world', date: 'August 14, 2020' },
  { id: 36, cls: 'post-36 post type-post status-publish format-standard has-post-thumbnail hentry category-token category-uncategorized tag-art tag-games tag-images tag-music', img: '/images/blog-2/ferhat-deniz-fors-e1qoosfnAvA-unsplash-1-768x576.jpg', w: 768, h: 576, wpId: '1151', fitHeight: true, title: 'Welcome to Xchain', date: 'August 13, 2020' },
  { id: 39, cls: 'post-39 post type-post status-publish format-standard has-post-thumbnail hentry category-token category-uncategorized tag-bitcoin tag-blockchain tag-etherium', img: '/images/blog-2/milad-fakurian-E8Ufcyxz514-unsplash-1-1-768x584.jpg', w: 768, h: 584, wpId: '1168', fitHeight: true, title: 'How to programmatically bid on english auctions on Xchain', date: 'August 13, 2020' },
];

export default function Blog2Page() {
  return (
    <div data-elementor-type="archive" data-elementor-id="1186" className="elementor elementor-1186 elementor-location-archive" data-elementor-post-type="elementor_library">
      <Blog2Hero />
      <Blog2Grid />
    </div>
  );
}

function Blog2Hero() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-efae58b elementor-section-full_width elementor-section-content-middle elementor-section-height-default" data-id="efae58b" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-background-overlay"></div>
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-2ccbf4e elementor-hidden-tablet elementor-hidden-mobile" data-id="2ccbf4e" data-element_type="column" data-e-type="column" data-settings='{"background_background":"classic","mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-f41ea06 elementor-widget elementor-widget-spacer" data-id="f41ea06" data-element_type="widget" data-e-type="widget" data-widget_type="spacer.default">
              <div className="elementor-widget-container"><div className="elementor-spacer"><div className="elementor-spacer-inner"></div></div></div>
            </div>
          </div>
        </div>
        <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-525f3f1" data-id="525f3f1" data-element_type="column" data-e-type="column" data-settings='{"background_background":"classic","mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-1e7d82d elementor-widget elementor-widget-theme-archive-title elementor-page-title elementor-widget-heading" data-id="1e7d82d" data-element_type="widget" data-e-type="widget" data-widget_type="theme-archive-title.default">
              <div className="elementor-widget-container"><h2 className="elementor-heading-title elementor-size-default">Category: Token</h2></div>
            </div>
            <div className="elementor-element elementor-element-63fd672 elementor-widget elementor-widget-mdp-crumber-elementor" data-id="63fd672" data-element_type="widget" data-e-type="widget" data-widget_type="mdp-crumber-elementor.default">
              <div className="elementor-widget-container">
                <div className="mdp-crumber-elementor-box">
                  <div className="mdp-crumber-elementor-breadcrumbs">
                    <div className="mdp-crumber-elementor-breadcrumbs-item  mdp-crumber-elementor-breadcrumbs-icon-position-"><span>Home</span></div>
                    <span className="mdp-crumber-elementor-separator mdp-crumber-elementor-separator-hide-last"> {'•'} </span>
                    <div className="mdp-crumber-elementor-breadcrumbs-item mdp-crumber-elementor-breadcrumbs-item-active mdp-crumber-elementor-breadcrumbs-icon-position-"><span>Blog</span></div>
                    <span className="mdp-crumber-elementor-separator mdp-crumber-elementor-separator-hide-last"> {'•'} </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-f861c07 elementor-hidden-tablet elementor-hidden-mobile" data-id="f861c07" data-element_type="column" data-e-type="column" data-settings='{"background_background":"classic","mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-8e399c2 elementor-widget elementor-widget-spacer" data-id="8e399c2" data-element_type="widget" data-e-type="widget" data-widget_type="spacer.default">
              <div className="elementor-widget-container"><div className="elementor-spacer"><div className="elementor-spacer-inner"></div></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Blog2Grid() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-0e34b5b elementor-section-boxed elementor-section-height-default" data-id="0e34b5b" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-64139e7" data-id="64139e7" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-fc3aa87 elementor-grid-3 elementor-grid-tablet-2 elementor-grid-mobile-1 elementor-posts--thumbnail-top elementor-widget elementor-widget-archive-posts" data-id="fc3aa87" data-element_type="widget" data-e-type="widget" data-settings='{"archive_classic_row_gap":{"unit":"px","size":40,"sizes":[]},"archive_classic_row_gap_mobile":{"unit":"px","size":30,"sizes":[]},"archive_classic_row_gap_tablet":{"unit":"px","size":30,"sizes":[]},"archive_classic_columns":"3","archive_classic_columns_tablet":"2","archive_classic_columns_mobile":"1","pagination_type":"numbers"}' data-widget_type="archive-posts.archive_classic">
              <div className="elementor-widget-container">
                <div className="elementor-posts-container elementor-posts elementor-posts--skin-classic elementor-grid elementor-has-item-ratio" role="list">
                  {POSTS.map((p, i) => (
                    <article key={p.id} className={`elementor-post elementor-grid-item ${p.cls}`} role="listitem">
                      <Link className="elementor-post__thumbnail__link" to="/blog" tabIndex={-1}>
                        <div className={`elementor-post__thumbnail${p.fitHeight ? ' elementor-fit-height' : ''}`}>
                          <img {...(i === 0 ? { fetchPriority: 'high' } : { loading: 'lazy' })} width={p.w} height={p.h} src={p.img} className={`attachment-medium_large size-medium_large wp-image-${p.wpId}`} alt="" />
                        </div>
                      </Link>
                      <div className="elementor-post__text">
                        <h3 className="elementor-post__title"><Link to="/blog">{p.title}</Link></h3>
                        <div className="elementor-post__meta-data">
                          <span className="elementor-post-author">merkulove</span>
                          <span className="elementor-post-date">{p.date}</span>
                          <span className="elementor-post-avatar">No Comments</span>
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
