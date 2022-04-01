"use strict"


function mostrarformulario() {
    let fromchat =document.getElementById("fromchat");
    fromchat.classList.add("from-chat-visible")
}

function  ocultarformulario(){
    let from = document.getElementById("fromchat");
    from.classList.remove("from-chat-visible");
} 