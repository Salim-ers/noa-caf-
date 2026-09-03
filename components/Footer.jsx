import Link from 'next/link';
import Logo from './Logo';
import { NAV } from '@/lib/nav';
import { SITE } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="ft">
      <div className="ft-top">
        <p className="lbl">
          {SITE.street} — {SITE.city}
        </p>
        <nav className="ft-nav" aria-label="Pied de page">
          {NAV.map(([href, label]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
          <a href={SITE.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href={SITE.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a>
        </nav>
      </div>

      <Logo variant="word" className="ft-mark" title="NOA — Café & Friends" />

      <p className="lbl ft-bot">
        Coffee shop — Paris 19<sup>e</sup> — © {new Date().getFullYear()} NOA
      </p>
    </footer>
  );
}
