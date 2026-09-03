'use client';
import Link from 'next/link';
import Logo from './Logo';
import useNow from './useNow';
import { NAV } from '@/lib/nav';
import { SITE } from '@/lib/data';

export default function Footer() {
  const { open } = useNow();
  return (
    <footer className="ft">
      <div className="ft-in">
        <div className="ft-top">
          <div>
            <p className="lbl">{SITE.street} — {SITE.city}</p>
            {open !== null && (
              <p className="lbl" style={{ marginTop: 6, opacity: .7 }}>
                {open ? 'Ouvert en ce moment' : 'Fermé en ce moment'}
              </p>
            )}
          </div>
          <nav className="ft-nav" aria-label="Pied de page">
            {NAV.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href={SITE.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a>
          </nav>
        </div>
        <div className="ft-logo"><Logo title="NOA" /></div>
        <p className="lbl ft-bot">
          Coffee shop · Paris 19<sup>e</sup> · Buttes-Chaumont — © {new Date().getFullYear()} NOA
        </p>
      </div>
    </footer>
  );
}
