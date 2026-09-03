'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/* Art-direction motion, not decoration. Four moves only:

   rise   copy and small elements settle up into place
   clip   a photograph uncovers itself and eases off a slow push in
   mask   a display line rides up from behind its own edge
   float  a very slow parallax drift, scrubbed to the scroll

   The resting state is the truthful one: the starting state is set
   in CSS behind an html.js guard, so with JavaScript off nothing
   is ever hidden. Reduced motion skips straight to rest. */

let registered = false;

export default function Reveal({
  children,
  kind = 'rise',
  delay = 0,
  amount = 8,
  className = '',
  style,
  as: Tag = 'div',
}) {
  const el = useRef(null);

  useEffect(() => {
    const node = el.current;
    if (!node) return;

    const rest = () => {
      gsap.set(node, { clearProps: 'all' });
      node.removeAttribute('data-r');
      const inner = node.firstElementChild;
      if (inner) gsap.set(inner, { clearProps: 'all' });
    };

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      rest();
      return;
    }

    if (!registered) {
      gsap.registerPlugin(ScrollTrigger);
      registered = true;
    }

    const done = () => node.removeAttribute('data-r');
    const st = { trigger: node, start: 'top 88%', once: true };
    let anim;

    if (kind === 'clip') {
      const img = node.querySelector('img');
      anim = gsap.timeline({ scrollTrigger: st, delay, onComplete: done });
      anim.to(node, {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 1.2,
        ease: 'power3.out',
      });
      if (img) {
        anim.to(img, { scale: 1, duration: 1.6, ease: 'power3.out' }, 0);
      }
    } else if (kind === 'mask') {
      anim = gsap.to(node.firstElementChild, {
        yPercent: 0,
        duration: 1.05,
        ease: 'power3.out',
        delay,
        scrollTrigger: st,
        onComplete: done,
      });
    } else if (kind === 'float') {
      anim = gsap.to(node.firstElementChild || node, {
        yPercent: amount,
        ease: 'none',
        scrollTrigger: {
          trigger: node,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
      done();
    } else {
      anim = gsap.to(node, {
        opacity: 1,
        y: 0,
        duration: 0.95,
        ease: 'power3.out',
        delay,
        scrollTrigger: st,
        onComplete: done,
      });
    }

    return () => {
      if (anim?.scrollTrigger) anim.scrollTrigger.kill();
      anim?.kill?.();
    };
  }, [kind, delay, amount]);

  const inner = kind === 'mask' || kind === 'float' ? <span>{children}</span> : children;

  return (
    <Tag ref={el} data-r={kind} className={className} style={style}>
      {inner}
    </Tag>
  );
}
