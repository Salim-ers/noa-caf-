/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { formats: ['image/avif', 'image/webp'] },

  /* Le site ne reçoit aucune donnée : pas de formulaire, pas de
     compte, pas de mesure. Ces en-têtes couvrent ce qui reste — le
     cadrage abusif dans un autre site, la devinette de type MIME, la
     fuite d'URL vers les tiers, et les capteurs du navigateur.

     Pas de Content-Security-Policy ici : Next pose ses propres
     scripts en ligne, et une politique écrite à l'aveugle casserait
     la page. Elle demande un nonce, donc un middleware — à faire
     avant une mise en ligne exposée. */
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
    ];
  },
};
export default nextConfig;
