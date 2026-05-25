import InjectHTML from '../components/InjectHTML.jsx';
import html from '../fragments/page-home.js';

export default function HomePage() {
  return <InjectHTML html={html} />;
}
