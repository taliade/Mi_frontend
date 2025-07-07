DOM II + Eventos + Validación en Formularios


## Mostrar ejemplo en vivo:

let titulo = document.querySelector("h1");
titulo.onclick = function () {
  alert("¡Hiciste clic en el título!");
};



Bloque 2 (25 min) — Tipos de eventos + práctica guiada
Objetivo: Enseñar eventos comunes (click, mouseover, teclado, formularios)

Explicar con ejemplos simples:
onclick, onmouseover, onkeydown, onkeyup, focus, blur, submit, preventDefault
Práctica guiada en vivo (ir mostrando en pantalla):


<form id="miFormulario">
  <input type="text" name="nombre" id="nombre" placeholder="Tu nombre">
  <input type="number" name="edad" id="edad" placeholder="Tu edad">
  <button type="submit">Enviar</button>
</form>
<div class="errores"><ul></ul></div>

-----  

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

------------------

Bloque 3 (30 min) — Práctica individual con feedback
Objetivo: Que las alumnas implementen lo aprendido con su propio formulario.

Consigna práctica:
Crear un formulario con campos: nombre y edad.

Validar:
Que el campo nombre no esté vacío y tenga mínimo 4 letras.
Que la edad sea un número mayor o igual a 18.
Mostrar los errores en pantalla, sin alertas.
Cuando los inputs estén en foco, que cambien de color.