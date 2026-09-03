'use client';
import Photo from './Photo';
import Logo from './Logo';
import useNow from './useNow';
import { SITE } from '@/lib/data';

export default function Hero() {
  const { open } = useNow();
  return (
    <section className="hero">
      <div className="hero-img"><Photo slot="01" ratio="auto" bare priority /></div>
      <div className="hero-scrim" />
      <div className="hero-in">
        <h1 className="hero-logo"><Logo title="NOA" /></h1>
        <p className="hero-tag">Café &amp; Friends</p>
      </div>
      <div className="hero-foot">
        <span>{SITE.street}<br />Paris 19<sup>e</sup></span>
        <a href="#suite">↓ Découvrir</a>
        <span style={{ textAlign: 'right' }}>
          {open === null ? '\u00a0' : open ? 'Ouvert' : 'Fermé'}<br />{SITE.rating} ★
        </span>
      </div>
    </section>
  );
}
