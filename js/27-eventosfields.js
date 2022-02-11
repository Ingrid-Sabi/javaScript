"use strict"

function validarInfo(numeroDocumento){
    let numDocumento = document.getElementById(numeroDocumento).value;

    if (numDocumento === ""){
        alert("El numero de documento es un dato Obligatorio");
    }
    else {
        alert("La informacion ha sido enviada con exito!")
    }
}