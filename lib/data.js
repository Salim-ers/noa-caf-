/* ── Brand ───────────────────────────────────────────────────── */
export const C = {
  green: "#013930",   // sampled from the logo background
  white: "#FEFDFC",   // sampled from the logo letterforms
  paper: "#F2EFE9",   // off-white wall       TODO verify vs interior photo
  oak:   "#C9A87C",   // light oak            TODO verify vs interior photo
  ink:   "#14171A",
};

/* ── Verified business facts ─────────────────────────────────── */
export const SITE = {
  name: "NOA",
  tagline: "Café & Friends",
  street: "6 rue Mélingue",
  city: "75019 Paris",
  origin: "https://noacafe.paris",   // TODO set the real domain before deploy
  geo: { lat: 48.874906, lng: 2.3861603 },
  maps: "https://maps.google.com/?q=NOA+caf%C3%A9,+6+Rue+Melingue,+75019+Paris",
  instagram: "https://www.instagram.com/noacafeparis/",
  tiktok: "https://www.tiktok.com/@noacafeparis",
  rating: "4,9",
  reviews: "500+",
};

/* Google Business hours. Instagram and press list different days —
   see TODOS. 0 = Monday. */
export const HOURS = [
  { d: "Lundi",    o: "8h30", c: "17h", open: [8.5, 17] },
  { d: "Mardi",    o: "8h30", c: "17h", open: [8.5, 17] },
  { d: "Mercredi", o: "8h30", c: "17h", open: [8.5, 17] },
  { d: "Jeudi",    o: "10h",  c: "17h", open: [10, 17] },
  { d: "Vendredi", o: "8h30", c: "17h", open: [8.5, 17] },
  { d: "Samedi",   o: "10h",  c: "18h", open: [10, 18] },
  { d: "Dimanche", o: "10h",  c: "18h", open: [10, 18] },
];

/* Only items with independent public mentions. No invented dishes.
   price: null until NOA supplies the real card — one edit point. */
export const MENU = [
  {
    id: "cafe", label: "Café",
    items: [
      { n: "Flat white",   d: "", price: null },
      { n: "Latte",        d: "nature ou vanille", price: null },
      { n: "Espresso",     d: "", price: null },
      { n: "Café filtre",  d: "", price: null },
    ],
  },
  {
    id: "matcha", label: "Matcha",
    items: [
      { n: "Matcha latte",       d: "chaud", price: null },
      { n: "Iced matcha latte",  d: "", price: null },
    ],
  },
  {
    id: "petitdej", label: "Petit-déjeuner",
    items: [
      { n: "Petit-déjeuner scandinave", d: "", price: null },
      { n: "Avocado toast",             d: "", price: null },
    ],
  },
  {
    id: "patisserie", label: "Pâtisserie maison",
    items: [
      { n: "Brownie matcha", d: "chocolat blanc", price: null },
      { n: "Cookie",         d: "chocolat noir, fleur de sel", price: null },
      { n: "Carrot cake",    d: "frosting", price: null },
    ],
  },
];

/* The four products publicly mentioned most often. */
export const FAVORIS = [
  { n: "Brownie matcha", d: "Chocolat blanc.",              slot: "06", ratio: "3 / 4" },
  { n: "Cookie",         d: "Chocolat noir, fleur de sel.", slot: "07", ratio: "3 / 4" },
  { n: "Carrot cake",    d: "Frosting.",                    slot: "08", ratio: "3 / 4" },
  { n: "Petit-déjeuner scandinave", d: "",                  slot: "09", ratio: "3 / 4" },
];

/* Verbatim extracts from public Google reviews. Nothing rewritten. */
export const REVIEWS = [
  "Lovely cafe with nice stuff, good coffee and a homey feel to it.",
  "Lots of dogs come and go and the food and coffee is peak.",
  "I tried their matcha brownie and wow so good!",
];

export const TODOS = [
  ["Horaires", "Trois sources se contredisent : Google (lun–mer 8h30, jeu 10h), la bio Instagram (lun–ven 8h30) et un article de presse (mer–ven seulement). Le site affiche Google. À trancher par NOA."],
  ["Tarifs", "Aucun tarif officiel publié. Un seul prix circule (matcha 5 €, mention TikTok non datée) — non repris ici. Tous les prix sont à null dans MENU."],
  ["Photographies", "15 emplacements vides. Aucune image tierce n'a été intégrée : les photos Instagram, TikTok et Google appartiennent à NOA, à ses clients et à des créateurs. Voir la liste des cadrages."],
  ["Carte complète", "Seuls les 11 produits cités publiquement figurent ici. Le reste de la carte manque."],
  ["Laits végétaux", "Non vérifié. Retiré du site."],
  ["Ordinateurs le week-end", "Annoncé sur la bio Instagram. Une source tierce décrit le lieu comme laptop-friendly en semaine. À confirmer."],
  ["Téléphone", "Aucun numéro public. Pas de bouton Appeler."],
  ["Ouverture / histoire", "Le récit de la fondation circule via des vidéos tierces, pas via NOA. Réduit à un seul fait : café indépendant fondé par Noémie."],
  ["Accès", "Jourdain et Pyrénées sont bien sur la ligne 11. Les temps de marche et les lignes de bus ne sont pas vérifiés — retirés."],
  ["JSON-LD aggregateRating", "Balise la note Google. Google déconseille de baliser des avis collectés ailleurs. À garder ou retirer."],
];

/* Photo slots — filename, subject, aspect ratio. */
export const SLOTS = {
  "01": ["devanture-enseigne", "3 / 2"],
  "02": ["salle-complete", "16 / 9"],
  "03": ["comptoir", "4 / 5"],
  "04": ["banquette-verte", "3 / 4"],
  "05": ["terrasse-rue", "3 / 2"],
  "06": ["brownie-matcha", "3 / 4"],
  "07": ["cookie", "3 / 4"],
  "08": ["carrot-cake", "3 / 4"],
  "09": ["petit-dejeuner-scandinave", "3 / 4"],
  "10": ["flat-white", "1 / 1"],
  "11": ["matcha", "1 / 1"],
  "12": ["avocado-toast", "4 / 5"],
  "13": ["detail-bois-lumiere", "1 / 1"],
  "14": ["tasses-packaging", "4 / 5"],
  "15": ["equipe", "4 / 5"],
};

