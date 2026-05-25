import InjectHTML from '../components/InjectHTML.jsx';
import html from '../fragments/page-product.js';

export default function ProductPage() {
  return <InjectHTML html={html} />;
}
