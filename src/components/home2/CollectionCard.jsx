import GalleryContainer from './GalleryContainer';
import { GALLERY_SETTINGS } from '../../data/home2';

export default function CollectionCard({ c, colSize = 33 }) {
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
