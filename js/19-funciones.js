"use strict"
  // funcion sin parametros y sin retornos;
function mostrarHora(){
    var fechaAtual = new Date();
    var horaActual = fechaAtual.getHours();
    var minutosActual = fechaAtual.getMinutes();
    var minutosActualString =minutosActual.toString();

    if (horaActual > 12){
        horaActual = horaActual - 12;
    }
    if (minutosActual < 10){
        minutosActualString = "0" + minutosActualString;
    }

    alert("Hora Actual : " + horaActual +":"+minutosActualString);

}


// funcion con parametros y sin retornos


function saludo(strHtml){
    alert(strHtml);
}
 //dos parametros//
 function presentacion(nombre,titulado){
     alert("Mi nombre es  "+nombre + " del titulado "+titulado);
 }

// funcion con retornos //


function validarDescuento(valorProducto){
    var total=0;

// si la compra es igual o mayor a 10000 tiene descuento del 10 %  y si esta entre 5000  y 9999 tiene descuento del 5%//
    if(valorProducto >=10000){
        total= valorProducto * .9;
    }
    else if(valorProducto >= 5000 && valorProducto <= 9999){
        total=valorProducto * .95;
    }
    return total;
}
 function calcularDescuento(valorProducto){
     alert("costo total con Descuento: "+validarDescuento(valorProducto));
 }


