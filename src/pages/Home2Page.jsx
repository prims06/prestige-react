const GALLERY_SETTINGS = '{"columns":3,"columns_tablet":3,"aspect_ratio":"1:1","columns_mobile":3,"gap_mobile":{"unit":"px","size":5,"sizes":[]},"gallery_layout":"grid","gap":{"unit":"px","size":10,"sizes":[]},"gap_tablet":{"unit":"px","size":10,"sizes":[]}}';

const PRODUCTS = [
  { id: '2472', cls: 'post-2472 product first instock shipping-taxable product-type-external', img: '/images/home-2/pawel-czerwinski-hNrd99q5peI-unsplash-1-600x600.jpg', cat: '📸 Photography', title: 'Abstract image', price: '2,560.00', sku: '1234598-2', badge: null },
  { id: '1660', cls: 'post-1660 product  instock featured shipping-taxable product-type-external', img: '/images/home-2/milad-fakurian-PjG_SXDkpwQ-unsplash-600x600.jpg', cat: '✨ Collectibles', title: 'Сolorful 3D object', price: '890.00', sku: '123455-1-1-1', badge: 'Hot' },
  { id: '214', cls: 'post-214 product  instock featured shipping-taxable product-type-external', img: '/images/home-2/anunay-rai-awMWm6ayLTc-unsplash-600x600.jpg', cat: '🔥 Trading cards', title: 'Logical impact', price: '1,400.00', sku: '123455-1-1', badge: 'Hot' },
  { id: '212', cls: 'post-212 product last instock shipping-taxable product-type-external', img: '/images/home-2/simon-lee-fyZOY0HiF9A-unsplash-1-600x600.jpg', cat: '🎨 Art', title: 'Infinite figure', price: '890.00', sku: '123455', badge: null },
  { id: '211', cls: 'post-211 product first instock featured shipping-taxable product-type-external', img: '/images/home-2/simon-lee-zA66MV4EyXc-unsplash-600x600.jpg', cat: '🎨 Art', title: 'The image of a man', price: '1,200.00', sku: '1234511', badge: 'Hot' },
  { id: '210', cls: 'post-210 product  instock featured shipping-taxable product-type-external', img: '/images/home-2/kevin-chin-HvdRVnyV0PQ-unsplash-1-1-600x600.jpg', cat: '⚡ Utility', title: '3D object Loppi', price: '2,560.00', sku: '1234598-1-1', badge: 'Hot' },
  { id: '209', cls: 'post-209 product  instock featured shipping-taxable product-type-external', img: '/images/home-2/mo-DP0LMBAIzZQ-unsplash-1-600x600.jpg', cat: 'ðŸŒ Virtual worlds', title: '3D renders', price: '2,560.00', sku: '1234598-1', badge: 'Hot' },
  { id: '208', cls: 'post-208 product last instock featured shipping-taxable product-type-external', img: '/images/home-2/simon-lee-Ue97JK9S0QE-unsplash-2-1-600x600.jpg', cat: '🎨 Art', title: 'Pixel art', price: '2,560.00', sku: '1234598', badge: 'Hot' },
];

const COLLECTIONS_ROW1 = [
  {
    outerColId: 'bb1ee8f', outerColCls: '', innerSecId: 'e8df942', innerColId: '09516ab',
    titleId: '4a5f7f5', title: '3d vector characters',
    nftId: '8f4112a', nftCount: '30 NFT',
    imgBoxId: '36ac3bf',
    avatarSrc: '/images/home-2/aldi-sigun-unt3066GV-E-unsplash-1-pqla26hvxjhmmpplcvf4hvogrzkvxsgwazpcvng4ic.jpg',
    avatarTitle: 'aldi-sigun-unt3066GV-E-unsplash 1',
    handle: '@anizadam', mobileHandleId: '85aba68',
    spacerId: '1bce2ac', galleryId: 'f1bd42c',
    galleryAspectRatio: '31.197170922875955%',
    galleryItems: [
      { thumb: 'images/home-2/aldi-sigun-rTCDPl3C_os-unsplash-1-300x225.jpg', w: '300', h: '225' },
      { thumb: 'images/home-2/warren-umoh-YmTIxQbQo4I-unsplash-1-1-300x169.jpg', w: '300', h: '169' },
      { thumb: 'images/home-2/aldi-sigun-pmACe385Ruo-unsplash-242x300.jpg', w: '242', h: '300' },
    ],
  },
  {
    outerColId: 'e5a6fcb', outerColCls: '', innerSecId: '557658b', innerColId: '6de3ebb',
    titleId: '900a455', title: 'Figure collection',
    nftId: '27d1ebb', nftCount: '26 NFT',
    imgBoxId: '667b19a',
    avatarSrc: '/images/home-2/polina-kondrashova-fhrWAh2HMnM-unsplash-1-pq1xjcs8epxzkoakq53h5fakmu7apj5fi4njvy539w.jpg',
    avatarTitle: 'polina-kondrashova-fhrWAh2HMnM-unsplash 1',
    handle: '@zzzivitelar', mobileHandleId: '585c903',
    spacerId: 'fc928f8', galleryId: '875e3c4',
    galleryAspectRatio: '31.197170922875955%',
    galleryItems: [
      { thumb: 'images/home-2/simon-lee-pP7mDtIjFKA-unsplash-1-225x300.jpg', w: '225', h: '300' },
      { thumb: 'images/home-2/simon-lee-hbFKxsIqclc-unsplash-1-225x300.jpg', w: '225', h: '300' },
      { thumb: 'images/home-2/milad-fakurian-PjG_SXDkpwQ-unsplash-600x600.jpg', w: '300', h: '300' },
    ],
  },
  {
    outerColId: 'b77ff68', outerColCls: 'elementor-hidden-tablet', innerSecId: '27c2567', innerColId: '727009c',
    titleId: '2c4b08f', title: 'Creative collection',
    nftId: 'af0bdbe', nftCount: '09 NFT',
    imgBoxId: '1597c72',
    avatarSrc: '/images/home-2/mika-y-RjWd6Ol7A-unsplash-1-pqla441xza4uhuwk2phime4kqi21re518jzae4kzpw.jpg',
    avatarTitle: 'mika-y-RjWd6Ol7A-unsplash 1',
    handle: '@xte284934', mobileHandleId: 'a1d0783',
    spacerId: 'abad823', galleryId: '429d969',
    galleryAspectRatio: '31.197170922875955%',
    galleryItems: [
      { thumb: 'images/home-2/mika-y-RjWd6Ol7A-unsplash-1-pqla441xza4uhuwk2phime4kqi21re518jzae4kzpw.jpg', w: '199', h: '300' },
      { thumb: 'images/home-2/mithushi-arya-lXOX3-yTvyQ-unsplash-300x300.jpg', w: '300', h: '300' },
      { thumb: 'images/home-2/8machine-_-3nkmdS2m84s-unsplash-1-e1654506399116-296x300.jpg', w: '296', h: '300' },
    ],
  },
];

const COLLECTIONS_ROW2 = [
  {
    outerColId: 'a13bc42', outerColCls: '', innerSecId: 'f0c702e', innerColId: '35c54cc',
    titleId: 'bc7a82f', title: 'The image of a man',
    nftId: 'c546649', nftCount: '54 NFT',
    imgBoxId: 'd759e75',
    avatarSrc: '/images/home-2/img-4-pqlau0huaxlaf1a4twjfbutu0qe5v4yrgr4ygm6g9g.png',
    avatarTitle: 'img-4',
    handle: '@floweman', mobileHandleId: '18bd5a1',
    spacerId: '30a1b3f', galleryId: '0491c85',
    galleryAspectRatio: '31.197170922875955%',
    galleryItems: [
      { thumb: 'images/home-2/simon-lee-ycIovp6d844-unsplash-2-225x300.jpg', w: '225', h: '300' },
      { thumb: 'images/home-2/simon-lee-3W5nTU5F4Uc-unsplash-225x300.jpg', w: '225', h: '300' },
      { thumb: 'images/home-2/simon-lee-lEObCRjZXF4-unsplash-225x300.jpg', w: '225', h: '300' },
    ],
  },
  {
    outerColId: 'c7832be', outerColCls: '', innerSecId: '511c192', innerColId: '6502cde',
    titleId: '8e60cd7', title: 'Solar system',
    nftId: '7f079b2', nftCount: '08 NFT',
    imgBoxId: 'f3da4c0',
    avatarSrc: '/images/home-2/simon-lee-hrOXaenH640-unsplash-pq1xy8k8mabfeeobtkotmo3b8guil08fjsibfo2or8.jpg',
    avatarTitle: 'simon-lee-hrOXaenH640-unsplash',
    handle: '@planets', mobileHandleId: '6cf1cbc',
    spacerId: '5cf19b8', galleryId: '0746266',
    galleryAspectRatio: '31.197170922875955%',
    galleryItems: [
      { thumb: 'images/home-2/simon-lee-hrOXaenH640-unsplash-pq1xy8k8mabfeeobtkotmo3b8guil08fjsibfo2or8.jpg', w: '300', h: '300' },
      { thumb: 'images/home-2/simon-lee-MzZ4WW3IT_U-unsplash-1-300x300.jpg', w: '300', h: '300' },
      { thumb: 'images/home-2/simon-lee-_B7LjqNXu5Q-unsplash-1-300x300.jpg', w: '300', h: '300' },
    ],
  },
  {
    outerColId: 'b9e9e5c', outerColCls: 'elementor-hidden-tablet', innerSecId: '1f504f4', innerColId: '0236a14',
    titleId: 'f46251d', title: 'Сolored backgrounds',
    nftId: '5b310b5', nftCount: '38 NFT',
    imgBoxId: 'aee6900',
    avatarSrc: '/images/home-2/alexander-ant-ppOcXL9_sko-unsplash-1-pql9qekob9db6ktd4a6drcnkv7mciapycphdfuwogk.jpg',
    avatarTitle: 'alexander-ant-ppOcXL9_sko-unsplash 1',
    handle: '@bghnaselmei', mobileHandleId: 'f50e880',
    spacerId: '187aa28', galleryId: 'e6c3b81',
    galleryAspectRatio: '31.197170922875955%',
    galleryItems: [
      { thumb: 'images/home-2/dim-gunger-3emffQOvHxA-unsplash-1-240x300.jpg', w: '240', h: '300' },
      { thumb: 'images/home-2/rick-rothenberg-Nqx3SaMp4kQ-unsplash-300x187.jpg', w: '300', h: '187' },
      { thumb: 'images/home-2/ferhat-deniz-fors-e1qoosfnAvA-unsplash-1-300x225.jpg', w: '300', h: '225' },
    ],
  },
];

const AUTHORS = [
  {
    colId: '5512044', colCls: 'elementor-invisible',
    img1Id: '0e2f81a', img1: '/images/home-2/simon-lee-Ue97JK9S0QE-unsplash-2-1-pql991i6ynipilxof6bs3mkrc0xvl51205fh99pf34.jpg', img1Title: 'simon-lee-Ue97JK9S0QE-unsplash (2) 1',
    img2Id: '045ca06', img2: '/images/home-2/vadim-bogulov-bU-KakBHOng-unsplash-1-pql98lirvyr3803jhumfc9tt0xt7xmsj8bb2mr4dyo.jpg', img2Title: 'vadim-bogulov-bU-KakBHOng-unsplash 1',
    nameId: 'ab9d318', handle: '@sontonieldaki',
    ethId: '6bd89fe', eth: '236.88 ETH',
  },
  {
    colId: 'ec28bfb', colCls: 'elementor-invisible',
    img1Id: '56e77ca', img1: '/images/home-2/mo-NKhckz9B78c-unsplash-1-pql9sgu47e41ghpuzkm7mq3pap6yny5coasqb4wihs.jpg', img1Title: 'mo-NKhckz9B78c-unsplash 1',
    img2Id: 'c760a0f', img2: '/images/home-2/alexander-ant-XxFn6OfdXK0-unsplash-1-pql9pylg4siroovl3utbwe3c268b4cq1a94yrrdl0w.jpg', img2Title: 'alexander-ant-XxFn6OfdXK0-unsplash 1',
    nameId: 'f324cac', handle: '@ilanashemi',
    ethId: 'eff781b', eth: '90.67 ETH',
  },
  {
    colId: '36b6d57', colCls: 'elementor-hidden-tablet elementor-invisible',
    img1Id: '8faaa1b', img1: '/images/home-2/ferhat-deniz-fors-saE7xiecGkM-unsplash-2-1-1-pq0sitz7psm4wmx9hsz8bewtddj7rfp47ejj0ug71c.jpg', img1Title: 'ferhat-deniz-fors-saE7xiecGkM-unsplash (2) (1) 1',
    img2Id: '679febb', img2: '/images/home-2/beautiful-woman-with-stylish-clothes-2021-09-01-23-19-31-utc-e1654625325804-pqla3qw8dbe5ysuoltccgwuppma40jgb6hlc5uxprk.jpg', img2Title: 'beautiful-woman-with-stylish-clothes-2021-09-01-23-19-31-utc',
    nameId: '82f8ced', handle: '@ventuniconeymon',
    ethId: '03b503c', eth: '112.43 ETH',
  },
];

const LOGOS = [
  { alt: 'logo', src: '/images/home-2/logo-3.png' },
  { alt: 'logo-1', src: '/images/home-2/logo-1-1.png' },
  { alt: 'logo-2', src: '/images/home-2/logo-2-1.png' },
  { alt: 'logo-3', src: '/images/home-2/logo-3-1.png' },
  { alt: 'logo-4', src: '/images/home-2/logo-4.png' },
  { alt: 'logo-5', src: '/images/home-2/logo-5.png' },
];

function GalleryContainer({ aspectRatio, items }) {
  return (
    <div className="elementor-gallery__container e-gallery-container e-gallery-grid e-gallery--ltr"
      style={{ '--hgap': '10px', '--vgap': '10px', '--animation-duration': '350ms', '--columns': '3', '--rows': '1', '--aspect-ratio': '100%', '--container-aspect-ratio': aspectRatio }}>
      {items.map((item, i) => (
        <div key={i} className="e-gallery-item elementor-gallery-item" style={{ '--column': String(i), '--row': '0' }}>
          <div className="e-gallery-image elementor-gallery-item__image"
            data-thumbnail={item.thumb} data-width={item.w} data-height={item.h}
            aria-label="" role="img"
            style={{ backgroundImage: `url("${item.thumb}")` }} />
        </div>
      ))}
    </div>
  );
}

function CollectionCard({ c, colSize = 33 }) {
  return (
    <div className={`elementor-column elementor-col-${colSize} elementor-top-column elementor-element elementor-element-${c.outerColId}${c.outerColCls ? ' ' + c.outerColCls : ''}`}
      data-id={c.outerColId} data-element_type="column" data-e-type="column"
      data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
      <div className="elementor-widget-wrap elementor-element-populated">
        <section className={`elementor-section elementor-inner-section elementor-element elementor-element-${c.innerSecId} elementor-section-boxed elementor-section-height-default`}
          data-id={c.innerSecId} data-element_type="section" data-e-type="section"
          data-settings='{"mdp_selection_sticky_effect_enable":false}'>
          <div className="elementor-container elementor-column-gap-no">
            <div className={`elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-${c.innerColId}`}
              data-id={c.innerColId} data-element_type="column" data-e-type="column"
              data-settings='{"background_background":"classic","mdp_selection_sticky_column_effect_enable":false}'>
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-background-overlay"></div>
                <div className={`elementor-element elementor-element-${c.titleId} elementor-widget elementor-widget-heading`}
                  data-id={c.titleId} data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h4 className="elementor-heading-title elementor-size-default">{c.title}</h4>
                  </div>
                </div>
                <div className={`elementor-element elementor-element-${c.nftId} elementor-widget elementor-widget-heading`}
                  data-id={c.nftId} data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h6 className="elementor-heading-title elementor-size-default">{c.nftCount}</h6>
                  </div>
                </div>
                <div className={`elementor-element elementor-element-${c.imgBoxId} elementor-position-left elementor-vertical-align-middle elementor-widget__width-auto elementor-hidden-mobile elementor-widget elementor-widget-image-box`}
                  data-id={c.imgBoxId} data-element_type="widget" data-e-type="widget" data-widget_type="image-box.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-image-box-wrapper">
                      <figure className="elementor-image-box-img">
                        <img decoding="async" src={c.avatarSrc} title={c.avatarTitle} alt={c.avatarTitle} loading="lazy" />
                      </figure>
                      <div className="elementor-image-box-content">
                        <h3 className="elementor-image-box-title">{c.handle}</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`elementor-element elementor-element-${c.mobileHandleId} elementor-widget__width-auto elementor-hidden-desktop elementor-hidden-tablet elementor-widget elementor-widget-heading`}
                  data-id={c.mobileHandleId} data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-heading-title elementor-size-default">{c.handle}</div>
                  </div>
                </div>
                <div className={`elementor-element elementor-element-${c.spacerId} elementor-widget elementor-widget-spacer`}
                  data-id={c.spacerId} data-element_type="widget" data-e-type="widget" data-widget_type="spacer.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-spacer"><div className="elementor-spacer-inner"></div></div>
                  </div>
                </div>
                <div className={`elementor-element elementor-element-${c.galleryId} elementor-widget elementor-widget-gallery`}
                  data-id={c.galleryId} data-element_type="widget" data-e-type="widget"
                  data-settings={GALLERY_SETTINGS} data-widget_type="gallery.default">
                  <div className="elementor-widget-container">
                    <GalleryContainer aspectRatio={c.galleryAspectRatio} items={c.galleryItems} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function MdpButton({ id, text, extraCls = '' }) {
  return (
    <div className={`mdp-buttoner-container mdp-buttoner-container-${id}`}>
      <a id="" href="/home-2#" className={`mdp-buttoner-link elementor-animation-push${extraCls ? ' ' + extraCls : ''}`} target={'"_blank"'} rel={'"nofollow"'}>
        <span>
          <span className="mdp-buttoner-text">{text}</span>
          <span className="mdp-buttoner-icon ">
            <i aria-hidden="true" className="fas fa-arrow-right"></i>
          </span>
        </span>
      </a>
    </div>
  );
}

export default function Home2Page() {
  return (
    <main id="content" className="site-main post-18 envato_tk_templates type-envato_tk_templates status-publish has-post-thumbnail hentry">
      <div className="page-content">
        <div data-elementor-type="wp-post" data-elementor-id="18" className="elementor elementor-18" data-elementor-post-type="envato_tk_templates">

          {/* Section 1: Hero 3-col backgrounds (d2f22ae) */}
          <section className="elementor-section elementor-top-section elementor-element elementor-element-d2f22ae elementor-section-full_width elementor-section-height-default" data-id="d2f22ae" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
            <div className="elementor-container elementor-column-gap-no">

              <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-407ad90" data-id="407ad90" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                <div className="elementor-widget-wrap elementor-element-populated">
                  <section className="elementor-section elementor-inner-section elementor-element elementor-element-ac78b52 elementor-section-boxed elementor-section-height-default" data-id="ac78b52" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
                    <div className="elementor-container elementor-column-gap-no">
                      <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-af5220e" data-id="af5220e" data-element_type="column" data-e-type="column" data-settings='{"background_background":"classic","mdp_selection_sticky_column_effect_enable":false}'>
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-background-overlay"></div>
                          <div className="elementor-element elementor-element-30d422c elementor-widget elementor-widget-heading" data-id="30d422c" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                              <h3 className="elementor-heading-title elementor-size-default">Abstract figures</h3>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-3419eee elementor-widget elementor-widget-heading" data-id="3419eee" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                              <div className="elementor-heading-title elementor-size-default">@fershonorm</div>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-03424e5 elementor-widget elementor-widget-spacer" data-id="03424e5" data-element_type="widget" data-e-type="widget" data-widget_type="spacer.default">
                            <div className="elementor-widget-container">
                              <div className="elementor-spacer"><div className="elementor-spacer-inner"></div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>

              <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-04fca46 elementor-hidden-mobile" data-id="04fca46" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                <div className="elementor-widget-wrap elementor-element-populated">
                  <section className="elementor-section elementor-inner-section elementor-element elementor-element-3fdda24 elementor-section-boxed elementor-section-height-default" data-id="3fdda24" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
                    <div className="elementor-container elementor-column-gap-no">
                      <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-bbb9b10" data-id="bbb9b10" data-element_type="column" data-e-type="column" data-settings='{"background_background":"classic","mdp_selection_sticky_column_effect_enable":false}'>
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-background-overlay"></div>
                          <div className="elementor-element elementor-element-1397232 elementor-widget elementor-widget-heading" data-id="1397232" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                              <h3 className="elementor-heading-title elementor-size-default">Black balaclava</h3>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-49e8b5c elementor-widget elementor-widget-heading" data-id="49e8b5c" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                              <div className="elementor-heading-title elementor-size-default">@veresarrisal</div>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-f321a3d elementor-widget elementor-widget-spacer" data-id="f321a3d" data-element_type="widget" data-e-type="widget" data-widget_type="spacer.default">
                            <div className="elementor-widget-container">
                              <div className="elementor-spacer"><div className="elementor-spacer-inner"></div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>

              <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-bcc7894 elementor-hidden-tablet elementor-hidden-mobile" data-id="bcc7894" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                <div className="elementor-widget-wrap elementor-element-populated">
                  <section className="elementor-section elementor-inner-section elementor-element elementor-element-fd36be4 elementor-section-boxed elementor-section-height-default" data-id="fd36be4" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
                    <div className="elementor-container elementor-column-gap-no">
                      <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-f8221d7" data-id="f8221d7" data-element_type="column" data-e-type="column" data-settings='{"background_background":"classic","mdp_selection_sticky_column_effect_enable":false}'>
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-background-overlay"></div>
                          <div className="elementor-element elementor-element-70a3a2e elementor-widget elementor-widget-heading" data-id="70a3a2e" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                              <h3 className="elementor-heading-title elementor-size-default">Сolored dreams</h3>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-2f0cf74 elementor-widget elementor-widget-heading" data-id="2f0cf74" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                              <div className="elementor-heading-title elementor-size-default">@sheeliani</div>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-fd36f42 elementor-widget elementor-widget-spacer" data-id="fd36f42" data-element_type="widget" data-e-type="widget" data-widget_type="spacer.default">
                            <div className="elementor-widget-container">
                              <div className="elementor-spacer"><div className="elementor-spacer-inner"></div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>

            </div>
          </section>

          {/* Section 2: "Live auctions💥" title + Explore more (fb043dd) */}
          <section className="elementor-section elementor-top-section elementor-element elementor-element-fb043dd elementor-section-content-middle elementor-section-boxed elementor-section-height-default" data-id="fb043dd" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
            <div className="elementor-container elementor-column-gap-no">
              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-d46315d" data-id="d46315d" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-27bff61 elementor-widget elementor-widget-heading" data-id="27bff61" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h3 className="elementor-heading-title elementor-size-default">Live auctions💥</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-e3879a2 elementor-hidden-mobile" data-id="e3879a2" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-2c2a421 elementor-animation-push elementor-widget__width-auto elementor-widget elementor-widget-mdp-buttoner-elementor" data-id="2c2a421" data-element_type="widget" data-e-type="widget" data-widget_type="mdp-buttoner-elementor.default">
                    <div className="elementor-widget-container">
                      <MdpButton id="2c2a421" text="Explore more" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Products grid (d0f55e2) */}
          <section className="elementor-section elementor-top-section elementor-element elementor-element-d0f55e2 elementor-section-boxed elementor-section-height-default elementor-invisible" data-id="d0f55e2" data-element_type="section" data-e-type="section" data-settings='{"animation":"fadeInUp","mdp_selection_sticky_effect_enable":false}'>
            <div className="elementor-container elementor-column-gap-no">
              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-bf4603a" data-id="bf4603a" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-ed14530 premium-woo-product-align-left premium-qv-hidden-yes elementor-widget elementor-widget-premium-woo-products" data-id="ed14530" data-element_type="widget" data-e-type="widget" data-widget_type="premium-woo-products.grid-3">
                    <div className="elementor-widget-container">
                      <div className="premium-woocommerce premium-woo-products-grid premium-woo-skin-grid-3 premium-woo-query-all" data-page-id="18" data-skin="grid_3" data-quick-view="yes">
                        <div className="premium-woo-products-inner premium-woo-product__hover-zoomin">
                          <ul className="products columns-4">
                            {PRODUCTS.map((p, i) => (
                              <li key={p.id} className={` ${p.cls}`}>
                                <div className="premium-woo-product-wrapper premium-con-lq__none">
                                  <div className="premium-woo-product-thumbnail">
                                    {p.badge && (
                                      <div className="premium-woo-ribbon-container">
                                        <div className="premium-woo-product-featured-wrap">
                                          <span className="premium-woo-product-featured">{p.badge}</span>
                                        </div>
                                      </div>
                                    )}
                                    <a href="/product" className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                      <img decoding="async" src={p.img} alt=""
                                        {...(i === 0 ? { fetchPriority: 'high' } : { loading: 'lazy' })} />
                                    </a>
                                    <div className="premium-woo-qv-data" data-product-id={p.id}></div>
                                  </div>
                                  <div className="premium-woo-products-details-wrap">
                                    <span className="premium-woo-product-category">{p.cat}</span>
                                    <a href="/product" className="premium-woo-product__link">
                                      <h2 className="woocommerce-loop-product__title">{p.title}</h2>
                                    </a>
                                    <span className="price">
                                      <span className="woocommerce-Price-amount amount">
                                        <bdi><span className="woocommerce-Price-currencySymbol">$</span>{p.price}</bdi>
                                      </span>
                                    </span>
                                    <div className="premium-woo-product-actions-wrapper">
                                      <div className="premium-woo-atc-button" data-variations={'"true"'}>
                                        <a href="/home-2" aria-describedby={`woocommerce_loop_add_to_cart_link_describedby_${p.id}`}
                                          data-quantity="1" className="button product_type_external"
                                          data-product_id={p.id} data-product_sku={p.sku}
                                          aria-label="Buy now" rel="nofollow">Buy now</a>
                                        <span id={`woocommerce_loop_add_to_cart_link_describedby_${p.id}`} className="screen-reader-text"></span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Mobile "Explore more" button (d32d04c) */}
          <section className="elementor-section elementor-top-section elementor-element elementor-element-d32d04c elementor-section-content-middle elementor-hidden-desktop elementor-hidden-tablet elementor-section-boxed elementor-section-height-default elementor-invisible" data-id="d32d04c" data-element_type="section" data-e-type="section" data-settings='{"animation":"fadeInUp","mdp_selection_sticky_effect_enable":false}'>
            <div className="elementor-container elementor-column-gap-no">
              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-239166b" data-id="239166b" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-41b2812 elementor-animation-push elementor-widget-mobile__width-inherit elementor-widget elementor-widget-mdp-buttoner-elementor" data-id="41b2812" data-element_type="widget" data-e-type="widget" data-widget_type="mdp-buttoner-elementor.default">
                    <div className="elementor-widget-container">
                      <MdpButton id="41b2812" text="Explore more" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: "Featured collections⚡" title + button (50dacfc) */}
          <section className="elementor-section elementor-top-section elementor-element elementor-element-50dacfc elementor-section-content-middle elementor-section-boxed elementor-section-height-default" data-id="50dacfc" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
            <div className="elementor-container elementor-column-gap-no">
              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-56492ba" data-id="56492ba" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-06eb980 elementor-widget elementor-widget-heading" data-id="06eb980" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h3 className="elementor-heading-title elementor-size-default">Featured collections⚡</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-3baee0d elementor-hidden-mobile" data-id="3baee0d" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-3dd93c9 elementor-animation-push elementor-widget__width-auto elementor-widget elementor-widget-mdp-buttoner-elementor" data-id="3dd93c9" data-element_type="widget" data-e-type="widget" data-widget_type="mdp-buttoner-elementor.default">
                    <div className="elementor-widget-container">
                      <MdpButton id="3dd93c9" text="View all collections" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Collections row 1 (45b7777) */}
          <section className="elementor-section elementor-top-section elementor-element elementor-element-45b7777 elementor-section-boxed elementor-section-height-default elementor-invisible" data-id="45b7777" data-element_type="section" data-e-type="section" data-settings='{"animation":"fadeInUp","mdp_selection_sticky_effect_enable":false}'>
            <div className="elementor-container elementor-column-gap-no">
              {COLLECTIONS_ROW1.map(c => <CollectionCard key={c.outerColId} c={c} />)}
            </div>
          </section>

          {/* Section 7: Tablet-only 2-col collections (58dba9f) */}
          <section className="elementor-section elementor-top-section elementor-element elementor-element-58dba9f elementor-hidden-desktop elementor-hidden-mobile elementor-section-boxed elementor-section-height-default elementor-invisible" data-id="58dba9f" data-element_type="section" data-e-type="section" data-settings='{"animation":"fadeInUp","mdp_selection_sticky_effect_enable":false}'>
            <div className="elementor-container elementor-column-gap-no">

              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-0292897" data-id="0292897" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                <div className="elementor-widget-wrap elementor-element-populated">
                  <section className="elementor-section elementor-inner-section elementor-element elementor-element-5d9ab83 elementor-section-boxed elementor-section-height-default" data-id="5d9ab83" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
                    <div className="elementor-container elementor-column-gap-no">
                      <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-3a9e3cc" data-id="3a9e3cc" data-element_type="column" data-e-type="column" data-settings='{"background_background":"classic","mdp_selection_sticky_column_effect_enable":false}'>
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-background-overlay"></div>
                          <div className="elementor-element elementor-element-9f40b7f elementor-widget elementor-widget-heading" data-id="9f40b7f" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                            <div className="elementor-widget-container"><h4 className="elementor-heading-title elementor-size-default">Creative collection</h4></div>
                          </div>
                          <div className="elementor-element elementor-element-0d76515 elementor-widget elementor-widget-heading" data-id="0d76515" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                            <div className="elementor-widget-container"><h6 className="elementor-heading-title elementor-size-default">09 NFT</h6></div>
                          </div>
                          <div className="elementor-element elementor-element-775b83c elementor-position-left elementor-vertical-align-middle elementor-widget__width-auto elementor-hidden-mobile elementor-widget elementor-widget-image-box" data-id="775b83c" data-element_type="widget" data-e-type="widget" data-widget_type="image-box.default">
                            <div className="elementor-widget-container">
                              <div className="elementor-image-box-wrapper">
                                <figure className="elementor-image-box-img">
                                  <img decoding="async" src="/images/home-2/mika-y-RjWd6Ol7A-unsplash-1-pqla441xza4uhuwk2phime4kqi21re518jzae4kzpw.jpg" title="mika-y-RjWd6Ol7A-unsplash 1" alt="mika-y-RjWd6Ol7A-unsplash 1" loading="lazy" />
                                </figure>
                                <div className="elementor-image-box-content"><h3 className="elementor-image-box-title">@xte284934</h3></div>
                              </div>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-f3391f1 elementor-widget__width-auto elementor-hidden-desktop elementor-hidden-tablet elementor-widget elementor-widget-heading" data-id="f3391f1" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                            <div className="elementor-widget-container"><div className="elementor-heading-title elementor-size-default">@xte284934</div></div>
                          </div>
                          <div className="elementor-element elementor-element-cd7ed49 elementor-widget elementor-widget-spacer" data-id="cd7ed49" data-element_type="widget" data-e-type="widget" data-widget_type="spacer.default">
                            <div className="elementor-widget-container"><div className="elementor-spacer"><div className="elementor-spacer-inner"></div></div></div>
                          </div>
                          <div className="elementor-element elementor-element-4943d0e elementor-widget elementor-widget-gallery" data-id="4943d0e" data-element_type="widget" data-e-type="widget" data-settings={GALLERY_SETTINGS} data-widget_type="gallery.default">
                            <div className="elementor-widget-container">
                              <GalleryContainer aspectRatio="NaN%" items={[
                                { thumb: 'images/home-2/mika-y-RjWd6Ol7A-unsplash-1-pqla441xza4uhuwk2phime4kqi21re518jzae4kzpw.jpg', w: '199', h: '300' },
                                { thumb: 'images/home-2/mithushi-arya-lXOX3-yTvyQ-unsplash-300x300.jpg', w: '300', h: '300' },
                                { thumb: 'images/home-2/8machine-_-3nkmdS2m84s-unsplash-1-e1654506399116-296x300.jpg', w: '296', h: '300' },
                              ]} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>

              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-930e906" data-id="930e906" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                <div className="elementor-widget-wrap elementor-element-populated">
                  <section className="elementor-section elementor-inner-section elementor-element elementor-element-4a8bda5 elementor-section-boxed elementor-section-height-default" data-id="4a8bda5" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
                    <div className="elementor-container elementor-column-gap-no">
                      <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-37f5a3d" data-id="37f5a3d" data-element_type="column" data-e-type="column" data-settings='{"background_background":"classic","mdp_selection_sticky_column_effect_enable":false}'>
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-background-overlay"></div>
                          <div className="elementor-element elementor-element-b4ad0f9 elementor-widget elementor-widget-heading" data-id="b4ad0f9" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                            <div className="elementor-widget-container"><h4 className="elementor-heading-title elementor-size-default">Сolored backgrounds</h4></div>
                          </div>
                          <div className="elementor-element elementor-element-963d722 elementor-widget elementor-widget-heading" data-id="963d722" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                            <div className="elementor-widget-container"><h6 className="elementor-heading-title elementor-size-default">38 NFT</h6></div>
                          </div>
                          <div className="elementor-element elementor-element-5435e0e elementor-position-left elementor-vertical-align-middle elementor-widget__width-auto elementor-hidden-mobile elementor-widget elementor-widget-image-box" data-id="5435e0e" data-element_type="widget" data-e-type="widget" data-widget_type="image-box.default">
                            <div className="elementor-widget-container">
                              <div className="elementor-image-box-wrapper">
                                <figure className="elementor-image-box-img">
                                  <img decoding="async" src="/images/home-2/alexander-ant-ppOcXL9_sko-unsplash-1-pql9qekob9db6ktd4a6drcnkv7mciapycphdfuwogk.jpg" title="alexander-ant-ppOcXL9_sko-unsplash 1" alt="alexander-ant-ppOcXL9_sko-unsplash 1" loading="lazy" />
                                </figure>
                                <div className="elementor-image-box-content"><h3 className="elementor-image-box-title">@bghnaselmei</h3></div>
                              </div>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-1797e9a elementor-widget__width-auto elementor-hidden-desktop elementor-hidden-tablet elementor-widget elementor-widget-heading" data-id="1797e9a" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                            <div className="elementor-widget-container"><div className="elementor-heading-title elementor-size-default">@bghnaselmei</div></div>
                          </div>
                          <div className="elementor-element elementor-element-e2eae74 elementor-widget elementor-widget-spacer" data-id="e2eae74" data-element_type="widget" data-e-type="widget" data-widget_type="spacer.default">
                            <div className="elementor-widget-container"><div className="elementor-spacer"><div className="elementor-spacer-inner"></div></div></div>
                          </div>
                          <div className="elementor-element elementor-element-9588a6c elementor-widget elementor-widget-gallery" data-id="9588a6c" data-element_type="widget" data-e-type="widget" data-settings={GALLERY_SETTINGS} data-widget_type="gallery.default">
                            <div className="elementor-widget-container">
                              <GalleryContainer aspectRatio="NaN%" items={[
                                { thumb: 'images/home-2/dim-gunger-3emffQOvHxA-unsplash-1-240x300.jpg', w: '240', h: '300' },
                                { thumb: 'images/home-2/rick-rothenberg-Nqx3SaMp4kQ-unsplash-300x187.jpg', w: '300', h: '187' },
                                { thumb: 'images/home-2/ferhat-deniz-fors-e1qoosfnAvA-unsplash-1-300x225.jpg', w: '300', h: '225' },
                              ]} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>

            </div>
          </section>

          {/* Section 8: Collections row 2 (21714a8) */}
          <section className="elementor-section elementor-top-section elementor-element elementor-element-21714a8 elementor-section-boxed elementor-section-height-default elementor-invisible" data-id="21714a8" data-element_type="section" data-e-type="section" data-settings='{"animation":"fadeInUp","mdp_selection_sticky_effect_enable":false}'>
            <div className="elementor-container elementor-column-gap-no">
              {COLLECTIONS_ROW2.map(c => <CollectionCard key={c.outerColId} c={c} />)}
            </div>
          </section>

          {/* Section 9: Mobile "View all collections" button (850d149) */}
          <section className="elementor-section elementor-top-section elementor-element elementor-element-850d149 elementor-section-content-middle elementor-hidden-desktop elementor-hidden-tablet elementor-section-boxed elementor-section-height-default elementor-invisible" data-id="850d149" data-element_type="section" data-e-type="section" data-settings='{"animation":"fadeInUp","mdp_selection_sticky_effect_enable":false}'>
            <div className="elementor-container elementor-column-gap-no">
              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-cf14e78" data-id="cf14e78" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-5d84771 elementor-animation-push elementor-widget__width-auto elementor-widget-mobile__width-inherit elementor-widget elementor-widget-mdp-buttoner-elementor" data-id="5d84771" data-element_type="widget" data-e-type="widget" data-widget_type="mdp-buttoner-elementor.default">
                    <div className="elementor-widget-container">
                      <MdpButton id="5d84771" text="View all collections" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 10: 4 feature boxes (70963d1) */}
          <section className="elementor-section elementor-top-section elementor-element elementor-element-70963d1 elementor-section-boxed elementor-section-height-default" data-id="70963d1" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
            <div className="elementor-container elementor-column-gap-extended">

              <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-3781040" data-id="3781040" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-e50eab4 elementor-position-top elementor-widget elementor-widget-image-box" data-id="e50eab4" data-element_type="widget" data-e-type="widget" data-widget_type="image-box.default">
                    <div className="elementor-widget-container">
                      <div className="elementor-image-box-wrapper">
                        <figure className="elementor-image-box-img">
                          <img decoding="async" width="60" height="60" src="/images/home-2/shield-check.png" className="elementor-animation-shrink attachment-full size-full wp-image-784" alt="" />
                        </figure>
                        <div className="elementor-image-box-content">
                          <h3 className="elementor-image-box-title">High security <br /> assets transfer</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-e8409a7" data-id="e8409a7" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-265e225 elementor-position-top elementor-widget elementor-widget-image-box" data-id="265e225" data-element_type="widget" data-e-type="widget" data-widget_type="image-box.default">
                    <div className="elementor-widget-container">
                      <div className="elementor-image-box-wrapper">
                        <figure className="elementor-image-box-img">
                          <img loading="lazy" decoding="async" width="60" height="60" src="/images/home-2/support.png" className="elementor-animation-shrink attachment-full size-full wp-image-785" alt="" />
                        </figure>
                        <div className="elementor-image-box-content">
                          <h3 className="elementor-image-box-title">24/7 live support <br /> with skype &amp; email</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-0b1ddb8" data-id="0b1ddb8" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-6256da9 elementor-position-top elementor-widget elementor-widget-image-box" data-id="6256da9" data-element_type="widget" data-e-type="widget" data-widget_type="image-box.default">
                    <div className="elementor-widget-container">
                      <div className="elementor-image-box-wrapper">
                        <figure className="elementor-image-box-img">
                          <img loading="lazy" decoding="async" width="60" height="60" src="/images/home-2/trophy-star.png" className="elementor-animation-shrink attachment-full size-full wp-image-786" alt="" />
                        </figure>
                        <div className="elementor-image-box-content">
                          <h3 className="elementor-image-box-title">Top class &amp; NFT <br /> products</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-976635f" data-id="976635f" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-6347512 elementor-position-top elementor-widget elementor-widget-image-box" data-id="6347512" data-element_type="widget" data-e-type="widget" data-widget_type="image-box.default">
                    <div className="elementor-widget-container">
                      <div className="elementor-image-box-wrapper">
                        <figure className="elementor-image-box-img">
                          <img loading="lazy" decoding="async" width="60" height="60" src="/images/home-2/rocket-launch.png" className="elementor-animation-shrink attachment-full size-full wp-image-783" alt="" />
                        </figure>
                        <div className="elementor-image-box-content">
                          <h3 className="elementor-image-box-title">Regular training <br /> &amp; seller courses</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Section 11: "Top authors🔥" title + button (9b38f8f) */}
          <section className="elementor-section elementor-top-section elementor-element elementor-element-9b38f8f elementor-section-content-middle elementor-section-boxed elementor-section-height-default" data-id="9b38f8f" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
            <div className="elementor-container elementor-column-gap-no">
              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-156bf00" data-id="156bf00" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-fcdf98e elementor-widget elementor-widget-heading" data-id="fcdf98e" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h3 className="elementor-heading-title elementor-size-default">Top authors🔥</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-23a44d9 elementor-hidden-mobile" data-id="23a44d9" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-fa81f08 elementor-animation-push elementor-widget__width-auto elementor-widget elementor-widget-mdp-buttoner-elementor" data-id="fa81f08" data-element_type="widget" data-e-type="widget" data-widget_type="mdp-buttoner-elementor.default">
                    <div className="elementor-widget-container">
                      <MdpButton id="fa81f08" text="View all authors" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 12: 3-col authors (36159a1) */}
          <section className="elementor-section elementor-top-section elementor-element elementor-element-36159a1 elementor-section-boxed elementor-section-height-default" data-id="36159a1" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
            <div className="elementor-container elementor-column-gap-wider">
              {AUTHORS.map(a => (
                <div key={a.colId} className={`elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-${a.colId} ${a.colCls}`}
                  data-id={a.colId} data-element_type="column" data-e-type="column"
                  data-settings='{"animation":"fadeInUp","mdp_selection_sticky_column_effect_enable":false}'>
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className={`elementor-element elementor-element-${a.img1Id} elementor-widget elementor-widget-image`} data-id={a.img1Id} data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                      <div className="elementor-widget-container">
                        <img decoding="async" src={a.img1} title={a.img1Title} alt={a.img1Title} loading="lazy" />
                      </div>
                    </div>
                    <div className={`elementor-element elementor-element-${a.img2Id} elementor-widget__width-auto elementor-widget elementor-widget-image`} data-id={a.img2Id} data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                      <div className="elementor-widget-container">
                        <img decoding="async" src={a.img2} title={a.img2Title} alt={a.img2Title} loading="lazy" />
                      </div>
                    </div>
                    <div className={`elementor-element elementor-element-${a.nameId} elementor-widget elementor-widget-heading`} data-id={a.nameId} data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <h6 className="elementor-heading-title elementor-size-default">{a.handle}</h6>
                      </div>
                    </div>
                    <div className={`elementor-element elementor-element-${a.ethId} elementor-widget elementor-widget-heading`} data-id={a.ethId} data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <h6 className="elementor-heading-title elementor-size-default">{a.eth}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 13: Mobile "View all authors" button (f9e1015) */}
          <section className="elementor-section elementor-top-section elementor-element elementor-element-f9e1015 elementor-section-content-middle elementor-hidden-desktop elementor-hidden-tablet elementor-section-boxed elementor-section-height-default elementor-invisible" data-id="f9e1015" data-element_type="section" data-e-type="section" data-settings='{"animation":"fadeInUp","mdp_selection_sticky_effect_enable":false}'>
            <div className="elementor-container elementor-column-gap-no">
              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ceb909e" data-id="ceb909e" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-3c82896 elementor-animation-push elementor-widget__width-auto elementor-widget-mobile__width-inherit elementor-widget elementor-widget-mdp-buttoner-elementor" data-id="3c82896" data-element_type="widget" data-e-type="widget" data-widget_type="mdp-buttoner-elementor.default">
                    <div className="elementor-widget-container">
                      <MdpButton id="3c82896" text="View all authors" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 14: "Create NFT" CTA — desktop only (2128616) */}
          <section className="elementor-section elementor-top-section elementor-element elementor-element-2128616 elementor-section-content-middle elementor-hidden-tablet elementor-hidden-mobile elementor-section-boxed elementor-section-height-default" data-id="2128616" data-element_type="section" data-e-type="section" data-settings='{"background_background":"classic","mdp_selection_sticky_effect_enable":false}'>
            <div className="elementor-container elementor-column-gap-no">
              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-3bfd40c" data-id="3bfd40c" data-element_type="column" data-e-type="column" data-settings='{"background_background":"classic","mdp_selection_sticky_column_effect_enable":false}'>
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-e55621f elementor-widget elementor-widget-heading" data-id="e55621f" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h3 className="elementor-heading-title elementor-size-default">🔥🔥🔥<br />
                        Create, sell and collect<br />
                        NFT digital assests</h3>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-368599d elementor-widget elementor-widget-text-editor" data-id="368599d" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                    <div className="elementor-widget-container">
                      Buy and sell over 100 cryptocurrencies in the marketplace over 20 fixed currencies using bank transfers or credit/debit cards.
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-95b4ca8 elementor-align-left elementor-tablet-align-center elementor-mobile-align-justify elementor-invisible elementor-widget elementor-widget-button" data-id="95b4ca8" data-element_type="widget" data-e-type="widget" data-settings='{"_animation":"fadeInUp"}' data-widget_type="button.default">
                    <div className="elementor-widget-container">
                      <div className="elementor-button-wrapper">
                        <a className="elementor-button elementor-button-link elementor-size-sm elementor-animation-push" href="/home-2#">
                          <span className="elementor-button-content-wrapper">
                            <span className="elementor-button-text">Create NFT</span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-311f2f2" data-id="311f2f2" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                <div className="elementor-widget-wrap elementor-element-populated">
                  <section className="elementor-section elementor-inner-section elementor-element elementor-element-cedd58d elementor-section-content-middle elementor-section-boxed elementor-section-height-default" data-id="cedd58d" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
                    <div className="elementor-container elementor-column-gap-no">
                      <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-53b5a95" data-id="53b5a95" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-27354f7 elementor-invisible elementor-widget elementor-widget-image" data-id="27354f7" data-element_type="widget" data-e-type="widget" data-settings='{"_animation":"fadeInDown"}' data-widget_type="image.default">
                            <div className="elementor-widget-container">
                              <img loading="lazy" decoding="async" width="156" height="156" src="/images/home-2/img-1.png" className="attachment-medium size-medium wp-image-919" alt="" sizes="(max-width: 156px) 100vw, 156px" />
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-9ebbfdd elementor-widget__width-auto elementor-widget-mobile__width-inherit elementor-invisible elementor-widget elementor-widget-image" data-id="9ebbfdd" data-element_type="widget" data-e-type="widget" data-settings='{"_animation":"fadeInLeft"}' data-widget_type="image.default">
                            <div className="elementor-widget-container">
                              <img loading="lazy" decoding="async" width="230" height="280" src="/images/home-2/img-4.png" className="attachment-medium_large size-medium_large wp-image-922" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-b289101" data-id="b289101" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-d18c3bf elementor-widget__width-auto elementor-invisible elementor-widget elementor-widget-image" data-id="d18c3bf" data-element_type="widget" data-e-type="widget" data-settings='{"_animation":"fadeInRight"}' data-widget_type="image.default">
                            <div className="elementor-widget-container">
                              <img loading="lazy" decoding="async" width="460" height="560" src="/images/home-2/img@2x.jpg" className="attachment-medium_large size-medium_large wp-image-5067" alt="" sizes="(max-width: 460px) 100vw, 460px" />
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-af97359 elementor-invisible elementor-widget elementor-widget-image" data-id="af97359" data-element_type="widget" data-e-type="widget" data-settings='{"_animation":"fadeInUp"}' data-widget_type="image.default">
                            <div className="elementor-widget-container">
                              <img loading="lazy" decoding="async" width="390" height="156" src="/images/home-2/img-3.png" className="attachment-full size-full wp-image-921" alt="" sizes="(max-width: 390px) 100vw, 390px" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </section>

          {/* Section 15: "Create NFT" CTA — tablet + mobile (b57c86f) */}
          <section className="elementor-section elementor-top-section elementor-element elementor-element-b57c86f elementor-section-content-middle elementor-hidden-desktop elementor-section-boxed elementor-section-height-default" data-id="b57c86f" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
            <div className="elementor-container elementor-column-gap-no">
              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-222fafa" data-id="222fafa" data-element_type="column" data-e-type="column" data-settings='{"background_background":"gradient","mdp_selection_sticky_column_effect_enable":false}'>
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-7b46d7d elementor-widget elementor-widget-heading" data-id="7b46d7d" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h3 className="elementor-heading-title elementor-size-default">🔥🔥🔥<br />
                        Create, sell and collect<br />
                        NFT digital assests</h3>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-394aa4c elementor-widget elementor-widget-text-editor" data-id="394aa4c" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                    <div className="elementor-widget-container">
                      Buy and sell over 100 cryptocurrencies in the marketplace over 20 fixed currencies using bank transfers or credit/debit cards.
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-9ea087b elementor-align-left elementor-tablet-align-center elementor-mobile-align-justify elementor-invisible elementor-widget elementor-widget-button" data-id="9ea087b" data-element_type="widget" data-e-type="widget" data-settings='{"_animation":"fadeInUp"}' data-widget_type="button.default">
                    <div className="elementor-widget-container">
                      <div className="elementor-button-wrapper">
                        <a className="elementor-button elementor-button-link elementor-size-sm elementor-animation-push" href="/home-2#">
                          <span className="elementor-button-content-wrapper">
                            <span className="elementor-button-text">Create NFT</span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-228faf0" data-id="228faf0" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                <div className="elementor-widget-wrap elementor-element-populated">
                  <section className="elementor-section elementor-inner-section elementor-element elementor-element-8f96226 elementor-section-content-middle elementor-hidden-mobile elementor-section-boxed elementor-section-height-default" data-id="8f96226" data-element_type="section" data-e-type="section" data-settings='{"background_background":"gradient","mdp_selection_sticky_effect_enable":false}'>
                    <div className="elementor-container elementor-column-gap-no">
                      <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-8947644" data-id="8947644" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-f7a95be elementor-invisible elementor-widget elementor-widget-image" data-id="f7a95be" data-element_type="widget" data-e-type="widget" data-settings='{"_animation":"fadeInDown"}' data-widget_type="image.default">
                            <div className="elementor-widget-container">
                              <img loading="lazy" decoding="async" width="156" height="156" src="/images/home-2/img-1.png" className="attachment-medium size-medium wp-image-919" alt="" sizes="(max-width: 156px) 100vw, 156px" />
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-229e72b elementor-widget__width-auto elementor-widget-mobile__width-inherit elementor-invisible elementor-widget elementor-widget-image" data-id="229e72b" data-element_type="widget" data-e-type="widget" data-settings='{"_animation":"fadeInLeft"}' data-widget_type="image.default">
                            <div className="elementor-widget-container">
                              <img loading="lazy" decoding="async" width="230" height="280" src="/images/home-2/img-4.png" className="attachment-medium_large size-medium_large wp-image-922" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-5723930" data-id="5723930" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-4936567 elementor-widget__width-auto elementor-invisible elementor-widget elementor-widget-image" data-id="4936567" data-element_type="widget" data-e-type="widget" data-settings='{"_animation":"fadeInRight"}' data-widget_type="image.default">
                            <div className="elementor-widget-container">
                              <img loading="lazy" decoding="async" width="460" height="560" src="/images/home-2/img@2x.jpg" className="attachment-medium_large size-medium_large wp-image-5067" alt="" sizes="(max-width: 460px) 100vw, 460px" />
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-186e040 elementor-invisible elementor-widget elementor-widget-image" data-id="186e040" data-element_type="widget" data-e-type="widget" data-settings='{"_animation":"fadeInUp"}' data-widget_type="image.default">
                            <div className="elementor-widget-container">
                              <img loading="lazy" decoding="async" width="390" height="156" src="/images/home-2/img-3.png" className="attachment-full size-full wp-image-921" alt="" sizes="(max-width: 390px) 100vw, 390px" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </section>

          {/* Section 16: Logo carousel (d7c6e56) */}
          <section className="elementor-section elementor-top-section elementor-element elementor-element-d7c6e56 elementor-section-boxed elementor-section-height-default" data-id="d7c6e56" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
            <div className="elementor-container elementor-column-gap-no">
              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-7aab5ba" data-id="7aab5ba" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                <div className="elementor-widget-wrap elementor-element-populated e-swiper-container">
                  <div className="elementor-element elementor-element-d4ba74c elementor-widget elementor-widget-image-carousel e-widget-swiper" data-id="d4ba74c" data-element_type="widget" data-e-type="widget" data-settings='{"slides_to_show":"6","slides_to_scroll":"2","navigation":"none","lazyload":"yes","image_spacing_custom":{"unit":"px","size":70,"sizes":[]},"slides_to_show_tablet":"3","slides_to_show_mobile":"2","slides_to_scroll_mobile":"1","autoplay":"yes","pause_on_hover":"yes","pause_on_interaction":"yes","autoplay_speed":5000,"infinite":"yes","speed":500,"image_spacing_custom_tablet":{"unit":"px","size":"","sizes":[]},"image_spacing_custom_mobile":{"unit":"px","size":"","sizes":[]}}' data-widget_type="image-carousel.default">
                    <div className="elementor-widget-container">
                      <div className="elementor-image-carousel-wrapper swiper" role="region" aria-roledescription="carousel" aria-label="Image Carousel" dir="ltr">
                        <div className="elementor-image-carousel swiper-wrapper">
                          {LOGOS.map((logo, i) => (
                            <div key={i} className="swiper-slide" role="group" aria-roledescription="slide" aria-label={`${i + 1} / 6`} data-swiper-slide-index={i}>
                              <figure className="swiper-slide-inner">
                                <img className="swiper-slide-image swiper-lazy" alt={logo.alt} src={logo.src} />
                              </figure>
                            </div>
                          ))}
                        </div>
                        <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
