import Link from 'next/link';
import { SITE } from '@/lib/data';

export default function Dock() {
  return (
    <nav className="dock" aria-label="Actions">
      <Link href="/carte">La carte</Link>
      <a href={SITE.maps} target="_blank" rel="noopener noreferrer">Itinéraire</a>
    </nav>
  );
}
