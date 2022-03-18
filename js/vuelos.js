
class vuelos {
    constructor(origen, destino, precio, horaSalidaStr) {
        this.origen = origen;
        this.destino = destino;
        this.precio = precio;
        this.horaSalidaStr = horaSalidaStr;
      
    }
}
let horaSalida = new Date(2022, 03, 19, 7, 25, 0);
let horaSalidaStr = horaSalida.getHours().toString()+":"+ horaSalida.getMinutes().toString();

let horaSalida1 = new Date(2022, 03, 19, 9, 30, 0);
let horaSalida1Str = horaSalida1.getHours().toString()+":"+ horaSalida1.getMinutes().toString();
let vuelo =[{"origen" : "BOG",
            "destino" : "CTG",
            "precio" : 375000,
            "horaSalidaStr":horaSalidaStr},

            {"origen" : "BOG",
            "destino" : "MTG",
            "precio" : 420000,
            "horaSalidaStr":horaSalidaStr}];
                          
 
for (let i=0; i < vuelo.length;i++){
    cargarvuelo( vuelo[i].origen,vuelo[i].destino,vuelo[i].precio,vuelo[i].horaSalidaStr);
}
function cargarvuelo(origen,destino,precio,horaSalidaStr){
    let contenedorObjeto = document.createElement ("div");
    let contenedorprincipal = document.getElementById ("main-content");
    contenedorprincipal.appendChild(contenedorObjeto);

    let origenVuelo = document.createElement("label");
    contenedorObjeto.appendChild(origenVuelo);
    let txtOrigen = document.createTextNode(origen);
    origenVuelo.appendChild(txtOrigen);
    
    let destinoVuelo = document.createElement ("label");
    contenedorObjeto.appendChild(destinoVuelo);
    let txtDestino = document.createTextNode(destino);
    destinoVuelo.appendChild(txtDestino);

    let precioVuelo = document.createElement ("label");
    contenedorObjeto.appendChild(precioVuelo);
    let txtPrecio = document.createTextNode(precio);
    precioVuelo.appendChild(txtPrecio);
    
    let horaSalida = document.createElement ("label");
    contenedorObjeto.appendChild(horaSalida);
    let txtSalida = document.createTextNode(horaSalidaStr);
    horaSalida.appendChild(txtSalida);
    

}

