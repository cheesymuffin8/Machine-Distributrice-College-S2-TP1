const curseur = document.getElementById("curseurVirtuel");

let curseurActif = true;

document.body.onpointermove = event => {
    const { clientX, clientY } = event;

    if (curseurActif) {
        curseur.animate({
            left: `${clientX}px`,
            top: `${clientY}px`
        
        }, {duration: 500, fill: "forwards"})
    }
}

function style_curseur(style) {
    switch (style) {
        case 0:
            curseur.style.backgroundSize = "26px 26px";
            curseur.style.backgroundImage = `url("images/curseur.png")`;
        break;
        case 1:
            curseur.style.backgroundSize = "30px 30px";
            curseur.style.backgroundImage = `url("images/curseur_click.png")`;
        break;
    }
}
