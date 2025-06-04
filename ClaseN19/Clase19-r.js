/* 

1) Dado un array existente de palabras sueltas, que juntas, forma un una gran frase, realizar lo siguiente:
Utilizar un método de array sobre la variable dada, para que se convierta en una oración entera, y almacenar ese string en una variable nueva. Mostrar por consola el resultado.
let palabras = ["Cada","minuto","que","pasa","es","otra","oportunidad","de","seguir","cambiando."];

2) Dado un array con tareas a realizar, eliminar la última, ya que fue realizada.
Crear una nueva variable, donde se almacene las tareas que se van cumpliendo.
Mostrar por consola la tarea cumplida.

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

3) Teniendo en cuenta el ejercicio anterior, ahora se necesita agregar dos tareas nuevas.
Mostrar por consola la lista completa con las incorporaciones.

4) Ahora es necesario sacar la primer tarea de la lista.

5) Crear una variable que almacene una frase, y mostrar por consola la cantidad de caracteres que contiene.

*/

//1

let palabras = ["Cada","minuto","que","pasa","es","otra","oportunidad","de","seguir","cambiando."];

let frase = palabras.join(" ")
console.log(palabras[1]);
console.log(frase)

//2

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

let borrarTarea = tareas.pop()

let tareasRealizadas = borrarTarea;
console.log(tareasRealizadas)

//3

let nuevasTareas = tareas.push(
    {
        nombre: 'Acomodar',
        lugar: 'Living',
        tiempo: 40
    },
    {
        nombre: 'Lavar ropa',
        lugar: 'Lavadero',
        tiempo: 80
    }
)

console.log(tareas)

//4

let sacar = tareas.shift();
console.log(tareas)

//5 

let texto = 'Hay tres maneras de hacer las cosas: la correcta, la incorrecta y la mía';

let largo = texto.length;
console.log(largo)