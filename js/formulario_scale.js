"use strict"


function mostrarformulario() {
    let fromchat =document.getElementById("fromchat");
    fromchat.classList.add("from-chat-visible")
}

function  ocultarformulario(){
    let from = document.getElementById("fromchat");
    from.classList.remove("from-chat-visible");
} 

const lupa = document.getElementById("idLupa");
const menu1 = document.getElementById("idHeader");
const menu2 = document.getElementById("header2");
const cerrarMenu2 =document.getElementById("idCerrar")

lupa.addEventListener("click", function(){
    menu1.classList.remove("encabezado");
    menu1.classList.add("headerInvisible");
    menu2.classList.add("header2visible");
    menu2.classList.remove("header2invisible");
})
cerrarMenu2.addEventListener("click", function(){
    menu2.classList.remove("header2visible");
    menu2.classList.add("header2invisible");
    menu1.classList.add("encabezado");
    menu1.classList.remove("headerInvisible");
})