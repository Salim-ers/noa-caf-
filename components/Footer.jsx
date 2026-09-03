'use client';
import Link from 'next/link';
import Logo from './Logo';
import useNow from './useNow';
import { NAV } from '@/lib/nav';
import { SITE, HOURS } from '@/lib/data';

/* Everything a reader still needs at the end of any page: where it
   is, when it is open, and a map they can move around. Then the
   wordmark, centred, and nothing after it. */

export default function Footer() {
  const { idx, open } = useNow();

  return (
    <footer className="ft">
      <div className="ft-cols">
        <div className="ft-where">
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

        <div className="ft-when">
          <h2 className="lbl">
            Horaires
            {open !== null && (
              <span className={open ? 'is-open' : 'is-shut'}>
                {open ? ' — ouvert' : ' — fermé'}
              </span>
            )}
          </h2>
          <ul className="hrs">
            {HOURS.map((h, i) => (
              <li key={h.d} className={i === idx ? 'now' : ''}>
                <span>{h.d}</span>
                <span>
                  {h.o} – {h.c}
                </span>
              </li>
            ))}
          </ul>
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

      <nav className="ft-nav" aria-label="Pied de page">
        {NAV.map(([href, label]) => (
          <Link key={href} href={href}>{label}</Link>
        ))}
        <a href={SITE.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href={SITE.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a>
      </nav>

      <Logo variant="word" className="ft-mark" title="NOA — Café & Friends" />

      <p className="lbl ft-bot">
        Coffee shop — Paris 19<sup>e</sup> — © {new Date().getFullYear()} NOA
      </p>
    </footer>
  );
}
