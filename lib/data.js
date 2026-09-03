/* ───────────────────────────────────────────────────────────────
   NOA — Café & Friends
   Every value here is either measured from a NOA photograph or
   taken from a public, NOA-attributable listing. Nothing invented.
   ─────────────────────────────────────────────────────────────── */

/* Brand colour, sampled from the green awning above the door:
   median of 11 337 pixels of awning fabric in flat daylight. */
export const C = {
  green: '#024038',
  ink: '#15110E',
  white: '#FBF8F3',
  cream: '#EEE6D8',
  oak: '#B98A55',
};

export const SITE = {
  name: 'NOA',
  tagline: 'Café & Friends',
  street: '6 rue Mélingue',
  city: '75019 Paris',
  origin: process.env.NEXT_PUBLIC_SITE_ORIGIN || 'https://noacafe.paris',
  geo: { lat: 48.874906, lng: 2.3861603 },
  maps: 'https://maps.google.com/?q=NOA+caf%C3%A9,+6+Rue+Melingue,+75019+Paris',
  instagram: 'https://www.instagram.com/noacafeparis/',
  tiktok: 'https://www.tiktok.com/@noacafeparis',
  handle: '@noacafeparis',
  rating: '4,9',
  reviews: '500+',
  metro: 'Jourdain ou Pyrénées, ligne 11',
  /* OpenStreetMap, pannable, no key and no tracking script */
  map: 'https://www.openstreetmap.org/export/embed.html?bbox=2.3822%2C48.8729%2C2.3902%2C48.8769&layer=mapnik&marker=48.874906%2C2.3861603',
};

/* Google Business hours, corroborated by the Instagram bio. */
export const HOURS = [
  { d: 'Lundi', o: '8h30', c: '17h', open: [8.5, 17] },
  { d: 'Mardi', o: '8h30', c: '17h', open: [8.5, 17] },
  { d: 'Mercredi', o: '8h30', c: '17h', open: [8.5, 17] },
  { d: 'Jeudi', o: '8h30', c: '17h', open: [8.5, 17] },
  { d: 'Vendredi', o: '8h30', c: '17h', open: [8.5, 17] },
  { d: 'Samedi', o: '10h', c: '18h', open: [10, 18] },
  { d: 'Dimanche', o: '10h', c: '18h', open: [10, 18] },
];

/* ── Photographies ────────────────────────────────────────────
   Une entrée par fichier de /public/photos/noa. Remplacez un fichier
   sous le même nom et il change partout ; rien d'autre à éditer.
   w/h sont les dimensions réelles, donc next/image ne devine jamais
   et la page ne saute pas au chargement.
   ─────────────────────────────────────────────────────────────── */
export const P = {
  hero: { src: '/photos/noa/hero.jpg', w: 1351, h: 2400,
    alt: 'La devanture de NOA le soir, son store vert et sa salle éclairée, rue Mélingue' },
  facade: { src: '/photos/noa/facade.jpg', w: 1800, h: 2400,
    alt: 'La façade de NOA, portes ouvertes sur la rue Mélingue' },
  terrace: { src: '/photos/noa/terrace.jpg', w: 1800, h: 2400,
    alt: 'La terrasse de NOA et ses bancs, sous le store vert' },
  interior: { src: '/photos/noa/interior.jpg', w: 1600, h: 2400,
    alt: 'La salle de NOA : murs clairs, tables et tabourets en bois, la rue par la fenêtre' },
  window: { src: '/photos/noa/window.jpg', w: 1800, h: 2400,
    alt: 'Une table de NOA près de la vitrine' },
  counter: { src: '/photos/noa/counter.jpg', w: 1800, h: 2400,
    alt: 'Le comptoir de NOA, ses lanternes en papier et sa machine à café' },
  case: { src: '/photos/noa/case.jpg', w: 2400, h: 2400,
    alt: 'La vitrine à pâtisseries de NOA, les gâteaux du jour écrits sur le verre' },
  spread: { src: '/photos/noa/spread.jpg', w: 1800, h: 2400,
    alt: 'Une table de NOA vue de dessus : tartines, matcha, cafés et pain de seigle' },
  brunch: { src: '/photos/noa/brunch.jpg', w: 1800, h: 2400,
    alt: 'À table chez NOA : tartine, cookie, œuf et pain de seigle' },
  breakfast: { src: '/photos/noa/breakfast.jpg', w: 1800, h: 2400,
    alt: 'Le petit-déjeuner de NOA : matcha latte, avocado toast et jus pressé' },
  toast: { src: '/photos/noa/toast.jpg', w: 1800, h: 2400,
    alt: 'L’avocado toast de NOA, avocat et pousses sur pain de seigle' },
  matcha: { src: '/photos/noa/matcha.jpg', w: 1800, h: 2400,
    alt: 'Le matcha latte de NOA et sa rosetta' },
  card: { src: '/photos/noa/card.jpg', w: 1800, h: 2400,
    alt: 'Un matcha latte de NOA posé à côté de la carte au logo deux tasses' },
  latte: { src: '/photos/noa/latte.jpg', w: 2400, h: 2400,
    alt: 'Un latte de NOA et sa rosetta' },
  coffee: { src: '/photos/noa/coffee.jpg', w: 1600, h: 2400,
    alt: 'Un café et un matcha sur une table de NOA' },
  cakeLatte: { src: '/photos/noa/cake-latte.jpg', w: 1800, h: 2400,
    alt: 'Un latte et une part de carrot cake près de la fenêtre, chez NOA' },
  carrotCake: { src: '/photos/noa/carrot-cake.jpg', w: 1600, h: 2400,
    alt: 'Le carrot cake de NOA, glaçage cream cheese et pistache' },
  brownie: { src: '/photos/noa/matcha-brownie.jpg', w: 1900, h: 1900,
    alt: 'Le brownie matcha de NOA, chocolat blanc' },
  cookie: { src: '/photos/noa/cookie.jpg', w: 1750, h: 1750,
    alt: 'Le cookie de NOA, chocolat noir et fleur de sel' },
};

/* ── Carte ─────────────────────────────────────────────────────
   Item names and wording read off NOA's own chalkboard, or named
   in public NOA-attributable listings. Nothing invented.

   price stays null until NOA confirms it: NOA publishes no price
   list, and the board in the counter photograph is undated, so
   the one figure legible on it is deliberately not reproduced.
   Put a number in and it renders. One edit point, no duplicates.
   ─────────────────────────────────────────────────────────────── */
/* Prix lisibles sur la vitrine dans photos/noa/case.jpg, ecrits au
   feutre par NOA. Volontairement NON publies : la photo n'est pas
   datee. A confirmer, puis remplacer _ par le nombre.

     Carrot cake .................. 4,50
     Chocolate cake (V/GF) ........ 3,50
     Banana bread ................. 4,50
     Cookie chocolat noir,
       fleur de sel ............... 3,50
     Brownie matcha,
       chocolat blanc ............. commence par 4, coupe par le
                                    bord du verre, illisible

   Rien ne s'affiche tant que price vaut null. */
export const OWNER_CONFIRMATION_REQUIRED = null;
const _ = OWNER_CONFIRMATION_REQUIRED;

export const MENU = [
  { id: 'cafe', label: 'Café', items: [
    { n: 'Espresso', d: '', price: _ },
    { n: 'Latte', d: '', price: _ },
    { n: 'Flat white', d: '', price: _ },
    { n: 'Café filtre', d: '', price: _ },
    { n: 'Chocolat chaud', d: '', price: _ },
  ] },
  { id: 'matcha', label: 'Matcha', items: [
    { n: 'Matcha latte', d: 'chaud', price: _ },
    { n: 'Iced matcha latte', d: '', price: _ },
  ] },
  { id: 'sale', label: 'Salé', items: [
    { n: 'Petit-déjeuner scandinave', d: 'œuf coque, comté, pain de seigle', price: _ },
    { n: 'Tartine NOA', d: '', price: _ },
    { n: 'Avocado toast', d: 'concombre, pousses', price: _ },
  ] },
  { id: 'patisserie', label: 'Pâtisserie maison', items: [
    { n: 'Carrot cake', d: '', price: _ },
    { n: 'Brownie matcha', d: 'chocolat blanc', price: _ },
    { n: 'Cookie', d: 'chocolat noir, fleur de sel', price: _ },
    { n: 'Chocolate cake', d: 'vegan, sans gluten', price: _ },
    { n: 'Banana bread', d: '', price: _ },
  ] },
];

/* The four most often named, in NOA's own wording.
   photo: null where no NOA photograph exists yet — the item is
   carried by type alone rather than by a stand-in image. */
export const FAVORIS = [
  { n: ['Brownie', 'matcha'], d: 'Chocolat blanc.', photo: P.brownie },
  { n: ['Cookie'], d: 'Chocolat noir, fleur de sel.', photo: P.cookie },
  { n: ['Carrot', 'cake'], d: '', photo: P.carrotCake },
  { n: ['Petit-déjeuner', 'scandinave'], d: '', photo: P.breakfast },
];

/* Avis Google, mot pour mot, rien de reecrit ni de traduit. */
export const REVIEWS = [
  'Le meilleur café de Paris ! Tout y est succulent : la tartine Noa, le cookie, le brownie au matcha, le chocolat chaud, ainsi que le café. Le service est toujours accueillant et attentif, un véritable plaisir à chaque passage.',
  'Cookies délicieux, équipe accueillante et toujours souriante. J’ai hâte d’y retourner.',
];

/* Shown beside the Instagram call to action. Real NOA photographs,
   not a mock-up of their feed. */
export const SOCIAL = [P.matcha, P.cookie, P.carrotCake, P.latte, P.toast, P.brownie];
