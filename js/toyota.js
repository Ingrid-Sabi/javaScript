
const toyotaTundra = document.getElementById("toyota-tundra");
const toyotaHybrid = document.getElementById("toyota-hybrid");
const toyotaCamry = document.getElementById("toyota-camry");
const botonAdelante = document.getElementById("botonAdelante");
const botonAtras = document.getElementById("botonAtras");
const circulo1 = document.getElementById("circulo1");
const circulo2 = document.getElementById("circulo2");
const circulo3 = document.getElementById("circulo3");


botonAdelante.addEventListener("click",function(){
  if(  toyotaTundra.classList.contains("toyota-tundra-visible")){
    toyotaTundra.classList.add("toyota-tundra-oculta");
    toyotaTundra.classList.remove("toyota-tundra-visible");
    toyotaHybrid.classList.add("toyota-hybrid-visible");
    toyotaHybrid.classList.remove("toyota-hybrid-oculta-derecha");
    circulo1.classList.add("circulo-claro");
    circulo1.classList.remove("circulo-oscuro");
    circulo2.classList.add("circulo-oscuro");
    circulo2.classList.remove("circulo-claro");
}else{
    toyotaHybrid.classList.add("toyota-hybrid-oculta-izquierda");
    toyotaHybrid.classList.remove("toyota-hybrid-visible");
    toyotaCamry.classList.add("toyota-camry-visible");
    toyotaCamry.classList.remove("toyota-camry-oculta");
    circulo2.classList.add("circulo-claro");
    circulo2.classList.remove("circulo-oscuro");
    circulo3.classList.add("circulo-oscuro");
    circulo3.classList.remove("circulo-claro");
}
});

botonAtras.addEventListener("click",function(){
    if(  toyotaCamry.classList.contains("toyota-camry-visible")){
        toyotaCamry.classList.add("toyota-camry-oculta");
        toyotaCamry.classList.remove("toyota-camry-visible");
        toyotaHybrid.classList.add("toyota-hybrid-visible");
        toyotaHybrid.classList.remove("toyota-hybrid-oculta-izquierda");
        circulo3.classList.add("circulo-claro");
        circulo3.classList.remove("circulo-oscuro");
        circulo2.classList.add("circulo-oscuro");
        circulo2.classList.remove("circulo-claro");
    }else{
        toyotaHybrid.classList.add("toyota-hybrid-oculta-derecha");
        toyotaHybrid.classList.remove("toyota-hybrid-visible");
        toyotaTundra.classList.add("toyota-tundra-visible");
        toyotaTundra.classList.remove("toyota-tundra-oculta");
        circulo2.classList.add("circulo-claro");
        circulo2.classList.remove("circulo-oscuro");
        circulo1.classList.add("circulo-oscuro");
        circulo1.classList.remove("circulo-claro");
    }
});