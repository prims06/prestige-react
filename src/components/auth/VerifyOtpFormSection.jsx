import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useAuthStore } from '../../store/authStore';
import { getErrorMessage } from '../../api/errorHandler';

export default function VerifyOtpFormSection() {
  const navigate  = useNavigate();
  const location  = useLocation();
  const email     = location.state?.email ?? '';

  const { verifyOtp, sendOtp, isLoading, error, resetError } = useAuth();
  const isAuthenticated = useAuthStore(s => s.isAuthenticated);

  const [code, setCode] = useState('');
  const [resent, setResent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await verifyOtp({ code, email });
    if (!error) {
      // If verifyOtp set session (tokens returned), go home; otherwise go login
      navigate(isAuthenticated ? '/' : '/login', {
        state: { notice: 'Email verified! Please log in.' },
      });
    }
  };

  const handleResend = async (e) => {
    e.preventDefault();
    resetError();
    const { error } = await sendOtp({ email });
    if (!error) setResent(true);
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
                        <h3 className="elementor-heading-title elementor-size-default">Enter verification code</h3>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-41ef08d elementor-widget elementor-widget-login" data-id="41ef08d" data-element_type="widget" data-e-type="widget" data-widget_type="login.default">
                      <div className="elementor-widget-container">
                        <form className="elementor-login elementor-form" onSubmit={handleSubmit} aria-label="OTP verification form">

                          {email && (
                            <p style={{ marginBottom: '1rem', opacity: 0.7, fontSize: '0.9em' }}>
                              Code sent to <strong>{email}</strong>
                            </p>
                          )}

                          {resent && (
                            <p style={{ marginBottom: '1rem', color: '#2ecc71', fontSize: '0.9em' }}>
                              ✓ A new code has been sent.
                            </p>
                          )}

                          {error && (
                            <div className="elementor-message elementor-message-danger" role="alert" style={{ marginBottom: '1rem', color: '#e74c3c' }}>
                              {getErrorMessage(error)}
                            </div>
                          )}

                          <div className="elementor-form-fields-wrapper">
                            <div className="elementor-field-type-text elementor-field-group elementor-column elementor-col-100 elementor-field-required">
                              <input
                                size={1} type="text" name="otp" placeholder="6-digit code"
                                maxLength={6} inputMode="numeric" autoComplete="one-time-code"
                                className="elementor-field elementor-field-textual elementor-size-sm"
                                style={{ letterSpacing: '0.5em', textAlign: 'center' }}
                                value={code}
                                onChange={(e) => { resetError(); setResent(false); setCode(e.target.value.replace(/\D/g, '')); }}
                                required
                              />
                            </div>
                            <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100">
                              <button type="submit" className="elementor-size-sm elementor-button" disabled={isLoading || code.length < 6}>
                                <span className="elementor-button-text">
                                  {isLoading ? 'Verifying…' : 'Verify'}
                                </span>
                              </button>
                            </div>
                            <div className="elementor-field-group elementor-column elementor-col-100">
                              <a
                                className="elementor-lost-password"
                                href="#"
                                onClick={handleResend}
                                style={{ pointerEvents: isLoading ? 'none' : 'auto' }}
                              >
                                Resend code
                              </a>
                            </div>
                            <div className="elementor-field-group elementor-column elementor-col-100">
                              <Link className="elementor-lost-password" to="/login">Back to login</Link>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-36129d0" data-id="36129d0" data-element_type="column" data-e-type="column" data-settings='{"background_background":"classic","mdp_selection_sticky_column_effect_enable":false}'>
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-e9c9473 elementor-widget__width-auto elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-image animated fadeIn" data-id="e9c9473" data-element_type="widget" data-e-type="widget" data-settings='{"_animation":"fadeIn"}' data-widget_type="image.default">
                      <div className="elementor-widget-container">
                        <img fetchPriority="high" decoding="async" src="/images/login/ferhat-deniz-fors-saE7xiecGkM-unsplash-2-1-1-pq0sitz7ykek5f8l1qidsucicj9y1kamkqg8b1ll4o.jpg" alt="Verify OTP" loading="lazy" />
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
