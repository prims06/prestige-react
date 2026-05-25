import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

// Each Elementor-exported page used a different `elementor-page-<id>` class
// on <body>. Per-page CSS selectors depend on these — toggle on route change.
const PAGE_CLASSES = {
  '/':         ['home', 'wp-singular', 'page-template', 'page-template-elementor_header_footer', 'page', 'page-id-5548', 'elementor-page-5548'],
  '/home-2':   ['wp-singular', 'single', 'single-envato_tk_templates', 'postid-18', 'elementor-page-18'],
  '/about':    ['wp-singular', 'single', 'single-envato_tk_templates', 'postid-417', 'elementor-page-417'],
  '/blog':     ['archive', 'category', 'category-nft', 'category-36', 'elementor-page-1024'],
  '/blog-2':   ['archive', 'category', 'category-token', 'category-38', 'elementor-page-1186'],
  '/shop':     ['archive', 'tax-product_cat', 'term-art', 'term-19', 'woocommerce', 'woocommerce-page', 'elementor-page-1592'],
  '/shop-2':   ['archive', 'tax-product_cat', 'term-utility', 'term-57', 'woocommerce', 'woocommerce-page', 'elementor-page-5542'],
  '/product':  ['wp-singular', 'product-template-default', 'single', 'single-product', 'postid-214', 'woocommerce', 'woocommerce-page', 'elementor-page-1614'],
  '/contacts': ['wp-singular', 'single', 'single-envato_tk_templates', 'postid-422', 'elementor-page-422'],
  '/authors':  ['wp-singular', 'single', 'single-envato_tk_templates', 'postid-411', 'elementor-page-411'],
  '/login':    ['wp-singular', 'single', 'single-envato_tk_templates', 'postid-415', 'elementor-page-415']
};
const NOT_FOUND_CLASSES = ['error404', 'elementor-page-2246'];

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    const classes = PAGE_CLASSES[pathname] || NOT_FOUND_CLASSES;
    document.body.classList.add(...classes);

    // Fire the events that the original site's jQuery/Elementor plugins
    // listen for, so widgets in the newly-mounted page DOM discover their
    // targets. Wrapped in rAF so React's commit lands first.
    requestAnimationFrame(() => {
      document.querySelectorAll('.e-con.e-parent').forEach((el) => {
        el.classList.add('e-lazyloaded');
      });
      try {
        document.dispatchEvent(new Event('DOMContentLoaded'));
        window.dispatchEvent(new Event('load'));
      } catch {}
      if (window.jQuery) {
        try {
          window.jQuery(document).trigger('ready');
          window.jQuery(document).trigger('elementor/frontend/init');
          if (window.elementorFrontend && window.elementorFrontend.init) {
            window.elementorFrontend.init();
          }
        } catch {}
      }
    });

    window.scrollTo(0, 0);

    return () => {
      document.body.classList.remove(...classes);
    };
  }, [pathname]);

  return (
    <>
      <a className="skip-link screen-reader-text" href="#content">Skip to content</a>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
