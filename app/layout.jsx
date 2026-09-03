import { Figtree } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Dock from '@/components/Dock';
import Notes from '@/components/Notes';
import { SITE } from '@/lib/data';
import './globals.css';

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800', '900'],
  variable: '--font-figtree',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(SITE.origin),
  title: {
    default: 'NOA — Coffee shop de spécialité, Paris 19e',
    template: '%s — NOA, Paris 19e',
  },
  description:
    'NOA, coffee shop de spécialité au 6 rue Mélingue, Paris 19e. Café, matcha et pâtisserie maison, près des Buttes-Chaumont. Chiens bienvenus.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'NOA — Café & Friends',
    url: '/',
    title: 'NOA — Coffee shop de spécialité, Paris 19e',
    description: 'Un coffee shop de quartier au 6 rue Mélingue. Café, matcha, pâtisserie maison.',
  },
  robots: { index: true, follow: true },
};

export const viewport = { themeColor: '#013930' };

/* One graph, server-rendered, so it is in the HTML before any JS runs. */
const LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['CafeOrCoffeeShop', 'LocalBusiness'],
      '@id': `${SITE.origin}/#business`,
      name: 'NOA — Café & Friends',
      description:
        'Coffee shop de spécialité au 6 rue Mélingue, Paris 19e. Café, matcha et pâtisserie maison, près des Buttes-Chaumont.',
      url: `${SITE.origin}/`,
      priceRange: '€',
      servesCuisine: ['Café de spécialité', 'Petit-déjeuner', 'Pâtisserie'],
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE.street,
        addressLocality: 'Paris',
        postalCode: '75019',
        addressRegion: 'Île-de-France',
        addressCountry: 'FR',
      },
      geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.lat, longitude: SITE.geo.lng },
      hasMap: SITE.maps,
      areaServed: [
        { '@type': 'Place', name: 'Paris 19e' },
        { '@type': 'Place', name: 'Buttes-Chaumont' },
        { '@type': 'Place', name: 'Jourdain' },
      ],
      sameAs: [SITE.instagram, SITE.tiktok],
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Friday'], opens: '08:30', closes: '17:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Thursday'], opens: '10:00', closes: '17:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday', 'Sunday'], opens: '10:00', closes: '18:00' },
      ],
      amenityFeature: [
        { '@type': 'LocationFeatureSpecification', name: 'Chiens acceptés', value: true },
      ],
      /* TODO — see production note 10. Google discourages marking up
         ratings collected on a third-party platform. Uncomment only if
         you accept that risk.
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '526', bestRating: '5' },
      */
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE.origin}/#website`,
      url: `${SITE.origin}/`,
      name: 'NOA — Café & Friends',
      inLanguage: 'fr-FR',
      publisher: { '@id': `${SITE.origin}/#business` },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={figtree.variable}>
      <body>
        <script type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(LD) }} />
        <div className="noa">
          <Header />
          <main>{children}</main>
          <Footer />
          <Dock />
          <Notes />
        </div>
      </body>
    </html>
  );
}
