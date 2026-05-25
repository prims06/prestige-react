import InjectHTML from '../components/InjectHTML.jsx';
import html from '../fragments/page-notfound.js';

export default function NotFoundPage() {
  return <InjectHTML html={html} />;
}
