import InjectHTML from './InjectHTML.jsx';
import footerHTML from '../fragments/footer.js';

export default function Footer() {
  return <InjectHTML html={footerHTML} />;
}
