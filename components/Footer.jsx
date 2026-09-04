'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import Doodles from './Doodles';
import Hours from './Hours';
import MapFrame from './MapFrame';
import { NAV, LEGAL } from '@/lib/nav';
import { SITE } from '@/lib/data';

/* Green ground, white type. The hours sit on a cream panel inside it:
   they are the one thing people actually come down here for, and
   giving them their own ground is what makes them findable. */

export default function Footer() {
  /* Venir carries the address, the hours and a full-width map of its
     own. Repeating all three straight underneath read as a mistake,
     so there the footer keeps only its tail. */
  const brief = usePathname() === '/venir';

  return (
    <footer className="ft band-green">
      <Doodles behind />

      {!brief && (
        <div className="ft-cols">
          <div>
            <h2 className="lbl">Venir</h2>
            <p className="ft-addr">
              {SITE.street}
              <br />
              {SITE.city}
            </p>
            <p className="ft-metro">Métro {SITE.metro}</p>
            <p className="ft-go">
              <a href={SITE.maps} target="_blank" rel="noopener noreferrer">
                Itinéraire <span aria-hidden="true">→</span>
              </a>
            </p>
          </div>

          <div className="ft-map">
            <MapFrame title="Plan — 6 rue Mélingue, Paris 19e" />
          </div>
        </div>
      )}

      {!brief && (
        <div className="ft-hours">
          <Hours />
        </div>
      )}

      <nav className="ft-nav" aria-label="Pied de page">
        {NAV.map(([href, label]) => (
          <Link key={href} href={href}>{label}</Link>
        ))}
        <a href={SITE.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href={SITE.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a>
      </nav>

      <Logo variant="word" className="ft-mark" title="NOA — Café & Friends" />

      <div className="ft-bot">
        <p className="lbl">
          Coffee shop — Paris 19<sup>e</sup> — © {new Date().getFullYear()} NOA
        </p>
        <nav className="ft-legal" aria-label="Informations légales">
          {LEGAL.map(([href, label]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
