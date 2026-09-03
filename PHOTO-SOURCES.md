# Photographies — provenance

**Ce fichier n'est pas publié.** Il vit à la racine du dépôt, pas dans
`public/`, et n'apparaît nulle part sur le site.

## Statut : fournies par NOA

Les 19 fichiers de `public/photos/noa/` viennent de **NOA**, remis
directement pour ce site. Le blocage de licence qui pesait sur la
version précédente est levé : plus aucune image tierce n'est utilisée.

Les fichiers d'origine étaient en 3840 px. Ils ont été ramenés à
2400 px sur le grand côté, en JPEG qualité 88 progressif — la limite
utile pour un écran. Le lot passe de 33 Mo à 9 Mo, sans perte visible.
Les originaux 4K sont à conserver de votre côté, hors dépôt.

## Ce qui a été fait à chaque fichier

Rien, sauf pour deux d'entre eux : la photo qui montrait le brownie
matcha et le cookie côte à côte a été recadrée en deux carrés, un par
produit, pour la section « Les favoris ».

| Fichier livré | Devenu | Traitement |
|---|---|---|
| `CCC_4K` | `hero.jpg` | redimensionné |
| `ddd_4K` | `facade.jpg` | redimensionné |
| `DEV_4K` | `terrace.jpg` | redimensionné |
| `XXX_4K` | `interior.jpg` | redimensionné |
| `az_4K` | `window.jpg` | redimensionné |
| `zzzzz_4K` | `counter.jpg` | redimensionné |
| `zae_4K` | `case.jpg` | redimensionné |
| `azdazdazdaz_4K` | `spread.jpg` | redimensionné |
| `qsd_4K` | `brunch.jpg` | redimensionné |
| `photo_4K` | `breakfast.jpg` | redimensionné |
| `azdazdaz_4K` | `toast.jpg` | redimensionné |
| `a_4K` | `matcha.jpg` | redimensionné |
| `azdqsxcQS_4K` | `card.jpg` | redimensionné |
| `unnamed_4K` | `latte.jpg` | redimensionné |
| `unnamed(1)_4K` | `cake-latte.jpg` | redimensionné |
| `azedaéed_4K` | `coffee.jpg` | redimensionné |
| `AQQQ_4K` | `carrot-cake.jpg` | redimensionné |
| `fff_4K` | `matcha-brownie.jpg` | recadré à gauche, carré |
| `fff_4K` | `cookie.jpg` | recadré à droite, carré |

## Ce que les photos ont appris sur la carte

`case.jpg` montre la vitrine à pâtisseries, les produits et leurs prix
écrits au feutre sur le verre. Deux produits n'étaient pas encore sur
le site et y ont été ajoutés, **sans prix** :

- **Chocolate cake**, noté « V/GF » sur la vitrine
- **Banana bread**

Les prix lisibles sur cette photo sont notés dans `lib/data.js`, en
commentaire, **non publiés**. Ils attendent une confirmation : la photo
n'est pas datée et un prix faux sur un site est un vrai problème.

## Marque

La marque principale est le **logotype `NOA` de l'auvent**, vectorisé
dans `lib/logo.js`. Comparé au lettrage de la devanture, il concorde :
mêmes fûts arrondis, même contrepoinçon oblique dans le O, même A à
sommet plat.

`public/brand/noa-mark.png` et `noa-lockup.png` sont **l'autre marque
NOA**, le dessin des deux tasses de la vitrine, isolé par seuillage sur
la luminance depuis une photographie de la vitrine. Le tracé n'a pas
été redessiné.

Les deux sont posés en `mask-image` ou en SVG, donc ils prennent
`currentColor` : un seul fichier sert le blanc sur vert comme le vert
sur crème. Si NOA fournit un SVG officiel, remplacez les fichiers et
`components/Logo.jsx` continue de fonctionner tel quel.
