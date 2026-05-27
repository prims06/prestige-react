import { Link } from 'react-router-dom';

const POSTS = [
  {
    postId: 67, cats: 'category-nft category-uncategorized', tags: 'tag-finance tag-games tag-trends',
    img: '/images/blog/warren-umoh-YmTIxQbQo4I-unsplash-1-1-1536x864.jpg', imgW: 1536, imgH: 864, wpImg: 1041,
    title: 'Features of NFT games that have gained popularity in 2022',
    author: 'merkulove', date: 'August 15, 2020',
    excerpt: 'Features of nft games Tellus cras adipiscing enim eu turpis egestas. Amet dictum sit amet justo donec enim diam vulputate ut. Lectus mauris ultrices eros in cursus turpis massa. Molestie a iaculis',
    recentImg: '/images/blog/warren-umoh-YmTIxQbQo4I-unsplash-1-1-768x432.jpg', recentW: 768, recentH: 432, fitHeight: true,
  },
  {
    postId: 71, cats: 'category-internet category-nft category-uncategorized', tags: 'tag-faq tag-finance tag-internet',
    img: '/images/blog/tezos-6TeIOdNnMaM-unsplash-1-1-1536x1025.jpg', imgW: 1536, imgH: 1025, wpImg: 1040,
    title: 'The rise of the non fungible token internet having trouble',
    author: 'merkulove', date: 'August 15, 2020',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a euismod ante, eu vestibulum lectus. Quisque luctus magna sed euismod vulputate. Praesent sit amet eleifend sapien, ut tincidunt nibh. Cras at fringilla',
    recentImg: '/images/blog/tezos-6TeIOdNnMaM-unsplash-1-1-768x512.jpg', recentW: 768, recentH: 512,
  },
  {
    postId: 70, cats: 'category-nft category-token category-uncategorized', tags: 'tag-blockchain tag-internet tag-nft',
    img: '/images/blog/simon-lee-ldg40aCeOXo-unsplash-1-2-1152x1536.jpg', imgW: 1152, imgH: 1536, wpImg: 1035,
    title: 'Top 10 NFT projects that shocked the Internet with their uniqueness',
    author: 'merkulove', date: 'August 15, 2020',
    excerpt: 'Praesent sit amet eleifend sapien, ut tincidunt nibh. Cras at fringilla leo. Phasellus posuere nibh erat, nec vestibulum purus lacinia ut. Donec sit amet ex placerat, condimentum tellus a, molestie eros. Lorem',
    recentImg: '/images/blog/simon-lee-ldg40aCeOXo-unsplash-1-2-768x1024.jpg', recentW: 768, recentH: 1024,
  },
  {
    postId: 69, cats: 'category-crypto category-nft category-uncategorized', tags: 'tag-development tag-etherium tag-trends',
    img: '/images/blog/antique-statue-dressed-in-down-jacket-and-sunglass-2022-01-11-04-36-07-utc-1-1-1-1536x1209.jpg', imgW: 1536, imgH: 1209, wpImg: 1101,
    title: 'Guide to creating & selling digital art NFTs',
    author: 'merkulove', date: 'August 15, 2020',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a euismod ante, eu vestibulum lectus. Quisque luctus magna sed euismod vulputate. Praesent sit amet eleifend sapien, ut tincidunt nibh. Cras at fringilla',
    recentImg: '/images/blog/antique-statue-dressed-in-down-jacket-and-sunglass-2022-01-11-04-36-07-utc-1-1-1-768x604.jpg', recentW: 768, recentH: 604,
  },
  {
    postId: 68, cats: 'category-nft category-token category-uncategorized', tags: 'tag-3d tag-art tag-cryptocurrency',
    img: '/images/blog/tezos-Yu-HIuvap1s-unsplash-1-1-1536x1090.jpg', imgW: 1536, imgH: 1090, wpImg: 1105,
    title: 'NFT art exists in the digital world collector',
    author: 'merkulove', date: 'August 15, 2020',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a euismod ante, eu vestibulum lectus. Quisque luctus magna sed euismod vulputate. Praesent sit amet eleifend sapien, ut tincidunt nibh. Cras at fringilla',
    recentImg: '/images/blog/tezos-Yu-HIuvap1s-unsplash-1-1-768x545.jpg', recentW: 768, recentH: 545,
  },
  {
    postId: 66, cats: 'category-nft category-token category-uncategorized', tags: 'tag-bitcoin tag-development tag-images tag-music',
    img: '/images/blog/colored-blocks-on-a-blue-background-2022-04-07-00-38-16-utc-1-1-1-1536x1025.jpg', imgW: 1536, imgH: 1025, wpImg: 1102,
    title: 'How will you make best NFT store effectively',
    author: 'merkulove', date: 'August 15, 2020',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a euismod ante, eu vestibulum lectus. Quisque luctus magna sed euismod vulputate. Praesent sit amet eleifend sapien, ut tincidunt nibh. Cras at fringilla',
  },
  {
    postId: 59, cats: 'category-nft category-token category-uncategorized', tags: 'tag-development tag-finance tag-internet',
    img: '/images/blog/tezos-NN8ioR6Y88A-unsplash-1-1536x1025.jpg', imgW: 1536, imgH: 1025, wpImg: 1104,
    title: 'Crypto expert responds to a viral takedown on NFT',
    author: 'merkulove', date: 'August 14, 2020',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a euismod ante, eu vestibulum lectus. Quisque luctus magna sed euismod vulputate. Praesent sit amet eleifend sapien, ut tincidunt nibh. Cras at fringilla',
  },
  {
    postId: 27, cats: 'category-nft category-uncategorized', tags: 'tag-art tag-etherium tag-nft',
    img: '/images/blog/ferhat-deniz-fors-8wSfiGT8ejk-unsplash-1-1-e1652948750923-1235x1536.jpg', imgW: 1235, imgH: 1536, wpImg: 1103,
    title: 'Highlights from NFT changed the metaverse',
    author: 'merkulove', date: 'August 14, 2020',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a euismod ante, eu vestibulum lectus. Quisque luctus magna sed euismod vulputate. Praesent sit amet eleifend sapien, ut tincidunt nibh. Cras at fringilla',
  },
  {
    postId: 73, cats: 'category-blockchain category-nft category-uncategorized', tags: 'tag-bitcoin tag-blockchain tag-etherium',
    img: '/images/blog/tezos-6JQn1G0lMgY-unsplash-1536x998.jpg', imgW: 1536, imgH: 998, wpImg: 1125,
    title: 'The biggest drop in time squaresince new years',
    author: 'merkulove', date: 'August 14, 2020',
    excerpt: 'Praesent sit amet eleifend sapien, ut tincidunt nibh. Cras at fringilla leo. Phasellus posuere nibh erat, nec vestibulum purus lacinia ut. Donec sit amet ex placerat, condimentum tellus a, molestie eros. Lorem',
  },
  {
    postId: 72, cats: 'category-nft category-token category-uncategorized', tags: 'tag-blockchain tag-finance tag-internet tag-trends',
    img: '/images/blog/tezos-gWjlDDJdmlI-unsplash-1-1-1536x1025.jpg', imgW: 1536, imgH: 1025, wpImg: 1127,
    title: 'Take back ownership of your data and identity with NFT domains',
    author: 'merkulove', date: 'August 14, 2020',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a euismod ante, eu vestibulum lectus. Quisque luctus magna sed euismod vulputate. Praesent sit amet eleifend sapien, ut tincidunt nibh. Cras at fringilla',
  },
];

const CATEGORIES = [
  { id: 1054, label: 'NFT',            href: '/blog',   active: true },
  { id: 1051, label: 'Blockchain',     href: '/blog' },
  { id: 1052, label: 'Crypto',         href: '/blog' },
  { id: 1053, label: 'Internet',       href: '/blog' },
  { id: 1055, label: 'Token',          href: '/blog-2' },
  { id: 1056, label: 'Uncategorized',  href: '/blog' },
];

const TAGS = [
  { cls: 'tag-link-51', pos: 1,  size: '8pt',     label: '#3D',             count: 2 },
  { cls: 'tag-link-42', pos: 2,  size: '21pt',    label: '#art',            count: 9 },
  { cls: 'tag-link-40', pos: 3,  size: '15.5pt',  label: '#bitcoin',        count: 5 },
  { cls: 'tag-link-50', pos: 4,  size: '18.5pt',  label: '#blockchain',     count: 7 },
  { cls: 'tag-link-41', pos: 5,  size: '11pt',    label: '#cryptocurrency',  count: 3 },
  { cls: 'tag-link-52', pos: 6,  size: '17.25pt', label: '#development',    count: 6 },
  { cls: 'tag-link-46', pos: 7,  size: '18.5pt',  label: '#etherium',       count: 7 },
  { cls: 'tag-link-54', pos: 8,  size: '8pt',     label: '#FAQ',            count: 2 },
  { cls: 'tag-link-49', pos: 9,  size: '22pt',    label: '#finance',        count: 10 },
  { cls: 'tag-link-47', pos: 10, size: '17.25pt', label: '#games',          count: 6 },
  { cls: 'tag-link-53', pos: 11, size: '11pt',    label: '#images',         count: 3 },
  { cls: 'tag-link-44', pos: 12, size: '17.25pt', label: '#internet',       count: 6 },
  { cls: 'tag-link-43', pos: 13, size: '11pt',    label: '#music',          count: 3 },
  { cls: 'tag-link-45', pos: 14, size: '18.5pt',  label: '#NFT',            count: 7 },
  { cls: 'tag-link-48', pos: 15, size: '22pt',    label: '#trends',         count: 10 },
];

const ARCHIVE_SETTINGS = '{"archive_classic_columns":"1","archive_classic_row_gap":{"unit":"px","size":50,"sizes":[]},"archive_classic_columns_tablet":"1","archive_classic_row_gap_tablet":{"unit":"px","size":40,"sizes":[]},"archive_classic_row_gap_mobile":{"unit":"px","size":30,"sizes":[]},"archive_classic_columns_mobile":"1","pagination_type":"numbers"}';
const RECENT_SETTINGS  = '{"classic_columns":"1","classic_row_gap":{"unit":"px","size":20,"sizes":[]},"classic_row_gap_tablet":{"unit":"px","size":20,"sizes":[]},"classic_row_gap_mobile":{"unit":"px","size":15,"sizes":[]},"classic_columns_tablet":"2","classic_columns_mobile":"1"}';
const NAV_SETTINGS     = '{"layout":"vertical","submenu_icon":{"value":"<i class=\\\"\\\" aria-hidden=\\\"true\\\"><\\/i>","library":""}}';
const STICKY_SETTINGS  = '{"sticky":"top","sticky_on":["desktop"],"sticky_offset":40,"sticky_parent":"yes","sticky_effects_offset":0,"sticky_anchor_link_offset":0}';

function BlogPost({ post, isFirst }) {
  return (
    <article className={`elementor-post elementor-grid-item post-${post.postId} post type-post status-publish format-standard has-post-thumbnail hentry ${post.cats} ${post.tags}`} role="listitem">
      <Link className="elementor-post__thumbnail__link" to="/blog" tabIndex={-1}>
        <div className="elementor-post__thumbnail">
          <img
            {...(isFirst ? { fetchPriority: 'high' } : { loading: 'lazy' })}
            width={post.imgW} height={post.imgH}
            src={post.img}
            className={`attachment-1536x1536 size-1536x1536 wp-image-${post.wpImg}`}
            alt=""
          />
        </div>
      </Link>
      <div className="elementor-post__text">
        <h3 className="elementor-post__title">
          <Link to="/blog">{post.title}</Link>
        </h3>
        <div className="elementor-post__meta-data">
          <span className="elementor-post-author">{post.author}</span>
          <span className="elementor-post-date">{post.date}</span>
          <span className="elementor-post-avatar">No Comments</span>
        </div>
        <div className="elementor-post__excerpt">
          <p>{post.excerpt}</p>
        </div>
      </div>
    </article>
  );
}

function RecentPost({ post }) {
  return (
    <article className={`elementor-post elementor-grid-item post-${post.postId} post type-post status-publish format-standard has-post-thumbnail hentry ${post.cats} ${post.tags}`} role="listitem">
      <Link className="elementor-post__thumbnail__link" to="/blog" tabIndex={-1}>
        <div className={`elementor-post__thumbnail${post.fitHeight ? ' elementor-fit-height' : ''}`}>
          <img loading="lazy" width={post.recentW} height={post.recentH}
               src={post.recentImg}
               className={`attachment-medium_large size-medium_large wp-image-${post.wpImg}`}
               alt="" />
        </div>
      </Link>
      <div className="elementor-post__text">
        <h6 className="elementor-post__title">
          <Link to="/blog">{post.title}</Link>
        </h6>
        <div className="elementor-post__meta-data">
          <span className="elementor-post-date">{post.date}</span>
          <span className="elementor-post-avatar">No Comments</span>
        </div>
      </div>
    </article>
  );
}

function SidebarInner({ idSuffix = '' }) {
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

export default function BlogPage() {
  return (
    <div data-elementor-type="archive" data-elementor-id="1024"
         className="elementor elementor-1024 elementor-location-archive"
         data-elementor-post-type="elementor_library">

      {/* Section 1 — banner titre + breadcrumb */}
      <section className="elementor-section elementor-top-section elementor-element elementor-element-b4f57dd elementor-section-full_width elementor-section-content-middle elementor-section-height-default"
               data-id="b4f57dd" data-element_type="section" data-e-type="section"
               data-settings='{"mdp_selection_sticky_effect_enable":false}'>
        <div className="elementor-background-overlay"></div>
        <div className="elementor-container elementor-column-gap-no">

          <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-af6dc07 elementor-hidden-tablet elementor-hidden-mobile"
               data-id="af6dc07" data-element_type="column" data-e-type="column"
               data-settings='{"background_background":"classic","mdp_selection_sticky_column_effect_enable":false}'>
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-5284849 elementor-widget elementor-widget-spacer"
                   data-id="5284849" data-element_type="widget" data-e-type="widget" data-widget_type="spacer.default">
                <div className="elementor-widget-container">
                  <div className="elementor-spacer"><div className="elementor-spacer-inner"></div></div>
                </div>
              </div>
            </div>
          </div>

          <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-cccc0a6"
               data-id="cccc0a6" data-element_type="column" data-e-type="column"
               data-settings='{"background_background":"classic","mdp_selection_sticky_column_effect_enable":false}'>
            <div className="elementor-widget-wrap elementor-element-populated">

              <div className="elementor-element elementor-element-5ec8a16 elementor-widget elementor-widget-theme-archive-title elementor-page-title elementor-widget-heading"
                   data-id="5ec8a16" data-element_type="widget" data-e-type="widget" data-widget_type="theme-archive-title.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">Category: NFT</h2>
                </div>
              </div>

              <div className="elementor-element elementor-element-dc056a5 elementor-widget elementor-widget-mdp-crumber-elementor"
                   data-id="dc056a5" data-element_type="widget" data-e-type="widget" data-widget_type="mdp-crumber-elementor.default">
                <div className="elementor-widget-container">
                  <div className="mdp-crumber-elementor-box">
                    <div className="mdp-crumber-elementor-breadcrumbs">
                      <div className="mdp-crumber-elementor-breadcrumbs-item mdp-crumber-elementor-breadcrumbs-icon-position-">
                        <span>Home</span>
                      </div>
                      <span className="mdp-crumber-elementor-separator mdp-crumber-elementor-separator-hide-last"> • </span>
                      <div className="mdp-crumber-elementor-breadcrumbs-item mdp-crumber-elementor-breadcrumbs-item-active mdp-crumber-elementor-breadcrumbs-icon-position-">
                        <span>Blog</span>
                      </div>
                      <span className="mdp-crumber-elementor-separator mdp-crumber-elementor-separator-hide-last"> • </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-d22584a elementor-hidden-tablet elementor-hidden-mobile"
               data-id="d22584a" data-element_type="column" data-e-type="column"
               data-settings='{"background_background":"classic","mdp_selection_sticky_column_effect_enable":false}'>
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-efcd61c elementor-widget elementor-widget-spacer"
                   data-id="efcd61c" data-element_type="widget" data-e-type="widget" data-widget_type="spacer.default">
                <div className="elementor-widget-container">
                  <div className="elementor-spacer"><div className="elementor-spacer-inner"></div></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Section 2 — articles + sidebar */}
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

    </div>
  );
}
