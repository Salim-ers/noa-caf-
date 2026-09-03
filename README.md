# NOA — Café & Friends

Site du coffee shop NOA, 6 rue Mélingue, 75019 Paris.
Next.js 14 (App Router), cinq routes, toutes statiques.

```bash
npm install
npm run dev
```

## Avant la mise en ligne

1. **Domaine.** `NEXT_PUBLIC_SITE_ORIGIN` (ou `lib/data.js` → `SITE.origin`).
   Il alimente le canonical, l'OpenGraph, le sitemap et le JSON-LD.
2. **Photographies.** Les fichiers de `public/photos/noa/` sont des
   références de travail, pas des fichiers acquis. Lisez
   [`PHOTO-SOURCES.md`](./PHOTO-SOURCES.md) — c'est le point bloquant.
3. **Prix.** `lib/data.js` → `MENU`. Tous à `null`, donc aucun prix ne
   s'affiche. Mettez un nombre, il apparaît.
4. **Horaires.** `lib/data.js` → `HOURS`, à répercuter dans
   `app/layout.jsx` → `openingHoursSpecification`. Les sources
   publiques ne concordent pas toutes ; à trancher par NOA.

## Structure

```
app/
  layout.jsx        métadonnées, JSON-LD rendu serveur, la police
  page.jsx          accueil
  carte/ lieu/ histoire/ venir/
  opengraph-image.jpg
  sitemap.js robots.js globals.css
components/
  Hero Favoris Gallery Reviews Social Visit   les sections
  Photo.jsx         une photo NOA, sans cadre ni légende
  Logo.jsx          le vrai logo, en mask-image, prend currentColor
  Fit.jsx           titres à la largeur exacte de leur colonne
  Reveal.jsx        les quatre mouvements GSAP, et rien d'autre
lib/data.js         toutes les données éditables
```

## Le système

**Couleur.** `#024038` est échantillonné sur le store vert de la
devanture — médiane de 11 337 pixels de toile en lumière plate. Le crème,
le noyer et l'encre viennent des murs, des tables et du tableau noir.
Cinq valeurs, pas une de plus.

**Typographie.** Une seule famille, Outfit, en cinq graisses. Géométrique,
bols quasi circulaires, noire très lourde — la même famille de formes que
le lettrage du store et de la vitrine. Aucun second caractère.

**Logo.** `public/brand/` contient le vrai dessin de NOA, isolé depuis une
photographie de la vitrine, posé en `mask-image` : un fichier prend
`currentColor` et sert le blanc sur la photo comme le vert sur le crème.

**Mouvement.** GSAP + ScrollTrigger, quatre gestes seulement : révélation
par clip, léger recadrage d'échelle, ligne masquée, parallaxe lente.
L'état de repos est l'état vrai : les positions de départ sont en CSS
derrière `html.js`, donc sans JavaScript rien n'est jamais caché, et
`prefers-reduced-motion` va droit au repos.

**Photographies.** Chaque image n'est déclarée qu'une fois, dans
`lib/data.js` → `P`, avec ses vraies dimensions. Remplacez un fichier sous
le même nom, corrigez `w`/`h`, et tout le site suit.

## Notes

- `aggregateRating` est volontairement absent du JSON-LD : la note vient
  de Google, et Google demande de ne pas la baliser comme donnée propre.
- `sharp` est installé : sans lui, l'optimisation d'images de Next est
  très lente en production.
- `next@14.2.5` porte un avis de sécurité. À monter en version.
