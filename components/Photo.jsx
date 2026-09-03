import Image from 'next/image';

/* A NOA photograph. No frame, no caption, no label — the picture
   is the element. Pass an entry from P in lib/data.js; ratio is
   optional and crops rather than letterboxes. */
export default function Photo({
  photo,
  ratio,
  sizes = '100vw',
  priority = false,
  position = 'center',
  className = '',
  style,
}) {
  if (!photo) return null;
  return (
    <div
      className={`ph ${className}`.trim()}
      style={{ aspectRatio: ratio || `${photo.w} / ${photo.h}`, ...style }}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        priority={priority}
        quality={82}
        style={{ objectFit: 'cover', objectPosition: position }}
      />
    </div>
  );
}
