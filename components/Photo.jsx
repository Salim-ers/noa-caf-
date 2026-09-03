import Image from 'next/image';
import { SLOTS, C } from '@/lib/data';

/* Drop a real file into /public/photos with the name printed on the
   empty slot and it appears here. No third-party imagery is bundled:
   the NOA photographs on Instagram, TikTok and Google belong to NOA,
   its customers and the creators who shot them. */
export default function Photo({ slot, src, alt = '', ratio, tone = 'green', bare = false, priority = false, sizes = '100vw' }) {
  const [file, r] = SLOTS[slot] || ['', '3 / 2'];
  const ar = ratio || r;

  return (
    <figure className="ph" style={{
      aspectRatio: ar,
      background: src ? C.paper : (tone === 'paper' ? C.paper : C.green),
    }}>
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority}
               style={{ objectFit: 'cover' }} />
      ) : !bare ? (
        <span className="ph-tag" style={{ color: tone === 'paper' ? C.ink : C.white }}>
          {slot} · /photos/{file}.jpg · {ar.replace(' / ', ':')}
        </span>
      ) : null}
    </figure>
  );
}
