'use client';
import { useRef, useLayoutEffect, useEffect } from 'react';
import { withO } from './Glyph';

const useIso = typeof window === 'undefined' ? useEffect : useLayoutEffect;

/* Display type set edge to edge in its column, the way NOA's own
   lettering fills the awning. The first size comes from CSS — the
   estimate below runs in container-query units, so the line is
   already the right size on the server and nothing reflows — then
   one measured pass makes it exact. */

const LETTER = 0.585; /* average advance of Outfit 900 uppercase, in em */
const SPACE = 0.225;

function units(text) {
  let u = 0;
  for (const c of text) u += c === ' ' ? SPACE : LETTER;
  return Math.max(u, LETTER);
}

export default function Fit({
  children,
  weight = 900,
  max = 520,
  className = '',
  style,
  as: Tag = 'div',
}) {
  const box = useRef(null);
  const span = useRef(null);
  const text = String(children);

  useIso(() => {
    const fit = () => {
      const b = box.current;
      const s = span.current;
      if (!b || !s) return;
      const target = b.clientWidth;
      if (!target) return;
      s.style.fontSize = '100px';
      const w = s.getBoundingClientRect().width;
      if (!w) return;
      s.style.fontSize = `${Math.min(max, (target / w) * 100)}px`;
    };
    fit();
    const ro = new ResizeObserver(fit);
    if (box.current) ro.observe(box.current);
    if (document.fonts) document.fonts.ready.then(fit).catch(() => {});
    return () => ro.disconnect();
  }, [text, max]);

  return (
    <Tag
      ref={box}
      className={`fit ${className}`.trim()}
      style={{ '--u': units(text).toFixed(3), '--max': `${max}px`, ...style }}
    >
      <span ref={span} style={{ fontWeight: weight }}>{withO(text)}</span>
    </Tag>
  );
}
