class automovil {
    constructor (marca,modelo,anyo, imagen){
        this.marca =marca;
        this.modelo =modelo;
        this.anyo =anyo;
        this.imagen =imagen;
    }
}
let auto =new automovil("mazda", "3", 2019, "img/mazda3.jpeg");
let auto2 =new automovil("toyota", "corolla",2022);

function mostrarVehiculo(){
    llamarVehiculo(auto);
}
function llamarVehiculo(auto){
    let contenedorObjeto = document.createElement ("div");
    let contenedorprincipal = document.getElementById ("main-content");
    contenedorprincipal.appendChild(contenedorObjeto);
    contenedorObjeto.setAttribute("class", "content-objeto");

    
    
    let img_auto = document.createElement("img");
    contenedorObjeto.appendChild(img_auto);
    img_auto.setAttribute("src", auto.imagen);
    img_auto.setAttribute("class", "img-style");
    img_auto.setAttribute("alt", "aqui toy");
}