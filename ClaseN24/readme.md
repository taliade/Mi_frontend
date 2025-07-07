Parte Teórica: DOM Básico
¿Qué es el DOM?
El DOM (Document Object Model) es una representación estructurada de una página HTML en forma de objetos que el navegador genera.

Gracias al DOM podemos leer, modificar y eliminar elementos del HTML usando JavaScript.

📌 Cada etiqueta HTML:
Se convierte en un nodo.

Puede tener nodos hijos (elementos anidados).

Se accede a través del objeto global document.

🧩 Métodos para seleccionar elementos

document.querySelector('selectorCSS'); // Selecciona el primer elemento que coincida
document.querySelectorAll('selectorCSS'); // Selecciona todos los que coincidan
document.getElementById('id'); // Selecciona un elemento por ID



✍ Propiedades para cambiar contenido


elemento.innerHTML = 'Texto con etiquetas <strong>HTML</strong>';
elemento.innerText = 'Solo texto plano';
🛠️ Parte Práctica
✅ Requisitos del ejercicio:
Crear un archivo .js y vincularlo al HTML.

Almacenar un elemento <h3> del artículo en una variable.

Cambiar el nombre del curso desde JS.

Agregar texto a un elemento del HTML.

Almacenar todos los enlaces (<a>) en una variable.

🧪 Ejemplo de práctica paso a paso:
HTML base (ejemplo simple para probar)


<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Curso DOM</title>
</head>
<body>
  <header>
    <h1>Bienvenidos al curso</h1>
  </header>

  <article>
    <h3 id="nombreCurso">Curso de Frontend</h3>
    <p>Este curso es parte de la carrera.</p>
    <a href="#">Ir a contenido</a>
    <a href="#">Ir al foro</a>
  </article>

  <script src="app.js"></script>
</body>
</html>
app.js 

// 1. Almacenar el h3
let tituloCurso = document.querySelector('h3');

// 2. Cambiar el nombre del curso
tituloCurso.innerText = 'Curso de JavaScript DOM';

// 3. Agregar texto a otro elemento (por ejemplo, al <p>)
let parrafo = document.querySelector('p');
parrafo.innerHTML += ' Aprenderás a manipular elementos del HTML.';

// 4. Almacenar todos los enlaces
let enlaces = document.querySelectorAll('a');
console.log('Cantidad de enlaces:', enlaces.length);