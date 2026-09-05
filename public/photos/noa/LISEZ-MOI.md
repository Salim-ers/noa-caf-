# Déposez les photos ici

C'est le dossier que le site lit. Glissez vos fichiers ici en gardant
**exactement le même nom** que dans la liste, et la photo apparaît
toute seule au bon endroit.

## Deux règles

**Le nom doit être identique**, extension `.jpg` comprise. `hero.jpg`
marche ; `Hero.JPG` ou `hero (1).jpg` non.

**Ne renommez pas un fichier existant en autre chose.** Plusieurs fois,
un dépôt a effacé des photos encore utilisées — elles ont été reprises
depuis l'historique git, mais ça se voit sur le site en attendant.

## Format

JPEG. La bonne largeur dépend de l'emplacement :

| Emplacement | Largeur utile |
|---|---|
| Image qui court d'un bord à l'autre | 2400 px |
| Demi-colonne, tiers de colonne | 1400 px |
| Vignette carrée | 1000 px |

Au-delà, c'est du poids pour rien. En dessous, l'image est agrandie et
devient molle : **aucune photo n'est étirée au-delà de sa taille**,
c'est l'emplacement qui s'adapte.

## Ce qui est posé

**La rue** — `devanture` `facade` `terrace` `hero`
**La salle** — `interior` `interior-wide` `counter` `counter-tall` `table-fenetre` `vitrine-logo` `salle-tables`
**Le salon** — `salon-large` `salon-vue` `salon-cadre` `salon-lanterne` `lounge`
**Les gens** — `noemie`
**La tasse** — `latte` `latte-wide` `iced` `matcha` `matcha-wide` `coffee` `coffee-wide` `duo-wide`
**L'assiette** — `matcha-brownie` `cookie` `carrot-cake` `cake-cafe` `case` `breakfast` `brunch` `toast` `spread` `card-wide`

## En réserve

Certaines sont déclarées mais ne sont posées sur aucune page pour
l'instant : `facade` `terrace` `hero` `table-fenetre` `lounge`
`latte` `latte-wide` `matcha` `matcha-wide` `coffee` `brunch` `toast`
`spread`.

Elles sont prêtes — dites-moi où vous les voulez et je les place.

## Si une photo ne change pas à l'écran

Next garde un cache d'images optimisées :

```bash
rm -rf .next/cache/images
```

puis relancez.
