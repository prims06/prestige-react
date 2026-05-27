export default function ContactForm({ widgetId, formId }) {
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
