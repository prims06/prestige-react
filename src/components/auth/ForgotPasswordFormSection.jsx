import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { getErrorMessage } from '../../api/errorHandler';

export default function ForgotPasswordFormSection() {
  const { forgotPassword, isLoading, error, resetError } = useAuth();
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await forgotPassword({ email });
    if (!error) setSent(true);
  };

  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-f83b577 elementor-section-boxed elementor-section-height-default" data-id="f83b577" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-1a142eb" data-id="1a142eb" data-element_type="column" data-e-type="column" data-settings='{"background_background":"classic","mdp_selection_sticky_column_effect_enable":false}'>
          <div className="elementor-widget-wrap elementor-element-populated">
            <section className="elementor-section elementor-inner-section elementor-element elementor-element-80457d6 elementor-section-boxed elementor-section-height-default" data-id="80457d6" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
              <div className="elementor-container elementor-column-gap-no">
                <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-922e1d4" data-id="922e1d4" data-element_type="column" data-e-type="column" data-settings='{"mdp_selection_sticky_column_effect_enable":false}'>
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-956621c elementor-widget elementor-widget-heading" data-id="956621c" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                        <h3 className="elementor-heading-title elementor-size-default">Forgot your password?</h3>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-41ef08d elementor-widget elementor-widget-login" data-id="41ef08d" data-element_type="widget" data-e-type="widget" data-widget_type="login.default">
                      <div className="elementor-widget-container">

                        {sent ? (
                          <div style={{ padding: '1rem 0' }}>
                            <p style={{ marginBottom: '1rem', color: '#2ecc71' }}>
                              ✓ Check your inbox — a reset link has been sent to <strong>{email}</strong>.
                            </p>
                            <Link className="elementor-lost-password" to="/login">Back to login</Link>
                          </div>
                        ) : (
                          <form className="elementor-login elementor-form" onSubmit={handleSubmit} aria-label="Forgot password form">

                            {error && (
                              <div className="elementor-message elementor-message-danger" role="alert" style={{ marginBottom: '1rem', color: '#e74c3c' }}>
                                {getErrorMessage(error)}
                              </div>
                            )}

                            <div className="elementor-form-fields-wrapper">
                              <div className="elementor-field-type-text elementor-field-group elementor-column elementor-col-100 elementor-field-required">
                                <input size={1} type="email" name="email" placeholder="Email address"
                                  className="elementor-field elementor-field-textual elementor-size-sm"
                                  value={email}
                                  onChange={(e) => { resetError(); setEmail(e.target.value); }}
                                  required autoComplete="email" />
                              </div>
                              <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100">
                                <button type="submit" className="elementor-size-sm elementor-button" disabled={isLoading}>
                                  <span className="elementor-button-text">
                                    {isLoading ? 'Sending…' : 'Send reset link'}
                                  </span>
                                </button>
                              </div>
                              <div className="elementor-field-group elementor-column elementor-col-100">
                                <Link className="elementor-lost-password" to="/login">Back to login</Link>
                              </div>
                            </div>
                          </form>
                        )}

                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-36129d0" data-id="36129d0" data-element_type="column" data-e-type="column" data-settings='{"background_background":"classic","mdp_selection_sticky_column_effect_enable":false}'>
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-e9c9473 elementor-widget__width-auto elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-image animated fadeIn" data-id="e9c9473" data-element_type="widget" data-e-type="widget" data-settings='{"_animation":"fadeIn"}' data-widget_type="image.default">
                      <div className="elementor-widget-container">
                        <img fetchPriority="high" decoding="async" src="/images/login/ferhat-deniz-fors-saE7xiecGkM-unsplash-2-1-1-pq0sitz7ykek5f8l1qidsucicj9y1kamkqg8b1ll4o.jpg" alt="Forgot password" loading="lazy" />
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
