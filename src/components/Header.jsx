import InjectHTML from './InjectHTML.jsx';
import headerHTML from '../fragments/header.js';

export default function Header() {
  return <InjectHTML html={headerHTML} />;
}
