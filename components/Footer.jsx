'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import Doodles from './Doodles';
import useNow from './useNow';
import { NAV, LEGAL } from '@/lib/nav';
import { SITE, HOURS } from '@/lib/data';

/* Everything a reader still needs at the end of any page.

   The hours are the part people actually come for, so they are not a
   list of small grey rows any more: seven blocks across, day over
   time, and today filled in so you find it without reading. */

export default function Footer() {
  const { idx, open } = useNow();
  /* Venir carries the address, the hours and a full-width map of its
     own. Repeating all three straight underneath read as a mistake,
     so there the footer keeps only its tail. */
  const brief = usePathname() === '/venir';

  return (
    <footer className="ft">
      <Doodles behind tone="oak" />
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
          <iframe
            src={SITE.map}
            title="Carte — 6 rue Mélingue, Paris 19e"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      )}

      {!brief && (
      <div className="hrs-band">
        <h2 className="lbl hrs-lbl">
          Horaires
          {open !== null && (
            <span className={open ? 'is-open' : 'is-shut'}>
              {open ? ' — ouvert en ce moment' : ' — fermé en ce moment'}
            </span>
          )}
        </h2>
        <ul className="hrs-days">
          {HOURS.map((h, i) => (
            <li key={h.d} className={i === idx ? 'now' : ''}>
              <span className="hrs-d">{h.d.slice(0, 3)}</span>
              <span className="hrs-h">
                {h.o}
                <i aria-hidden="true">–</i>
                {h.c}
              </span>
            </li>
          ))}
        </ul>
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
