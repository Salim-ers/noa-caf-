'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LOGO_D, LOGO_VB } from '@/lib/logo';

/* The wordmark running edge to edge, a coffee bean between each one.
   The row is duplicated and wrapped with a modifier, so it never
   runs out however far you scroll — and it only ever moves because
   you scrolled. Nothing here loops on its own. */

const RUN = 5;

function Bean() {
  return (
    <svg className="mq-bean" viewBox="-26 -34 52 68" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round">
        <ellipse rx="15" ry="22" />
        <path d="M0 -19 C 7 -9, 7 9, 0 19" />
      </g>
    </svg>
  );
}

export default function Marquee() {
  const root = useRef(null);
  const row = useRef(null);

  useEffect(() => {
    const node = root.current;
    const strip = row.current;
    if (!node || !strip) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      /* the strip holds the run twice; one run is the wrap distance */
      const span = () => strip.scrollWidth / 2;
      const wrap = gsap.utils.wrap(-span(), 0);

      gsap.to(strip, {
        x: -span() * 2,
        ease: 'none',
        modifiers: { x: (x) => `${wrap(parseFloat(x))}px` },
        scrollTrigger: {
          trigger: node,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
      });
    }, node);

    return () => ctx.revert();
  }, []);

  const run = Array.from({ length: RUN }, (_, i) => (
    <span className="mq-unit" key={i}>
      <svg viewBox={LOGO_VB} className="mq-word" aria-hidden="true">
        <path fill="currentColor" fillRule="evenodd" d={LOGO_D} />
      </svg>
      <Bean />
    </span>
  ));

  return (
    <div className="mq" ref={root} aria-hidden="true">
      <div className="mq-row" ref={row}>
        {run}
        {run}
      </div>
    </div>
  );
}
