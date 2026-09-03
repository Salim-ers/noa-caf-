'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LOGO_D, LOGO_VB } from '@/lib/logo';

/* The wordmark, repeated, sliding as the page scrolls. It is tied to
   the scroll position rather than a loop, so it never moves on its
   own — nothing on this site moves unless the reader does.
   One <symbol>, reused, so the path ships once. */

const COPIES = 8;

export default function Marquee() {
  const root = useRef(null);

  useEffect(() => {
    const node = root.current;
    if (!node) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.mq-row',
        { xPercent: -18 },
        {
          xPercent: -46,
          ease: 'none',
          scrollTrigger: { trigger: node, start: 'top bottom', end: 'bottom top', scrub: 0.5 },
        }
      );
    }, node);

    return () => ctx.revert();
  }, []);

  return (
    <div className="mq" ref={root} aria-hidden="true">
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <symbol id="noa-word" viewBox={LOGO_VB}>
          <path fill="currentColor" fillRule="evenodd" d={LOGO_D} />
        </symbol>
      </svg>

      <div className="mq-row">
        {Array.from({ length: COPIES }, (_, i) => (
          <svg key={i} viewBox={LOGO_VB} className="mq-word">
            <use href="#noa-word" />
          </svg>
        ))}
      </div>
    </div>
  );
}
