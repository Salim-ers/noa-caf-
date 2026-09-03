'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Logo from './Logo';
import { NAV } from '@/lib/nav';

/* The room is small, so the navigation is small: the mark, four
   words, nothing else. Over the hero it sits in white on the
   photograph; past it, it takes the cream ground and the ink. */

export default function Header() {
  const path = usePathname();
  const overlay = path === '/';
  const [solid, setSolid] = useState(!overlay);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!overlay) { setSolid(true); return; }
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [overlay]);

  useEffect(() => setOpen(false), [path]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className={`hd${solid || open ? ' hd-on' : ''}`}>
      <Link href="/" className="hd-mark" aria-label="NOA, accueil">
        <Logo variant="mark" />
      </Link>

      <nav className="hd-nav" aria-label="Principale">
        {NAV.map(([href, label]) => (
          <Link key={href} href={href} className={path === href ? 'on' : ''}>
            {label}
          </Link>
        ))}
      </nav>

      <button
        className="hd-burger"
        aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span className={open ? 'x' : ''} />
        <span className={open ? 'x' : ''} />
      </button>

      {open && (
        <div className="sheet">
          {NAV.map(([href, label]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </div>
      )}
    </header>
  );
}
