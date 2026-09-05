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
  /* l'orange de la carte imprimée, pour les mêmes lignes qu'elle */
  sun: '#D9762F',
  /* le bleu de la boutique, demandé pour la distinguer des jus */
  ink2: '#1F4E79',
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
  /* Google Maps, cadre sans clé d'API. Contrairement à
     OpenStreetMap, Google dépose des traceurs : c'est écrit dans les
     pages Confidentialité et Cookies. */
  map: 'https://maps.google.com/maps?q=6+rue+M%C3%A9lingue,+75019+Paris&hl=fr&z=16&output=embed',
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

   w/h sont les dimensions réelles du fichier. Aucune n'est agrandie
   au-delà de ce qu'elle mesure : une image posée dans un emplacement
   plus large qu'elle serait molle, alors c'est l'emplacement qui
   s'adapte, pas l'image.
   ─────────────────────────────────────────────────────────────── */
export const P = {
  /* la rue */
  devanture: { src: '/photos/noa/devanture.jpg', w: 1122, h: 1402,
    alt: 'La devanture de NOA, son store vert et ses horaires sur la vitre' },
  facade: { src: '/photos/noa/facade.jpg', w: 1122, h: 1402,
    alt: 'La façade de NOA, portes ouvertes sur la rue Mélingue' },
  terrace: { src: '/photos/noa/terrace.jpg', w: 1800, h: 2400,
    alt: 'La terrasse de NOA et ses bancs, sous le store vert' },
  hero: { src: '/photos/noa/hero.jpg', w: 1351, h: 2400,
    alt: 'La devanture de NOA le soir, sa salle éclairée' },

  /* la salle */
  interior: { src: '/photos/noa/interior.jpg', w: 1024, h: 1536,
    alt: 'La salle de NOA : tables rondes, tabourets, miroir et fleurs' },
  interiorWide: { src: '/photos/noa/interior-wide.jpg', w: 1672, h: 941,
    alt: 'La salle de NOA en enfilade, du comptoir aux tables' },
  counter: { src: '/photos/noa/counter.jpg', w: 1122, h: 1402,
    alt: 'Le comptoir de NOA, sa vitrine à pâtisseries et sa lanterne en papier' },
  counterTall: { src: '/photos/noa/counter-tall.jpg', w: 1024, h: 1536,
    alt: 'Le comptoir de NOA vu de la salle' },
  tableFenetre: { src: '/photos/noa/table-fenetre.jpg', w: 941, h: 1672,
    alt: 'Une table de NOA près de la fenêtre : bouquet, cookie et carafe' },
  vitrineLogo: { src: '/photos/noa/vitrine-logo.jpg', w: 1400, h: 2307,
    alt: 'La vitrine de NOA, le logo deux tasses et Café & Friends' },
  salleTables: { src: '/photos/noa/salle-tables.jpg', w: 1400, h: 2307,
    alt: 'Les tables de NOA près de la fenêtre, rue Mélingue' },

  /* le salon, le local voisin */
  salonLarge: { src: '/photos/noa/salon-large.jpg', w: 1672, h: 941,
    alt: 'Le nouveau salon de NOA : canapé, tables basses et lanterne' },
  salonVue: { src: '/photos/noa/salon-vue.jpg', w: 1400, h: 2307,
    alt: 'Le salon de NOA : canapé, tables rondes et lanterne en papier' },
  salonCadre: { src: '/photos/noa/salon-cadre.jpg', w: 1400, h: 2307,
    alt: 'La banquette et le cadre au mur, dans le salon' },
  salonLanterne: { src: '/photos/noa/salon-lanterne.jpg', w: 1400, h: 2307,
    alt: 'Le canapé du salon sous la lanterne en papier' },
  lounge: { src: '/photos/noa/lounge.jpg', w: 1600, h: 2400,
    alt: 'Le canapé du salon, une table basse et des livres' },

  /* les gens */
  noemie: { src: '/photos/noa/noemie.jpg', w: 1024, h: 1536,
    alt: 'Noémie devant la vitrine de NOA, rue Mélingue' },

  /* la tasse */
  latteWide: { src: '/photos/noa/latte-wide.jpg', w: 1672, h: 941,
    alt: 'Un latte de NOA et sa rosetta, sur une table ronde' },
  latte: { src: '/photos/noa/latte.jpg', w: 2400, h: 2400,
    alt: 'Un latte de NOA et sa rosetta' },
  iced: { src: '/photos/noa/iced.jpg', w: 941, h: 1672,
    alt: 'Deux iced lattes de NOA sur une table en noyer, au soleil' },
  matcha: { src: '/photos/noa/matcha.jpg', w: 1800, h: 2400,
    alt: 'Le matcha latte de NOA et sa rosetta' },
  matchaWide: { src: '/photos/noa/matcha-wide.jpg', w: 2400, h: 1351,
    alt: 'Le matcha latte de NOA, sur le rebord de la fenêtre' },
  coffee: { src: '/photos/noa/coffee.jpg', w: 1600, h: 2400,
    alt: 'Un café et un matcha sur une table de NOA' },
  coffeeWide: { src: '/photos/noa/coffee-wide.jpg', w: 2400, h: 1351,
    alt: 'Un iced matcha et une part de brownie matcha sur une table de NOA' },
  duoWide: { src: '/photos/noa/duo-wide.jpg', w: 2400, h: 1351,
    alt: 'Un latte et un matcha latte de NOA, vus de dessus sur une table en noyer' },

  /* l'assiette */
  matchaBrownie: { src: '/photos/noa/matcha-brownie.jpg', w: 1254, h: 1254,
    alt: 'Le brownie matcha de NOA, chocolat blanc, sur une serviette NOA' },
  cookie: { src: '/photos/noa/cookie.jpg', w: 765, h: 1020,
    alt: 'Le cookie de NOA, chocolat noir et fleur de sel' },
  carrotCake: { src: '/photos/noa/carrot-cake.jpg', w: 1600, h: 2400,
    alt: 'Le carrot cake de NOA, glaçage cream cheese et pistache' },
  cakeCafe: { src: '/photos/noa/cake-cafe.jpg', w: 1122, h: 1402,
    alt: 'Un cappuccino et une part de gâteau du jour, près de la fenêtre' },
  case: { src: '/photos/noa/case.jpg', w: 1254, h: 1254,
    alt: 'La vitrine à pâtisseries de NOA, les gâteaux du jour écrits sur le verre' },
  breakfast: { src: '/photos/noa/breakfast.jpg', w: 1800, h: 2400,
    alt: 'Le petit-déjeuner de NOA : matcha latte, avocado toast et jus pressé' },
  brunch: { src: '/photos/noa/brunch.jpg', w: 1800, h: 2400,
    alt: 'À table chez NOA : tartine, cookie, œuf et pain de seigle' },
  toast: { src: '/photos/noa/toast.jpg', w: 1800, h: 2400,
    alt: 'L’avocado toast de NOA, avocat et pousses sur pain de seigle' },
  spread: { src: '/photos/noa/spread.jpg', w: 1800, h: 2400,
    alt: 'Une table de NOA vue de dessus : tartines, matcha, cafés et pain de seigle' },
  cardWide: { src: '/photos/noa/card-wide.jpg', w: 2400, h: 1351,
    alt: 'Un matcha latte et un jus pressé posés à côté de la carte au logo deux tasses' },
};

/* ── La carte ──────────────────────────────────────────────────
   Relevée sur la carte imprimée de NOA, telle qu'elle est posée sur
   les tables. Noms, descriptions, ordre et prix : rien n'est
   réarrangé, rien n'est ajouté.

   accent: true reprend les lignes que la carte imprime en orange.

   Les prix sont en euros TTC, service inclus — c'est écrit en bas de
   la carte, et c'est repris en note sous la liste.
   ─────────────────────────────────────────────────────────────── */
export const MENU = [
  { id: 'sucre', label: 'Sucré', shot: 'tableFenetre', items: [
    { n: 'Banana bread', d: '', price: 4.5 },
    { n: 'Carrot cake', d: '', price: 4.5 },
    { n: 'Gâteau du moment', d: '', price: 4.5 },
    { n: 'Cookie', d: 'chocolat noir & fleur de sel', price: 3.5 },
    { n: 'Brownie matcha', d: 'chocolat blanc', price: 4 },
    { n: 'Chocolate cake', d: 'vegan & sans gluten', price: 3.5 },
  ] },
  { id: 'sale', label: 'Salé', shot: 'toast', items: [
    { n: 'Petit déjeuner scandinave', d: 'pain noir sans gluten, œuf coque, comté, beurre fouetté', price: 8 },
    { n: 'Tartine NOA', d: 'pain complet, cream cheese, concombre, avocat, graines germées', price: 10 },
    { n: 'Sandwich du moment', d: '', price: 8 },
  ] },
  { id: 'chaud', label: 'Chaud', shot: 'latte', items: [
    { n: 'Espresso', d: '', price: 2.5 },
    { n: 'Double', d: '', price: 3 },
    { n: 'Filtre', d: '', price: 4 },
    { n: 'Cortado', d: '', price: 4 },
    { n: 'Latte', d: '', price: 5 },
    { n: 'Flat white', d: '', price: 5 },
    { n: 'Cappuccino', d: '', price: 4.5 },
    { n: 'Chaï', d: '', price: 5.5 },
    { n: 'Matcha', d: '', price: 5.5 },
    { n: 'Thé', d: '', price: 5 },
  ] },
  { id: 'froid', label: 'Froid', shot: 'iced', items: [
    { n: 'Iced latte', d: '', price: 5.5 },
    { n: 'Iced matcha', d: '', price: 6 },
    { n: 'Cold brew', d: '', price: 6 },
    { n: 'Supplément lait d’avoine', d: '', price: 0.5 },
  ] },
  { id: 'premier-soleil', label: 'Premier Soleil', accent: true, shot: 'matcha', items: [
    { n: 'Jus orange', d: '', price: 5.5 },
    { n: 'Jus mixte', d: 'orange, carotte, gingembre', price: 5.5 },
    { n: 'Espresso sunrise', d: 'café, orange, vanille', price: 5 },
    { n: 'Orangeade UMA', d: '', price: 5 },
    { n: 'Limonade UMA', d: '', price: 5 },
  ] },
  /* La carte imprime ces deux lignes dans le même bloc orange que
     Premier Soleil. Elles sont sorties ici sous leur propre intitulé :
     ce sont des vêtements NOA, pas des boissons. */
  { id: 'boutique', label: 'Boutique', accent: 'blue', items: [
    { n: 'T-shirt NOA', d: '', price: 30 },
    { n: 'Casquette NOA', d: '', price: 25 },
  ] },
];

/* Les trois mentions imprimées en pied de carte. */
export const MENU_NOTES = [
  'Liste des allergènes disponible au comptoir.',
  'Prix en euros TTC, service inclus.',
  'Toutes les pâtisseries et les propositions salées sont faites maison.',
];

/* The four most often named, in NOA's own wording.
   photo: null where no NOA photograph exists yet — the item is
   carried by type alone rather than by a stand-in image. */
export const FAVORIS = [
  { n: ['Brownie', 'matcha'], d: 'Chocolat blanc.', photo: P.matchaBrownie },
  { n: ['Cookie'], d: 'Chocolat noir, fleur de sel.', photo: P.cookie },
  { n: ['Carrot', 'cake'], d: '', photo: P.carrotCake },
  { n: ['Petit-déjeuner', 'scandinave'], d: '', photo: P.breakfast },
];

/* Avis publics, mot pour mot. Rien de réécrit, rien de traduit :
   les avis anglais restent en anglais, avec leur langue marquée pour
   que le lecteur d'écran change de voix. NOA n'est listé que sur
   Google — pas de fiche Tripadvisor, TheFork ni Yelp — donc tous
   viennent de là, sauf le dernier, publié sur TikTok. */
export const REVIEWS = [
  { t: 'Le meilleur café de Paris ! Tout y est succulent : la tartine Noa, le cookie, le brownie au matcha, le chocolat chaud, ainsi que le café. Le service est toujours accueillant et attentif, un véritable plaisir à chaque passage.',
    src: 'Google' },
  { t: 'Cookies délicieux, équipe accueillante et toujours souriante. J’ai hâte d’y retourner.',
    src: 'Google' },
  { t: 'Le cookie et le blondie matcha faits maison étaient juste excellents. Ma nouvelle adresse fav’.',
    src: 'TikTok' },
  { t: 'This place deserves the 5/5. There’s love put into it and you can see it on the owner’s face.',
    src: 'Google', lang: 'en' },
  { t: 'I love this coffee shop! It’s super cozy, the coffee is fantastic, their desserts and breakfasts too. I tried their matcha brownie and wow so good!',
    src: 'Google', lang: 'en' },
  { t: 'Lovely cafe with nice stuff, good coffee and a homey feel to it. We really enjoyed having breakfast here.',
    src: 'Google', lang: 'en' },
  { t: 'Delicious latte served in this cute coffee shop. Staff is nice and friendly.',
    src: 'Google', lang: 'en' },
];

/* Shown beside the Instagram call to action. Real NOA photographs,
   not a mock-up of their feed. */
/* Les réseaux ne montrent plus de vignettes : le flux Instagram ne
   peut pas être récupéré sans jeton, et une grille figée mentait sur
   ce qu'elle était. Deux liens, et un téléphone dessiné. */
export const SOCIAL_LINKS = [
  { label: 'Instagram', handle: '@noacafeparis', href: SITE.instagram },
  { label: 'TikTok', handle: '@noacafeparis', href: SITE.tiktok },
];

/* ── Informations légales ──────────────────────────────────────
   Vérifié sur recherche-entreprises.api.gouv.fr (miroir INSEE /
   RNE) le 3 septembre 2026, à partir du SIREN 930100995.

   La forme juridique vient du code INSEE 5499 et du titre de la
   dirigeante, « Gérante » : c'est une SARL, pas une SAS.

   Capital social communiqué par NOA.

   host : l'hébergeur réel du site déployé. Si vous ne déployez pas
   sur Vercel, corrigez ici.
   ─────────────────────────────────────────────────────────────── */
export const LEGAL_INFO = {
  company: 'NOA',
  form: 'Société à responsabilité limitée',
  siren: '930 100 995',
  siret: '930 100 995 00016',
  rcs: 'RCS Paris 930 100 995',
  naf: '56.10C — Restauration de type rapide',
  creation: '15 juin 2024',
  capital: '1 000 €',
  address: '6 rue Mélingue, 75019 Paris',
  director: 'Noémie Gerardin Poirot Leobons',
  directorRole: 'Gérante',
  host: {
    name: 'Vercel Inc.',
    address: '440 N Barranca Ave #4133, Covina, CA 91723, États-Unis',
    url: 'https://vercel.com',
  },
};
