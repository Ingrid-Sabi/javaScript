"use strict"

//!operador AND//

var nameUser ="Pepito";
var passUser ="12345";
var nameBD ="Pepito";
var passBD ="12345";


if(nameUser === nameBD && passUser === passBD){
    console.log("Bienvenido");
}else{
    console.log("usuario y/o contraseña incorrecta");
}




//!operador or//

//? Si no hay fluido electrico o no hay transporte se suspende el evento//

var transporte =true;

var electrisidade = false;

if(transporte === true ||electrisidade === false){
    console.log("El evento ha sido suspendido");
}else{
    console.log("El evento no se ha modificado");
}


var estado = false;

if(estado != true){
    console.log("ejercicio ejecutado");
}