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

/* ── Photography ───────────────────────────────────────────────
   One entry per file in /public/photos/noa. Replace a file in
   place and it updates everywhere; no other edit is needed.
   w/h are the true pixel sizes so next/image never guesses.
   ─────────────────────────────────────────────────────────────── */
export const P = {
  hero: { src: '/photos/noa/hero.jpg', w: 816, h: 1020,
    alt: 'La devanture de NOA rue Mélingue, son store vert et son enseigne, en fin de journée' },
  terrace: { src: '/photos/noa/terrace.jpg', w: 681, h: 866,
    alt: 'La terrasse de NOA un jour d’été, rue Mélingue' },
  counter: { src: '/photos/noa/counter.jpg', w: 681, h: 866,
    alt: 'Le comptoir de NOA : bois clair, machine à café et vitrine à pâtisseries' },
  team: { src: '/photos/noa/team.jpg', w: 300, h: 375,
    alt: 'Derrière le comptoir de NOA' },
  window: { src: '/photos/noa/window.jpg', w: 819, h: 1024,
    alt: 'La vitrine de NOA et son logo, deux tasses, Café & Friends' },
  interior: { src: '/photos/noa/interior.jpg', w: 686, h: 878,
    alt: 'La salle de NOA vue depuis la rue' },
  dog: { src: '/photos/noa/dog.jpg', w: 684, h: 882,
    alt: 'Un chien installé dans la salle de NOA' },
  spread: { src: '/photos/noa/spread.jpg', w: 879, h: 1080,
    alt: 'Brownie matcha, cookies, espresso et lattes sur une table de NOA' },
  breakfast: { src: '/photos/noa/breakfast.jpg', w: 686, h: 878,
    alt: 'Le petit-déjeuner scandinave de NOA et un matcha latte' },
  toast: { src: '/photos/noa/toast.jpg', w: 684, h: 882,
    alt: 'Avocado toast et croque chez NOA' },
  matcha: { src: '/photos/noa/matcha.jpg', w: 360, h: 360,
    alt: 'Le matcha latte de NOA' },
  latte: { src: '/photos/noa/latte.jpg', w: 290, h: 290,
    alt: 'Un latte de NOA' },
  coffee: { src: '/photos/noa/coffee.jpg', w: 330, h: 330,
    alt: 'Un espresso de NOA' },
  cookie: { src: '/photos/noa/cookie.jpg', w: 300, h: 300,
    alt: 'Le cookie de NOA, chocolat noir et fleur de sel' },
  brownie: { src: '/photos/noa/matcha-brownie.jpg', w: 340, h: 340,
    alt: 'Le brownie matcha de NOA, chocolat blanc' },
};

/* ── Carte ─────────────────────────────────────────────────────
   Item names and wording read off NOA's own chalkboard, or named
   in public NOA-attributable listings. Nothing invented.

   price stays null until NOA confirms it: NOA publishes no price
   list, and the board in the counter photograph is undated, so
   the one figure legible on it is deliberately not reproduced.
   Put a number in and it renders. One edit point, no duplicates.
   ─────────────────────────────────────────────────────────────── */
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
    { n: 'Brownie matcha', d: 'chocolat blanc', price: _ },
    { n: 'Cookie', d: 'chocolat noir, fleur de sel', price: _ },
    { n: 'Carrot cake', d: '', price: _ },
  ] },
];

/* The four most often named, in NOA's own wording.
   photo: null where no NOA photograph exists yet — the item is
   carried by type alone rather than by a stand-in image. */
export const FAVORIS = [
  { n: ['Brownie', 'matcha'], d: 'Chocolat blanc.', photo: P.brownie },
  { n: ['Cookie'], d: 'Chocolat noir, fleur de sel.', photo: P.cookie },
  { n: ['Carrot', 'cake'], d: '', photo: null },
  { n: ['Petit-déjeuner', 'scandinave'], d: '', photo: P.breakfast },
];

/* Verbatim extracts from public Google reviews. Nothing rewritten. */
export const REVIEWS = [
  'I tried their matcha brownie and wow so good!',
  'Lovely cafe with nice stuff, good coffee and a homey feel to it.',
  'There’s love put into it and you can see it on the owner’s face.',
];

/* Shown beside the Instagram call to action. Real NOA photographs,
   not a mock-up of their feed. */
export const SOCIAL = [P.matcha, P.cookie, P.dog, P.latte, P.toast, P.brownie];
