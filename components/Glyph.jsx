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
