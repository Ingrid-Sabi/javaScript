"use strict"
 
var nota = 9;
console.log("resultado: ")

switch(nota){
    case 10:
    console.log("Excelente");
    break;
    case 8:
    case 9:
      console.log("Muy bueno");
        break;
        case 7:
        case 6:
       console.log("bueno");     
    break;
        case 5:                
    console.log("Aceptable");           
    break;        
       case 4:          
       case 3:
     console.log("Malo");
    break;                                                      
         case 1:
         case 2: 
         console.log("MUy malo");
         break;
         default:
         console.log("por favor,ingrese una nota valida");                 

  
}


var ciudad="Pitalito";
switch(ciudad){
    case "Bogotá":
    console.log("2600 m.s.n.m.")
    break;
    case "Cali":
        console.log("1018 m.s.n.m.")
        break;
        case "Neiva":
            console.log("442 m.s.n.m.")
            break;
            case "Pitalito":
            console.log("1318 m.s.n.m.")
            break;
            default:
            console.log("Por favor ,ingrese una ciudad")

}
