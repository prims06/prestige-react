import { Link } from 'react-router-dom';

const AUTHORS = [
  { name: 'Lydia Davidson',  img: '/images/authors/simon-lee-Ue97JK9S0QE-unsplash-2-1-300x300.jpg',               wpImg: 3915, date: 'June 22, 2022', cat: 'Abctract', desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
    sId: '82cd3da', lcId: 'fa84781', imgId: '49008fa', rcId: '4654090', hId: 'd1cc0fb', ilId: '39dcafd', teId: '5fc49f3', btnId: 'a17835d' },
  { name: 'Janet Arnold',    img: '/images/authors/mitchell-luo-dKe5P0ZpteA-unsplash-e1654762224184-300x300.jpg', wpImg: 2442, date: 'June 22, 2022', cat: 'Abctract', desc: 'Aliquam vestibulum morbi blandit cursus risus. Mi ipsum faucibus vitae aliquet.',
    sId: 'c6b7f25', lcId: 'b53abde', imgId: 'cbe1037', rcId: '5805fc4', hId: '4fbef7b', ilId: '6e792cf', teId: '8a87af5', btnId: 'e0dcf20' },
  { name: 'Robert Parsons',  img: '/images/authors/kevin-chin-HvdRVnyV0PQ-unsplash-1-1-300x300.jpg',             wpImg: 2439, date: 'June 22, 2022', cat: 'Abctract', desc: 'Egestas sed tempus urna et pharetra pharetra massa pellentesque',
    sId: '801b213', lcId: '9adaee4', imgId: 'e1bef9f', rcId: 'd2f7e35', hId: '72b7808', ilId: 'bdf3b23', teId: 'ff12ec6', btnId: 'd9af5f3' },
  { name: 'Diane Brown',     img: '/images/authors/mo-DP0LMBAIzZQ-unsplash-1-300x300.jpg',                       wpImg: 2441, date: 'June 22, 2022', cat: 'Abctract', desc: 'Feugiat sed lectus vestibulum mattis ullamcorper. Sed semper risus hendrerit gravida.',
    sId: '999492a', lcId: '6444636', imgId: 'c29e25e', rcId: '616d838', hId: '3b04cb3', ilId: 'c156373', teId: 'd786ee5', btnId: '1b4ebe1' },
  { name: 'Steve Harrison',  img: '/images/authors/milad-fakurian-PjG_SXDkpwQ-unsplash-300x300.jpg',             wpImg: 2427, date: 'June 22, 2022', cat: 'Abctract', desc: 'Vitae suscipit tellus mauris a diam maecenas sed enim',
    sId: 'a7f32b2', lcId: '1b2f38d', imgId: '0d54676', rcId: '6d097cf', hId: '3b706eb', ilId: 'e82e057', teId: 'd8b4ec1', btnId: '5f0fbad' },
  { name: 'Chris Howard',    img: '/images/authors/simon-lee-2XngRU_RNqo-unsplash-300x300.jpg',                  wpImg: 2435, date: 'June 22, 2022', cat: 'Abctract', desc: 'Sed augue lacus viverra vitae congue eu consequat',
    sId: '53bc8ee', lcId: '5f4df25', imgId: '1dc8142', rcId: 'c611270', hId: '780a094', ilId: 'e17c10b', teId: '45387fb', btnId: 'f5b3b4a' },
  { name: 'Mildred Flores',  img: '/images/authors/mo-NKhckz9B78c-unsplash-1-300x300.jpg',                      wpImg: 2455, date: 'June 22, 2022', cat: 'Abctract', desc: 'Faucibus ornare suspendisse sed nisi lacus sed viverra tellus',
    sId: 'cc37a08', lcId: 'a3b8245', imgId: '5641287', rcId: '0645ffe', hId: 'b5a877c', ilId: '7d66639', teId: '38848de', btnId: '5031322' },
  { name: 'Stephen Morris',  img: '/images/authors/simon-lee-zA66MV4EyXc-unsplash-300x300.jpg',                 wpImg: 5578, date: 'June 22, 2022', cat: 'Abctract', desc: 'Eget magna fermentum iaculis eu non diam phasellus vestibulum',
    sId: '9fdace8', lcId: '3776c1e', imgId: '0303195', rcId: '7203608', hId: '0c285cf', ilId: 'de04ef4', teId: 'd93f101', btnId: '9755072' },
  { name: 'Melinda Chapman', img: '/images/authors/hans-eiskonen-8Pm_A-OHJGg-unsplash-1-1-300x300.jpg',         wpImg: 2014, date: 'June 22, 2022', cat: 'Abctract', desc: 'Posuere urna nec tincidunt praesent semper feugiat nibh sed',
    sId: 'd9b8c0a', lcId: 'd1d82f4', imgId: '804a775', rcId: '77603b6', hId: '8f7bbaf', ilId: 'f2cb341', teId: '73ebd21', btnId: '8e55961' },
  { name: 'Kathleen Powell', img: '/images/authors/vadim-bogulov-rP_pS1VMd7c-unsplash-1-300x300.jpg',           wpImg: 2431, date: 'June 22, 2022', cat: 'Abctract', desc: 'Bibendum at varius vel pharetra vel turpis. Sagittis orci a scelerisque purus.',
    sId: '383e01f', lcId: '1641e7b', imgId: 'f7ca21b', rcId: 'f4decc2', hId: '0ef2541', ilId: 'ce22e46', teId: '288e3fd', btnId: 'a914b89' },
];

const QUICK_LINKS = [
  { id: 5167, label: 'Shop' },
  { id: 5166, label: 'About' },
  { id: 5168, label: 'Help center' },
  { id: 5169, label: 'Blog' },
  { id: 5170, label: 'Contacts' },
];

function FilterNavMenu({ dataId, layout = 'horizontal' }) {
  const menu1Id = `menu-1-${dataId}`;
  const menu2Id = `menu-2-${dataId}`;
  const pointerClass = layout === 'vertical' ? ' e--pointer-background e--animation-fade' : ' e--pointer-text e--animation-none';
  const layoutClass = layout === 'vertical' ? ' elementor-nav-menu--layout-vertical' : ' elementor-nav-menu--layout-horizontal';
  const smClass = layout === 'vertical' ? ' sm-vertical' : '';
  return (
    <div className={`elementor-element elementor-element-${dataId} elementor-nav-menu__align-start elementor-nav-menu--dropdown-none elementor-widget elementor-widget-nav-menu`} data-id={dataId} data-element_type="widget" data-e-type="widget" data-settings={`{"submenu_icon":{"value":"<i class=\\"\\" aria-hidden=\\"true\\"><\\/i>","library":""},"layout":"${layout}"}`} data-widget_type="nav-menu.default">
      <div className="elementor-widget-container">
        <nav aria-label="Menu" className={`elementor-nav-menu--main elementor-nav-menu__container${layoutClass}${pointerClass}`}>
          <ul id={menu1Id} className={`elementor-nav-menu${smClass}`}>
            {QUICK_LINKS.map((link) => (
              <li key={link.id} className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-${link.id}`}>
                <a href="/authors#" className="elementor-item elementor-item-anchor">{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="elementor-nav-menu--dropdown elementor-nav-menu__container" aria-hidden="true" style={{ '--menu-height': 0 }}>
          <ul id={menu2Id} className={`elementor-nav-menu${smClass}`}>
            {QUICK_LINKS.map((link) => (
              <li key={link.id} className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-${link.id}`}>
                <a href="/authors#" className="elementor-item elementor-item-anchor" tabIndex={-1}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

function AuthorCard({ author, isFirst }) {
  return (
    <section className={`elementor-section elementor-inner-section elementor-element elementor-element-${author.sId} elementor-section-content-middle elementor-section-boxed elementor-section-height-default`} data-id={author.sId} data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">
        <div className={`elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-${author.lcId}`} data-id={author.lcId} data-element_type="column" data-e-type="column" data-settings='{"background_background":"classic","mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className={`elementor-element elementor-element-${author.imgId} elementor-widget__width-auto elementor-widget-mobile__width-inherit elementor-widget elementor-widget-image`} data-id={author.imgId} data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
              <div className="elementor-widget-container">
                <img {...(isFirst ? { fetchPriority: 'high' } : { loading: 'lazy' })} decoding="async" width="300" height="300" src={author.img} className={`elementor-animation-shrink attachment-medium size-medium wp-image-${author.wpImg}`} alt="" sizes="(max-width: 300px) 100vw, 300px" />
              </div>
            </div>
          </div>
        </div>
        <div className={`elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-${author.rcId}`} data-id={author.rcId} data-element_type="column" data-e-type="column" data-settings='{"background_background":"classic","mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className={`elementor-element elementor-element-${author.hId} elementor-widget elementor-widget-heading`} data-id={author.hId} data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
              <div className="elementor-widget-container"><h6 className="elementor-heading-title elementor-size-default">{author.name}</h6></div>
            </div>
            <div className={`elementor-element elementor-element-${author.ilId} elementor-icon-list--layout-inline elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list`} data-id={author.ilId} data-element_type="widget" data-e-type="widget" data-widget_type="icon-list.default">
              <div className="elementor-widget-container">
                <ul className="elementor-icon-list-items elementor-inline-items">
                  <li className="elementor-icon-list-item elementor-inline-item">
                    <span className="elementor-icon-list-icon"><i aria-hidden="true" className="fas fa-clock"></i></span>
                    <span className="elementor-icon-list-text">{author.date}</span>
                  </li>
                  <li className="elementor-icon-list-item elementor-inline-item">
                    <span className="elementor-icon-list-icon"><i aria-hidden="true" className="fas fa-tags"></i></span>
                    <span className="elementor-icon-list-text">{author.cat}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className={`elementor-element elementor-element-${author.teId} elementor-widget elementor-widget-text-editor`} data-id={author.teId} data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
              <div className="elementor-widget-container">{author.desc}</div>
            </div>
            <div className={`elementor-element elementor-element-${author.btnId} elementor-align-left elementor-mobile-align-justify elementor-widget elementor-widget-button`} data-id={author.btnId} data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
              <div className="elementor-widget-container">
                <div className="elementor-button-wrapper">
                  <a className="elementor-button elementor-button-link elementor-size-sm elementor-animation-push" href="/authors#">
                    <span className="elementor-button-content-wrapper"><span className="elementor-button-text">View profile</span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AuthorsHeader() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-89a4cbb elementor-section-boxed elementor-section-height-default" data-id="89a4cbb" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-dccb0e1" data-id="dccb0e1" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-3f4332d elementor-widget elementor-widget-heading" data-id="3f4332d" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
              <div className="elementor-widget-container"><h2 className="elementor-heading-title elementor-size-default">Authors</h2></div>
            </div>
            <div className="elementor-element elementor-element-f7056c2 elementor-widget elementor-widget-mdp-crumber-elementor" data-id="f7056c2" data-element_type="widget" data-e-type="widget" data-widget_type="mdp-crumber-elementor.default">
              <div className="elementor-widget-container">
                <div className="mdp-crumber-elementor-box">
                  <div className="mdp-crumber-elementor-breadcrumbs">
                    <div className="mdp-crumber-elementor-breadcrumbs-item mdp-crumber-elementor-breadcrumbs-icon-position-"><span>Home</span></div>
                    <span className="mdp-crumber-elementor-separator mdp-crumber-elementor-separator-hide-last"> {'•'} </span>
                    <div className="mdp-crumber-elementor-breadcrumbs-item mdp-crumber-elementor-breadcrumbs-item-active mdp-crumber-elementor-breadcrumbs-icon-position-"><span>Authors</span></div>
                    <span className="mdp-crumber-elementor-separator mdp-crumber-elementor-separator-hide-last"> {'•'} </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileFilterNav() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-122b1ba elementor-hidden-desktop elementor-section-boxed elementor-section-height-default" data-id="122b1ba" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-8bf8869" data-id="8bf8869" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-2c52821 elementor-widget elementor-widget-heading" data-id="2c52821" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
              <div className="elementor-widget-container"><h5 className="elementor-heading-title elementor-size-default">Filters</h5></div>
            </div>
            <FilterNavMenu dataId="450dd2b" layout="horizontal" />
          </div>
        </div>
      </div>
    </section>
  );
}

function AuthorsMain() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-a464f1f elementor-section-boxed elementor-section-height-default" data-id="a464f1f" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-2f20353" data-id="2f20353" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            {AUTHORS.map((author, i) => (
              <AuthorCard key={author.sId} author={author} isFirst={i === 0} />
            ))}
          </div>
        </div>
        <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-c1b31d2 elementor-hidden-tablet elementor-hidden-mobile" data-id="c1b31d2" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-d2810f9 elementor-widget elementor-widget-heading" data-id="d2810f9" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
              <div className="elementor-widget-container"><h5 className="elementor-heading-title elementor-size-default">Quick links</h5></div>
            </div>
            <FilterNavMenu dataId="afe3ae8" layout="vertical" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AuthorsPage() {
  return (
    <main id="content" className="site-main post-411 envato_tk_templates type-envato_tk_templates status-publish has-post-thumbnail hentry">
      <div className="page-content">
        <div data-elementor-type="wp-post" data-elementor-id="411" className="elementor elementor-411" data-elementor-post-type="envato_tk_templates">
          <AuthorsHeader />
          <MobileFilterNav />
          <AuthorsMain />
        </div>
      </div>
    </main>
  );
}
