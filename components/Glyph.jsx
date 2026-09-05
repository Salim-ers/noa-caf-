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
