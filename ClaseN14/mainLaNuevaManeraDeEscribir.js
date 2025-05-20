//Comentario!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! En linea


/*  Comentario de texto y parrafos


Sigue siendo un cometario 

Comentario simple: una línea
/* Comentario de más de una línea I
Comentario de más de una línea II 

*/

let nombre = " string";  // La creacion de una variable de tipo String "cadena de texto" 

let nombreCompleto = " Talia Aldana";  // Declarion de la variable y Camercalse , el dato String de cadena de texto

const dni = 11222333;
console.log(dni);
 /*
dni = 22111333;
console.log(dni);
Esto e sun error  Porque no se puede reasignar un valor a una constante ya declarada */

let cuil = 27112223332;

cuil = 2722211333;
console.log(cuil);


 ///  Tipo de dato    Ejemplo 


 /// Number  numerico :
//  let edad = 32;

 // String "Cadena de texto":

let saludado = "Hola Mundo!";

//Boolean  Verdero y falso  -  true - false
// let esArmy = true;   // false

// Array  Tipos de datos en Conjunto Matriz 
let hobbies = ["leer", "bailar", "bts", "Kdrama"];

//object   Son objetivo (cosas reales necesitas declaras, utilizamos los objetos)

let persona = { nombre : "Talia"};

//Datos de tipo null necesito que sean nulos

let dato = null;

// Datos no definidos - Porque no lo declare o porque lo estoy llamando fuera del bloque
let otroDatos;

// console.log(  edad, saludado,  esArmy, hobbies, persona, dato , otroDatos);


let nombredealumna = "Ana";

let apellido = " Perez";

let edad = 22;

let pasaTiempo = ["leer ", "Mirar series"];

let esArmy = false;

let legustaBailar = true;

let frase1 = nombredealumna + " " + apellido;

console.log( frase1);

let frase2 = nombredealumna + " Tiene" + edad + "años" + "es fan de bts:" + esArmy + "pero le gusta bailar? " + legustaBailar ;

console.log(frase2); 

console.log(frase1 + frase2);

// un objeto 
let producto = {
    nombre : "ariculares",
    precio: 20000,
    enStock: true
};

console.log(producto);

console.log("El producto es :" + " " + producto.nombre + " - " + " El precio es: "+ producto.precio );