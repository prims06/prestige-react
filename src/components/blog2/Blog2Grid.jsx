import { Link } from 'react-router-dom';
import { BLOG2_POSTS } from '../../data/blog2';

export default function Blog2Grid() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-0e34b5b elementor-section-boxed elementor-section-height-default" data-id="0e34b5b" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-64139e7" data-id="64139e7" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-fc3aa87 elementor-grid-3 elementor-grid-tablet-2 elementor-grid-mobile-1 elementor-posts--thumbnail-top elementor-widget elementor-widget-archive-posts" data-id="fc3aa87" data-element_type="widget" data-e-type="widget" data-settings='{"archive_classic_row_gap":{"unit":"px","size":40,"sizes":[]},"archive_classic_row_gap_mobile":{"unit":"px","size":30,"sizes":[]},"archive_classic_row_gap_tablet":{"unit":"px","size":30,"sizes":[]},"archive_classic_columns":"3","archive_classic_columns_tablet":"2","archive_classic_columns_mobile":"1","pagination_type":"numbers"}' data-widget_type="archive-posts.archive_classic">
              <div className="elementor-widget-container">
                <div className="elementor-posts-container elementor-posts elementor-posts--skin-classic elementor-grid elementor-has-item-ratio" role="list">
                  {BLOG2_POSTS.map((p, i) => (
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
