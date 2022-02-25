"use strict"

calcularTotal();

function aumentarCompra() {
    let cantidadProducto = document.getElementById("cantidad").innerHTML;
    let cantidadInt = parseInt(cantidadProducto);
    if (cantidadProducto <10) {
         document.getElementById("cantidad").innerHTML = cantidadInt + 1;
    }else{
         document.getElementById("cantidad").innerHTML = cantidadInt;
    }
    calcularTotal();
}
function disminuirCompra() {
    let disminuir =document.getElementById('cantidad').innerHTML;
    let disminuirInt = parseInt(1);
    if (disminuir > 0) {
        document.getElementById("cantidad").innerHTML = disminuir - disminuirInt;
    }else{
    document.getElementById("cantidad").innerHTML = disminuir;
   }
   calcularTotal();
}
function calcularTotal(){
    let valorUnidad = document.getElementById('valorUnitario').innerHTML;
    let cantidadElemetos = document.getElementById('cantidad').innerHTML;
    let costoTotalp = valorUnidad * cantidadElemetos;
    document.getElementById('costoTotal').innerHTML = costoTotalp;
}



