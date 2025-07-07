
let variable = document.querySelector('h3'); 

let mundo = variable.innerHTML= 'Curso de Front - end =)';
// Mundo se puede llamar como quieras (es el cambio)
console.log(mundo);


let textoCambiar =document.querySelector('h1'); 

let agregar = textoCambiar.innerHTML += ' Academia de Programacion';
/// Agregar texto extra a mi contenido de HTML 
console.log(agregar);


let enlaces = document.querySelectorAll('a');   //TODOS LOS ENLACES 
 
console.log(enlaces); // Devuelve un array con todos los enlaces

//Cambiar el color de los enlaces 
enlaces.forEach(function(enlace){
    enlace.style.color = 'pink'; // Cambia el color de todos los enlaces a rojo
    enlace.style.textDecoration = 'none'; // Elimina el subrayado de los enlaces
    enlace.style.fontSize = '20px'; // Cambia el tamaño de la fuente de los enlaces
    enlace.style.fontWeight = 'bold'; // Hace que el texto de los enlaces sea negrita
})