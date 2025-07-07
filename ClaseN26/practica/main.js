/*
1)
-Crear un formulario con dos campos a rellenar (nombre y edad) y un botón para enviar la información.
-Capturar ambos inputs en dos variables respectivamente.
-Validar que el campo nombre no esté vacío, y que tenga una longitud de 4 o más caracteres. Enviar mensajes de error correspondientes.
-Validar que el campo edad no esté vacío, y que el usuario sea mayor de edad. Enviar mensajes de error correspondientes.
-Que el usuario pueda ver los errores en pantalla
-Asignarle el evento "focus" a ambos inputs.
-Cuando el input está en foco, que el fondo cambie de color.
(Vas a necesitar utilizar la propiedad .style)
Ej:document.querySelector("elemento").style.propiedadCSS

*/
// let titulo = document.querySelector("h1");
// titulo.onclick = function () {
//   alert("¡Hiciste clic en el título!");
// };

// let titulo = document.querySelector('h2');
// titulo.onmouseover = function(){
// console.log('Pasaste el mouse')
// }

let titulo = document.querySelector('h3');
titulo.onmouseout = function(){
console.log('Quitaste el mouse')
}


window.onload = function () {
  const formulario = document.querySelector("#miFormulario");
  const nombre = document.querySelector("#nombre");
  const edad = document.querySelector("#edad");
  const erroresDiv = document.querySelector(".errores ul");

// Cambiar color al focus
  nombre.onfocus = () => nombre.style.backgroundColor = "#eef";
  edad.onfocus = () => edad.style.backgroundColor = "#eef";

  formulario.onsubmit = function (event) {
    event.preventDefault();
    erroresDiv.innerHTML = ""; // Limpiar errores previos
    let errores = [];

    if (nombre.value === "" || nombre.value.length < 4) {
      errores.push("Nombre inválido: mínimo 4 letras.");
    }
     if (nombre.value === "125" || nombre.value.length < 4) {
      errores.push("Nombre inválido: mínimo 4 letras.");
    }

    if (edad.value === "" || Number(edad.value) < 18) {
      errores.push("Debés ser mayor de edad.");
    }

    if (errores.length > 0) {
      errores.forEach(error => {
        erroresDiv.innerHTML += `<li>${error}</li>`;
      });
    } else {
      alert("¡Formulario enviado correctamente!");
    }
  };
};


// window.addEventListener('load', function(){
//     let formulario = document.getElementById('registro');
//     formulario.addEventListener('submit', function(event){
//         let errores = [];
//         let inputNombre = document.querySelector('input'); 
//         if (inputNombre.value == ''){
//             errores.push('El campo nombre tiene que estar completo')
//         }else if( inputNombre.value.length < 3){
//             errores.push('El campo nombre debe tener al menos 3 caracteres')
//         }
//         if (errores.length > 0) {
//             event.preventDefault();
//         }
//         let ulErrores = document.querySelector('.errores ul');
//         for(let i = 0; i < errores.length; i++){
//             ulErrores.innerHTML += '<li> ' + errores[i] + '</li>'}
//         });

//         let inputNombre = document.querySelector('input');
//         inputNombre.addEventListener('focus', () => {
//             inputNombre.style.backgroundColor = 'yellow'
//         })
// })