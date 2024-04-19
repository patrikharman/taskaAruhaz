export function termekOsszeallit(lista) {
    let txt = "";
    txt += `<div class="container-fluid">`
    for (let index = 0; index < lista.length; index++) {
        txt += `<div class="card col-md-4">`
        txt += `<div class=card header>${lista[index].termek}</div>`
        txt += `<div id="termekek">
                <img src="${lista[index].kep}" alt=" alt="${lista[index].ar}" />
            </div>`;
        
    }
    return txt;
}
export function megjelenit(txt) {
    const divELEM=$(".adatok")
    divELEM.html(txt)
}