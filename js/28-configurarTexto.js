"use strict"

function expandirTexto(){
    let textoCompleto = "Aunque ambas celebridades se han mantenido al margen y no han confirmado ni negado una relación, en las últimas horas se conoció una nueva fotografía donde se ven James y Karol G junto a varios amigos, lo que probaría que, por lo menos, se llevan muy bien. <br>" +
    'La foto fue publicada por el programa Lo sé todo y en esta se ve a James y a Karol G juntos y sonrientes en medio de sus conocidos. <br>' +
    "La foto habría sido tomada el mismo día que la cantante y el futbolista compartieron en sus cuentas de Instagram un post juntos en el pasado mes de junio, ya que están usando la misma ropa. <br>" +
    'Esta nueva pista de un romance entre los dos colombianos se suma a otras que no han pasado desapercibidas por sus fanáticos como el hecho de que James se pintara el pelo de azul hace unas semanas, igual al de Karol G, la publicación de la foto juntos en sus redes y el intercambio de likes en Instagram.  <br>' +
 "A pesar de estas pistas, hasta el momento las dos celebridades no han sido captadas en situaciones que confirmen un romance." +
 "<a href='javascript:void(0)' onclick='acortarTexto();'> <br>Click para continuar </a>"

 document.getElementById("long-text").innerHTML = textoCompleto;

 
}
function acortarTexto(){
    let textoCorto = "<p id='long-text'>" +
    "Luego de que iniciaran los rumores de una relación sentimental entre el futbolista y la cantante colombiana, son muchos los fanáticos que siguen buscando pistas que confirmen el posible romance."+
    "<a href='javascript:void(0)' onclick='expandirTexto();'><br>Clik aqui para continuar </a>" + "</p>";




document.getElementById("long-text").innerHTML = textoCorto;
}