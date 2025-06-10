

let newArray = [ 'Pokemon',  'Pikachu',  'Charmander',  'Squirtle',  'Bulbasaur', 1.60, true ];

console.log(newArray);

console.log(newArray[0]); // Pokemon
console.log(newArray[1]); // Pikachu    
console.log(newArray[2]); // Charmander
console.log(newArray[3]); // Squirtle
console.log(newArray[4]); // Bulbasaur
console.log(newArray[5]); // 1.60
console.log(newArray[6]); // true


let total = newArray.length;
console.log(total); // 7


let errayNEW = ['naranja', 'manzana', 'pera', 'uva', 'sandia', 'melon'];
console.log(errayNEW);

errayNEW.push('kiwi');    

console.log(errayNEW);

errayNEW.pop(); // Elimina el último elemento del array
console.log(errayNEW);

errayNEW.unshift('fresa'); // Añade un elemento al inicio del array
console.log(errayNEW);  

errayNEW.shift(); // Elimina el primer elemento del array
console.log(errayNEW);

errayNEW.join(' - '); // Une los elementos del array en una cadena de texto
console.log(errayNEW.join(' - ')); // fresa - naranja - manzana - pera - uva - sandia - melon

errayNEW.indexOf('pera'); // Devuelve el índice del elemento 'pera'
console.log(errayNEW.indexOf('pera')); // 3



let palabras =
["Cada","minuto","que","pasa","es","otra","oportunidad","de","seguir","cambiando."];

let oracion = palabras.join(' ');

console.log(oracion); // Cada minuto que pasa es otra oportunidad de seguir cambiando.


let tareas = [
    {
        nombre: 'Regar',
        lugar: 'Patio',
        tiempo: 20
    },
    {
        nombre: 'Compras',
        lugar: 'Supermercado',
        tiempo: 60
    },
    {
        nombre: 'Hacer pastafrola',
        lugar: 'Cocina',
        tiempo: 60
    }
]


console.log(tareas);

console.log('Tarea realizada:', tareas[2].nombre , tareas[2].lugar, tareas[2].tiempo); // Cocinar


let tareaActual = tareas;
console.log(tareaActual);

//Estudiar JavaScript - Escritorio (90 min) 25 minutos - 5 minutos de descanso - 
// 2. Hacer ejercicio - Gimnasio (45 min)

tareaActual.push({
    nombre: 'Estudiar JavaScript',
    lugar: 'Escritorio',
    tiempo: 90
 });

 console.log(tareaActual);

tareaActual.push({
    nombre: 'Hacer ejercicio',
    lugar: 'Gimnasio',
    tiempo: 45
 });


 console.log(tareaActual);

 tareaActual[3].tiempo = 25; // Actualiza el tiempo de la primera tarea
 tareaActual[1].tiempo = 5; // Actualiza el tiempo de la segunda tarea

 console.log(tareaActual);

 //Quitar la primera palabra de la lista
 tareaActual.shift(); // Elimina el primer elemento del array
 console.log(tareaActual); 



 let fraseAlumnas = ['Las alumnas',  'de', 'jump YPF', 'están ', 'trabajando en equipo'  ];
 let conteo = fraseAlumnas.length;
    console.log( 'Cantidad de palabras en nuestra frase:', conteo); // 5

    