"use strict"

/*Forma 1 de aclarar e inicializar arrays*/
var aprendiz = new Array();
aprendiz[0] = 1;
aprendiz[1] = "cc";
aprendiz[2] = "1007524869";
aprendiz[3] = "Maryury";
aprendiz[4] = "Sabi Charry";
aprendiz[5] = "Calle 6 N. 4-11";
aprendiz[6] = "3227280602";
aprendiz[7] = "2002-03-17";
aprendiz[8] = true;

/*Forma 2 de declarar e inicializar Arrays*/
var instructor = new Array(1, "CC", "12240356", "Wilson", "Martinez", "Calle 5 N.2-14", "3102434755", "1945-04-23", true);


/*Froma 3 de declarar e inicializar arrays  */
var titulado = [1, "2236074", "ADSI", "2021-01-24", "2022-07-05", "Sergio Jaramillo", true] ;


/*Mostar los nombres y aellidos de Aprendiz,del instructor y del lider del titulado */

console.log(aprendiz[3],aprendiz[4]," ",instructor[4],instructor[5]," ",titulado[5],)

/* Metodo length  */
/* Si la frase supera las 20 letras, infromar al usuario */
var fraseUsuario ="Los aprendies del titulado esta aprendiendo JavaScript ";
var cantcaracteresfrase = fraseUsuario.length;
if (cantcaracteresfrase >20){
    console.log("La frase supera los 20 caracteres ");
}