import { Link } from 'react-router-dom';
import { CATEGORIES, POSTS, TAGS, RECENT_SETTINGS, NAV_SETTINGS } from '../../data/blog';
import RecentPost from './RecentPost';

export default function SidebarInner({ idSuffix = '' }) {
  const s = idSuffix;
  return (
    <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-3882bdb"
         data-id="3882bdb" data-element_type="column" data-e-type="column"
         data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
      <div className="elementor-widget-wrap elementor-element-populated">

        <div className="elementor-element elementor-element-f2b00d7 elementor-widget elementor-widget-heading"
             data-id="f2b00d7" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
          <div className="elementor-widget-container">
            <h2 className="elementor-heading-title elementor-size-default">Categories</h2>
          </div>
        </div>

        <div className="elementor-element elementor-element-f598fff elementor-nav-menu__align-start elementor-nav-menu--dropdown-none elementor-widget elementor-widget-nav-menu"
             data-id="f598fff" data-element_type="widget" data-e-type="widget"
             data-settings={NAV_SETTINGS} data-widget_type="nav-menu.default">
          <div className="elementor-widget-container">
            <nav aria-label="Menu" className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-vertical e--pointer-background e--animation-fade">
              <ul id={`menu-1-f598fff${s}`} className="elementor-nav-menu sm-vertical">
                {CATEGORIES.map(cat => (
                  <li key={cat.id} className={`menu-item menu-item-type-taxonomy menu-item-object-category${cat.active ? ' current-menu-item' : ''} menu-item-${cat.id}`}>
                    <Link to={cat.href} {...(cat.active ? { 'aria-current': 'page' } : {})}
                          className={`elementor-item${cat.active ? ' elementor-item-active' : ''}`}>
                      {cat.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav className="elementor-nav-menu--dropdown elementor-nav-menu__container" aria-hidden="true" style={{ '--menu-height': '0' }}>
              <ul id={`menu-2-f598fff${s}`} className="elementor-nav-menu sm-vertical">
                {CATEGORIES.map(cat => (
                  <li key={cat.id} className={`menu-item menu-item-type-taxonomy menu-item-object-category${cat.active ? ' current-menu-item' : ''} menu-item-${cat.id}`}>
                    <Link to={cat.href} {...(cat.active ? { 'aria-current': 'page' } : {})}
                          className={`elementor-item${cat.active ? ' elementor-item-active' : ''}`}
                          tabIndex={-1}>
                      {cat.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="elementor-element elementor-element-b53d8ce elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
             data-id="b53d8ce" data-element_type="widget" data-e-type="widget" data-widget_type="divider.default">
          <div className="elementor-widget-container">
            <div className="elementor-divider"><span className="elementor-divider-separator"></span></div>
          </div>
        </div>

        <div className="elementor-element elementor-element-b72bd20 elementor-widget elementor-widget-heading"
             data-id="b72bd20" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
          <div className="elementor-widget-container">
            <h2 className="elementor-heading-title elementor-size-default">Recent Post</h2>
          </div>
        </div>

        <div className="elementor-element elementor-element-e94f629 elementor-grid-1 elementor-posts--thumbnail-left elementor-grid-tablet-2 elementor-grid-mobile-1 elementor-widget elementor-widget-posts"
             data-id="e94f629" data-element_type="widget" data-e-type="widget"
             data-settings={RECENT_SETTINGS} data-widget_type="posts.classic">
          <div className="elementor-widget-container">
            <div className="elementor-posts-container elementor-posts elementor-posts--skin-classic elementor-grid elementor-has-item-ratio" role="list">
              {POSTS.slice(0, 5).map(post => (
                <RecentPost key={`${post.postId}${s}`} post={post} />
              ))}
            </div>
          </div>
        </div>

        <div className="elementor-element elementor-element-3db1852 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
             data-id="3db1852" data-element_type="widget" data-e-type="widget" data-widget_type="divider.default">
          <div className="elementor-widget-container">
            <div className="elementor-divider"><span className="elementor-divider-separator"></span></div>
          </div>
        </div>

        <div className="elementor-element elementor-element-7a2936b elementor-widget elementor-widget-heading"
             data-id="7a2936b" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
          <div className="elementor-widget-container">
            <h2 className="elementor-heading-title elementor-size-default">Tags</h2>
          </div>
        </div>

        <div className="elementor-element elementor-element-e66e795 elementor-widget elementor-widget-wp-widget-tag_cloud"
             data-id="e66e795" data-element_type="widget" data-e-type="widget" data-widget_type="wp-widget-tag_cloud.default">
          <div className="elementor-widget-container">
            <h5>Tags</h5>
            <nav aria-label="Tags">
              <div className="tagcloud">
                {TAGS.map(tag => (
                  <Link key={`${tag.cls}${s}`} to="/blog"
                        className={`tag-cloud-link ${tag.cls} tag-link-position-${tag.pos}`}
                        style={{ fontSize: tag.size }}
                        aria-label={`${tag.label} (${tag.count} items)`}>
                    {tag.label}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>

        <div className="elementor-element elementor-element-d4f8318 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
             data-id="d4f8318" data-element_type="widget" data-e-type="widget" data-widget_type="divider.default">
          <div className="elementor-widget-container">
            <div className="elementor-divider"><span className="elementor-divider-separator"></span></div>
          </div>
        </div>

        <div className="elementor-element elementor-element-86ba320 elementor-widget elementor-widget-heading"
             data-id="86ba320" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
          <div className="elementor-widget-container">
            <h2 className="elementor-heading-title elementor-size-default">Calendar</h2>
          </div>
        </div>

        <div className="elementor-element elementor-element-9deb8d9 elementor-widget elementor-widget-wp-widget-calendar"
             data-id="9deb8d9" data-element_type="widget" data-e-type="widget" data-widget_type="wp-widget-calendar.default">
          <div className="elementor-widget-container">
            <div id={`calendar_wrap${s}`} className="calendar_wrap">
              <table id={`wp-calendar${s}`} className="wp-calendar-table">
                <caption>May 2026</caption>
                <thead>
                  <tr>
                    <th scope="col" aria-label="Monday">M</th>
                    <th scope="col" aria-label="Tuesday">T</th>
                    <th scope="col" aria-label="Wednesday">W</th>
                    <th scope="col" aria-label="Thursday">T</th>
                    <th scope="col" aria-label="Friday">F</th>
                    <th scope="col" aria-label="Saturday">S</th>
                    <th scope="col" aria-label="Sunday">S</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={4} className="pad">&nbsp;</td><td>1</td><td>2</td><td>3</td>
                  </tr>
                  <tr>
                    <td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td>
                  </tr>
                  <tr>
                    <td>11</td><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td><td>17</td>
                  </tr>
                  <tr>
                    <td>18</td><td>19</td><td>20</td><td>21</td><td id={`today${s}`}>22</td><td>23</td><td>24</td>
                  </tr>
                  <tr>
                    <td>25</td><td>26</td><td>27</td><td>28</td><td>29</td><td>30</td><td>31</td>
                  </tr>
                </tbody>
              </table>
              <nav aria-label="Previous and next months" className="wp-calendar-nav">
                <span className="wp-calendar-nav-prev"><Link to="/blog">« Aug</Link></span>
                <span className="pad">&nbsp;</span>
                <span className="wp-calendar-nav-next">&nbsp;</span>
              </nav>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
