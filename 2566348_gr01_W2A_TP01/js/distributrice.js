let credits = 438.54;     // Argent disponible pour acheter des produits
let saisie = "";          // Ce que l'utilisateur tape (ex: "01", "22", "98898")
let longMaxSaisie = 6; // combien de chiffre l'utilisateur peut entré dans la saisie

const distributrice = [
  2, 4, 5, // Ligne 0
  1, 3, 6, // Ligne 1
  0, 8, 7, // Ligne 2
];

function ajouterNarration(texte) {
  let consoleNarrative = document.getElementById("console-narrative");

  consoleNarrative.innerHTML = '<div id="console-narrative"><div class="entree">' + texte + '</div></div>';
}

function mettreAJourAffichage(nbCréditOriginal = credits) {
  let valeurCredits = document.getElementById("valeur-credits");
  let pas = credits > nbCréditOriginal ? 0.01 : -0.01;
  let vitesse = 25;

  let actuel = Number(nbCréditOriginal);
  let destination = Number(credits);

  if (isNaN(destination) || isNaN(destination)) {
    console.log("Valeur invalide:", destination, actuel);
    return;
  }

  let interval = setInterval(() => {
    actuel += pas * vitesse;

    // arrêter
    if ((pas > 0 && actuel >= destination) || (pas < 0 && actuel <= destination)) {
      actuel = destination;
      clearInterval(interval);
    }

    valeurCredits.innerText = actuel.toFixed(2);
  }, 1);
  

  let valeurSaisi = document.getElementById("valeur-saisie");
  valeurSaisi.innerText = saisie === "" ? "-".repeat(longMaxSaisie) : saisie.length < longMaxSaisie ? saisie + "-".repeat(longMaxSaisie - saisie.length) : saisie ;
}

function validerSaisie() {
  switch (saisie) {
    case "00":
      acheterProduit(distributrice[0]);
      break;
    case "01":
      acheterProduit(distributrice[1]);
      break;
    case "02":
      acheterProduit(distributrice[2]);
      break;
    case "10":
      acheterProduit(distributrice[3]);
      break;
    case "11":
      acheterProduit(distributrice[4]);
      break;
    case "12":
      acheterProduit(distributrice[5]);
      break;
    case "20":
      acheterProduit(distributrice[6]);
      break;
    case "21":
      acheterProduit(distributrice[7]);
      break;
    case "22":
      acheterProduit(distributrice[8]);
      break;
// codes secrets
    case "742":
      basculerModeRGB();
      break;
    case "439":
      musiqueFete();
    break;
    case "66639":
      let nbCréditOriginal = credits;
      nouveauSon("secretArgent.mp3", 0.5);
      credits += 500;
      mettreAJourAffichage(nbCréditOriginal);
      break;
    case "252433":
      ecranBleueFonction();
      break;
    case "624766":
      teleporter();
      break;
    case "666":
      commencerDoom();
      break;
    default:
      break;
  }
  effacerSaisie();
}

/**
 * @param {number} indexProduit - index du produit (sert à lire prixProduits, nomsProduits, etc.)
*/
function acheterProduit(indexProduit) {
  let nbCréditOriginal = credits;

  if (qteProduits[indexProduit] > 0) {
    if (prixProduits[indexProduit] <= credits) {
      credits -= prixProduits[indexProduit];
      qteProduits[indexProduit]--;
      fonctionsAcheter[indexProduit];
      mettreAJourAffichage(nbCréditOriginal);
      afficherProduitDansLeReceptacle(indexProduit);
    } else {
      ajouterNarration("Fonds insuffisants. La machine ne fait pas crédit.");
    }
  } else {
    ajouterNarration("Produit épuisé à la narration.");
  }
}

function afficherProduitDansLeReceptacle(indexProduit) {
  const contenuReceptacle = document.getElementById('contenu-receptacle');

  contenuReceptacle.style.opacity = '0';
  contenuReceptacle.style.transform = 'translateY(-10px)';

  const cheminIconeProduit = cheminsIconesProduits[indexProduit];
  contenuReceptacle.setAttribute('src', `${cheminIconeProduit}`);

  setTimeout(() => {

    contenuReceptacle.style.opacity = '1';
    contenuReceptacle.style.transform = 'translateY(0)';

    rendreVitrine();

    ajouterNarration(narrationAcheter[indexProduit]);

  }, 1000);
}

function effacerSaisie() {
  saisie = "";
  mettreAJourAffichage();
}

function rendreVitrine() {
  const grilleVitrine = document.getElementById('grille-vitrine');
  grilleVitrine.innerHTML = '';

  for (let slotIndex = 0; slotIndex < distributrice.length; slotIndex++) {
    let itemIndex = distributrice[slotIndex];
    let numeroRangee = Math.floor(slotIndex / 3);
    let numeroColonne = slotIndex % 3;

    let carteProduit = document.createElement("div");
    carteProduit.className = "carte-produit nonSelect";
    carteProduit.onclick = () => observerSlot(slotIndex);
    carteProduit.onmouseover = () => nouveauSon("dessus.mp3", 0.2);
    grilleVitrine.appendChild(carteProduit);

    let estEnStock = qteProduits[itemIndex] > 0 ? true : false;

    if (estEnStock) {
      carteProduit.innerHTML = 
      `
        <div class="code-produit">#${numeroRangee}${numeroColonne}</div>

        <div class="icone-produit">
          <img src="${cheminsIconesProduits[itemIndex]}" draggable="false">
        </div>

        <div class="nom-produit">${nomsProduits[itemIndex]}</div>

        <span class="prix-produit">$${prixProduits[itemIndex].toFixed(2)}</span>
      `;
    }
  }
}

function observerSlot(indexSlot) {
  let indexProduit = distributrice[indexSlot];
  let itemIndex = distributrice[indexSlot];
  let estEnStock = qteProduits[itemIndex] > 0 ? true : false;

  nouveauSon("Beep_01.mp3", 0.3);

  if (estEnStock) {
    ajouterNarration(narrationObserver[indexProduit]);
  } else {
    ajouterNarration("Il ne reste plus rien dans cet emplacement.");
  }
}

function appuyerTouche(touche) {
  if (saisie.length < longMaxSaisie) {
  nouveauSon("Beep_01.mp3", 0.3);
  } else {
  nouveauSon("Beep_02.mp3", 0.3);
  }
  saisie = saisie.length < longMaxSaisie ? saisie += touche : saisie;
  mettreAJourAffichage();
}

function activerDistributrice() {
  let ecranDebut = document.getElementById("ecranDebut");
  let textDebut = ecranDebut.querySelector("div");
  let flash = ecranDebut.querySelector("#flash");
  nouveauSon("active_ordi.mp3", 0.35);

  ecranDebut.removeAttribute("onclick");
  textDebut.style.animation = "fadeOut 0.5s linear";
  flash.style.animation = "activeEcran 1s linear";
  setTimeout(() => {
    ecranDebut.style.animation = "fadeOut 0.5s ease-in";
  }, 500);
  setTimeout(() => {
    ecranDebut.remove();

    setTimeout(() => {
      let ambiance = nouveauSon("ambiance_ordi.mp3", 0.35);
      ambiance.loop = true;
      ajouterNarration("Tu te trouves dans le sous-sol du batîment central utilisé par CERN pour entreposer des machines expérimentales laissé ici par la compagnie lorsqu'elle a fait faillite. Après des heures d'exploration dans ce batîment abandonné, tu trouve un ordinateur qui a l'aire de sortire directement du début des années 1900. L'ordinateur est équipé d'une trappe portant l'inscription « Récupérer ici ».");
    }, 1000);
  }, 1000);
}

function nouveauSon(nom, vol) {
  let son = new Audio("sons/"+nom);
  son.volume = vol? vol : 1;
  son.play();
  return son
}

window.onload = () => {
  rendreVitrine();
  mettreAJourAffichage();
};