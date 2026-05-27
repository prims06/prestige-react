import { Link } from 'react-router-dom';

export default function LoginFormSection() {
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
                        <h3 className="elementor-heading-title elementor-size-default">Login to your account</h3>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-41ef08d elementor-widget elementor-widget-login" data-id="41ef08d" data-element_type="widget" data-e-type="widget" data-widget_type="login.default">
                      <div className="elementor-widget-container">
                        <form className="elementor-login elementor-form" method="post" action="#" aria-label="Login form">
                          <input type="hidden" name="redirect_to" value="/template-kit/user-login/" />
                          <div className="elementor-form-fields-wrapper">
                            <div className="elementor-field-type-text elementor-field-group elementor-column elementor-col-100 elementor-field-required">
                              <label htmlFor="user-41ef08d" className="elementor-field-label elementor-screen-only"></label>
                              <input size={1} type="text" name="log" id="user-41ef08d" placeholder="Username or email address" className="elementor-field elementor-field-textual elementor-size-sm" />
                            </div>
                            <div className="elementor-field-type-text elementor-field-group elementor-column elementor-col-100 elementor-field-required">
                              <label htmlFor="password-41ef08d" className="elementor-field-label elementor-screen-only"></label>
                              <input size={1} type="password" name="pwd" id="password-41ef08d" placeholder="Password" className="elementor-field elementor-field-textual elementor-size-sm" />
                            </div>
                            <div className="elementor-field-type-checkbox elementor-field-group elementor-column elementor-col-100 elementor-remember-me">
                              <label htmlFor="elementor-login-remember-me">
                                <input type="checkbox" id="elementor-login-remember-me" name="rememberme" value="forever" />
                                {' '}Remember Me
                              </label>
                            </div>
                            <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100">
                              <button type="submit" className="elementor-size-sm elementor-button" name="wp-submit">
                                <span className="elementor-button-text">Login</span>
                              </button>
                            </div>
                            <div className="elementor-field-group elementor-column elementor-col-100">
                              <Link className="elementor-lost-password" to="/login">Lost your password?</Link>
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
                        <img fetchPriority="high" decoding="async" src="/images/login/ferhat-deniz-fors-saE7xiecGkM-unsplash-2-1-1-pq0sitz7ykek5f8l1qidsucicj9y1kamkqg8b1ll4o.jpg" title="ferhat-deniz-fors-saE7xiecGkM-unsplash (2) (1) 1" alt="ferhat-deniz-fors-saE7xiecGkM-unsplash (2) (1) 1" loading="lazy" />
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
