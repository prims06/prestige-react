import InjectHTML from '../components/InjectHTML.jsx';
import html from '../fragments/page-authors.js';

export default function AuthorsPage() {
  return <InjectHTML html={html} />;
}
