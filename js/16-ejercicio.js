"use strict"

let fecha1 = new Date('12/12/2021');
let fecha2 = new Date('12/03/2022');

let miliSegundoDias = 24 * 60 * 60 * 1000;

let miliSegundoTranscurridos = Math.abs(fecha1.getTime()-fecha2.getTime());

let diasTrancurridos = Math.round(miliSegundoTranscurridos / miliSegundoDias);

console.log(diasTrancurridos);