import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

// Renders a chunk of static HTML.
// - Intercepts internal anchor clicks for SPA navigation.
// - Re-clones <script> tags so the browser actually executes them
//   (innerHTML alone never runs inline scripts).
export default function InjectHTML({ html, as: Tag = 'div', className }) {
  const ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Re-run any <script> inside the injected HTML.
    node.querySelectorAll('script').forEach((old) => {
      const next = document.createElement('script');
      for (const { name, value } of old.attributes) next.setAttribute(name, value);
      next.text = old.textContent || '';
      old.parentNode.replaceChild(next, old);
    });

    const onClick = (e) => {
      const a = e.target.closest('a');
      if (!a) return;
      const href = a.getAttribute('href');
      if (!href) return;
      if (a.target && a.target !== '_self') return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
      if (/^(https?:|mailto:|tel:|#)/i.test(href)) return;
      if (href.startsWith('/') && !href.startsWith('//')) {
        e.preventDefault();
        navigate(href);
      }
    };

    node.addEventListener('click', onClick);
    return () => node.removeEventListener('click', onClick);
  }, [navigate, html]);

  return (
    <Tag
      ref={ref}
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
