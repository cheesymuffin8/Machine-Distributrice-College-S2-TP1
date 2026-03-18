// doom-loader.js
const _AUTHOR = 'Gregory Maynard-Hoare';
let g_pCB, g_wadReadyCallback, g_wadDict;

function clearWADData() {
    g_wadDict = {};
}

// Reads a WAD blob and stores it in g_wadDict
async function readWAD(wadName, wadType, wadData) {
    g_pCB('Reading ' + wadName + '...');
    const wArrayBuf = await wadData.arrayBuffer();
    g_wadDict[wadName.toLowerCase()] = [wadType, new Uint8Array(wArrayBuf)];
}

// Loads the local doom1.wad directly
async function getSW(dCB) {
    const wadFile = 'doom1.wad';
    g_pCB('Loading ' + wadFile + '...');
    try {
        const resp = await fetch(wadFile);
        if (!resp.ok) throw new Error('Failed to fetch ' + wadFile);
        const wadData = await resp.blob();
        await readWAD('DOOM1.WAD', 'i', wadData);
        dCB();
    } catch (err) {
        console.error('Failed to load WAD:', err);
        clearWADData();
        dCB();
    }
}

function postDone() {
    g_wadReadyCallback(g_wadDict);
    clearWADData();
}

// Main entry point
function getGame(dFN, progressCallback, wadReadyCallback) {
    g_pCB = progressCallback;
    g_wadReadyCallback = wadReadyCallback;
    clearWADData();

    const funcDict = {
        'sw': getSW
    };

    const callFunc = funcDict[dFN];
    if (typeof callFunc === 'function') {
        callFunc(postDone);
    } else {
        postDone();
    }
}

// Expose globally
window.dGetGame = getGame;