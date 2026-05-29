import { AUTHORS } from '../../data/home2';
import { useTopEscorts } from '../../hooks/useCatalog';
import { resolveMediaUrl } from '../../api/client';

const PLACEHOLDER_IMG = '/images/shop/anunay-rai-awMWm6ayLTc-unsplash-600x600.jpg';

const AUTHOR_SLOTS = [
  { colId: '5512044', colCls: 'elementor-invisible', img1Id: '0e2f81a', img2Id: '045ca06', nameId: 'ab9d318', ethId: '6bd89fe' },
  { colId: 'ec28bfb', colCls: 'elementor-invisible', img1Id: '56e77ca', img2Id: 'c760a0f', nameId: 'f324cac', ethId: 'eff781b' },
  { colId: '36b6d57', colCls: 'elementor-hidden-tablet elementor-invisible', img1Id: '8faaa1b', img2Id: '679febb', nameId: '82f8ced', ethId: '03b503c' },
];

function mapEscortToAuthor(esc, slot) {
  const coverUrl = resolveMediaUrl(esc.coverUrl);
  const avatarUrl = resolveMediaUrl(esc.avatarUrl);
  const location = [esc.quartier, esc.city].filter(Boolean).join(', ');
  const servicesCount = Array.isArray(esc.services) ? esc.services.length : 0;
  return {
    ...slot,
    img1: coverUrl || PLACEHOLDER_IMG,
    img1Title: esc.escort?.displayName || 'Escorte',
    img2: avatarUrl || PLACEHOLDER_IMG,
    img2Title: esc.escort?.displayName || 'Escorte',
    handle: '@' + (esc.escort?.displayName || 'inconnu').toLowerCase().replace(/\s+/g, ''),
    eth: servicesCount + ' service' + (servicesCount > 1 ? 's' : '') + (location ? ' · ' + location : ''),
  };
}

export default function AuthorsSection() {
  const { data: apiData } = useTopEscorts(3);
  const apiEscorts = Array.isArray(apiData) ? apiData : [];

  const useApi = apiEscorts.length > 0;
  const authors = useApi
    ? apiEscorts.map((esc, i) => mapEscortToAuthor(esc, AUTHOR_SLOTS[i % AUTHOR_SLOTS.length]))
    : AUTHORS;

  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-36159a1 elementor-section-boxed elementor-section-height-default" data-id="36159a1" data-element_type="section" data-e-type="section" data-settings='{"mdp_selection_sticky_effect_enable":false}'>
      <div className="elementor-container elementor-column-gap-wider">
        {authors.map(a => (
          <div key={a.colId} className={`elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-${a.colId} ${a.colCls}`}
            data-id={a.colId} data-element_type="column" data-e-type="column"
            data-settings='{"animation":"fadeInUp","mdp_selection_sticky_column_effect_enable":false}'>
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className={`elementor-element elementor-element-${a.img1Id} elementor-widget elementor-widget-image`} data-id={a.img1Id} data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                <div className="elementor-widget-container">
                  <img decoding="async" src={a.img1} title={a.img1Title} alt={a.img1Title} loading="lazy" style={{ aspectRatio: "16/9", objectFit: "cover", width: "100%" }} />
                </div>
              </div>
              <div className={`elementor-element elementor-element-${a.img2Id} elementor-widget__width-auto elementor-widget elementor-widget-image`} data-id={a.img2Id} data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                <div className="elementor-widget-container">
                  <img decoding="async" src={a.img2} title={a.img2Title} alt={a.img2Title} loading="lazy" style={{ aspectRatio: "1/1", objectFit: "cover", borderRadius: "50%" }} />
                </div>
              </div>
              <div className={`elementor-element elementor-element-${a.nameId} elementor-widget elementor-widget-heading`} data-id={a.nameId} data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h6 className="elementor-heading-title elementor-size-default">{a.handle}</h6>
                </div>
              </div>
              <div className={`elementor-element elementor-element-${a.ethId} elementor-widget elementor-widget-heading`} data-id={a.ethId} data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h6 className="elementor-heading-title elementor-size-default">{a.eth}</h6>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}