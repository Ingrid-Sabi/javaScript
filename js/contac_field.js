"use strict"

function validar(){
    let nombreUsuario = document.getElementById("nombres").value;

    if (nombreUsuario === ""){
        alert("Información incompleta, escriba el nombre ");
    } let apellidosUsuario = document.getElementById("apellidos").value;

    if (apellidosUsuario === ""){
        alert("Información incompleta, escriba el apellido ");
    }
    let comentarioUsuario = document.getElementById("comentario").value;

    if (comentarioUsuario === ""){
        alert("Información incompleta, escriba el comentario ");
    }
    else {
        alert("La informacion ha sido enviada con exito!")
    }
    

}

