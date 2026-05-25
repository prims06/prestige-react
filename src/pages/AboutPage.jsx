import InjectHTML from '../components/InjectHTML.jsx';
import html from '../fragments/page-about.js';

export default function AboutPage() {
  return <InjectHTML html={html} />;
}
