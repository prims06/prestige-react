import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

// Each Elementor-exported page used a different `elementor-page-<id>` class
// on <body>, plus a few WordPress context classes. Per-page selectors in the
// CSS depend on these, so we toggle them on route change.
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

    // The original template loads an IntersectionObserver that sets the
    // .e-lazyloaded class on background-image-bearing sections; without it,
    // a CSS rule forces background-image:none on sections >3. Force-mark
    // everything as loaded so backgrounds render immediately.
    requestAnimationFrame(() => {
      document.querySelectorAll('.e-con.e-parent').forEach((el) => {
        el.classList.add('e-lazyloaded');
      });
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
