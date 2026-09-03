'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/* The green field, drawn on. Everything here is coffee and it is
   all drawn in the same hand as the cups on NOA's window: one
   weight, round caps, nothing filled — plus the real two-cup mark
   itself, dropped in twice at different sizes.

   Motifs are authored around 0,0 and placed by transform, so a
   piece can be moved without touching its path. */

/* ── motifs ─────────────────────────────────────────────────── */

const Bean = () => (
  <g>
    <ellipse rx="17" ry="24" />
    <path d="M0 -21 C 9 -12, 9 -3, 3 2 C -3 7, -3 15, 0 21" />
  </g>
);

const CupSaucer = () => (
  <g>
    <path d="M-30 -20 L30 -20 L25 20 Q23 31 11 31 L-11 31 Q-23 31 -25 20 Z" />
    <path d="M30 -9 Q51 -7 51 6 Q51 19 31 21" />
    <path d="M-45 37 Q0 47 45 37" />
    <path d="M-45 37 Q0 29 45 37" />
  </g>
);

const TakeAway = () => (
  <g>
    <path d="M-21 -25 L21 -25 L15 32 Q14 39 7 39 L-7 39 Q-14 39 -15 32 Z" />
    <path d="M-25 -25 L25 -25 L25 -34 Q25 -37 22 -37 L-22 -37 Q-25 -37 -25 -34 Z" />
    <path d="M-13 -6 L13 -6" />
  </g>
);

const Jug = () => (
  <g>
    <path d="M-19 -22 L19 -22 L15 24 Q14 30 7 30 L-7 30 Q-14 30 -15 24 Z" />
    <path d="M-19 -22 L-33 -33" />
    <path d="M19 -12 Q34 -10 34 2 Q34 13 20 15" />
  </g>
);

/* a pour-over cone on its stand */
const Dripper = () => (
  <g>
    <path d="M-33 -24 L33 -24 L8 22 L-8 22 Z" />
    <path d="M-33 -24 Q0 -16 33 -24" />
    <path d="M-13 22 L-13 32 Q0 36 13 32 L13 22" />
  </g>
);

/* a cup from above with a rosetta poured into it */
const Rosetta = () => (
  <g>
    <circle r="40" />
    <path d="M0 -26 C 15 -11, 15 11, 0 28 C -15 11, -15 -11, 0 -26 Z" />
    <path d="M0 -26 L0 28" />
    <path d="M-9 -9 Q0 -4 9 -9" />
    <path d="M-9 3 Q0 8 9 3" />
  </g>
);

const Steam = () => (
  <g>
    <path d="M-9 28 C -19 15, -1 8, -9 -5 C -16 -16, -3 -22, -9 -32" />
    <path d="M9 24 C 0 12, 17 5, 9 -7 C 2 -17, 14 -23, 9 -32" />
  </g>
);

const Spoon = () => (
  <g>
    <ellipse rx="13" ry="19" />
    <path d="M0 19 L0 68" />
  </g>
);

/* ── placement ──────────────────────────────────────────────── */
/* The wordmark sits roughly x 470..975, y 355..640 of this box, so
   nothing is placed inside that. */

const PIECES = [
  { C: Bean, t: 'translate(150 175) rotate(-24)', s: 1.15 },
  { C: Bean, t: 'translate(1298 236) rotate(38)', s: 1 },
  { C: Bean, t: 'translate(392 796) rotate(14)', s: 1.1 },
  { C: Bean, t: 'translate(1064 118) rotate(-9)', s: .9 },
  { C: Bean, t: 'translate(742 812) rotate(46)', s: 1 },
  { C: CupSaucer, t: 'translate(232 508)', s: 1.15 },
  { C: TakeAway, t: 'translate(1180 452) rotate(7)', s: 1.1 },
  { C: Jug, t: 'translate(596 168) rotate(-8)', s: 1 },
  { C: Dripper, t: 'translate(1286 690) rotate(-5)', s: 1.05 },
  { C: Rosetta, t: 'translate(1318 118)', s: .85 },
  { C: Rosetta, t: 'translate(196 726)', s: .95 },
  { C: Steam, t: 'translate(880 176)', s: 1.2 },
  { C: Steam, t: 'translate(452 246)', s: .95 },
  { C: Spoon, t: 'translate(966 686) rotate(-28)', s: .95 },
];

/* the real mark off the window, twice */
const MARKS = [
  { x: 224, y: 214, w: 232, r: -11, o: .5 },
  { x: 1132, y: 748, w: 168, r: 9, o: .44 },
];

export default function Doodles() {
  const root = useRef(null);

  useEffect(() => {
    const node = root.current;
    if (!node) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray('.dd-i');
      gsap.from(items, {
        opacity: 0,
        scale: 0.72,
        duration: 1.5,
        ease: 'expo.out',
        stagger: { each: 0.06, from: 'random' },
        delay: 0.45,
      });
      items.forEach((el, i) => {
        gsap.to(el, {
          y: (i % 2 ? 1 : -1) * (30 + (i % 4) * 16),
          rotation: (i % 3 ? 1 : -1) * 12,
          ease: 'none',
          scrollTrigger: { trigger: node, start: 'top top', end: 'bottom top', scrub: 0.8 },
        });
      });
    }, node);

    return () => ctx.revert();
  }, []);

  return (
    <svg className="dd" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g className="dd-line">
        {PIECES.map(({ C, t, s }, i) => (
          <g className="dd-i" key={i} transform={`${t} scale(${s})`}>
            <C />
          </g>
        ))}
      </g>

      {MARKS.map((m, i) => (
        <image
          key={`m${i}`}
          className="dd-i"
          href="/brand/noa-mark.png"
          x={m.x - m.w / 2}
          y={m.y - (m.w * 542) / 642 / 2}
          width={m.w}
          height={(m.w * 542) / 642}
          opacity={m.o}
          transform={`rotate(${m.r} ${m.x} ${m.y})`}
        />
      ))}
    </svg>
  );
}
