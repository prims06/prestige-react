import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import HomePage from './pages/HomePage.jsx';
import Home2Page from './pages/Home2Page.jsx';
import AboutPage from './pages/AboutPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import Blog2Page from './pages/Blog2Page.jsx';
import ShopPage from './pages/ShopPage.jsx';
import Shop2Page from './pages/Shop2Page.jsx';
import ProductPage from './pages/ProductPage.jsx';
import ContactsPage from './pages/ContactsPage.jsx';
import AuthorsPage from './pages/AuthorsPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/home-2" element={<Home2Page />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog-2" element={<Blog2Page />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop-2" element={<Shop2Page />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/authors" element={<AuthorsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
