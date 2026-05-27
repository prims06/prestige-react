import { LOGOS } from '../../data/home2';

export default function LogoCarouselSection() {
  return (
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
  );
}
