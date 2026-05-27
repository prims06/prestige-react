import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useAuthStore } from '../../store/authStore';
import PasswordInput from './PasswordInput';
import { getErrorMessage } from '../../api/errorHandler';

export default function RegisterFormSection() {
  const navigate = useNavigate();
  const { register, isLoading, error, resetError } = useAuth();
  const isAuthenticated = useAuthStore(s => s.isAuthenticated);

  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', password: '', confirm: '', terms: false });
  const [localError, setLocalError] = useState('');

  const set = (field) => (e) => {
    resetError();
    setLocalError('');
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirm) { setLocalError('Passwords do not match.'); return; }
    if (!form.terms) { setLocalError('You must accept the terms.'); return; }

    const { data, error } = await register({
      firstName: form.firstName,
      lastName:  form.lastName,
      email:     form.email,
      password:  form.password,
    });

    if (!error) {
      // If backend auto-logged in (tokens returned), go home; otherwise go verify OTP
      if (isAuthenticated) navigate('/');
      else navigate('/verify-otp', { state: { email: form.email } });
    }
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
                        <h3 className="elementor-heading-title elementor-size-default">Create an account</h3>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-41ef08d elementor-widget elementor-widget-login" data-id="41ef08d" data-element_type="widget" data-e-type="widget" data-widget_type="login.default">
                      <div className="elementor-widget-container">
                        <form className="elementor-login elementor-form" onSubmit={handleSubmit} aria-label="Register form">

                          {displayError && (
                            <div className="elementor-message elementor-message-danger" role="alert" style={{ marginBottom: '1rem', color: '#e74c3c' }}>
                              {displayError}
                            </div>
                          )}

                          <div className="elementor-form-fields-wrapper">
                            <div className="elementor-field-type-text elementor-field-group elementor-column elementor-col-50 elementor-field-required">
                              <input size={1} type="text" name="first_name" placeholder="First name"
                                className="elementor-field elementor-field-textual elementor-size-sm"
                                value={form.firstName} onChange={set('firstName')} required />
                            </div>
                            <div className="elementor-field-type-text elementor-field-group elementor-column elementor-col-50 elementor-field-required">
                              <input size={1} type="text" name="last_name" placeholder="Last name"
                                className="elementor-field elementor-field-textual elementor-size-sm"
                                value={form.lastName} onChange={set('lastName')} required />
                            </div>
                            <div className="elementor-field-type-text elementor-field-group elementor-column elementor-col-100 elementor-field-required">
                              <input size={1} type="email" name="email" placeholder="Email address"
                                className="elementor-field elementor-field-textual elementor-size-sm"
                                value={form.email} onChange={set('email')} required autoComplete="email" />
                            </div>
                            <div className="elementor-field-type-text elementor-field-group elementor-column elementor-col-100 elementor-field-required">
                              <PasswordInput
                                name="password" placeholder="Password"
                                value={form.password} onChange={set('password')}
                                autoComplete="new-password"
                              />
                            </div>
                            <div className="elementor-field-type-text elementor-field-group elementor-column elementor-col-100 elementor-field-required">
                              <PasswordInput
                                name="confirm_password" placeholder="Confirm password"
                                value={form.confirm} onChange={set('confirm')}
                                autoComplete="new-password"
                              />
                            </div>
                            <div className="elementor-field-type-checkbox elementor-field-group elementor-column elementor-col-100 elementor-remember-me">
                              <label htmlFor="reg-terms">
                                <input type="checkbox" id="reg-terms" name="terms"
                                  checked={form.terms} onChange={set('terms')} />
                                {' '}I agree to the <a href="#">Terms &amp; Conditions</a>
                              </label>
                            </div>
                            <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100">
                              <button type="submit" className="elementor-size-sm elementor-button" disabled={isLoading}>
                                <span className="elementor-button-text">
                                  {isLoading ? 'Creating account…' : 'Create account'}
                                </span>
                              </button>
                            </div>
                            <div className="elementor-field-group elementor-column elementor-col-100">
                              <Link className="elementor-lost-password" to="/login">Already have an account? Login</Link>
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
                        <img fetchPriority="high" decoding="async" src="/images/login/ferhat-deniz-fors-saE7xiecGkM-unsplash-2-1-1-pq0sitz7ykek5f8l1qidsucicj9y1kamkqg8b1ll4o.jpg" alt="Register" loading="lazy" />
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
