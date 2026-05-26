import { Link } from 'react-router-dom';

const AVATAR = '/images/product/39e1ae25dc17da767db6cd8daffa05a25f0b3ad9941b609af3bd8f6f85f1c0b5.png';
const AVATAR_SRCSET = 'https://secure.gravatar.com/avatar/39e1ae25dc17da767db6cd8daffa05a25f0b3ad9941b609af3bd8f6f85f1c0b5?s=120&d=mm&r=g 2x';

export default function ProductPage() {
  return (
    <>
      <div className="woocommerce-notices-wrapper"></div>
      <div data-elementor-type="product" data-elementor-id="1614" className="elementor elementor-1614 elementor-location-single post-214 product type-product status-publish has-post-thumbnail product_cat-trading-cards product_tag-nft first instock featured shipping-taxable product-type-external product" data-elementor-post-type="elementor_library">
        <ProductBreadcrumb />
        <ProductDetailSection />
      </div>
    </>
  );
}

function ProductBreadcrumb() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-65ce020 elementor-section-boxed elementor-section-height-default" data-id="65ce020" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3a63f55" data-id="3a63f55" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-3b6cd40 elementor-widget elementor-widget-heading" data-id="3b6cd40" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
              <div className="elementor-widget-container"><h2 className="elementor-heading-title elementor-size-default">Single product</h2></div>
            </div>
            <div className="elementor-element elementor-element-af2eb35 elementor-widget elementor-widget-woocommerce-breadcrumb" data-id="af2eb35" data-element_type="widget" data-e-type="widget" data-widget_type="woocommerce-breadcrumb.default">
              <div className="elementor-widget-container">
                <nav className="woocommerce-breadcrumb" aria-label="Breadcrumb">
                  <Link to="/">Home</Link>&nbsp;/&nbsp;<Link to="/shop">{'🔥'} Trading cards</Link>&nbsp;/&nbsp;Logical impact
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductDetailSection() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-c1bf035 elementor-section-boxed elementor-section-height-default" data-id="c1bf035" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-b600661" data-id="b600661" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-f3d1c89 elementor-widget elementor-widget-woocommerce-product-images elementor-motion-effects-parent elementor-motion-effects-perspective" data-id="f3d1c89" data-element_type="widget" data-e-type="widget" data-settings='{"motion_fx_motion_fx_mouse":"yes","motion_fx_tilt_effect":"yes","motion_fx_tilt_direction":"negative","motion_fx_tilt_speed":{"unit":"px","size":1.1999999999999999555910790149937383830547332763671875,"sizes":[]}}' data-widget_type="woocommerce-product-images.default">
              <div className="elementor-widget-container elementor-motion-effects-element" style={{transform:'rotateX(var(--rotateX))rotateY(var(--rotateY))','--rotateX':'-2.907441016333938deg','--rotateY':'-0.834375deg'}}>
                <div className="woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-4 images" data-columns="4" style={{opacity:1,transition:'opacity 0.25s ease-in-out'}}>
                  <a href="/product" role="button" className="woocommerce-product-gallery__trigger" aria-haspopup="dialog" aria-controls="photoswipe-fullscreen-dialog" aria-label="View full-screen image gallery"><span aria-hidden="true">{'🔍'}</span></a>
                  <div className="woocommerce-product-gallery__wrapper">
                    <div data-thumb="images/product/anunay-rai-awMWm6ayLTc-unsplash-600x600.jpg" data-thumb-alt="Logical impact" data-thumb-srcset="/images/product/anunay-rai-awMWm6ayLTc-unsplash-600x600.jpg 100w, /images/product/anunay-rai-awMWm6ayLTc-unsplash-600x600.jpg 300w, /images/product/anunay-rai-awMWm6ayLTc-unsplash-600x600.jpg 1024w, /images/product/anunay-rai-awMWm6ayLTc-unsplash-600x600.jpg 150w, /images/product/anunay-rai-awMWm6ayLTc-unsplash-600x600.jpg 768w, /images/product/anunay-rai-awMWm6ayLTc-unsplash-600x600.jpg 1536w, /images/product/anunay-rai-awMWm6ayLTc-unsplash-600x600.jpg 800w, /images/product/anunay-rai-awMWm6ayLTc-unsplash-600x600.jpg 600w, /images/product/anunay-rai-awMWm6ayLTc-unsplash.jpg 2000w" data-thumb-sizes="(max-width: 100px) 100vw, 100px" className="woocommerce-product-gallery__image" style={{position:'relative',overflow:'hidden'}}>
                      <a href="/images/product/anunay-rai-awMWm6ayLTc-unsplash.jpg"><img fetchPriority="high" width="600" height="600" src="/images/product/anunay-rai-awMWm6ayLTc-unsplash-600x600.jpg" className="wp-post-image" alt="Logical impact" data-caption="" data-src="/images/product/anunay-rai-awMWm6ayLTc-unsplash.jpg" data-large_image="images/product/anunay-rai-awMWm6ayLTc-unsplash.jpg" data-large_image_width="2000" data-large_image_height="2000" decoding="async" sizes="(max-width: 600px) 100vw, 600px" /></a>
                      <img alt="" src="/images/product/anunay-rai-awMWm6ayLTc-unsplash.jpg" className="zoomImg" style={{position:'absolute',top:0,left:0,opacity:0,width:'2000px',height:'2000px',borderWidth:'medium',borderStyle:'none',borderColor:'currentcolor',borderImage:'initial',maxWidth:'none',maxHeight:'none'}} aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-72770b3" data-id="72770b3" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-f6373d0 elementor-widget elementor-widget-woocommerce-product-title elementor-page-title elementor-widget-heading" data-id="f6373d0" data-element_type="widget" data-e-type="widget" data-widget_type="woocommerce-product-title.default">
              <div className="elementor-widget-container"><h3 className="product_title entry-title elementor-heading-title elementor-size-default">Logical impact</h3></div>
            </div>
            <div className="elementor-element elementor-element-4ab04b6 elementor-widget__width-auto elementor-widget elementor-widget-heading" data-id="4ab04b6" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
              <div className="elementor-widget-container"><h2 className="elementor-heading-title elementor-size-default">On sale for</h2></div>
            </div>
            <div className="elementor-element elementor-element-6729774 elementor-widget__width-auto elementor-widget elementor-widget-woocommerce-product-price" data-id="6729774" data-element_type="widget" data-e-type="widget" data-widget_type="woocommerce-product-price.default">
              <div className="elementor-widget-container"><p className="price"><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>1,400.00</bdi></span></p></div>
            </div>
            <div className="elementor-element elementor-element-00f084a elementor-widget__width-auto elementor-widget elementor-widget-heading" data-id="00f084a" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
              <div className="elementor-widget-container"><h2 className="elementor-heading-title elementor-size-default">Highest bid</h2></div>
            </div>
            <div className="elementor-element elementor-element-7d21e8b elementor-widget__width-auto elementor-widget elementor-widget-heading" data-id="7d21e8b" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
              <div className="elementor-widget-container"><h2 className="elementor-heading-title elementor-size-default">$15.00</h2></div>
            </div>
            <div className="elementor-element elementor-element-ffaa487 elementor-widget elementor-widget-woocommerce-product-short-description" data-id="ffaa487" data-element_type="widget" data-e-type="widget" data-widget_type="woocommerce-product-short-description.default">
              <div className="elementor-widget-container">
                <div className="woocommerce-product-details__short-description">
                  <p>Suspendisse rhoncus erat gravida finibus hendrerit. Nunc dictum, neque ut ornare vestibulum, arcu justo tempus mauris, ullamcorper volutpat est velit eu nulla. Curabitur eget est pretium quam ornare venenatis ac ac nisi. Fusce quam quam, semper quis sagittis in, mattis vel dui.</p>
                </div>
              </div>
            </div>
            <ProductTabs />
            <ProductCountdown />
            <ProductButtons />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductTabs() {
  return (
    <div className="elementor-element elementor-element-703f087 elementor-widget elementor-widget-woocommerce-product-data-tabs" data-id="703f087" data-element_type="widget" data-e-type="widget" data-widget_type="woocommerce-product-data-tabs.default">
      <div className="elementor-widget-container">
        <div className="woocommerce-tabs wc-tabs-wrapper">
          <ul className="tabs wc-tabs" role="tablist">
            <li role="presentation" className="description_tab active" id="tab-title-description">
              <Link to="/product" role="tab" aria-controls="tab-description" aria-selected="true" tabIndex={0}>Description</Link>
            </li>
            <li role="presentation" className="additional_information_tab" id="tab-title-additional_information">
              <Link to="/product" role="tab" aria-controls="tab-additional_information" aria-selected="false" tabIndex={-1}>Additional information</Link>
            </li>
            <li role="presentation" className="reviews_tab" id="tab-title-reviews">
              <Link to="/product" role="tab" aria-controls="tab-reviews" aria-selected="false" tabIndex={-1}>Reviews (2)</Link>
            </li>
          </ul>
          <DescriptionTab />
          <AdditionalInfoTab />
          <ReviewsTab />
        </div>
      </div>
    </div>
  );
}

function DescriptionTab() {
  return (
    <div className="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
      <h2>Description</h2>
      <p>Vestibulum eget felis aliquet, auctor nisl non, tincidunt nisl. Mauris et eros sapien. In ornare sapien eu nunc aliquam iaculis. Ut risus sem, accumsan eu aliquet non, tempor eget nisl. Fusce condimentum in diam non ultrices. Nulla urna ex, varius ut odio quis, condimentum ullamcorper nibh. Vivamus dapibus ligula dictum efficitur pulvinar. Curabitur a vehicula massa, quis commodo libero.</p>
      <p>Praesent ut sapien vitae est porttitor lobortis. Ut ultrices arcu ut lorem lacinia vestibulum. Donec convallis lectus risus. Ut porta commodo lorem vel ultricies. Nam at blandit mauris. Donec tempus, velit at blandit commodo, mi tellus vestibulum lacus, sed semper risus arcu porta tortor. Cras consequat, nibh in maximus lacinia, tellus ipsum placerat turpis, id lobortis orci lacus eu erat. Cras facilisis venenatis orci vitae efficitur. Nulla pulvinar pretium cursus. Etiam elementum, nulla nec eleifend fringilla, ligula leo eleifend eros, et aliquam orci nunc eleifend mauris. Phasellus ultricies sapien at risus sagittis, ut euismod leo scelerisque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
    </div>
  );
}

function AdditionalInfoTab() {
  return (
    <div className="woocommerce-Tabs-panel woocommerce-Tabs-panel--additional_information panel entry-content wc-tab" id="tab-additional_information" role="tabpanel" aria-labelledby="tab-title-additional_information" style={{display:'none'}}>
      <h2>Additional information</h2>
      <table className="woocommerce-product-attributes shop_attributes" aria-label="Product Details">
        <tbody>
          <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_owner">
            <th className="woocommerce-product-attributes-item__label" scope="row">Owner</th>
            <td className="woocommerce-product-attributes-item__value"><p>0x1435fabhf&#x2026;b3ec</p></td>
          </tr>
          <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_background">
            <th className="woocommerce-product-attributes-item__label" scope="row">Background</th>
            <td className="woocommerce-product-attributes-item__value"><p>Сolorful</p></td>
          </tr>
          <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_blockchain">
            <th className="woocommerce-product-attributes-item__label" scope="row">Blockchain</th>
            <td className="woocommerce-product-attributes-item__value"><p>Ethereum</p></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function ReviewsTab() {
  return (
    <div className="woocommerce-Tabs-panel woocommerce-Tabs-panel--reviews panel entry-content wc-tab" id="tab-reviews" role="tabpanel" aria-labelledby="tab-title-reviews" style={{display:'none'}}>
      <div id="reviews" className="woocommerce-Reviews">
        <div id="comments">
          <h2 className="woocommerce-Reviews-title">2 reviews for <span>Logical impact</span></h2>
          <ol className="commentlist">
            <li className="comment byuser comment-author-merkulove bypostauthor even thread-even depth-1" id="li-comment-3">
              <ReviewItem commentId={3} date="2022-05-25T15:20:57+00:00" dateLabel="May 25, 2022" text="Suspendisse sed nisi lacus sed viverra tellus.">
                <ul className="children">
                  <li className="comment byuser comment-author-merkulove bypostauthor odd alt depth-2" id="li-comment-4">
                    <ReviewItem commentId={4} date="2022-05-25T15:33:04+00:00" dateLabel="May 25, 2022" text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
                  </li>
                </ul>
              </ReviewItem>
            </li>
            <li className="comment byuser comment-author-merkulove bypostauthor even thread-odd thread-alt depth-1" id="li-comment-5">
              <ReviewItem commentId={5} date="2022-05-25T15:35:59+00:00" dateLabel="May 25, 2022" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            </li>
          </ol>
        </div>
        <ReviewForm />
        <div className="clear"></div>
      </div>
    </div>
  );
}

function ReviewItem({ commentId, date, dateLabel, text, children }) {
  return (
    <div id={`comment-${commentId}`} className="comment_container">
      <img alt="" src={AVATAR} srcSet={AVATAR_SRCSET} className="avatar avatar-60 photo" height="60" width="60" decoding="async" />
      <div className="comment-text">
        <p className="meta">
          <strong className="woocommerce-review__author">merkulove </strong>
          <span className="woocommerce-review__dash">&#8211;</span>{' '}
          <time className="woocommerce-review__published-date" dateTime={date}>{dateLabel}</time>
        </p>
        <div className="description"><p>{text}</p></div>
      </div>
      {children}
    </div>
  );
}

function ReviewForm() {
  return (
    <div id="review_form_wrapper">
      <div id="review_form">
        <div id="respond" className="comment-respond">
          <span id="reply-title" className="comment-reply-title" role="heading" aria-level="3">
            Add a review{' '}
            <small><Link rel="nofollow" id="cancel-comment-reply-link" to="/product" style={{display:'none'}}>Cancel reply</Link></small>
          </span>
          <form action="#" method="post" id="commentform" className="comment-form">
            <p className="comment-notes"><span id="email-notes">Your email address will not be published.</span> <span className="required-field-message">Required fields are marked <span className="required">*</span></span></p>
            <div className="comment-form-rating">
              <label htmlFor="rating" id="comment-form-rating-label">Your rating&nbsp;<span className="required">*</span></label>
              <p className="stars">
                <span role="group" aria-labelledby="comment-form-rating-label">
                  <Link role="radio" tabIndex={0} aria-checked="false" className="star-1" to="/product">1 of 5 stars</Link>
                  <Link role="radio" tabIndex={-1} aria-checked="false" className="star-2" to="/product">2 of 5 stars</Link>
                  <Link role="radio" tabIndex={-1} aria-checked="false" className="star-3" to="/product">3 of 5 stars</Link>
                  <Link role="radio" tabIndex={-1} aria-checked="false" className="star-4" to="/product">4 of 5 stars</Link>
                  <Link role="radio" tabIndex={-1} aria-checked="false" className="star-5" to="/product">5 of 5 stars</Link>
                </span>
              </p>
              <select name="rating" id="rating" required style={{display:'none'}}>
                <option value="">Rate&#x2026;</option>
                <option value="5">Perfect</option>
                <option value="4">Good</option>
                <option value="3">Average</option>
                <option value="2">Not that bad</option>
                <option value="1">Very poor</option>
              </select>
            </div>
            <p className="comment-form-comment"><label htmlFor="comment">Your review&nbsp;<span className="required">*</span></label><textarea id="comment" name="comment" cols={45} rows={8} required></textarea></p>
            <p className="comment-form-author"><label htmlFor="author">Name&nbsp;<span className="required">*</span></label><input id="author" name="author" type="text" autoComplete="name" defaultValue="" size={30} required /></p>
            <p className="comment-form-email"><label htmlFor="email">Email&nbsp;<span className="required">*</span></label><input id="email" name="email" type="email" autoComplete="email" defaultValue="" size={30} required /></p>
            <p className="comment-form-cookies-consent"><input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" value="yes" /> <label htmlFor="wp-comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label></p>
            <p className="form-submit">
              <input name="submit" type="submit" id="submit" className="submit" value="Submit" />{' '}
              <input type="hidden" name="comment_post_ID" value="214" id="comment_post_ID" />
              <input type="hidden" name="comment_parent" id="comment_parent" value="0" />
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

function ProductCountdown() {
  return (
    <div className="elementor-element elementor-element-927a976 elementor-countdown--label-block elementor-widget elementor-widget-countdown" data-id="927a976" data-element_type="widget" data-e-type="widget" data-widget_type="countdown.default">
      <div className="elementor-widget-container">
        <div className="elementor-countdown-wrapper" data-date="1782022320">
          <div className="elementor-countdown-item"><span className="elementor-countdown-digits elementor-countdown-days">29</span> <span className="elementor-countdown-label">Days</span></div>
          <div className="elementor-countdown-item"><span className="elementor-countdown-digits elementor-countdown-hours">19</span> <span className="elementor-countdown-label">Hours</span></div>
          <div className="elementor-countdown-item"><span className="elementor-countdown-digits elementor-countdown-minutes">09</span> <span className="elementor-countdown-label">Minutes</span></div>
          <div className="elementor-countdown-item"><span className="elementor-countdown-digits elementor-countdown-seconds">38</span> <span className="elementor-countdown-label">Seconds</span></div>
        </div>
      </div>
    </div>
  );
}

function ProductButtons() {
  return (
    <section className="elementor-section elementor-inner-section elementor-element elementor-element-add8227 elementor-section-boxed elementor-section-height-default" data-id="add8227" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-7dca050" data-id="7dca050" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-25c401d elementor-align-justify elementor-widget elementor-widget-button" data-id="25c401d" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
              <div className="elementor-widget-container">
                <div className="elementor-button-wrapper">
                  <Link className="elementor-button elementor-button-link elementor-size-sm elementor-animation-push" to="/product">
                    <span className="elementor-button-content-wrapper"><span className="elementor-button-text">Buy now</span></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-90ed6c8" data-id="90ed6c8" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-ebbaa75 elementor-align-justify elementor-widget elementor-widget-button" data-id="ebbaa75" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
              <div className="elementor-widget-container">
                <div className="elementor-button-wrapper">
                  <Link className="elementor-button elementor-button-link elementor-size-sm elementor-animation-push" to="/product">
                    <span className="elementor-button-content-wrapper"><span className="elementor-button-text">Place a bid</span></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
