export default function ContactsPage() {
  return (
    <main id="content" className="site-main post-422 envato_tk_templates type-envato_tk_templates status-publish has-post-thumbnail hentry">
      <div className="page-content">
        <div data-elementor-type="wp-post" data-elementor-id="422" className="elementor elementor-422" data-elementor-post-type="envato_tk_templates">
          <ContactsHero />
          <ContactsFormSection />
          <ContactsInfoSection />
        </div>
      </div>
    </main>
  );
}

function ContactsHero() {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-64fd015 elementor-section-full_width elementor-section-content-middle elementor-section-height-default" data-id="64fd015" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-background-overlay"></div>
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-99e3e81 elementor-hidden-tablet elementor-hidden-mobile" data-id="99e3e81" data-element_type="column" data-e-type="column" data-settings='{"background_background":"classic","mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-50ba635 elementor-widget elementor-widget-spacer" data-id="50ba635" data-element_type="widget" data-e-type="widget" data-widget_type="spacer.default">
              <div className="elementor-widget-container"><div className="elementor-spacer"><div className="elementor-spacer-inner"></div></div></div>
            </div>
          </div>
        </div>
        <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-07ba1b9" data-id="07ba1b9" data-element_type="column" data-e-type="column" data-settings='{"background_background":"classic","mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-cb69413 elementor-widget elementor-widget-heading" data-id="cb69413" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
              <div className="elementor-widget-container"><h2 className="elementor-heading-title elementor-size-default">Contacts</h2></div>
            </div>
            <div className="elementor-element elementor-element-60828d5 elementor-widget elementor-widget-mdp-crumber-elementor" data-id="60828d5" data-element_type="widget" data-e-type="widget" data-widget_type="mdp-crumber-elementor.default">
              <div className="elementor-widget-container">
                <div className="mdp-crumber-elementor-box">
                  <div className="mdp-crumber-elementor-breadcrumbs">
                    <div className="mdp-crumber-elementor-breadcrumbs-item  mdp-crumber-elementor-breadcrumbs-icon-position-"><span>Home</span></div>
                    <span className="mdp-crumber-elementor-separator mdp-crumber-elementor-separator-hide-last"> {'•'} </span>
                    <div className="mdp-crumber-elementor-breadcrumbs-item mdp-crumber-elementor-breadcrumbs-item-active mdp-crumber-elementor-breadcrumbs-icon-position-"><span>Contacts</span></div>
                    <span className="mdp-crumber-elementor-separator mdp-crumber-elementor-separator-hide-last"> {'•'} </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-e7bf889 elementor-hidden-tablet elementor-hidden-mobile" data-id="e7bf889" data-element_type="column" data-e-type="column" data-settings='{"background_background":"classic","mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-8c05ce1 elementor-widget elementor-widget-spacer" data-id="8c05ce1" data-element_type="widget" data-e-type="widget" data-widget_type="spacer.default">
              <div className="elementor-widget-container"><div className="elementor-spacer"><div className="elementor-spacer-inner"></div></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactForm({ widgetId, formId }) {
  return (
    <form className="elementor-form" method="post" name="New Form" aria-label="New Form">
      <input type="hidden" name="post_id" value="422" />
      <input type="hidden" name="form_id" value={formId} />
      <input type="hidden" name="referer_title" value="Contacts" />
      <input type="hidden" name="queried_id" value="422" />
      <div className="elementor-form-fields-wrapper elementor-labels-">
        <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-name elementor-col-50">
          <label htmlFor={`form-field-name-${widgetId}`} className="elementor-field-label elementor-screen-only">Name</label>
          <input size={1} type="text" name="form_fields[name]" id={`form-field-name-${widgetId}`} className="elementor-field elementor-size-sm  elementor-field-textual" placeholder="Name" />
        </div>
        <div className="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-email elementor-col-50 elementor-field-required">
          <label htmlFor={`form-field-email-${widgetId}`} className="elementor-field-label elementor-screen-only">Email</label>
          <input size={1} type="email" name="form_fields[email]" id={`form-field-email-${widgetId}`} className="elementor-field elementor-size-sm  elementor-field-textual" placeholder="Email" required />
        </div>
        <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-field_8c780c6 elementor-col-100 elementor-field-required">
          <label htmlFor={`form-field-subject-${widgetId}`} className="elementor-field-label elementor-screen-only">Subject</label>
          <input size={1} type="text" name="form_fields[field_8c780c6]" id={`form-field-subject-${widgetId}`} className="elementor-field elementor-size-sm  elementor-field-textual" placeholder="Subject" required />
        </div>
        <div className="elementor-field-type-textarea elementor-field-group elementor-column elementor-field-group-message elementor-col-100">
          <label htmlFor={`form-field-message-${widgetId}`} className="elementor-field-label elementor-screen-only">Message</label>
          <textarea className="elementor-field-textual elementor-field  elementor-size-sm" name="form_fields[message]" id={`form-field-message-${widgetId}`} rows={4} placeholder="Enter your message"></textarea>
        </div>
        <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons">
          <button className="elementor-button elementor-size-sm elementor-animation-push" type="submit">
            <span className="elementor-button-content-wrapper"><span className="elementor-button-text">Send message</span></span>
          </button>
        </div>
      </div>
    </form>
  );
}

function ContactsFormSection() {
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

function ContactsInfoSection() {
  const cards = [
    {
      colId: 'fb06cef', imgId: '19791da', icon: '/images/contacts/phone-1.png', imgW: 50, imgH: 50, imgWpId: '2196',
      titleId: '5a97877', title: 'Contact phone number',
      lines: [{ id: '004c088', text: '+1-777-333-4255' }, { id: 'f4219c6', text: '+1-245-555-2268' }]
    },
    {
      colId: '1e54cb0', imgId: 'df9a05b', icon: '/images/contacts/envelope-open.png', imgW: 50, imgH: 50, imgWpId: '2210',
      titleId: '58e4ab3', title: 'Our email address',
      lines: [{ id: '690e63d', text: 'example@admin.com' }, { id: 'eb9a57b', text: 'xchain@info.com' }]
    },
    {
      colId: 'dcada9f', imgId: 'ebe3c1e', icon: '/images/contacts/location-dot.png', imgW: 38, imgH: 50, imgWpId: '2211',
      titleId: 'cf8be5f', title: 'Our location',
      lines: [{ id: 'b3e76b2', text: '2464 Royal Ln. Mesa, New Jersey 45463' }, { id: '886b27e', text: '6391 Elgin St. Celina, Delaware 10299' }]
    }
  ];
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-368cdd9 elementor-section-boxed elementor-section-height-default animated fadeInUp" data-id="368cdd9" data-element_type="section" data-e-type="section" data-settings='{"animation":"fadeInUp","mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-default">
        {cards.map(c => (
          <div key={c.colId} className={`elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-${c.colId}`} data-id={c.colId} data-element_type="column" data-e-type="column" data-settings='{"background_background":"classic","mdp_selection_sticky_column_effect_enable":false}'>
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className={`elementor-element elementor-element-${c.imgId} elementor-widget elementor-widget-image`} data-id={c.imgId} data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                <div className="elementor-widget-container">
                  <img loading="lazy" decoding="async" width={c.imgW} height={c.imgH} src={c.icon} className={`attachment-thumbnail size-thumbnail wp-image-${c.imgWpId}`} alt="" />
                </div>
              </div>
              <div className={`elementor-element elementor-element-${c.titleId} elementor-widget elementor-widget-heading`} data-id={c.titleId} data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                <div className="elementor-widget-container"><h5 className="elementor-heading-title elementor-size-default">{c.title}</h5></div>
              </div>
              {c.lines.map(l => (
                <div key={l.id} className={`elementor-element elementor-element-${l.id} elementor-widget elementor-widget-text-editor`} data-id={l.id} data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">{l.text}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
