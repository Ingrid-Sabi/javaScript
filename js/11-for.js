"use strict"

/*Generar un consecutivo... 2 4 8 32 64 128 256 512 1024*/

for (var i =1; i<=10; i++){
    if (i % 2==0  ){ 
        console.log( i * 2 );
    
    }  
}

var aprendiz = new Array();
aprendiz[0] = 1;
aprendiz[1] = "cc";
aprendiz[2] = "1007524869";
aprendiz[3] = "Maryury";
aprendiz[4] = "Sabi";
aprendiz[5] = "Calle 6 N. 4-11";
aprendiz[6] = "3227280602";
aprendiz[7] = "2002-03-17";
aprendiz[8] = true;


var instructor = new Array(1, "CC", "12240356", "Wilson", "Martinez", "Calle 5 N.2-14", "3102434755", "1945-04-23", true);

var titulado = [1, "2236074", "ADSI", "2021-01-24", "2022-07-05", "Sergio Jaramillo", true] ;

/* Mostrando los elemnetos de un arreglo */
for (var i =0; i<= aprendiz.length -1; i++){
    console.log(aprendiz[i]);
}

/* Mostrar todos los datos del instructor, exceptuando el id... */
for (var i =1; i<= instructor.length -1; i++){
    console.log(instructor[i]);
}

/* Mostrar todos los datos del instructor, exceptuando el id y la direccion... */
for (var i =1; i<= instructor.length -1; i++){
    if(i === 5){
        /*No hace nada (no muestra informacion al usuario) */
    }else{
         console.log(instructor[i]);
    }
}