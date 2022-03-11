let nodeTable = undefined;

function registrarInfo() {
    crearEncabezado();
    if (validarformulario()){
     cargarProducto(); 
     limpiarFormulario();
    }
}
function crearEncabezado(){
    if(!document.getElementById("table-content")){
        nodeTable = document.createElement("table");
        let divTable = document.getElementById("table-js");
        divTable.appendChild(nodeTable);
        nodeTable.setAttribute("class","table-style");
        nodeTable.setAttribute("id", "table-content");

    let nodeTR1 = document.createElement("tr");
    nodeTable.appendChild(nodeTR1);
    
    let nodeTH1 = document.createElement("th");
    nodeTR1.appendChild(nodeTH1);
    let nodeTH1Txt = document.createTextNode("Codigo");
    nodeTH1.appendChild(nodeTH1Txt);

    let nodeTH2 = document.createElement("th");
    nodeTR1.appendChild(nodeTH2);
    let nodeTH2Txt = document.createTextNode("Descripcion");
    nodeTH2.appendChild(nodeTH2Txt)

    let nodeTH3 = document.createElement("th");
    nodeTR1.appendChild(nodeTH3);
    let nodeTH3Txt = document.createTextNode("Valor Unitario");
    nodeTH3.appendChild(nodeTH3Txt);

    let nodeTH4 = document.createElement("th")
    nodeTR1.appendChild(nodeTH4);
    let nodeTH4Txt = document.createTextNode("Unidades en Stock")
    nodeTH4.appendChild(nodeTH4Txt)
    }
}

function cargarProducto(){
    let nodeTR2 = document.createElement("tr");
    nodeTable.appendChild(nodeTR2);

    let nodeTd1= document.createElement("td")
    nodeTR2.appendChild(nodeTd1);
    let inputCodigo = document.getElementById("codigo").value;   
    let nodoTxtCodigo =document.createTextNode(inputCodigo);
    nodeTd1.appendChild(nodoTxtCodigo);

    let nodeTd2= document.createElement("td")
    nodeTR2.appendChild(nodeTd2);
    let inputdescripcion = document.getElementById("descripcion").value;   
    let nodoTxtDescripcion =document.createTextNode(inputdescripcion);
    nodeTd2.appendChild(nodoTxtDescripcion);

    let nodeTd3= document.createElement("td")
    nodeTR2.appendChild(nodeTd3);
    let inputValorUnitario = document.getElementById("valorUnitario").value;   
    let nodoTxtValorUnitario =document.createTextNode(inputValorUnitario);
    nodeTd3.appendChild(nodoTxtValorUnitario);

    let nodeTd4= document.createElement("td")
    nodeTR2.appendChild(nodeTd4);
    let inputvalorStock = document.getElementById("valorStock").value;   
    let nodoTxtvalorStock =document.createTextNode(inputvalorStock);
    nodeTd4.appendChild(nodoTxtvalorStock);
}

function validarformulario(){
    if (document.getElementById("codigo").value.trim() ==""){
        alert("Por favor, ingrese el codigo del producto");
        return false;
    }
    if (document.getElementById("descripcion").value.trim() ==""){
        alert("Por favor, ingrese la descripcion del producto");
        return false;
    }
    if (document.getElementById("valorUnitario").value.trim() ==""){
        alert("Por favor, ingrese el valorUnitario del producto");
        return false;
    }
    if (document.getElementById("valorStock").value.trim() ==""){
        alert("Por favor, ingrese el valorStock del producto");
        return false;
    }
    return true;
}

function limpiarFormulario(){  
    document.getElementById("codigo").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("valorUnitario").value = "";
    document.getElementById("valorStock").value = "";
}