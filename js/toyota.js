
const toyota1 = document.getElementById("toyota1");
const toyota2 = document.getElementById("toyota2");
const botonAdelante = document.getElementById("botonAdelante");

botonAdelante.addEventListener("click",function(){
    toyota1.classList.add("toyota1-oculta");
    toyota1.classList.remove("toyota1-visible");
    toyota2.classList.add("toyota2-visible");
    toyota2.classList.remove("toyota2-oculta");
})