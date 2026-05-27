import ContactForm from './ContactForm';

export default function ContactsFormSection() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-482e765 elementor-section-boxed elementor-section-height-default" data-id="482e765" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b985bd5" data-id="b985bd5" data-element_type="column" data-e-type="column" data-settings='{"background_background":"classic","mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <section className="elementor-section elementor-inner-section elementor-element elementor-element-9d30aed elementor-section-boxed elementor-section-height-default" data-id="9d30aed" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
              <div className="elementor-container elementor-column-gap-no">
                <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-5eda56f" data-id="5eda56f" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-b93aeaf elementor-widget elementor-widget-heading" data-id="b93aeaf" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                      <div className="elementor-widget-container"><h3 className="elementor-heading-title elementor-size-default">Write us your message</h3></div>
                    </div>
                    <div className="elementor-element elementor-element-f98104e elementor-button-align-start elementor-mobile-button-align-stretch elementor-hidden-mobile elementor-widget elementor-widget-form" data-id="f98104e" data-element_type="widget" data-e-type="widget" data-settings='{"step_next_label":"Next","step_previous_label":"Previous","step_type":"number_text","step_icon_shape":"circle"}' data-widget_type="form.default">
                      <div className="elementor-widget-container">
                        <ContactForm widgetId="f98104e" formId="f98104e" />
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-d58bbf7 elementor-button-align-start elementor-mobile-button-align-stretch elementor-hidden-desktop elementor-hidden-tablet elementor-widget elementor-widget-form" data-id="d58bbf7" data-element_type="widget" data-e-type="widget" data-settings='{"step_next_label":"Next","step_previous_label":"Previous","step_type":"number_text","step_icon_shape":"circle"}' data-widget_type="form.default">
                      <div className="elementor-widget-container">
                        <ContactForm widgetId="d58bbf7" formId="d58bbf7" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-de15b1d" data-id="de15b1d" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-5357c9e elementor-widget elementor-widget-google_maps animated fadeIn" data-id="5357c9e" data-element_type="widget" data-e-type="widget" data-settings='{"_animation":"fadeIn"}' data-widget_type="google_maps.default">
                      <div className="elementor-widget-container">
                        <div className="elementor-custom-embed">
                          <iframe loading="lazy" src="/maps/contacts-maps.html" title="London Eye, London, United Kingdom" aria-label="London Eye, London, United Kingdom"></iframe>
                        </div>
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
