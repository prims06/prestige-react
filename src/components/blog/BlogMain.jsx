import { Link } from 'react-router-dom';
import { POSTS, ARCHIVE_SETTINGS, STICKY_SETTINGS } from '../../data/blog';
import BlogPost from './BlogPost';
import SidebarInner from './SidebarInner';

export default function BlogMain() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-f1b96bc elementor-section-boxed elementor-section-height-default"
             data-id="f1b96bc" data-element_type="section" data-e-type="section"
             data-settings='{"mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">

        {/* Col gauche — liste articles */}
        <div className="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-efb2d39"
             data-id="efb2d39" data-element_type="column" data-e-type="column"
             data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">

            <div className="elementor-element elementor-element-30330b6 elementor-grid-1 elementor-grid-tablet-1 elementor-grid-mobile-1 elementor-posts--thumbnail-top elementor-widget elementor-widget-archive-posts"
                 data-id="30330b6" data-element_type="widget" data-e-type="widget"
                 data-settings={ARCHIVE_SETTINGS} data-widget_type="archive-posts.archive_classic">
              <div className="elementor-widget-container">
                <div className="elementor-posts-container elementor-posts elementor-posts--skin-classic elementor-grid elementor-has-item-ratio" role="list">
                  {POSTS.map((post, i) => (
                    <BlogPost key={post.postId} post={post} isFirst={i === 0} />
                  ))}
                </div>
                <div className="e-load-more-anchor" data-page="1" data-max-page="2" data-next-page=""></div>
                <nav className="elementor-pagination" aria-label="Pagination">
                  <span aria-current="page" className="page-numbers current">
                    <span className="elementor-screen-only">Page</span>1
                  </span>
                  <Link className="page-numbers" to="/blog">
                    <span className="elementor-screen-only">Page</span>2
                  </Link>
                </nav>
              </div>
            </div>

          </div>
        </div>

        {/* Col droite — sidebar */}
        <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-0294883"
             data-id="0294883" data-element_type="column" data-e-type="column"
             data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">

            {/* Sticky active */}
            <section className="elementor-section elementor-inner-section elementor-element elementor-element-149dc85 elementor-section-boxed elementor-section-height-default elementor-sticky elementor-sticky--active elementor-section--handles-inside elementor-sticky--effects"
                     data-id="149dc85" data-element_type="section" data-e-type="section"
                     data-settings={STICKY_SETTINGS}>
              <div className="elementor-container elementor-column-gap-no">
                <SidebarInner />
              </div>
            </section>

            {/* Spacer — visibility:hidden pour maintenir la hauteur */}
            <section className="elementor-section elementor-inner-section elementor-element elementor-element-149dc85 elementor-section-boxed elementor-section-height-default elementor-sticky elementor-sticky__spacer"
                     data-id="149dc85" data-element_type="section" data-e-type="section"
                     data-settings={STICKY_SETTINGS}
                     style={{ visibility: 'hidden', transition: 'none' }}>
              <div className="elementor-container elementor-column-gap-no">
                <SidebarInner idSuffix="-spacer" />
              </div>
            </section>

          </div>
        </div>

      </div>
    </section>
  );
}
