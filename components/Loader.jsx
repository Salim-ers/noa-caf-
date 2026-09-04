'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { LOGO_D, LOGO_VB } from '@/lib/logo';

/* L'écran d'ouverture : le logotype se remplit de café.

   Le tracé sert de masque. Dessous, deux couches : un aplat très
   pâle pour les lettres vides, et le café qui monte par-dessus. La
   surface n'est pas droite — c'est une vague recalculée à chaque
   image, dont l'amplitude retombe à mesure que ça se remplit, comme
   un liquide qui se stabilise.

   Le voile est rendu côté serveur mais la feuille de style ne
   l'affiche que sous html.js : sans JavaScript il n'apparaît jamais,
   donc il ne peut pas bloquer la page. Un garde-fou le retire au
   bout de 3,5 s quoi qu'il arrive, et un clic passe. */

const W = 1708;
const H = 540;
const STEPS = 8;

function wave(level, phase, amp) {
  /* level 0 = vide, 1 = plein. On déborde un peu en haut et en bas
     pour qu'aucun bord de vague n'affleure dans les lettres. */
  const y = H + 40 - level * (H + 80);
  const pts = [];
  for (let i = 0; i <= STEPS; i++) {
    const x = (W / STEPS) * i;
    pts.push([x, y + Math.sin(phase + i * 0.85) * amp]);
  }
  let d = `M ${pts[0][0]} ${pts[0][1]}`;
  for (let i = 1; i <= STEPS; i++) {
    const [x0, y0] = pts[i - 1];
    const [x1, y1] = pts[i];
    const cx = (x0 + x1) / 2;
    d += ` C ${cx} ${y0}, ${cx} ${y1}, ${x1} ${y1}`;
  }
  return `${d} L ${W} ${H + 80} L 0 ${H + 80} Z`;
}

export default function Loader() {
  const root = useRef(null);
  const fill = useRef(null);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const node = root.current;
    if (!node) return;

    const done = () => {
      setGone(true);
      document.body.style.overflow = '';
    };

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      done();
      return;
    }

    document.body.style.overflow = 'hidden';
    const guard = setTimeout(done, 3500);
    node.addEventListener('click', done);

    const state = { level: 0, phase: 0, amp: 20 };
    const draw = () => {
      if (fill.current) {
        fill.current.setAttribute('d', wave(state.level, state.phase, state.amp));
      }
    };
    draw();

    const tl = gsap.timeline({ onUpdate: draw, onComplete: done });
    tl.to(state, { level: 1, duration: 1.35, ease: 'power1.inOut' }, 0)
      .to(state, { phase: Math.PI * 3, duration: 1.35, ease: 'none' }, 0)
      .to(state, { amp: 3, duration: 1.35, ease: 'power2.out' }, 0)
      .to(node, { opacity: 0, duration: 0.45, ease: 'power2.inOut' }, 1.25);

    return () => {
      clearTimeout(guard);
      node.removeEventListener('click', done);
      tl.kill();
      document.body.style.overflow = '';
    };
  }, []);

  if (gone) return null;

  return (
    <div className="ld" ref={root} aria-hidden="true">
      <svg className="ld-mark" viewBox={LOGO_VB}>
        <defs>
          <mask id="ld-mask">
            <path d={LOGO_D} fill="#fff" fillRule="evenodd" />
          </mask>
        </defs>
        <g mask="url(#ld-mask)">
          <rect x="0" y="0" width={W} height={H} className="ld-empty" />
          <path ref={fill} className="ld-fill" d={wave(0, 0, 20)} />
        </g>
      </svg>
    </div>
  );
}
