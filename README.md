# NOA — Café & Friends

Site du coffee shop NOA, 6 rue Mélingue, 75019 Paris.
Next.js 14 (App Router), sans dépendance UI. Cinq routes statiques.

## Démarrer

```bash
npm install
npm run dev
```

## Déployer sur Vercel

1. Poussez ce dossier sur un repo GitHub.
2. Sur vercel.com → Add New → Project → importez le repo.
3. Ne changez aucun réglage : Vercel détecte Next.js seul.
4. Deploy.

## Avant la mise en ligne — obligatoire

1. **Domaine.** `lib/data.js` → `SITE.origin`. Il alimente le canonical,
   l'OpenGraph, le sitemap et le JSON-LD. Laisser la valeur par défaut
   casserait tout le référencement.
2. **Photos.** Voir `public/photos/README.md` : 15 fichiers, puis passez
   `src` aux composants `<Photo>`. Aucune image tierce n'est embarquée.
3. **Prix.** `lib/data.js` → `MENU`. Tous à `null`. Un seul point d'édition,
   aucun prix n'est dupliqué ailleurs.
4. **Horaires.** `lib/data.js` → `HOURS`, à répercuter dans
   `app/layout.jsx` → `openingHoursSpecification`. Trois sources se
   contredisent, voir les notes de production.
5. **Image OpenGraph.** Ajoutez `app/opengraph-image.jpg` (1200×630).
6. **Retirer le panneau de notes.** Supprimez `components/Notes.jsx`
   et ses deux lignes dans `app/layout.jsx`.

## Structure

```
app/
  layout.jsx      métadonnées globales + JSON-LD rendu serveur
  page.jsx        accueil
  carte/ lieu/ histoire/ venir/
  sitemap.js robots.js globals.css
components/
  Fit.jsx         titres mis à l'échelle pour remplir leur colonne
  Photo.jsx       emplacement photo, next/image quand src est fourni
  Logo.jsx        le vrai logo NOA, vectorisé, hérite de currentColor
lib/data.js       toutes les données éditables du site
```

## Notes

- Les couleurs viennent d'un échantillonnage du fichier logo :
  vert `#013930`, blanc `#FEFDFC`.
- `aggregateRating` est commenté dans `app/layout.jsx`. Google déconseille
  de baliser des avis collectés sur une plateforme tierce.
- Le mouvement passe par IntersectionObserver. Pour GSAP ScrollTrigger,
  remplacez `components/Reveal.jsx` — c'est le seul point d'entrée.
