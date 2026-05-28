import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import Spinner from './components/ui/Spinner.jsx';

const HomePage      = lazy(() => import('./pages/HomePage.jsx'));
const Home2Page     = lazy(() => import('./pages/Home2Page.jsx'));
const AboutPage     = lazy(() => import('./pages/AboutPage.jsx'));
const BlogPage      = lazy(() => import('./pages/BlogPage.jsx'));
const Blog2Page     = lazy(() => import('./pages/Blog2Page.jsx'));
const ShopPage      = lazy(() => import('./pages/ShopPage.jsx'));
const Shop2Page     = lazy(() => import('./pages/Shop2Page.jsx'));
const ProductPage   = lazy(() => import('./pages/ProductPage.jsx'));
const ContactsPage  = lazy(() => import('./pages/ContactsPage.jsx'));
const AuthorsPage   = lazy(() => import('./pages/AuthorsPage.jsx'));
const LoginPage            = lazy(() => import('./pages/LoginPage.jsx'));
const RegisterPage         = lazy(() => import('./pages/RegisterPage.jsx'));
const ForgotPasswordPage   = lazy(() => import('./pages/ForgotPasswordPage.jsx'));
const ResetPasswordPage    = lazy(() => import('./pages/ResetPasswordPage.jsx'));
const VerifyOtpPage        = lazy(() => import('./pages/VerifyOtpPage.jsx'));
const NotFoundPage         = lazy(() => import('./pages/NotFoundPage.jsx'));
const PreviewComponentsPage = lazy(() => import('./pages/PreviewComponentsPage.jsx'));
const ProfilePage           = lazy(() => import('./pages/ProfilePage.jsx'));

function PageLoader() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <Spinner size="xl" />
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/"         element={<HomePage />} />
          <Route path="/home-2"   element={<Home2Page />} />
          <Route path="/about"    element={<AboutPage />} />
          <Route path="/blog"     element={<BlogPage />} />
          <Route path="/blog-2"   element={<Blog2Page />} />
          <Route path="/shop"     element={<ShopPage />} />
          <Route path="/shop-2"   element={<Shop2Page />} />
          <Route path="/product"  element={<ProductPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/authors"  element={<AuthorsPage />} />
          <Route path="/login"            element={<LoginPage />} />
          <Route path="/register"         element={<RegisterPage />} />
          <Route path="/forgot-password"  element={<ForgotPasswordPage />} />
          <Route path="/reset-password"   element={<ResetPasswordPage />} />
          <Route path="/verify-otp"       element={<VerifyOtpPage />} />
          <Route path="/preview-components" element={<PreviewComponentsPage />} />
          <Route path="/profile"            element={<ProfilePage />} />
          <Route path="*"                 element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
