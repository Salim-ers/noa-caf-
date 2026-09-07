# NOA — Café & Friends

Site vitrine du coffee shop NOA, 6 rue Mélingue, 75019 Paris.
Next.js 15 (App Router), React 19, JavaScript et CSS, GSAP pour les animations.
Huit pages prérendues : accueil, carte, lieu, histoire, venir, mentions
légales, confidentialité et cookies. Aucun compte, formulaire, paiement
ou back-office ; les contenus sont modifiés dans le code.

## Développement

Utiliser Node.js 22 LTS ou 24 LTS et npm.

```bash
npm ci
npm run dev
```

```bash
npm run build
npm start
npm audit
```

Sous PowerShell, utiliser `npm.cmd` si la politique d'exécution bloque
`npm.ps1`. Le build télécharge Outfit via `next/font/google` : un accès
réseau est nécessaire, puis la police est servie par le site.
Le script historique `npm run lint` nécessite une configuration ESLint
qui n'est pas encore présente ; il ne constitue pas un contrôle opérationnel.

## Démo et mise en ligne

La variable `NEXT_PUBLIC_SITE_ORIGIN` doit rester absente pour une démo
non indexable : les pages principales portent `noindex, nofollow` et `robots.txt`
interdit l'exploration. Le domaine de repli du code n'est pas une adresse
de production validée. Ne pas remplacer simplement `SITE.origin` :
l'activation de l'indexation dépend de la variable.

Pour la production, définir l'origine HTTPS définitive, sans slash final :

```dotenv
NEXT_PUBLIC_SITE_ORIGIN=https://votre-domaine.fr
```

Reconstruire et redéployer après ce changement. La variable alimente les
URL canonical, OpenGraph, sitemap et JSON-LD, et active l'indexation.
Le sitemap contient les cinq pages principales. Les trois pages légales
conservent `noindex, follow`, y compris en production.

Avant publication, faire valider par NOA les prix, horaires, avis et
informations légales, ainsi que l'hébergeur renseigné (Vercel par défaut).
Trier les photographies et vérifier les autorisations d'utilisation.
Les notes de livraison et de provenance sont conservées localement dans
`_interne/`, ignoré par Git et absent d'un nouveau clone.

## Structure et contenus

```text
app/
  layout.jsx             police, structure commune, métadonnées, JSON-LD
  page.jsx               accueil
  carte/ lieu/ histoire/ venir/
  mentions-legales/ confidentialite/ cookies/
  globals.css            styles et adaptations responsive
  opengraph-image.jpg    image de partage
  sitemap.js robots.js   référencement
components/
  Header Footer Dock Loader
  Hero Favoris Reviews Social VenirPage
  Hours useNow           horaires et état ouvert/fermé à l'heure de Paris
  MapFrame Consent useConsent
  Photo Logo Glyph Fit Reveal Marquee Doodles
lib/
  data.js                contenus, photos, carte, horaires, avis, société
  consent.js             choix du visiteur et synchronisation
  nav.js                 liens de navigation
  logo.js glyph.js       tracés de la marque
public/
  photos/noa/            photographies
  brand/                 marques graphiques
```

Dans `lib/data.js` :

- `MENU` contient les six catégories et les 30 articles avec leurs prix.
- `HOURS` contient les horaires ; répercuter toute modification dans
  `app/layout.jsx`, sous `openingHoursSpecification`.
- `P` centralise les fichiers photo, dimensions et textes alternatifs.
  Pour remplacer une photo, conserver son nom et actualiser `w`, `h` et `alt`.
- `SITE`, `REVIEWS` et `LEGAL_INFO` regroupent les coordonnées, réseaux,
  avis et informations de l'établissement. La note et les avis sont figés,
  sans synchronisation avec Google ou TikTok.

## Identité et interactions

Le vert principal est `#024038`, accompagné de crème, blanc cassé,
encre et noyer. La carte ajoute de l'orange et du bleu. Outfit est la
seule famille typographique, en cinq graisses.

Le logotype NOA est un SVG issu de `lib/logo.js`. Les deux tasses sont
des images utilisées en masque CSS ; les marques héritent de `currentColor`.
`Glyph` reprend le O du logotype dans les titres.

GSAP et ScrollTrigger animent les révélations et le bandeau au défilement.
Les styles prennent en compte `prefers-reduced-motion` et prévoient un
affichage du contenu sans JavaScript.

Google Maps est intégré dans `MapFrame`, après acceptation du visiteur.
Avant cela, le composant présente l'adresse et les actions d'affichage
du plan ou d'itinéraire. Le choix est conservé dans `localStorage`
(`noa-cookies`). Pour réinitialiser le choix, effacer les données du site
dans le navigateur, comme indiqué sur la page Cookies.
Les réseaux sociaux sont de simples liens, sans flux intégré.

## Dépendances et sécurité

Contrôle effectué le 7 septembre 2026 : Next.js **15.5.25**, React et
React DOM **19.2.8**. PostCSS est fixé à **8.5.28** par un `override`
limité à Next.js, pour corriger sa dépendance transitive. À réévaluer
lors de la prochaine mise à jour de Next.js.

`npm audit` ne remonte aucune vulnérabilité après cette mise à jour.
Ce résultat décrit les avis connus au moment du contrôle, pas une
garantie générale de sécurité. Le fichier `package-lock.json` doit être
versionné ; `npm ci` permet de reproduire l'installation.

Référence : [correctifs Next.js d'août 2026](https://nextjs.org/blog/august-2026-security-release).
La branche 15.5 dispose de correctifs : migrer vers Next.js 16 n'est
pas nécessaire pour appliquer ceux-ci.

`next.config.mjs` configure les en-têtes de sécurité, dont une CSP qui
autorise les scripts inline nécessaires au rendu actuel, et limite les
iframes à Google Maps. `sharp` assure l'optimisation des images.
Le JSON-LD est rendu côté serveur et n'inclut pas `aggregateRating`.
