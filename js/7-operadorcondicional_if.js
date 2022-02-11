"use strict"


var passBD="1234";
var passUser=1234;


if(passBD ==passUser) {
    console.log("Binevenido!!")
}else{
    console.log("Acceso denegado.")
};


//! Operador con operador "estrictamente igual"//

if(passBD === passUser) {
    console.log("Binevenido!!")
}else{
    console.log("Acceso denegado.")
};


//! Condicional anidado//

//? Tendas metros tiene descuento del 5% en los productos de cervesa si dicho producto es marca cervesa.se la la compra es igual osuperior a 2000$ en cerveza corona  tiene un 5% de descuento adicional.declarar 3 variable  e inicialezarla//


var arroz_roaxlb = 2000;

var cerveza_coronaxund = 5000; 


var productoCliente = "cerveza_coronaxund";
var cantidadUnidadesClientes = 4;
var costoProductoCliente = 0;

if(productoCliente === cerveza_coronaxund){
    var costoCerveza = cerveza_coronaxund * cantidadUnidadesClientes;
    cerveza_coronaxund = cerveza_coronaxund * .95;
    var auxCostoSinDescuento2 = cantidadUnidadesClientes * cerveza_coronaxund
    if(costoCerveza >=20000){
        cerveza_coronaxund = cerveza_coronaxund *.95;
    }
    console.log("costo total es:"+ cerveza_coronaxund * cantidadUnidadesClientes);
}
else if(productoCliente === "arroz_roaxlb"){
    console.log("costo total es:"+ cantidadUnidadesClientes * arroz_roaxlb);
}