// Importar módulos usando CommonJS

/// Instalar npm install readline-sync

const fs = require('fs');
const readlineSync = require('readline-sync');
const { suma } = require('./suma');
const { resta } = require('./resta');
const { multiplicacion } = require('./multiplicacion');
const { division } = require('./division');

// Solicitar números al usuario
let num1 = Number(readlineSync.question("Ingresa el primer numero: "));
let num2 = Number(readlineSync.question("Ingresa el segundo numero: "));

// Realizar operaciones
console.log("Suma es:", suma(num1, num2));
console.log("Resta:", resta(num1, num2));
console.log("Multiplicacion es:", multiplicacion(num1, num2));
console.log("La division es:", division(num1, num2));