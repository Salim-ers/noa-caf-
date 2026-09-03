/* The real NOA mark: the two cups painted on the shop window,
   lifted from a photograph of the vitrine and cut to an alpha
   channel. Drawn as a CSS mask so one asset inherits currentColor
   and serves every context — white on the photograph, green on
   cream, ink on white — with no second file and no recolouring.

   variant="mark"   the two cups alone (legible down to ~32px)
   variant="lockup" the cups above CAFÉ & FRIENDS */

const ART = {
  mark: { src: '/brand/noa-mark.png', ratio: 642 / 542 },
  lockup: { src: '/brand/noa-lockup.png', ratio: 642 / 735 },
};

export default function Logo({ variant = 'lockup', title = 'NOA — Café & Friends', className, style }) {
  const { src, ratio } = ART[variant] || ART.lockup;
  const mask = `url(${src}) center / contain no-repeat`;
  /* Width lives in .logo (CSS), never inline: an inline width would
     outrank every class a caller passes in and the mark would come
     out full-bleed wherever it is used. */
  return (
    <span
      role="img"
      aria-label={title}
      className={`logo ${className}`.trim()}
      style={{
        aspectRatio: String(ratio),
        WebkitMask: mask,
        mask,
        ...style,
      }}
    />
  );
}
