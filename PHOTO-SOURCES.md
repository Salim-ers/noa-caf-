# Photographies — provenance et statut de licence

**Ce fichier n'est pas publié.** Il vit à la racine du dépôt, pas dans
`public/`, et n'apparaît nulle part sur le site.

## Statut

Toutes les photographies de `public/photos/noa/` sont **des références de
travail**, pas des fichiers de production. Elles proviennent de pages
publiques consacrées à ce NOA précis — 6 rue Mélingue, 75019 — et servent
à caler la direction artistique sur le vrai lieu.

**Aucune n'est acquise pour un usage commercial.** Une au moins porte un
crédit photographe explicite (voir ci-dessous). Avant la mise en ligne,
NOA doit fournir ses propres fichiers, ou obtenir l'accord écrit des
auteurs.

## Remplacer un fichier

Le système est fait pour ça. Déposez le nouveau JPEG **sous le même nom**
dans `public/photos/noa/`, puis corrigez `w` et `h` dans `lib/data.js` →
`P`. Rien d'autre à toucher : chaque photo n'est référencée qu'une fois.

Fournissez si possible 2400 px sur le grand côté. AVIF et WebP sont
générés automatiquement par `next/image`.

## Sources

### Série éditoriale — © SABRINA SAKO

Crédit lisible en bas à droite du montage d'origine. **C'est le crédit le
plus contraignant du lot : il faut l'accord de la photographe.**

Page : `https://www.lumpmedia.fr/lieux/noa-cafe-paris-coffeeshop-dog-friendly-paris19`
Fichiers d'origine : `68ef8e67…_Noa Café.png`, `68ef8e71…_Noa Café-1.png`
(deux montages de trois photos, détourés et redressés par recadrage)

| Fichier | Sujet |
|---|---|
| `counter.jpg` | Le comptoir, la vitrine à pâtisseries, le tableau noir |
| `team.jpg` | Détail du comptoir (recadrage de `counter.jpg`) |
| `interior.jpg` | La salle à travers la vitrine |
| `dog.jpg` | Un chien dans la salle |
| `terrace.jpg` | La terrasse et le store vert, un jour d'été |
| `breakfast.jpg` | Petit-déjeuner scandinave et matcha latte |
| `matcha.jpg` | Le matcha latte (recadrage de `breakfast.jpg`) |
| `toast.jpg` | Avocado toast et croque |

### Devanture

Page : même article. Fichier d'origine `68ef8f6b…_unnamed.webp`, 816 × 1020.

| Fichier | Sujet |
|---|---|
| `hero.jpg` | La devanture entière, store vert, fin de journée |

### Vitrine et logo

Source : `https://images.mapstr.com/491d51b7d93ae762921aab5895a24620_image_8e2e3859-4b80-4a89-aaa5-b7aa84a8ac78.jpeg`
(fiche Mapstr du lieu), 819 × 1024. Auteur non crédité sur la page.

| Fichier | Sujet |
|---|---|
| `window.jpg` | La vitrine, logo deux tasses + CAFÉ & FRIENDS |

C'est aussi le fichier dont sont tirés `public/brand/noa-mark.png` et
`public/brand/noa-lockup.png` — voir plus bas.

### Table

Source : `https://yfzbjgdrggzcwpbroops.supabase.co/storage/v1/object/public/cafe-covers/de65d6d9-765e-4d09-9105-e964b7dd336f/1778799236194-1778799235983-0.jpg`
(photo de couverture de la fiche Sip Club), 879 × 1080. Auteur non crédité.

| Fichier | Sujet |
|---|---|
| `spread.jpg` | La table entière |
| `matcha-brownie.jpg` | Le brownie matcha (recadrage) |
| `cookie.jpg` | Le cookie (recadrage) |
| `coffee.jpg` | L'espresso (recadrage) |
| `latte.jpg` | Le latte (recadrage) |

## Vérification d'identité

Chaque image a été rapprochée du lieu avant d'être retenue. Il existe
d'autres établissements nommés NOA — dont un compte Instagram
`@noacoffee_cafe` sans rapport — et aucune de leurs images n'est ici.

Points de recoupement retenus : le store vert et son lettrage `NOA` ;
le logo deux tasses et `CAFÉ & FRIENDS` sur la vitrine ; les tables
rondes en noyer ; les assiettes en grès sable ; le monstera près de la
fenêtre ; l'enseigne voisine `JÉRÔME GAUTHIER STUDIO`, qui situe la rue.

## Résolution

Les originaux disponibles publiquement plafonnent entre 300 et 1080 px.
Les variantes plus grandes du CDN répondent `403`. C'est suffisant pour
juger la mise en page, **pas** pour un plein écran en production : d'où
le point précédent, les fichiers doivent venir de NOA.

## Marque

`public/brand/noa-mark.png` et `noa-lockup.png` sont **le vrai logo NOA**,
isolé depuis `window.jpg` : seuil sur la luminance, alpha adouci sur les
bords, fond détouré. Le tracé n'a pas été redessiné — c'est le dessin de
NOA, pas une reconstitution.

Ils sont posés en `mask-image`, donc ils prennent `currentColor` : un seul
fichier sert le blanc sur la photo, le vert sur le crème et l'encre sur le
blanc. Si NOA fournit un SVG, remplacez les deux fichiers et
`components/Logo.jsx` continue de fonctionner tel quel.
