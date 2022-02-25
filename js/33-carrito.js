"use strict"

function aumentarCompra() {
    let cantidadProducto = document.getElementById("cantidad").innerHTML;
    let cantidadInt = parseInt(cantidadProducto);
    if (cantidadProducto <10) {
         document.getElementById("cantidad").innerHTML = cantidadInt + 1;
    }else{
         document.getElementById("cantidad").innerHTML = cantidadInt;
    }
}
function disminuirCompra() {
    let disminuir =document.getElementById('cantidad').innerHTML;
    let disminuirInt = parseInt(1);
    if (disminuir > 0) {
        document.getElementById("cantidad").innerHTML = disminuir - disminuirInt;
    }else{
    document.getElementById("cantidad").innerHTML = disminuir;
   }
}
