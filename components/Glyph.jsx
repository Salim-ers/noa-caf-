import { O_D, O_VB, O_RATIO } from '@/lib/glyph';

/* The O of the enseigne, set inline in running display type.

   Every O on the site is this one — the oblique counter off the
   awning, not the typeface's round O. It is what makes a heading
   read as NOA's rather than as Outfit's. Both subpaths go in one
   <path> with evenodd so the counter punches a hole rather than
   being filled over the top. */

export function OGlyph() {
  return (
    <svg
      className="oglyph"
      viewBox={O_VB}
      style={{ aspectRatio: String(O_RATIO) }}
      aria-hidden="true"
      focusable="false"
    >
      <path fill="currentColor" fillRule="evenodd" d={O_D.join(' ')} />
    </svg>
  );
}

/* Splits a string on its Os and swaps in the glyph. Accents are left
   alone — Ô is not the sign's letter. */
export function withO(text) {
  return String(text)
    .split(/([oO])/)
    .map((part, i) =>
      part === 'o' || part === 'O'
        ? <OGlyph key={i} />
        : <span key={i}>{part}</span>
    );
}

/* A single coffee bean, drawn like the cups on the window: one
   weight, round caps, nothing filled. Used as a quiet accent. */
export function Bean({ className = '' }) {
  return (
    <svg className={`bean ${className}`.trim()} viewBox="-26 -34 52 68" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round">
        <ellipse rx="15" ry="22" />
        <path d="M0 -19 C 7 -9, 7 9, 0 19" />
      </g>
    </svg>
  );
}

/* Un cookie, dessiné dans la même main que les tasses de la vitrine :
   un seul poids de trait, bouts ronds, rien de rempli. Le contour est
   volontairement irrégulier — un cookie sorti du four n'est pas un
   cercle. Sert au bandeau cookies, où une photographie du vrai cookie
   rendait la blague trop littérale. */
export function CookieDrawing({ className = '' }) {
  return (
    <svg
      className={`ckd ${className}`.trim()}
      viewBox="-60 -60 120 120"
      aria-hidden="true"
    >
      <g fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M0 -50 C 22 -50, 41 -34, 47 -14 C 52 5, 47 27, 31 40 C 15 52, -10 53, -27 43 C -44 33, -52 13, -49 -8 C -46 -29, -29 -46, -6 -50 Z" />
        <path d="M-22 -22 C -14 -27, -6 -22, -8 -13 C -10 -5, -20 -3, -25 -9 C -29 -14, -27 -19, -22 -22 Z" />
        <path d="M17 -25 C 25 -28, 31 -22, 28 -15 C 25 -9, 16 -9, 13 -15 C 11 -20, 13 -23, 17 -25 Z" />
        <path d="M-4 8 C 5 4, 13 10, 10 18 C 7 26, -4 26, -8 19 C -11 14, -8 10, -4 8 Z" />
        <path d="M-33 14 C -27 11, -21 15, -23 21 C -25 27, -33 27, -36 22 C -38 18, -36 15, -33 14 Z" />
        <path d="M26 16 C 32 14, 37 18, 35 24 C 33 29, 26 29, 24 24 C 22 20, 23 17, 26 16 Z" />
      </g>
    </svg>
  );
}

/* Un téléphone, dans la même main que le reste : trait unique, bouts
   ronds, rien de rempli. À l'écran, les deux tasses de l'enseigne.
   Sert à la section réseaux, où il n'y a plus de vignettes. */
export function Phone({ className = '' }) {
  return (
    <svg className={`ph-draw ${className}`.trim()} viewBox="-90 -130 180 260" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="-58" y="-112" width="116" height="224" rx="18" />
        <path d="M-18 -100 L18 -100" />
        <path d="M-10 100 L10 100" />
        {/* les deux tasses, à l'écran */}
        <path d="M-32 -6 C -40 -6, -42 4, -36 10 C -30 18, -14 20, -6 12 C 0 6, -2 -4, -10 -6 Z" />
        <path d="M-42 0 C -50 -2, -50 8, -42 8" />
        <path d="M8 -2 C 0 -2, -2 8, 4 14 C 10 22, 26 24, 34 16 C 40 10, 38 0, 30 -2 Z" />
        <path d="M40 4 C 48 2, 48 12, 40 12" />
        <path d="M-14 -22 C -10 -32, -2 -30, -4 -20" />
        <path d="M6 -26 C 10 -36, 18 -34, 16 -24" />
      </g>
    </svg>
  );
}

/* Les deux réseaux, dessinés plutôt qu'importés : un jeu d'icônes
   tiers aurait amené une autre main dans la page. */
export function IgMark({ className = '' }) {
  return (
    <svg className={`net ${className}`.trim()} viewBox="0 0 24 24" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
      </g>
    </svg>
  );
}

export function TtMark({ className = '' }) {
  return (
    <svg className={`net ${className}`.trim()} viewBox="0 0 24 24" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.2 3.2 v10.6 a3.9 3.9 0 1 1 -3.9 -3.9" />
        <path d="M14.2 3.2 c .5 2.6 2.2 4.2 4.8 4.4" />
      </g>
    </svg>
  );
}
