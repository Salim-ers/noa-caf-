'use client';
import { useRef, useEffect, useState } from 'react';

/* Near-invisible entrance. Nothing moves once it has landed. */
export default function Reveal({ children, delay = 0, y = 14, as: Tag = 'div', style, className }) {
  const el = useRef(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const node = el.current;
    if (!node) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setOn(true); return; }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setOn(true); io.disconnect(); }
    }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={el} className={className} style={{
      opacity: on ? 1 : 0,
      transform: on ? 'none' : `translateY(${y}px)`,
      transition: `opacity .9s cubic-bezier(.22,.61,.36,1) ${delay}s, transform .9s cubic-bezier(.22,.61,.36,1) ${delay}s`,
      ...style,
    }}>{children}</Tag>
  );
}
