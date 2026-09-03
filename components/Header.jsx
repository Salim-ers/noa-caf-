'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Logo from './Logo';
import { NAV } from '@/lib/nav';
import { SITE } from '@/lib/data';

function IgIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" /><circle cx="12" cy="12" r="4.1" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Header() {
  const path = usePathname();
  const overlay = path === '/';
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const s = () => setSolid(window.scrollY > 24);
    s(); window.addEventListener('scroll', s, { passive: true });
    return () => window.removeEventListener('scroll', s);
  }, []);
  useEffect(() => setOpen(false), [path]);

  const light = overlay && !solid;

  return (
    <>
      <header className="hd" style={{
        background: solid ? '#FEFDFC' : 'transparent',
        borderBottom: solid ? '1px solid rgba(20,23,26,.10)' : '1px solid transparent',
        color: light ? '#FEFDFC' : '#14171A',
      }}>
        <Link href="/" className="hd-logo" aria-label="NOA, accueil"><Logo /></Link>
        <nav className="hd-nav" aria-label="Principale">
          {NAV.map(([href, label]) => (
            <Link key={href} href={href} className={path === href ? 'on' : ''}>{label}</Link>
          ))}
        </nav>
        <a className="hd-ig" href={SITE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><IgIcon /></a>
        <button className="hd-burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span style={{ background: 'currentColor' }} /><span style={{ background: 'currentColor' }} />
        </button>
      </header>

      {open && (
        <div className="sheet">
          {NAV.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}
          <a href={SITE.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      )}
    </>
  );
}
