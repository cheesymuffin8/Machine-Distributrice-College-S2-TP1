let rgbMode = false;
let modeDoom = false;
let htmlElement = document.documentElement;
let appli = document.querySelector("body .appli");
let ecranBleue = document.getElementById("ecranBleue");

function basculerModeRGB() {
    if (rgbMode == false) {
        rgbMode = true;
        htmlElement.style.animation = "rgbHueRotate 10s linear infinite";
    } else {
        rgbMode = false;
        htmlElement.style.animation = "none";
    }
}

let musiqueRGB
function musiqueFete() {
    if (!musiqueRGB) {
        musiqueRGB = new Audio('sons/Sandstorm.mp3');
        musiqueRGB.loop = true;
        musiqueRGB.play();
        if (rgbMode == false) {
            basculerModeRGB();
        }
    } else {
        musiqueRGB.pause();
        musiqueRGB.currentTime = 0;
        musiqueRGB.src = "";
        musiqueRGB.load();
        musiqueRGB = null;

        if (rgbMode == true) {
            basculerModeRGB();
        }
    }
}

function ecranBleueFonction() {
    let ecranBleue = document.getElementById("ecranBleue");
    ecranBleue.style.display = "flex";
    ecranBleue.style.clipPath = "inset(0% 0% 70% 0%)";
    curseurActif = false;

    setTimeout(() => {
        ecranBleue.style.clipPath = "inset(0% 0% 50% 0%)";

        setTimeout(() => {
            ecranBleue.style.clipPath = "inset(0% 0% 30% 0%)";

            setTimeout(() => {
                ecranBleue.style.clipPath = "inset(0% 0% 0% 0%)";

                setTimeout(() => {
                    appli.insertBefore(ecranBleue, curseur);

                    setTimeout(() => {
                        curseurActif = true;
                        ecranBleue.onclick = () => location.reload();
                    }, 150);
                }, 350);
            }, 150);
        }, 550);
    }, 300);
}

function teleporter() {
    htmlElement.style.filter = "hue-rotate(150deg) brightness(500%)";

    nouveauSon("teleporter.mp3", 0.5);

    setTimeout(() => {

        htmlElement.style.filter = "hue-rotate(260deg) brightness(1000%)";
        setTimeout(() => {
            htmlElement.style.filter = "hue-rotate(50deg) brightness(20%) contrast(300%)";

            setTimeout(() => {
                htmlElement.style.filter = "hue-rotate(600deg) brightness(5000%)";
                document.getElementById("vitreBrisée").style.display = "flex";

                setTimeout(() => {
                    htmlElement.style.animation = "noFilter 1.5s linear infinite";
                    setTimeout(() => {
                       htmlElement.style.animation = "none";
                       htmlElement.style.filter = "hue-rotate(0deg) brightness(100%) contrast(100%)";
                       ajouterNarration("Tu te retrouve dans une vaste étendue de gazon. Ce n'est pas la nuit, mais ce n'est pas le jour non plus. La machine y est aussi. Il est difficile de respirer ici. En regardant le ciel, tu a une vue incroyable de la galaxie complète. Vivre tes dernier moments ici ne serait pas si mal. Un squelette est étendue dans le gazon à ton côté.");
                    }, 1500);
                }, 10);
            }, 10);
        }, 10);
    }, 10);
}

function commencerDoom() {
    modeDoom = true;
    let iframeDoom = document.createElement("iframe");
    iframeDoom.id = "doom";
    iframeDoom.src = "doom/doom.html";
    iframeDoom.style.filter = "sepia(75%) saturate(250%)";
    appli.insertBefore(iframeDoom, ecranBleue);
    document.getElementById("tutorielSortirDoom").style.display = "flex";
}