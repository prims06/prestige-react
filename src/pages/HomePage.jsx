import { Link } from 'react-router-dom';

const HERO_PRODUCTS = [
  { id: 2472, cls: ' post-2472 product first instock shipping-taxable product-type-external', img: '/images/index/pawel-czerwinski-hNrd99q5peI-unsplash-1-1536x1536.jpg', hot: false, cat: '📸 Photography', name: 'Abstract image', price: '$2,560.00', sku: '1234598-2' },
  { id: 1660, cls: ' post-1660 product  instock featured shipping-taxable product-type-external', img: '/images/index/milad-fakurian-PjG_SXDkpwQ-unsplash-1536x1536.jpg', hot: true, cat: '✨ Collectibles', name: 'Сolorful 3D object', price: '$890.00', sku: '123455-1-1-1' },
  { id: 214, cls: ' post-214 product  instock featured shipping-taxable product-type-external', img: '/images/index/anunay-rai-awMWm6ayLTc-unsplash-1536x1536.jpg', hot: true, cat: '🔥 Trading cards', name: 'Logical impact', price: '$1,400.00', sku: '123455-1-1' },
  { id: 212, cls: ' post-212 product last instock shipping-taxable product-type-external', img: '/images/index/simon-lee-fyZOY0HiF9A-unsplash-1-1536x1536.jpg', hot: false, cat: '🎨 Art', name: 'Infinite figure', price: '$890.00', sku: '123455' },
  { id: 211, cls: ' post-211 product first instock featured shipping-taxable product-type-external', img: '/images/index/simon-lee-zA66MV4EyXc-unsplash.jpg', hot: true, cat: '🎨 Art', name: 'The image of a man', price: '$1,200.00', sku: '1234511' },
];

const NOTABLE_DROPS = [
  {
    title: 'Colourfull assests', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    author: '@robix2x2x', avatar: '/images/index/and-machines-vqTWfa4DjEk-unsplash-1-pqla82xeu3kfil50wf8t5e2n12hu9dw8g753c6p5g4.jpg',
    colId: '132bbb9', colClass: '', sectionId: '4975d6f', innerColId: 'bb8acbc',
    liveId: '5578234', spacerId: '56a14cf', titleId: '65aeaf1', textId: 'f419817', imgBoxId: '631af61', mobileHeadId: 'e740c31',
  },
  {
    title: '3D vector arts', desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
    author: '@gomim', avatar: '/images/index/aldi-sigun-unt3066GV-E-unsplash-1-pqla26hvxjhmmpplcvf4hvogrzkvxsgwazpcvng4ic.jpg',
    colId: '33aaf04', colClass: '', sectionId: '310e3b8', innerColId: '1551aa2',
    liveId: '62ec3c8', spacerId: '4d9dec7', titleId: '1a41106', textId: '6574de6', imgBoxId: '980757c', mobileHeadId: '6aadff2',
  },
  {
    title: '3D figure', desc: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia',
    author: '@acenjoeneltin', avatar: '/images/index/milad-fakurian-58Z17lnVS4U-unsplash-1-1-pq1w0t7dtt9zv9is82btyosnox1j1tm5o5u8cx0ic4.jpg',
    colId: 'bc209be', colClass: 'elementor-hidden-tablet', sectionId: '66626b5', innerColId: '5ccdb30',
    liveId: '88b85f6', spacerId: '5973a51', titleId: 'f9e47c5', textId: 'dcba84f', imgBoxId: 'f41515a', mobileHeadId: 'c17a19d',
  },
];

const SELLERS_D1 = [
  { rank: '01', name: '@yukanne', price: '$6,486,658', img: '/images/index/aldi-sigun-K-sdQ12jZeY-unsplash-1-pqla1seba1k5nfzgy89iangafkzfx0ffsjgav4i6pg.jpg', verified: true,
    colId: 'b2522d2', colClass: '', sectionId: '62e05ab',
    rankColId: 'c25e091', rankWId: 'f945972', imgColId: '92c764c', imgWId: '5afc34e', tickWId: 'e3fd200', infoColId: 'ed77dc3', infoWId: '5f5441d' },
  { rank: '02', name: '@netthound', price: '$10,140,240', img: '/images/index/antique-statue-dressed-in-down-jacket-and-sunglass-2022-01-11-04-36-07-utc-1-1-1-pqlat5h68f0nms8l622ivqvcze43zt24vz55t3xlkk.jpg', verified: true,
    colId: '95c2bbb', colClass: '', sectionId: '2eaa7b6',
    rankColId: '322f8b1', rankWId: 'c1ef2bb', imgColId: '015321e', imgWId: '6252634', tickWId: '3d7940b', infoColId: '75df404', infoWId: '8752ca2' },
  { rank: '03', name: '@falestoraa', price: '$2,156,628', img: '/images/index/dynamic-wang-S5pMXEuLI_Q-unsplash-1-pql9udg5d3eq26r890vgmitdq5j76yzo3u6ekjhzsk.jpg', verified: true,
    colId: '34eecc6', colClass: '', sectionId: '43b757e',
    rankColId: 'b33f438', rankWId: '4a78417', imgColId: '2d06eba', imgWId: '0cd8e6d', tickWId: 'd6e34fe', infoColId: 'e02d847', infoWId: 'b9d4831' },
  { rank: '04', name: '@ertanissal', price: '$1,168,853', img: '/images/index/ricardo-gomez-angel-PzYiCWOHtfU-unsplash-1-pqlabltmnqzywtq3mh18c69lsglgb7eih4qvb5y5pw.jpg', verified: false,
    colId: 'e3f7a1a', colClass: '', sectionId: '65d6d4a',
    rankColId: '007c330', rankWId: 'f80e8d3', imgColId: '851782f', imgWId: '28dcc2a', tickWId: null, infoColId: '32db133', infoWId: '513047c' },
  { rank: '05', name: '@xanthex', price: '$839,349', img: '/images/index/mae-mu-s6S8IgEN6-4-unsplash-1-pql9utfela0ljk40nps4aws7tpcfttr3u19nq8uaus.jpg', verified: true,
    colId: '2e02c31', colClass: 'elementor-hidden-tablet', sectionId: '7a4f3b4',
    rankColId: '9437ed8', rankWId: '3261a1b', imgColId: '196b937', imgWId: '18ee486', tickWId: '640dc6c', infoColId: 'e8730b2', infoWId: '5dfcb5a' },
];

const SELLERS_TABLET = [
  { rank: '05', name: '@xanthex', price: '$839,349', img: '/images/index/mae-mu-s6S8IgEN6-4-unsplash-1-pql9utfela0ljk40nps4aws7tpcfttr3u19nq8uaus.jpg', verified: true,
    colId: 'ea1db01', sectionId: '2b244b4',
    rankColId: 'e6fc084', rankWId: '90786eb', imgColId: '7f1dec1', imgWId: '74ebf33', tickWId: 'c358e39', infoColId: '7ff83b9', infoWId: '2a255b2' },
  { rank: '06', name: '@uonnantonine', price: '$3,986,580', img: '/images/index/mika-y-RjWd6Ol7A-unsplash-1-pqla441y6aqocqlydqfaykcbavj3y2njs1iikr25bo.jpg', verified: false,
    colId: '3e39189', sectionId: '62cc0a8',
    rankColId: 'd928bd0', rankWId: '03d7397', imgColId: '72dbdd5', imgWId: '171d2ec', tickWId: null, infoColId: '7ccd3c3', infoWId: '91e60df' },
];

const SELLERS_D2 = [
  { rank: '06', name: '@uonnantonine', price: '$3,986,580', img: '/images/index/mika-y-RjWd6Ol7A-unsplash-1-pqla441y6aqocqlydqfaykcbavj3y2njs1iikr25bo.jpg', verified: false,
    colId: '0749188', colClass: 'elementor-hidden-tablet', sectionId: '7962328',
    rankColId: '1409cad', rankWId: '23fc149', imgColId: '1b576c5', imgWId: '9ac25f4', tickWId: null, infoColId: '2820062', infoWId: '2d70f94' },
  { rank: '07', name: '@zubazivonord', price: '$2,170,691', img: '/images/index/bekky-bekks-B7s2vibr0UM-unsplash-pqla9xnyicpm9s5hdr13wlg3rstymkrowuzslgfcs4.jpg', verified: false,
    colId: '57a8eea', colClass: '', sectionId: '21fc6cb',
    rankColId: 'b418ad8', rankWId: '45d1b7a', imgColId: 'b9c3c89', imgWId: '1913ebc', tickWId: null, infoColId: '0f28637', infoWId: '6345012' },
  { rank: '08', name: '@zarrianto', price: '$1,643,063', img: '/images/index/aldi-sigun-pmACe385Ruo-unsplash-pqla3bush9o2ofqwye8hvrghhbe3j5jlo5xy6g7yic.jpg', verified: true,
    colId: '1a8366e', colClass: '', sectionId: '19e4e6c',
    rankColId: '186c743', rankWId: 'f84d99f', imgColId: 'd66a2a6', imgWId: 'dedf33e', tickWId: 'a2d3e35', infoColId: '8d485de', infoWId: 'a364791' },
  { rank: '09', name: '@Ifabravaaaaa', price: '$14,685,149', img: '/images/index/wengang-zhai-3qRH0zS9eGI-unsplash-1-ppfymwq7gjx27jtd4anvv0pyvaqlmb10g3cf1ezwqc.jpg', verified: true,
    colId: '778a6eb', colClass: '', sectionId: '49e28d3',
    rankColId: '96536b5', rankWId: 'c45b663', imgColId: '6301a46', imgWId: 'd0bb72e', tickWId: '27b31b2', infoColId: '87a194e', infoWId: '55f447e' },
  { rank: '10', name: '@pharar', price: '$10,510,827', img: '/images/index/simon-lee-pLmKmygkT7g-unsplash-1-pql9vf1oygu6yl8m5h4je9bthkdvqv4xl09trly8vo.jpg', verified: true,
    colId: '4106e12', colClass: '', sectionId: '57e25a8',
    rankColId: 'a102276', rankWId: '28728fb', imgColId: '00867b1', imgWId: '5f4d04e', tickWId: '6eb8406', infoColId: 'b8dcfb1', infoWId: '451aa32' },
];

const SELLERS_D3 = [
  { rank: '11', name: '@ujimil', price: '$6,561,810', img: '/images/index/mithushi-arya-lXOX3-yTvyQ-unsplash-pql9wsv50oqe1x892knrker8yzkc2tmpfuuk79wdpw.jpg', verified: true,
    colId: '24766fc', colClass: '', sectionId: '4bfc055',
    rankColId: '1c0cf0e', rankWId: 'bf4313d', imgColId: '17fb5f6', imgWId: '30e32b3', tickWId: '414a2ac', infoColId: '388d0c9', infoWId: 'deedef4' },
  { rank: '12', name: '@mbyanail', price: '$1,486,658', img: '/images/index/aldi-sigun-rTCDPl3C_os-unsplash-1-pqla1eaqfj0utajy8k63r90diswxpjvgqlo0nz33as.jpg', verified: true,
    colId: '29619b9', colClass: '', sectionId: '1d1745d',
    rankColId: '76a8308', rankWId: '674b1c1', imgColId: '5421728', imgWId: 'f37b9f8', tickWId: '706795a', infoColId: '486ed59', infoWId: '3c45780' },
  { rank: '13', name: '@paxisolo', price: '$15,432,752', img: '/images/index/and-machines-WYriipKRXCU-unsplash-1-pqla56lbyi7fkr1z4p30asm7no95pnwjlc9f93h08k.jpg', verified: false,
    colId: 'a415e3a', colClass: '', sectionId: '46e751b',
    rankColId: 'e2af860', rankWId: '83819e4', imgColId: 'afc27b9', imgWId: '3416823', tickWId: null, infoColId: '291e4d0', infoWId: '70eed78' },
  { rank: '14', name: '@atsulani', price: '$8,443,547', img: '/images/index/vadim-bogulov-bU-KakBHOng-unsplash-1-pql98lir19ll3edxem0lv0myasv2vejj423gbrsbxw.jpg', verified: true,
    colId: '2e306ce', colClass: '', sectionId: 'c432173',
    rankColId: '7f2f6f2', rankWId: '2db3c92', imgColId: '95112b8', imgWId: '33e3c79', tickWId: '8f0e89b', infoColId: 'a735863', infoWId: '35595e3' },
  { rank: '15', name: '@terel', price: '$16,143,658', img: '/images/index/samuel-regan-asante-SJ_K0O4YYIQ-unsplash-1-1-ppdx8b8tieehtmc210owwvbofnrfg63oggblid79tg.jpg', verified: true,
    colId: 'c15864a', colClass: 'elementor-hidden-tablet', sectionId: '6f75573',
    rankColId: '2b378b0', rankWId: '140132a', imgColId: '0375ae7', imgWId: '6e9afef', tickWId: 'b60a81b', infoColId: '4040853', infoWId: 'f40d720' },
];

const CATEGORIES = [
  { emoji: '🎨', name: 'Art', count: 6, img: '/images/index/robert-keane-rlbG0p_nQOU-unsplash-1-300x300.jpg', href: '/shop' },
  { emoji: '✨', name: 'Collectibles', count: 4, img: '/images/index/8machine-_-wIuF0-I6H_Y-unsplash-1-1-300x300.jpg', href: '/shop' },
  { emoji: '🎵', name: 'Music', count: 2, img: '/images/index/erik-mclean-9y1cTVKe1IY-unsplash-1-300x300.jpg', href: '/shop' },
  { emoji: '📸', name: 'Photography', count: 7, img: '/images/index/ricardo-gomez-angel-PzYiCWOHtfU-unsplash-1-300x300.jpg', href: '/shop' },
  { emoji: '⚽', name: 'Sports', count: 1, img: '/images/index/pan-yunbo-EgL0EtzL0Wc-unsplash-1-300x300.jpg', href: '/shop' },
  { emoji: '🔥', name: 'Trading cards', count: 3, img: '/images/index/antique-statue-dressed-in-down-jacket-and-sunglass-2022-01-11-04-36-07-utc-1-1-1-300x300.jpg', href: '/shop' },
  { emoji: '⚡', name: 'Utility', count: 2, img: '/images/index/niklas-liniger-fIPXnxN7-9A-unsplash-1-e1652950002551-300x300.jpg', href: '/shop-2' },
  { emoji: '🌐', name: 'Virtual worlds', count: 5, img: '/images/index/mo-DP0LMBAIzZQ-unsplash-1-e1654762954141-300x300.jpg', href: '/shop' },
];

const HOW_IT_WORKS = [
  { icon: '/images/index/wallet-4-2.png', iconW: 50, iconH: 50, title: 'Set up your wallet', desc: 'Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Proin libero nunc consequat interdum.', colId: '3f12900', imgWId: '483b01a', titleWId: '6c7a34f', textWId: '1b3316e' },
  { icon: '/images/index/folder-plus.png', iconW: 50, iconH: 50, title: 'Create your collection', desc: 'Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis. Risus nullam eget felis eget nunc lobortis.', colId: '4e4e626', imgWId: 'b1541cf', titleWId: '454e357', textWId: '42851d6' },
  { icon: '/images/index/cloud-plus.png', iconW: 62, iconH: 50, title: 'Add your NFTs', desc: 'Volutpat commodo sed egestas egestas. Mollis aliquam ut porttitor leo a diam sollicitudin tempor.', colId: 'fc36e2a', imgWId: 'ee0615f', titleWId: 'cc2975b', textWId: 'e18dbb8' },
  { icon: '/images/index/tags.png', iconW: 50, iconH: 50, title: 'List them for sale', desc: 'Diam sit amet nisl suscipit adipiscing bibendum est. Porttitor eget dolor morbi non arcu risus quis varius quam.', colId: '738c49a', imgWId: 'e0d7b1a', titleWId: '3a45e15', textWId: '767d109' },
];

const BLOG_POSTS = [
  { img: '/images/index/warren-umoh-YmTIxQbQo4I-unsplash-1-1-1024x576.jpg', w: 800, h: 450, title: 'Features of NFT games that have gained popularity in 2022', author: 'merkulove', date: 'August 15, 2020', comments: 'No Comments', href: '/blog' },
  { img: '/images/index/tezos-6TeIOdNnMaM-unsplash-1-1-1024x683.jpg', w: 800, h: 534, title: 'The rise of the non fungible token internet having trouble', author: 'merkulove', date: 'August 15, 2020', comments: 'No Comments', href: '/blog' },
  { img: '/images/index/simon-lee-ldg40aCeOXo-unsplash-1-2-768x1024.jpg', w: 768, h: 1024, title: 'Top 10 NFT projects that shocked the Internet with their uniqueness', author: 'merkulove', date: 'August 15, 2020', comments: 'No Comments', href: '/blog' },
];


function ProductCarouselItem({ product, tabIdx = 0, cloneId = true }) {
  return (
    <li className={product.cls} style={{ width: '100%', display: 'inline-block' }}>
      <div className="premium-woo-product-wrapper premium-con-lq__none">
        <div className="premium-woo-product-thumbnail">
          {product.hot && (
            <div className="premium-woo-ribbon-container">
              <div className="premium-woo-product-featured-wrap">
                <span className="premium-woo-product-featured">Hot</span>
              </div>
            </div>
          )}
          <Link to="/product" className="woocommerce-LoopProduct-link woocommerce-loop-product__link" tabIndex={tabIdx}>
            <img decoding="async" src={product.img} alt="" />
          </Link>
          <div className="premium-woo-qv-data" data-product-id={product.id}></div>
        </div>
        <div className="premium-woo-products-details-wrap">
          <span className="premium-woo-product-category">{product.cat}</span>
          <Link to="/product" className="premium-woo-product__link" tabIndex={tabIdx}>
            <h2 className="woocommerce-loop-product__title">{product.name}</h2>
          </Link>
          <span className="price">
            <span className="woocommerce-Price-amount amount">
              <bdi><span className="woocommerce-Price-currencySymbol">$</span>{product.price.replace('$', '')}</bdi>
            </span>
          </span>
          <div className="premium-woo-product-actions-wrapper">
            <div className="premium-woo-atc-button" data-variations={'"true"'}>
              <a href="/" aria-describedby={`woocommerce_loop_add_to_cart_link_describedby_${product.id}`} data-quantity="1" className="button product_type_external" data-product_id={product.id} data-product_sku={product.sku} aria-label="Buy now" rel={'"nofollow"'} tabIndex={tabIdx}>Buy now</a>
              <span id={cloneId ? `woocommerce_loop_add_to_cart_link_describedby_${product.id}` : ''} className="screen-reader-text"></span>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}


function NotableDropCard({ drop }) {
  return (
    <div className={`elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-${drop.colId}${drop.colClass ? ' ' + drop.colClass : ''}`} data-id={drop.colId} data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
      <div className="elementor-widget-wrap elementor-element-populated">
        <section className={`elementor-section elementor-inner-section elementor-element elementor-element-${drop.sectionId} elementor-section-boxed elementor-section-height-default`} data-id={drop.sectionId} data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
          <div className="elementor-container elementor-column-gap-no">
            <div className={`elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-${drop.innerColId}`} data-id={drop.innerColId} data-element_type="column" data-e-type="column" data-settings='{"background_background":"classic","mdp_selection_sticky_column_effect_enable":false}'>
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-background-overlay"></div>
                <div className={`elementor-element elementor-element-${drop.liveId} elementor-widget__width-auto elementor-widget elementor-widget-heading`} data-id={drop.liveId} data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-heading-title elementor-size-default">Live</div>
                  </div>
                </div>
                <div className={`elementor-element elementor-element-${drop.spacerId} elementor-widget elementor-widget-spacer`} data-id={drop.spacerId} data-element_type="widget" data-e-type="widget" data-widget_type="spacer.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-spacer"><div className="elementor-spacer-inner"></div></div>
                  </div>
                </div>
                <div className={`elementor-element elementor-element-${drop.titleId} elementor-widget elementor-widget-heading`} data-id={drop.titleId} data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h5 className="elementor-heading-title elementor-size-default">{drop.title}</h5>
                  </div>
                </div>
                <div className={`elementor-element elementor-element-${drop.textId} elementor-widget elementor-widget-text-editor`} data-id={drop.textId} data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">{drop.desc}</div>
                </div>
                <div className={`elementor-element elementor-element-${drop.imgBoxId} elementor-position-left elementor-vertical-align-middle elementor-widget__width-auto elementor-widget-mobile__width-auto elementor-hidden-mobile elementor-widget elementor-widget-image-box`} data-id={drop.imgBoxId} data-element_type="widget" data-e-type="widget" data-widget_type="image-box.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-image-box-wrapper">
                      <figure className="elementor-image-box-img">
                        <img decoding="async" src={drop.avatar} title="" alt="" loading="lazy" />
                      </figure>
                      <div className="elementor-image-box-content">
                        <h3 className="elementor-image-box-title">{drop.author}</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`elementor-element elementor-element-${drop.mobileHeadId} elementor-widget__width-auto elementor-hidden-desktop elementor-hidden-tablet elementor-widget elementor-widget-heading`} data-id={drop.mobileHeadId} data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-heading-title elementor-size-default">{drop.author}</div>
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


function SellerCard({ s }) {
  return (
    <div className={`elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-${s.colId}${s.colClass ? ' ' + s.colClass : ''}`} data-id={s.colId} data-element_type="column" data-e-type="column" data-settings='{"animation_tablet":"fadeInUp","animation_mobile":"fadeInUp","mdp_selection_sticky_column_effect_enable":false}'>
      <div className="elementor-widget-wrap elementor-element-populated">
        <section className={`elementor-section elementor-inner-section elementor-element elementor-element-${s.sectionId} elementor-section-content-middle elementor-section-boxed elementor-section-height-default`} data-id={s.sectionId} data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
          <div className="elementor-container elementor-column-gap-no">
            <div className={`elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-${s.rankColId}`} data-id={s.rankColId} data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className={`elementor-element elementor-element-${s.rankWId} elementor-widget__width-auto elementor-widget elementor-widget-heading`} data-id={s.rankWId} data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">{s.rank}</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className={`elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-${s.imgColId}`} data-id={s.imgColId} data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className={`elementor-element elementor-element-${s.imgWId} elementor-widget__width-auto elementor-widget elementor-widget-image`} data-id={s.imgWId} data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                  <div className="elementor-widget-container">
                    <img decoding="async" src={s.img} title="" alt="" loading="lazy" />
                  </div>
                </div>
                {s.verified && s.tickWId && (
                  <div className={`elementor-element elementor-element-${s.tickWId} elementor-widget__width-auto elementor-widget elementor-widget-image`} data-id={s.tickWId} data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                    <div className="elementor-widget-container">
                      <img loading="lazy" decoding="async" width="18" height="18" src="/images/index/tick-mark.png" className="attachment-thumbnail size-thumbnail wp-image-1491" alt="" />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className={`elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-${s.infoColId}`} data-id={s.infoColId} data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className={`elementor-element elementor-element-${s.infoWId} elementor-vertical-align-top elementor-widget elementor-widget-image-box`} data-id={s.infoWId} data-element_type="widget" data-e-type="widget" data-widget_type="image-box.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-image-box-wrapper">
                      <div className="elementor-image-box-content">
                        <h3 className="elementor-image-box-title">{s.name}</h3>
                        <p className="elementor-image-box-description">{s.price}</p>
                      </div>
                    </div>
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


function TabletSellerCard({ s }) {
  return (
    <div className={`elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-${s.colId}`} data-id={s.colId} data-element_type="column" data-e-type="column" data-settings='{"animation_tablet":"fadeInUp","animation_mobile":"fadeInUp","mdp_selection_sticky_column_effect_enable":false}'>
      <div className="elementor-widget-wrap elementor-element-populated">
        <section className={`elementor-section elementor-inner-section elementor-element elementor-element-${s.sectionId} elementor-section-content-middle elementor-section-boxed elementor-section-height-default`} data-id={s.sectionId} data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
          <div className="elementor-container elementor-column-gap-no">
            <div className={`elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-${s.rankColId}`} data-id={s.rankColId} data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className={`elementor-element elementor-element-${s.rankWId} elementor-widget__width-auto elementor-widget elementor-widget-heading`} data-id={s.rankWId} data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">{s.rank}</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className={`elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-${s.imgColId}`} data-id={s.imgColId} data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className={`elementor-element elementor-element-${s.imgWId} elementor-widget__width-auto elementor-widget elementor-widget-image`} data-id={s.imgWId} data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                  <div className="elementor-widget-container">
                    <img decoding="async" src={s.img} title="" alt="" loading="lazy" />
                  </div>
                </div>
                {s.verified && s.tickWId && (
                  <div className={`elementor-element elementor-element-${s.tickWId} elementor-widget__width-auto elementor-widget elementor-widget-image`} data-id={s.tickWId} data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                    <div className="elementor-widget-container">
                      <img loading="lazy" decoding="async" width="18" height="18" src="/images/index/tick-mark.png" className="attachment-thumbnail size-thumbnail wp-image-1491" alt="" />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className={`elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-${s.infoColId}`} data-id={s.infoColId} data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className={`elementor-element elementor-element-${s.infoWId} elementor-vertical-align-top elementor-widget elementor-widget-image-box`} data-id={s.infoWId} data-element_type="widget" data-e-type="widget" data-widget_type="image-box.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-image-box-wrapper">
                      <div className="elementor-image-box-content">
                        <h3 className="elementor-image-box-title">{s.name}</h3>
                        <p className="elementor-image-box-description">{s.price}</p>
                      </div>
                    </div>
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


function HomeHero() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-9029686 elementor-section-boxed elementor-section-height-default" data-id="9029686" data-element_type="section" data-e-type="section" data-settings='{"background_background":"classic","mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-background-overlay"></div>
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b6438e5" data-id="b6438e5" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <section className="elementor-section elementor-inner-section elementor-element elementor-element-d7639a2 elementor-section-boxed elementor-section-height-default" data-id="d7639a2" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
              <div className="elementor-container elementor-column-gap-no">
                <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-653d450" data-id="653d450" data-element_type="column" data-e-type="column" data-settings='{"background_background":"classic","mdp_selection_sticky_column_effect_enable":false}'>
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-8525432 elementor-hidden-desktop elementor-invisible elementor-widget elementor-widget-heading" data-id="8525432" data-element_type="widget" data-e-type="widget" data-settings='{"_animation":"fadeInDown"}' data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">Discover the unique digital art of NFT</h2>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-fc66e6d elementor-hidden-desktop elementor-widget elementor-widget-text-editor" data-id="fc66e6d" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                      <div className="elementor-widget-container">
                        Digital marketplace for crypto collectibles and non-fungible tokens. <br /> Buy, sell, and discover exclusive digital assets.
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-7001381 elementor-align-left elementor-widget__width-auto elementor-mobile-align-justify elementor-widget-mobile__width-inherit elementor-hidden-desktop elementor-invisible elementor-widget elementor-widget-button" data-id="7001381" data-element_type="widget" data-e-type="widget" data-settings='{"_animation":"fadeInUp"}' data-widget_type="button.default">
                      <div className="elementor-widget-container">
                        <div className="elementor-button-wrapper">
                          <a className="elementor-button elementor-button-link elementor-size-sm elementor-animation-push" href="#"><span className="elementor-button-content-wrapper"><span className="elementor-button-text">Explore</span></span></a>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-5788de4 elementor-align-left elementor-widget__width-auto elementor-mobile-align-justify elementor-widget-mobile__width-inherit elementor-hidden-desktop elementor-invisible elementor-widget elementor-widget-button" data-id="5788de4" data-element_type="widget" data-e-type="widget" data-settings='{"_animation":"fadeInUp"}' data-widget_type="button.default">
                      <div className="elementor-widget-container">
                        <div className="elementor-button-wrapper">
                          <a className="elementor-button elementor-button-link elementor-size-sm elementor-animation-push" href="#"><span className="elementor-button-content-wrapper"><span className="elementor-button-text">Create</span></span></a>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-56323c6 e-transform elementor-widget elementor-widget-spacer animated fadeIn" data-id="56323c6" data-element_type="widget" data-e-type="widget" data-settings='{"_animation":"fadeIn","_animation_delay":700,"_transform_rotateZ_effect":{"unit":"px","size":-3,"sizes":[]},"_transform_rotateZ_effect_tablet":{"unit":"deg","size":"","sizes":[]},"_transform_rotateZ_effect_mobile":{"unit":"deg","size":"","sizes":[]}}' data-widget_type="spacer.default">
                      <div className="elementor-widget-container"><div className="elementor-spacer"><div className="elementor-spacer-inner"></div></div></div>
                    </div>

                    <div className="elementor-element elementor-element-9746e14 premium-woo-product-align-left premium-qv-hidden-yes elementor-widget elementor-widget-premium-woo-products" data-id="9746e14" data-element_type="widget" data-e-type="widget" data-settings='{"products_show":1,"products_show_tablet":1,"arrows_position":"default","products_show_mobile":1,"products_on_scroll":1}' data-widget_type="premium-woo-products.grid-3">
                      <div className="elementor-widget-container">
                        <div className="premium-woocommerce premium-woo-products-carousel premium-woo-skin-grid-3 premium-woo-query-all" data-woo_carousel='{"slidesToShow":1,"slidesToScroll":1,"autoplaySpeed":3500,"autoplay":true,"infinite":true,"pauseOnHover":true,"speed":550,"arrows":true,"dots":true,"rtl":false,"prevArrow":"<a type=\"button\" data-role=\"none\" class=\"carousel-arrow carousel-prev\" aria-label=\"Previous\" role=\"button\" style=\"\"><i class=\"fas fa-angle-left\" aria-hidden=\"true\"><\\/i><\\/a>","nextArrow":"<a type=\"button\" data-role=\"none\" class=\"carousel-arrow carousel-next\" aria-label=\"Next\" role=\"button\" style=\"\"><i class=\"fas fa-angle-right\" aria-hidden=\"true\"><\\/i><\\/a>","responsive":[{"breakpoint":1024,"settings":{"slidesToShow":1,"slidesToScroll":1}},{"breakpoint":767,"settings":{"slidesToShow":1,"slidesToScroll":1}}]}' data-page-id="5548" data-skin="grid_3" data-quick-view="yes">
                          <div className="premium-woo-products-inner premium-woo-product__hover-zoomin">
                            <ul className="products columns-4 slick-initialized slick-slider slick-dotted" data-is-loaded="true">
                              <a type="button" data-role="none" className="carousel-arrow carousel-prev slick-arrow" aria-label="Previous" role="button" style={{}}><i className="fas fa-angle-left" aria-hidden="true"></i></a>
                              <div className="slick-list draggable">
                                <div className="slick-track" style={{ opacity: 1, width: '5753px', transform: 'translate3d(-2092px, 0px, 0px)' }}>
                                  {/* Pre-clone: last product cloned before index 0 */}
                                  <div className="slick-slide slick-cloned" data-slick-index={-1} id="" aria-hidden="true" tabIndex={-1} style={{ width: '523px' }}>
                                    <div><ProductCarouselItem product={HERO_PRODUCTS[4]} tabIdx={-1} cloneId={false} /></div>
                                  </div>
                                  {/* Real slides */}
                                  {HERO_PRODUCTS.map((p, i) => (
                                    <div
                                      key={p.id}
                                      className={`slick-slide${i === 3 ? ' slick-current slick-active' : ''}`}
                                      data-slick-index={i}
                                      aria-hidden={i !== 3}
                                      role="tabpanel"
                                      id={`slick-slide0${i}`}
                                      style={{ width: '523px' }}
                                      {...(i !== 3 ? { tabIndex: -1 } : {})}
                                    >
                                      <div><ProductCarouselItem product={p} tabIdx={i === 3 ? 0 : -1} cloneId={true} /></div>
                                    </div>
                                  ))}
                                  {/* Post-clones: all products cloned after last real slide */}
                                  {HERO_PRODUCTS.map((p, i) => (
                                    <div
                                      key={`clone-post-${p.id}`}
                                      className="slick-slide slick-cloned"
                                      data-slick-index={5 + i}
                                      id=""
                                      aria-hidden="true"
                                      tabIndex={-1}
                                      style={{ width: '523px' }}
                                    >
                                      <div><ProductCarouselItem product={p} tabIdx={-1} cloneId={false} /></div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              <a type="button" data-role="none" className="carousel-arrow carousel-next slick-arrow" aria-label="Next" role="button" style={{}}><i className="fas fa-angle-right" aria-hidden="true"></i></a>
                              <ul className="slick-dots" role="tablist" style={{}}>
                                {HERO_PRODUCTS.map((_, i) => (
                                  <li key={i} role="presentation" className={i === 3 ? 'slick-active' : ''}><i className="fas fa-circle"></i></li>
                                ))}
                              </ul>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-bdec3f5 elementor-hidden-tablet elementor-hidden-mobile" data-id="bdec3f5" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-b6ea0b4 elementor-widget__width-auto elementor-absolute elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-image elementor-motion-effects-parent animated rotateIn" data-id="b6ea0b4" data-element_type="widget" data-e-type="widget" data-settings='{"_position":"absolute","motion_fx_motion_fx_mouse":"yes","motion_fx_mouseTrack_effect":"yes","motion_fx_mouseTrack_speed":{"unit":"px","size":0.3,"sizes":[]},"_animation":"rotateIn"}' data-widget_type="image.default">
                      <div className="elementor-widget-container elementor-motion-effects-element" style={{ transform: 'translateX(var(--translateX))translateY(var(--translateY))', '--translateX': '-2.6484375px', '--translateY': '5.417422867513611px' }}>
                        <img fetchPriority="high" decoding="async" width="550" height="550" src="/images/index/element-1.png" className="attachment-large size-large wp-image-3184" alt="" sizes="(max-width: 550px) 100vw, 550px" />
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-ee63fc7 elementor-widget elementor-widget-heading animated fadeInDown" data-id="ee63fc7" data-element_type="widget" data-e-type="widget" data-settings='{"_animation":"fadeInDown"}' data-widget_type="heading.default">
                      <div className="elementor-widget-container"><h2 className="elementor-heading-title elementor-size-default">Discover the unique digital art of NFT</h2></div>
                    </div>
                    <div className="elementor-element elementor-element-99839a2 elementor-widget elementor-widget-text-editor" data-id="99839a2" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                      <div className="elementor-widget-container">Digital marketplace for crypto collectibles and non-fungible tokens. <br /> Buy, sell, and discover exclusive digital assets.</div>
                    </div>
                    <div className="elementor-element elementor-element-23d4be9 elementor-align-left elementor-widget__width-auto elementor-widget elementor-widget-button animated fadeInUp" data-id="23d4be9" data-element_type="widget" data-e-type="widget" data-settings='{"_animation":"fadeInUp"}' data-widget_type="button.default">
                      <div className="elementor-widget-container"><div className="elementor-button-wrapper"><a className="elementor-button elementor-button-link elementor-size-sm elementor-animation-push" href="#"><span className="elementor-button-content-wrapper"><span className="elementor-button-text">Explore</span></span></a></div></div>
                    </div>
                    <div className="elementor-element elementor-element-ab790a2 elementor-align-left elementor-widget__width-auto elementor-widget elementor-widget-button animated fadeInUp" data-id="ab790a2" data-element_type="widget" data-e-type="widget" data-settings='{"_animation":"fadeInUp"}' data-widget_type="button.default">
                      <div className="elementor-widget-container"><div className="elementor-button-wrapper"><a className="elementor-button elementor-button-link elementor-size-sm elementor-animation-push" href="#"><span className="elementor-button-content-wrapper"><span className="elementor-button-text">Create</span></span></a></div></div>
                    </div>
                    <div className="elementor-element elementor-element-da5ed64 elementor-widget__width-auto elementor-absolute elementor-hidden-tablet elementor-hidden-mobile elementor-invisible elementor-widget elementor-widget-image elementor-motion-effects-parent" data-id="da5ed64" data-element_type="widget" data-e-type="widget" data-settings='{"motion_fx_motion_fx_scrolling":"yes","motion_fx_motion_fx_mouse":"yes","motion_fx_mouseTrack_effect":"yes","motion_fx_mouseTrack_speed":{"unit":"px","size":0.3,"sizes":[]},"motion_fx_mouseTrack_direction":"negative","_animation":"rotateIn","_position":"absolute","motion_fx_devices":["desktop","tablet","mobile"]}' data-widget_type="image.default">
                      <div className="elementor-widget-container elementor-motion-effects-element">
                        <img loading="lazy" decoding="async" width="267" height="266" src="/images/index/element.png" className="attachment-medium_large size-medium_large wp-image-471" alt="" sizes="(max-width: 267px) 100vw, 267px" />
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
  );
}


function NotableDropsTitle() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-ea95e8f elementor-section-boxed elementor-section-height-default" data-id="ea95e8f" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-40b3cc0" data-id="40b3cc0" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-4392e5c elementor-widget elementor-widget-heading" data-id="4392e5c" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
              <div className="elementor-widget-container"><h3 className="elementor-heading-title elementor-size-default">Notable drops</h3></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NotableDropsGrid() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-2348f8a elementor-section-boxed elementor-section-height-default elementor-invisible" data-id="2348f8a" data-element_type="section" data-e-type="section" data-settings='{"animation":"fadeInUp","mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">
        {NOTABLE_DROPS.map((drop, i) => (<NotableDropCard key={i} drop={drop} />))}
      </div>
    </section>
  );
}

function BestSellersTitle() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-1e72054 elementor-section-boxed elementor-section-height-default" data-id="1e72054" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-a367ddc" data-id="a367ddc" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-08abf96 elementor-widget elementor-widget-heading" data-id="08abf96" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
              <div className="elementor-widget-container"><h3 className="elementor-heading-title elementor-size-default">Best sellers 💥</h3></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BestSellersDesktop1() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-bdecbb3 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-invisible" data-id="bdecbb3" data-element_type="section" data-e-type="section" data-settings='{"animation":"fadeInUp","animation_tablet":"none","animation_mobile":"none","mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">
        {SELLERS_D1.map((s) => (<SellerCard key={s.colId} s={s} />))}
      </div>
    </section>
  );
}

function BestSellersTablet() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-2ffe695 elementor-section-content-middle elementor-hidden-desktop elementor-hidden-mobile elementor-section-boxed elementor-section-height-default elementor-invisible" data-id="2ffe695" data-element_type="section" data-e-type="section" data-settings='{"animation":"fadeInUp","animation_tablet":"none","animation_mobile":"none","mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">
        {SELLERS_TABLET.map((s) => (<TabletSellerCard key={s.colId} s={s} />))}
      </div>
    </section>
  );
}

function BestSellersDesktop2() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-3e20f36 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-invisible" data-id="3e20f36" data-element_type="section" data-e-type="section" data-settings='{"animation":"fadeInUp","animation_tablet":"none","animation_mobile":"none","mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">
        {SELLERS_D2.map((s) => (<SellerCard key={s.colId} s={s} />))}
      </div>
    </section>
  );
}

function BestSellersDesktop3() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-c123375 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-invisible" data-id="c123375" data-element_type="section" data-e-type="section" data-settings='{"animation":"fadeInUp","mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">
        {SELLERS_D3.map((s) => (<SellerCard key={s.colId} s={s} />))}
      </div>
    </section>
  );
}


function BrowseByCategory() {
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

function TickerSection() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-344e2a9 elementor-section-full_width elementor-section-height-default" data-id="344e2a9" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-1fbddf5" data-id="1fbddf5" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-2789b4e elementor-widget elementor-widget-mdp-crawler-elementor" data-id="2789b4e" data-element_type="widget" data-e-type="widget" data-widget_type="mdp-crawler-elementor.default">
              <div className="elementor-widget-container">
                <div className="mdp-crawler-elementor-box mdp-crawler-elementor-box-0" data-ticker-type="ticker">
                  <div className="mdp-crawler-elementor-ticker mdp-crawler-elementor-ticker-ticker-type mdp-crawler-elementor-ticker-label-align-">
                    <div className="mdp-crawler-elementor-content-wrapper">
                      <div className="mdp-crawler-elementor-ticker-content mdp-crawler-elementor-ticker-animation-normal">
                        {[...Array(6)].map((_, i) => (<div className="mdp-crawler-elementor-ticker-item" key={i}><a>Create {'&'} sell your NFTs</a></div>))}
                      </div>
                    </div>
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


function HowItWorks() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-4ecb8ec elementor-section-boxed elementor-section-height-default elementor-invisible" data-id="4ecb8ec" data-element_type="section" data-e-type="section" data-settings='{"animation":"fadeInUp","mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-wide">
        {HOW_IT_WORKS.map((step) => (
          <div className={`elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-${step.colId}`} key={step.colId} data-id={step.colId} data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className={`elementor-element elementor-element-${step.imgWId} elementor-widget elementor-widget-image`} data-id={step.imgWId} data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                <div className="elementor-widget-container"><img loading="lazy" decoding="async" width={step.iconW} height={step.iconH} src={step.icon} className="attachment-thumbnail size-thumbnail" alt="" /></div>
              </div>
              <div className={`elementor-element elementor-element-${step.titleWId} elementor-widget elementor-widget-heading`} data-id={step.titleWId} data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                <div className="elementor-widget-container"><h5 className="elementor-heading-title elementor-size-default">{step.title}</h5></div>
              </div>
              <div className={`elementor-element elementor-element-${step.textWId} elementor-widget elementor-widget-text-editor`} data-id={step.textWId} data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">{step.desc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function MeetXchainTitle() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-70183d6 elementor-section-boxed elementor-section-height-default" data-id="70183d6" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-219f80b" data-id="219f80b" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-31e7453 elementor-widget elementor-widget-heading" data-id="31e7453" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
              <div className="elementor-widget-container"><h3 className="elementor-heading-title elementor-size-default">Meet Xchain ⚡</h3></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoSection() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-e6b70b2 elementor-section-boxed elementor-section-height-default elementor-motion-effects-element elementor-motion-effects-element-type-background" data-id="e6b70b2" data-element_type="section" data-e-type="section" data-settings='{"background_background":"classic","background_motion_fx_motion_fx_scrolling":"yes","background_motion_fx_translateY_effect":"yes","background_motion_fx_translateY_direction":"negative","background_motion_fx_translateY_speed":{"unit":"px","size":5,"sizes":[]},"background_motion_fx_translateY_affectedRange":{"unit":"%","size":"","sizes":{"start":0,"end":100}},"background_motion_fx_devices":["desktop","tablet","mobile"],"mdp_selection_sticky_effect_enable":false}' style={{ '--e-transform-transition-duration': '100ms' }}>
      <div className="elementor-motion-effects-container"><div className="elementor-motion-effects-layer" style={{ width: '100%', height: '150%', '--translateY': '633.533px', transform: 'translateY(var(--translateY))' }}></div></div>
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6a97c69 elementor-invisible" data-id="6a97c69" data-element_type="column" data-e-type="column" data-settings='{"background_background":"classic","animation":"fadeInUp","mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-819e761 elementor-widget elementor-widget-image" data-id="819e761" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
              <div className="elementor-widget-container"><a href="#"><img loading="lazy" decoding="async" width="110" height="110" src="/images/index/play.png" className="elementor-animation-push attachment-medium size-medium wp-image-816" alt="" sizes="(max-width: 110px) 100vw, 110px" /></a></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function BlogSection() {
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

export default function HomePage() {
  return (
    <div data-elementor-type="wp-post" data-elementor-id="5548" className="elementor elementor-5548 elementor-motion-effects-parent" data-elementor-post-type="page">
      <HomeHero />
      <NotableDropsTitle />
      <NotableDropsGrid />
      <BestSellersTitle />
      <BestSellersDesktop1 />
      <BestSellersTablet />
      <BestSellersDesktop2 />
      <BestSellersDesktop3 />
      <BrowseByCategory />
      <TickerSection />
      <HowItWorks />
      <MeetXchainTitle />
      <VideoSection />
      <BlogSection />
    </div>
  );
}
