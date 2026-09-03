import { LOGO_D, LOGO_VB } from '@/lib/logo';

/* Two real NOA marks, both taken from the shop itself.

   word    the NOA wordmark off the awning, vectorised. Rounded
           stems, the oblique counter in the O, the flat-topped A.
           This is the primary mark and the one used everywhere.
   mark    the two cups painted on the window
   lockup  those cups above CAFÉ & FRIENDS

   All three inherit currentColor, so one asset does white on green
   and green on cream with no second file. Width comes from CSS,
   never inline, or a caller's class could not override it. */

const ART = {
  mark: { src: '/brand/noa-mark.png', ratio: 642 / 542 },
  lockup: { src: '/brand/noa-lockup.png', ratio: 642 / 735 },
};

export default function Logo({ variant = 'word', title = 'NOA', className = '', style }) {
  if (variant === 'word') {
    return (
      <svg
        viewBox={LOGO_VB}
        role="img"
        aria-label={title}
        className={`logo logo-word ${className}`.trim()}
        style={style}
      >
        <path fill="currentColor" fillRule="evenodd" d={LOGO_D} />
      </svg>
    );
  }

  const { src, ratio } = ART[variant] || ART.lockup;
  const mask = `url(${src}) center / contain no-repeat`;
  return (
    <span
      role="img"
      aria-label={title}
      className={`logo logo-mask ${className}`.trim()}
      style={{ aspectRatio: String(ratio), WebkitMask: mask, mask, ...style }}
    />
  );
}
