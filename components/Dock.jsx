import Link from 'next/link';
import { SITE } from '@/lib/data';

/* Phone only. The two things someone standing on the street wants. */
export default function Dock() {
  return (
    <nav className="dock" aria-label="Raccourcis">
      <Link href="/carte">La carte</Link>
      <a href={SITE.maps} target="_blank" rel="noopener noreferrer">Itinéraire</a>
    </nav>
  );
}
