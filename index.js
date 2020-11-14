let niz = [11, 4, 32, 999, 0, 56, 8];
function parniBrojevi(niz) {
    let parni = [];
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] % 2 === 0) {
            parni.push(niz[i]);
        }
    }
    return parni;
}