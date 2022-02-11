"use strict"

var nombreEncontrado = false;
var nombreBuscar = "SARY";
    var lstNombres = [];
    lstNombres.push("SALON");
    lstNombres.push("SARY");
    lstNombres.push("JOSE");

    for(var i=0;i<lstNombres.length;i++){
        if(lstNombres[i] == nombreBuscar){
            nombreEncontrado = true;
           break;
        }
    }if(nombreEncontrado){
        console.log('NOMBRE ENCONTRADO');
    }else{
        console.log('NOMBRE NO ENCONTRADO');
    }