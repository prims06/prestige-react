// Renders a chunk of raw HTML and intercepts internal anchor clicks so they
// behave like router navigations instead of full reloads. External, hash, and
// mailto links are left alone.

import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function InjectHTML({ html, as: Tag = 'div', className }) {
  const ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

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
