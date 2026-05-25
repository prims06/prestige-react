import InjectHTML from '../components/InjectHTML.jsx';
import html from '../fragments/page-login.js';

export default function LoginPage() {
  return <InjectHTML html={html} />;
}
