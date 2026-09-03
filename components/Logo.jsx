import { LOGO_D, LOGO_VB } from '@/lib/logo';

/* The real NOA wordmark, vectorised from the supplied logo file.
   Inherits currentColor, so one asset serves every context. */
export default function Logo({ title = 'NOA', style }) {
  return (
    <svg viewBox={LOGO_VB} role="img" aria-label={title}
         style={{ display: 'block', width: '100%', height: 'auto', ...style }}>
      <path fill="currentColor" fillRule="evenodd" d={LOGO_D} />
    </svg>
  );
}
