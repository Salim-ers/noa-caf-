'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/* Line drawings in the same hand as the cups on the window: one
   weight, round caps, nothing filled. Coffee beans, steam, a saucer
   ring, a spoon. They sit behind the wordmark at low opacity so the
   green field has something happening in it without becoming busy,
   and they drift at different rates as the page moves. */

function Bean({ r = 0 }) {
  return (
    <g transform={`rotate(${r})`}>
      <ellipse rx="15" ry="22" />
      <path d="M0 -19 C 7 -9, 7 9, 0 19" />
    </g>
  );
}

const STEAM = 'M0 26 C -9 14, 9 6, 0 -6 C -8 -16, 4 -22, 0 -30';

export default function Doodles() {
  const root = useRef(null);

  useEffect(() => {
    const node = root.current;
    if (!node) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from('.dd > *', {
        opacity: 0,
        scale: 0.7,
        duration: 1.4,
        ease: 'expo.out',
        stagger: { each: 0.09, from: 'random' },
        delay: 0.5,
      });
      gsap.utils.toArray('.dd > *').forEach((el, i) => {
        gsap.to(el, {
          y: (i % 2 ? 1 : -1) * (26 + (i % 4) * 14),
          rotation: (i % 3 ? 1 : -1) * 14,
          ease: 'none',
          scrollTrigger: { trigger: node, start: 'top top', end: 'bottom top', scrub: 0.8 },
        });
      });
    }, node);

    return () => ctx.revert();
  }, []);

  return (
    <svg className="dd" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {/* beans */}
      <g transform="translate(168 214)"><Bean r={-22} /></g>
      <g transform="translate(1268 236)"><Bean r={34} /></g>
      <g transform="translate(316 706)"><Bean r={12} /></g>
      <g transform="translate(1146 690)"><Bean r={-40} /></g>
      <g transform="translate(700 128)"><Bean r={8} /></g>

      {/* steam */}
      <g transform="translate(408 168) scale(1.5)"><path d={STEAM} /></g>
      <g transform="translate(452 176) scale(1.2)"><path d={STEAM} /></g>
      <g transform="translate(1028 742) scale(1.4)"><path d={STEAM} /></g>

      {/* a cup, seen from the side */}
      <g transform="translate(214 470)">
        <path d="M-34 -26 L34 -26 L28 30 Q26 40 14 40 L-14 40 Q-26 40 -28 30 Z" />
        <path d="M34 -14 Q54 -12 54 4 Q54 20 34 22" />
      </g>

      {/* a saucer, seen from above */}
      <g transform="translate(1214 452)">
        <circle r="46" />
        <circle r="26" />
      </g>

      {/* a spoon */}
      <g transform="translate(560 754) rotate(-24)">
        <ellipse rx="13" ry="19" />
        <path d="M0 19 L0 66" />
      </g>

      {/* a couple of loose arcs, the way steam is drawn on the window */}
      <path d="M880 300 Q930 268 980 300" />
      <path d="M382 560 Q432 528 482 560" />
    </svg>
  );
}
