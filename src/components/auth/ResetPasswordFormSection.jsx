import { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import PasswordInput from './PasswordInput';
import { getErrorMessage } from '../../api/errorHandler';

export default function ResetPasswordFormSection() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token') ?? '';

  const { resetPassword, isLoading, error, resetError } = useAuth();
  const [form, setForm] = useState({ password: '', confirm: '' });
  const [localError, setLocalError] = useState('');

  const set = (field) => (e) => {
    resetError();
    setLocalError('');
    setForm(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirm) { setLocalError('Passwords do not match.'); return; }

    const { error } = await resetPassword({ token, password: form.password });
    if (!error) navigate('/login', { state: { notice: 'Password updated — please log in.' } });
  };

  const displayError = localError || (error ? getErrorMessage(error) : '');

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
                        <h3 className="elementor-heading-title elementor-size-default">Reset your password</h3>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-41ef08d elementor-widget elementor-widget-login" data-id="41ef08d" data-element_type="widget" data-e-type="widget" data-widget_type="login.default">
                      <div className="elementor-widget-container">
                        <form className="elementor-login elementor-form" onSubmit={handleSubmit} aria-label="Reset password form">

                          {!token && (
                            <div className="elementor-message elementor-message-danger" role="alert" style={{ marginBottom: '1rem', color: '#e74c3c' }}>
                              Invalid or missing reset token. Please request a new link.
                            </div>
                          )}

                          {displayError && (
                            <div className="elementor-message elementor-message-danger" role="alert" style={{ marginBottom: '1rem', color: '#e74c3c' }}>
                              {displayError}
                            </div>
                          )}

                          <div className="elementor-form-fields-wrapper">
                            <div className="elementor-field-type-text elementor-field-group elementor-column elementor-col-100 elementor-field-required">
                              <PasswordInput
                                name="password" placeholder="New password"
                                value={form.password} onChange={set('password')}
                                autoComplete="new-password"
                              />
                            </div>
                            <div className="elementor-field-type-text elementor-field-group elementor-column elementor-col-100 elementor-field-required">
                              <PasswordInput
                                name="confirm_password" placeholder="Confirm new password"
                                value={form.confirm} onChange={set('confirm')}
                                autoComplete="new-password"
                              />
                            </div>
                            <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100">
                              <button type="submit" className="elementor-size-sm elementor-button" disabled={isLoading || !token}>
                                <span className="elementor-button-text">
                                  {isLoading ? 'Resetting…' : 'Reset password'}
                                </span>
                              </button>
                            </div>
                            <div className="elementor-field-group elementor-column elementor-col-100">
                              <Link className="elementor-lost-password" to="/forgot-password">Request new link</Link>
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
                        <img fetchPriority="high" decoding="async" src="/images/login/ferhat-deniz-fors-saE7xiecGkM-unsplash-2-1-1-pq0sitz7ykek5f8l1qidsucicj9y1kamkqg8b1ll4o.jpg" alt="Reset password" loading="lazy" />
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
