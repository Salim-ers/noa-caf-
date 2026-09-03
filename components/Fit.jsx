'use client';
import { useRef, useLayoutEffect, useEffect } from 'react';

const useIso = typeof window === 'undefined' ? useEffect : useLayoutEffect;

/* Headline type scaled to fill its column edge to edge, the way the
   lettering fills the awning on rue Melingue. This is the brand's
   typographic rule, not a decoration. */
export default function Fit({ children, weight = 900, style, className, tag: Tag = 'div', max = 400 }) {
  const box = useRef(null);
  const span = useRef(null);

  useIso(() => {
    const fit = () => {
      const b = box.current, s = span.current;
      if (!b || !s) return;
      const target = b.clientWidth;
      if (!target) return;
      s.style.fontSize = '100px';
      const w = s.getBoundingClientRect().width;
      if (!w) return;
      s.style.fontSize = Math.min(max, (target / w) * 100) + 'px';
    };
    fit();
    const ro = new ResizeObserver(fit);
    if (box.current) ro.observe(box.current);
    if (document.fonts) document.fonts.ready.then(fit).catch(() => {});
    return () => ro.disconnect();
  }, [children, max]);

  return (
    <Tag ref={box} className={className} style={{ width: '100%', ...style }}>
      <span ref={span} style={{
        display: 'inline-block', whiteSpace: 'nowrap', fontSize: 40,
        fontWeight: weight, lineHeight: 0.82, letterSpacing: '-0.035em',
        textTransform: 'uppercase',
      }}>{children}</span>
    </Tag>
  );
}
