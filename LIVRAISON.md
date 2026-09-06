# Avant la mise en ligne

Six points. **Deux demandent une action avant de publier** — les
photographies et le domaine. Les autres sont des confirmations.

## 1. Les photographies — à trier

Les images viennent de Google, et deux origines s'y mélangent.

**Une bonne partie a été déposée par la fiche « NOA café »
elle-même.** C'est le matériel de l'établissement : les reprendre sur
son propre site ne pose pas de question envers un tiers. Un seul point
à vérifier — si un photographe a été payé, **la cession de droits doit
être écrite**. Une facture ne suffit pas : sans clause de cession, le
photographe reste titulaire, même payé.

**Le reste vient de photos d'avis clients**, et celles-là sont à
reprendre. Une photo prise par un client lui appartient ; publier son
avis donne une licence à Google, pas à l'établissement. La retouche n'y
change rien : une image modifiée reste une œuvre dérivée, et le droit
d'auteur de l'original la suit.

S'y ajoute le **droit à l'image** des personnes reconnaissables, quelle
que soit l'origine — plusieurs vues montrent des clients attablés.

Le tri prend dix minutes : Noémie reconnaît ses propres photos, et
`SEANCE-PHOTO.md` liste les trente-cinq fichiers avec leur sujet.
Détail dans `PHOTO-SOURCES.md`.

## 2. Le domaine — bloquant

Une seule variable à poser :

```
NEXT_PUBLIC_SITE_ORIGIN = https://le-vrai-domaine.fr
```

Sur Vercel : **Settings → Environment Variables**, puis redéployer.

**Tant qu'elle n'est pas posée, le site se met tout seul hors des
moteurs** : `robots.txt` interdit tout et chaque page porte
`noindex, nofollow`. C'est voulu — une démo indexée entrerait en
concurrence avec le vrai site le jour de la mise en ligne, sous une
adresse qui n'est pas celle de NOA.

Poser la variable rouvre tout d'un coup : robots, sitemap, canonical
et JSON-LD suivent ensemble. **Ne pas oublier de redéployer après.**

Sans elle, quatre choses pointeraient sinon vers `noacafe.paris`, qui
n'appartient pas à NOA :

- le `canonical` de chaque page ;
- l'`og:url` et l'image de partage ;
- le `sitemap.xml` et le `robots.txt` ;
- le JSON-LD lu par Google pour la fiche établissement.

Un mauvais domaine ici casse le référencement en silence : les pages
seraient indexées sous une adresse qui ne répond pas.

## 3. À faire confirmer par NOA

Tout est sourcé, rien n'est inventé, mais rien n'est confirmé.

| Quoi | D'où ça vient |
|---|---|
| Les 30 prix | la carte imprimée, photographiée |
| Les horaires | Google et la bio Instagram, qui concordent |
| « 4,9 ★ / 500+ avis » | Google, à un instant donné |
| Les 7 avis cités | Google et TikTok, mot pour mot |
| SIREN, SIRET, code APE | registre public (INSEE / RNE) |
| Capital, nom de la gérante | communiqués |

Les prix et la note bougent. Un coup d'œil de Noémie sur la page
**La carte** et sur les **mentions légales** suffit.

## 4. Le dossier en attente

`photos-en-attente/` contient quatre fichiers non publiés : ils
montrent une boisson ou une assiette, et **Le lieu** ne doit en montrer
aucune. Ils relèvent du même point 1.

## 5. Le plan et les cookies

Le plan vient de Google Maps, qui dépose des traceurs. **Aucune
requête n'est envoyée à Google tant que le visiteur n'a pas
accepté** — vérifié au moniteur réseau. C'est ce qui rend le bandeau
conforme plutôt que décoratif.

Si NOA préfère ne pas poser la question du tout, on peut revenir à
OpenStreetMap, qui ne dépose rien : le bandeau disparaît alors
complètement.

## 6. Sécurité

En place : `nosniff`, `SAMEORIGIN`, `Referrer-Policy`,
`Permissions-Policy`, `HSTS`, et une `Content-Security-Policy`.

Deux limites connues, écrites dans `next.config.mjs` :

- **La CSP n'utilise pas de nonce.** Un nonce doit changer à chaque
  réponse, donc être posé par un middleware, donc rendre les pages
  dynamiques. Les douze routes sont prérendues en statique : un nonce
  figé au build ne protégerait de rien. La politique bloque quand même
  tout script ou feuille venant d'un autre domaine, les plugins, le
  détournement de `<base>`, l'envoi d'un formulaire vers l'extérieur et
  le cadrage du site ailleurs.
- **`npm audit` signale deux avis** qui couvrent Next 9 à 16. Le seul
  correctif est Next 16, une migration majeure. Les failles visent les
  Server Actions, les middlewares, les rewrites et les serveurs
  personnalisés : ce site n'en a aucun, et ses douze routes sont
  statiques.

## Ce qui a été vérifié

Le code, la mise en page et le contenu. **Pas l'origine de chaque
photographie** — voir le point 1.

Sur les cinq pages publiques, en 390, 768, 1024 et 1440 px :

- aucun débordement horizontal ;
- aucune image cassée, aucun `alt` manquant ;
- un seul `h1` par page ;
- aucune erreur console, aucune requête en échec ;
- `prefers-reduced-motion` mène directement à l'état de repos ;
- sans JavaScript, rien n'est caché — l'écran d'ouverture ne
  s'affiche même pas ;
- aucun nom de fichier, aucune note de production, aucun contenu
  technique visible ;
- aucune photographie utilisée deux fois sur une même page, ni sur
  deux pages différentes.
