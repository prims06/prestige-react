import InjectHTML from '../components/InjectHTML.jsx';
import html from '../fragments/page-blog.js';

export default function BlogPage() {
  return <InjectHTML html={html} />;
}
