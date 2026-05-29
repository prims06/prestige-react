import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTopEscorts } from '../../hooks/useCatalog';
import { resolveMediaUrl } from '../../api/client';

// Donnees standardisees — chaque slide porte son propre bgImage
const SLIDES = [
  { id: 's1', title: 'Abstract figures', author: '@fershonorm',
    bgImage: '/images/home-2/img@2x.jpg' },
  { id: 's2', title: 'Black balaclava',  author: '@veresarrisal',
    bgImage: '/images/home-2/kevin-chin-HvdRVnyV0PQ-unsplash-1-1-600x600.jpg' },
  { id: 's3', title: 'Сolored dreams',   author: '@sheeliani',
    bgImage: '/images/home-2/simon-lee-zA66MV4EyXc-unsplash-600x600.jpg' },
  { id: 's4', title: 'Neon mirage',      author: '@neonart',
    bgImage: '/images/home-2/pawel-czerwinski-hNrd99q5peI-unsplash-1-600x600.jpg' },
];

function buildDynamicSlides(escorts) {
  if (!Array.isArray(escorts) || escorts.length === 0) return null;
  return escorts.map((esc, i) => ({
    id: esc.id || `api-${i}`,
    title: esc.escort?.displayName || 'Escorte',
    author: '@' + (esc.escort?.displayName || 'escorte').toLowerCase().replace(/\s+/g, ''),
    bgImage: resolveMediaUrl(esc.coverUrl) || resolveMediaUrl(esc.avatarUrl) || '/images/home-2/img@2x.jpg',
  }));
}

const DURATION = 550;
const AUTOPLAY = 4000;

function getVisibleCount(w) {
  if (w < 768)  return 1;  // mobile
  if (w < 1024) return 2;  // tablet
  return 3;                // desktop
}

function useVisibleCount() {
  const [count, setCount] = useState(
    () => (typeof window === 'undefined' ? 3 : getVisibleCount(window.innerWidth))
  );
  useEffect(() => {
    const onResize = () => setCount(getVisibleCount(window.innerWidth));
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return count;
}

function Slide({ slide, slotPos, offset, animated, visible }) {
  const tx = (slotPos + offset) * 100;
  const wrapStyle = {
    width: `${100 / visible}%`,
    transform: `translateX(${tx}%)`,
    transition: animated ? `transform ${DURATION}ms ease` : 'none',
    ...(slotPos === 0
      ? { position: 'relative' }
      : { position: 'absolute', top: 0, left: 0 }),
  };
  const innerBgStyle = {
    backgroundImage: `url(${slide.bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div
      className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-407ad90"
      data-id="407ad90" data-element_type="column" data-e-type="column"
      data-settings='{"mdp_selection_sticky_column_effect_enable":false}'
      style={wrapStyle}
    >
      <div className="elementor-widget-wrap elementor-element-populated">
        <section
          className="elementor-section elementor-inner-section elementor-element elementor-element-ac78b52 elementor-section-boxed elementor-section-height-default"
          data-id="ac78b52" data-element_type="section" data-e-type="section"
          data-settings='{"mdp_selection_sticky_effect_enable":false}'
        >
          <div className="elementor-container elementor-column-gap-no">
            <div
              className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-af5220e xchain-hero-slide-bg"
              data-id="af5220e" data-element_type="column" data-e-type="column"
              data-settings='{"background_background":"classic","mdp_selection_sticky_column_effect_enable":false}'
            >
              <div className="elementor-widget-wrap elementor-element-populated" style={innerBgStyle}>
                <div className="elementor-background-overlay"></div>
                <div className="elementor-element elementor-widget elementor-widget-heading"
                     data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h3 className="elementor-heading-title elementor-size-default">{slide.title}</h3>
                  </div>
                </div>
                <div className="elementor-element elementor-widget elementor-widget-heading"
                     data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-heading-title elementor-size-default">{slide.author}</div>
                  </div>
                </div>
                <div className="elementor-element elementor-widget elementor-widget-spacer"
                     data-element_type="widget" data-e-type="widget" data-widget_type="spacer.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-spacer"><div className="elementor-spacer-inner"></div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const { data: apiData } = useTopEscorts(8);
  const dynamicSlides = buildDynamicSlides(apiData);
  const slides = dynamicSlides || SLIDES;
  const N = slides.length;
  const visible = useVisibleCount();
  const [startIdx, setStartIdx] = useState(0);
  const [offset, setOffset]     = useState(0);
  const [animated, setAnimated] = useState(true);
  const movingRef = useRef(false);
  const pausedRef = useRef(false);

  const advance = useCallback((dir) => {
    if (movingRef.current) return;
    movingRef.current = true;
    setOffset(dir === 'next' ? -1 : 1);
    setTimeout(() => {
      setAnimated(false);
      setStartIdx((i) => (i + (dir === 'next' ? 1 : -1) + N) % N);
      setOffset(0);
      requestAnimationFrame(() => requestAnimationFrame(() => {
        setAnimated(true);
        movingRef.current = false;
      }));
    }, DURATION);
  }, [N]);

  const next = useCallback(() => advance('next'), [advance]);
  const prev = useCallback(() => advance('prev'), [advance]);

  useEffect(() => {
    const id = setInterval(() => {
      if (!pausedRef.current) next();
    }, AUTOPLAY);
    return () => clearInterval(id);
  }, [next]);

  // 1 slot hors-ecran a gauche + `visible` slots visibles + 1 slot hors-ecran a droite
  const slotCount = visible + 2;
  const slots = Array.from({ length: slotCount }, (_, j) => {
    const slotPos = j - 1; // -1 .. visible
    const slide = slides[(startIdx + slotPos + N * 2) % N];
    return { slide, slotPos, key: `slot-${j}` };
  });

  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-d2f22ae elementor-section-full_width elementor-section-height-default"
      data-id="d2f22ae" data-element_type="section" data-e-type="section"
      data-settings='{"mdp_selection_sticky_effect_enable":false}'
      style={{ position: 'relative' }}
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
    >
      <div
        className="elementor-container elementor-column-gap-no"
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        {slots.map(({ slide, slotPos, key }) => (
          <Slide
            key={key}
            slide={slide}
            slotPos={slotPos}
            offset={offset}
            animated={animated}
            visible={visible}
          />
        ))}
      </div>

      <span
        role="button" tabIndex={0}
        className="xc-profile-btn xchain-hero-nav xchain-hero-nav--prev"
        onClick={prev}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); prev(); } }}
        aria-label="Précédent"
      >
        <ChevronLeft size={24} strokeWidth={1} />
      </span>
      <span
        role="button" tabIndex={0}
        className="xc-profile-btn xchain-hero-nav xchain-hero-nav--next"
        onClick={next}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); next(); } }}
        aria-label="Suivant"
      >
        <ChevronRight size={24} strokeWidth={1} />
      </span>
    </section>
  );
}
