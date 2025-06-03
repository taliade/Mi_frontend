// /// File System  llamar a modulos nativos

const fs =require ('fs');

// import alumnos = require ('alumnos');

// let datos = fs.readFileSync( __dirname + './usaurios.txt', 'utf-8' );

// console.log(datos);
// let pantalla = 'Los alumnos son: ';

// // console.log(alumnos);

// // console.log('hola mundo!')


// console.log(fs);

import {suma} from './suma';
import {resta} from './resta';
import {multiplicacion} from './multiplicacion';
import {division} from './division';

        let num1 = Number( prompt("Ingresa el primer numero: "));
        let num2 = Number( prompt("Ingresa el segundo numero: "));

console.log( "Suma es : ", suma(num1,num2));
console.log("Resta : " , resta(num1, num2));
console.log( "Multiplicacion  es : ", multiplicacion(num1,num2));
console.log("La division es : " , division(num1, num2));