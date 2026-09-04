'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/* The green field, drawn on. Everything is coffee, and all of it is
   in the same hand as the cups on NOA's window: one weight, round
   caps, nothing filled — plus the real two-cup mark itself.

   Each piece is its own small SVG, placed in percentages and sized
   in vmin, rather than one big SVG cropped with preserveAspectRatio
   slice. Slice was cutting the top and bottom pieces clean off on a
   wide screen: at 2480×1110 it throws away 127 units of a 900-unit
   box at each end. Percentages cannot crop. */

/* ── motifs: each viewBox is sized to its own drawing ─────────── */

const M = {
  bean: {
    vb: '-25 -32 50 64',
    d: (
      <>
        <ellipse rx="17" ry="24" />
        <path d="M0 -21 C 9 -12, 9 -3, 3 2 C -3 7, -3 15, 0 21" />
      </>
    ),
  },
  cup: {
    vb: '-58 -30 116 86',
    d: (
      <>
        <path d="M-30 -20 L30 -20 L25 20 Q23 31 11 31 L-11 31 Q-23 31 -25 20 Z" />
        <path d="M30 -9 Q51 -7 51 6 Q51 19 31 21" />
        <ellipse cy="35" rx="45" ry="9" />
      </>
    ),
  },
  takeaway: {
    vb: '-31 -44 62 90',
    d: (
      <>
        <path d="M-21 -25 L21 -25 L15 32 Q14 39 7 39 L-7 39 Q-14 39 -15 32 Z" />
        <path d="M-25 -25 L25 -25 L25 -34 Q25 -37 22 -37 L-22 -37 Q-25 -37 -25 -34 Z" />
        <path d="M-13 -6 L13 -6" />
      </>
    ),
  },
  jug: {
    vb: '-39 -40 78 78',
    d: (
      <>
        <path d="M-19 -22 L19 -22 L15 24 Q14 30 7 30 L-7 30 Q-14 30 -15 24 Z" />
        <path d="M-19 -22 L-33 -33" />
        <path d="M19 -12 Q34 -10 34 2 Q34 13 20 15" />
      </>
    ),
  },
  dripper: {
    vb: '-39 -31 78 76',
    d: (
      <>
        <path d="M-33 -24 L33 -24 L8 22 L-8 22 Z" />
        <path d="M-33 -24 Q0 -16 33 -24" />
        <path d="M-13 22 L-13 32 Q0 36 13 32 L13 22" />
      </>
    ),
  },
  rosetta: {
    vb: '-46 -46 92 92',
    d: (
      <>
        <circle r="40" />
        <path d="M0 -26 C 15 -11, 15 11, 0 28 C -15 11, -15 -11, 0 -26 Z" />
        <path d="M0 -26 L0 28" />
        <path d="M-9 -9 Q0 -4 9 -9" />
        <path d="M-9 3 Q0 8 9 3" />
      </>
    ),
  },
  steam: {
    vb: '-24 -39 48 74',
    d: (
      <>
        <path d="M-9 28 C -19 15, -1 8, -9 -5 C -16 -16, -3 -22, -9 -32" />
        <path d="M9 24 C 0 12, 17 5, 9 -7 C 2 -17, 14 -23, 9 -32" />
      </>
    ),
  },
  spoon: {
    vb: '-19 -27 38 100',
    d: (
      <>
        <ellipse rx="13" ry="19" />
        <path d="M0 19 L0 68" />
      </>
    ),
  },
};

/* ── placement ──────────────────────────────────────────────────
   Percentages of the hero box. The wordmark sits around x 28–72 %,
   y 36–64 %, so nothing is placed there, and every piece is kept
   clear of the edges so none can be cut.
   `sm` marks the ones a phone keeps — the rest stand down so a
   narrow screen does not get a crowded field. */

const PIECES = [
  { m: 'bean', x: 11, y: 18, s: 5.4, r: -24, sm: true },
  { m: 'bean', x: 89, y: 25, s: 4.8, r: 38 },
  { m: 'bean', x: 27, y: 85, s: 5.2, r: 14, sm: true },
  { m: 'bean', x: 74, y: 14, s: 4.4, r: -9, sm: true },
  { m: 'bean', x: 52, y: 87, s: 4.8, r: 46, sm: true },
  { m: 'cup', x: 16, y: 50, s: 12, r: 0 },
  { m: 'takeaway', x: 84, y: 49, s: 10.5, r: 7 },
  { m: 'jug', x: 40, y: 16, s: 9, r: -8 },
  { m: 'dripper', x: 88, y: 76, s: 9.5, r: -5 },
  { m: 'rosetta', x: 91, y: 14, s: 8.5, r: 0 },
  { m: 'rosetta', x: 13, y: 78, s: 9, r: 0, sm: true },
  { m: 'steam', x: 62, y: 17, s: 8, r: 0, sm: true },
  { m: 'steam', x: 30, y: 27, s: 6.5, r: 0 },
  { m: 'spoon', x: 68, y: 77, s: 8, r: -28 },
];

/* the real mark off the window, twice */
const MARKS = [
  { x: 18, y: 24, s: 15, r: -11, o: 0.5, sm: true },
  { x: 78, y: 82, s: 11, r: 9, o: 0.44 },
];

export default function Doodles({ behind = false }) {
  const root = useRef(null);

  useEffect(() => {
    const node = root.current;
    if (!node) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray('.dd-i');

      /* the field draws itself on every load: each piece springs up
         out of nothing, in a random order, under the wordmark */
      gsap.from(items, {
        opacity: 0,
        scale: 0.2,
        rotate: () => gsap.utils.random(-70, 70),
        duration: 1.15,
        ease: 'back.out(1.5)',
        stagger: { each: 0.055, from: 'random' },
        delay: 0.3,
      });

      /* a short vertical drift, well inside the margins so nothing
         reaches an edge on its way past. No rotation here: each
         piece already carries its own angle, and turning them on
         top of that only made the field look knocked over. */
      items.forEach((el, i) => {
        gsap.to(el, {
          yPercent: (i % 2 ? 1 : -1) * (14 + (i % 4) * 6),
          ease: 'none',
          scrollTrigger: { trigger: node, start: 'top top', end: 'bottom top', scrub: 0.8 },
        });
      });
    }, node);

    return () => ctx.revert();
  }, []);

  return (
    <div className={`dd${behind ? ' dd-quiet' : ''}`} ref={root} aria-hidden="true">
      {PIECES.map((p, i) => (
        <svg
          key={i}
          className={`dd-i dd-line${p.sm ? ' dd-sm' : ''}`}
          viewBox={M[p.m].vb}
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: `${p.s}vmin`, rotate: `${p.r}deg` }}
        >
          {M[p.m].d}
        </svg>
      ))}

      {MARKS.map((m, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={`m${i}`}
          className={`dd-i dd-mark${m.sm ? ' dd-sm' : ''}`}
          src="/brand/noa-mark.png"
          alt=""
          style={{
            left: `${m.x}%`,
            top: `${m.y}%`,
            width: `${m.s}vmin`,
            rotate: `${m.r}deg`,
            opacity: m.o,
          }}
        />
      ))}
    </div>
  );
}
