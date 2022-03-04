function crearTabla() {
    let contenedor = document.getElementById("table-js");
    let nodeTable = document.createElement("table");
    contenedor.appendChild(nodeTable);

    let nodeTR1 = document.createElement("tr");
    nodeTable.appendChild(nodeTR1);

    let nodeTH1 = document.createElement("th")
    nodeTR1.appendChild(nodeTH1);
    let nodeTH1Txt = document.createTextNode("Codigo")
    nodeTH1.appendChild(nodeTH1Txt);


    let nodeTH2 = document.createElement("th")
    nodeTR1.appendChild(nodeTH2);
    let nodeTH2Txt = document.createTextNode("Descripcion")
    nodeTH2.appendChild(nodeTH2Txt)


    let nodeTH3 = document.createElement("th")
    nodeTR1.appendChild(nodeTH3);
    let nodeTH3Txt = document.createTextNode("Valor Unitario")
    nodeTH3.appendChild(nodeTH3Txt)


    let nodeTH4 = document.createElement("th")
    nodeTR1.appendChild(nodeTH4);
    let nodeTH4Txt = document.createTextNode("Unidades en Stock")
    nodeTH4.appendChild(nodeTH4Txt)


    nodeTable.setAttribute("class","table-style");



    
}