/* Consentement aux cookies tiers.

   Un seul point de vérité, dans localStorage, et un événement pour
   que tout ce qui en dépend se remette à jour sans passer par un
   contexte React — le bandeau, le pied de page et la page Venir
   écoutent la même chose.

   Depuis que les plans viennent de Google Maps, ce n'est plus
   décoratif : Google dépose des traceurs, donc le cadre ne doit pas
   se charger avant un accord. Tant qu'il n'y en a pas, on affiche
   l'adresse et un bouton, et rien n'est appelé chez Google. */

export const KEY = 'noa-cookies';
export const EVENT = 'noa-consent';

export const YES = 'yes';
export const NO = 'no';

export function readConsent() {
  try {
    return window.localStorage.getItem(KEY);
  } catch {
    /* navigation privée, stockage bloqué : on se comporte comme si
       rien n'avait été choisi, ce qui revient à ne rien charger. */
    return null;
  }
}

export function writeConsent(value) {
  try {
    window.localStorage.setItem(KEY, value);
  } catch {
    /* pas de stockage : le choix vaut pour la page en cours */
  }
  window.dispatchEvent(new CustomEvent(EVENT, { detail: value }));
}
