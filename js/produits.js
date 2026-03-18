// --- DONNÉES DE BASE DES PRODUITS ---

// Les noms affichés dans l'interface de la machine
const nomsProduits = [
    "Guide CERN.M.M.V0",
    "Collier O'Malley",
    "Boîte à Musique de Verre",
    "Masque Multiversel",
    "Crème Hydratante",
    `Un passe "Tomorrowland"`,
    "Casque 'Pensées Alternatives'",
    "Paquet 'Eden'",
    "Clé d'Enfer"
];

// Le coût de chaque produit (type Number pour permettre les calculs)
const prixProduits = [
    45.00, 12.50, 85.00, 30.00, 15.00, 20.00, 55.00, 200.50, 10.00
];

// Les chemins vers les fichiers images pour l'affichage visuel
const cheminsIconesProduits = [
    "icones/iconAlbum.png", "icones/iconBadge.png", "icones/iconMusicBox.png",
    "icones/iconMask.png", "icones/iconCapsule.png", "icones/iconPressPass.png",
    "icones/iconHeadphones.png", "icones/iconSmokes.png", "icones/iconKey.png"
];

// Gestion du stock : nombre d'unités disponibles pour chaque produits
const qteProduits = [
    1, 1, 1, 1, 1, 1, 1, 5, 1
];

// --- NARRATION ET AMBIANCE (FLAVOR TEXT) ---

// Texte affiché quand le joueur regarde/examine un produit sans l'acheter en cliquant dessus
const narrationObserver = [
    "Un livre qui a l'air d'avoir vécu une vie complète. La couverture est une image de la machine que tu utilises en ce moment. Le titre du livre montre 'The Multiverse Marketplace - Un guide compréhensif'",
    "Un petit collier avec une chaîne détachée. Le nom O'Malley y est écrit dessus. Étrangement, c'est le seul objet étant couvert de poussière.",
    "Une boule en verre contenant une maquette miniature d'une ville qui a l'air d'avoir une architecture complètement extraterrestre.",
    "Un masque multiversel. Tu n'as jamais eu la chance d'en essayer un. L'entreprise qui les produisait est tombée en ruine après un procès dévastateur.",
    `Une boîte cylindrique étiquetée: "Crème de soin personnel, offerte par Zarbobulon de X-11"`,
    `Une passe pour avoir accès a un événement appelé "Tomorrowland". Elle semble avoir le mot "ANNULÉ" estampillé dessus.`,
    "Un gros casque jaune avec des fils ressortant de chaque bout. Tu peux voir une antenne sur l'oreillette gauche.",
    "Un petit paquet de cigarettes vert kaki avec une marque que tu ne reconnais pas.",
    "Une clé en acier damassé avec une amulette en or attachée dessus. Tu peux voir des petits tisons voleter de la clé. Tu n'es pas sûr de vouloir l'acheter."
];

// Texte affiché et indices donnés au joueur au moment où l'achat est confirmé et le produits est distribué
const narrationAcheter = [
    "Tu l'ouvres à la page marquée par un signet: '#439 - Envie de faire la fête ? Tapez RGB'.",
    `En soufflant sur le collier pour enlever la poussière, un message gravé dans le métal est révélé: "<i>Je te retrouverai au bord du monde après la guerre. Retrouve moi. 6-2-4-7-6-6</i>"`,
    "Une mélodie dissonante joue très lentement.... Elle semble ralentir perpétuellement..... Tu penses entendre des bruits de pas derrière toi.",
    "Le masque chatouille tes mains en le tenant. Ta bouche goûte le métal soudainement. Tu le lances à l'autre bout de la pièce et il explose dans un flash éblouissant de couleurs mauves, bleues et jaune",
    "Tu ouvres la boîte. Une odeur extraordinaire s'y échape. Tu en mets un peu sur le dessus de ta main. soudainement, tu te sens 5 ans plus jeune.",
    "La passe a la photo d'une personne qui ressemble étrangement à toi. Mais tu n'es pas le genre de personne à aller à des concerts.",
    "En le plaçant sur ta tête, tu découvres une roulette sur le bas de l'oreillette droite. La tourner sonne comme une radio FM. Par contre, tous les postes sont de personnes différentes parlant de mille choses différentes en même temps. Elles sont les pensées actives d'autres utilisateurs.",
    "En ouvrant le paquet, tu réalises que ce n'est pas un paquet de cigarettes. Il y a plein de petits papiers pliés à l'intérieur. Tu ouvre un des petit papiers, un message y est inscrit. Le message est étrangement personnel, comme si c'était ta mère qui te parlait. 6 lettres sont colorées en rouge dans le message: A-L-A-I-D-E",
    "La clé est chaude. Très chaude. Brûlante. Tu est rempli de rage. Tu l'échappes à tes pieds. Une amulette est attachée à la clé, indiquant: 'Chambre #666'"
];

// --- LOGIQUE D'ACTION ---

// Tableau de fonctions pour exécuter des scripts spécifiques lors de l'achat
// (Ex: ajouter un bonus, ouvrir une porte, déclencher une quête)
const fonctionsAcheter = [
    function () { console.log("Action spéciale pour l'album déclenchée"); },
    function () { console.log("Action spéciale pour le badge déclenchée"); }
];