🧠 Objetivo de la clase
Comprender cómo crear, modificar y eliminar elementos del DOM desde JavaScript.

Usar correctamente los métodos getElementById, getElementsByClassName, getElementsByTagName, createElement, appendChild, removeChild y value.

Aplicar estos conocimientos para modificar la página web desde el JS y agregar contenido dinámico.

📘 Parte teórica explicada paso a paso
1. Repaso breve – ¿Qué es el DOM?
Es la representación de tu HTML como objetos que JS puede manipular.

Cada etiqueta HTML es un nodo (objeto JS).

A través de document, accedemos y modificamos esos nodos.

2. Selección de nodos: métodos nuevos
✅ getElementsByClassName("nombreDeClase")
Devuelve una colección de elementos que tengan esa clase. Se accede como si fuera un array.

```
let items = document.getElementsByClassName("item");
console.log(items[0].innerText);

```

✅ getElementsByTagName("etiqueta")
Devuelve todos los elementos de ese tipo. También se accede como un array.

```
let parrafos = document.getElementsByTagName("p");
console.log(parrafos[0].innerHTML);
```

3. Crear nodos HTML desde JavaScript
✅ createElement()
Permite crear etiquetas desde JS.

```
let nuevoDiv = document.createElement("div");
nuevoDiv.innerText = "Hola, soy nuevo!";
```

✅ appendChild()
Agrega ese nodo a un lugar del HTML.

```
document.body.appendChild(nuevoDiv);
```

🧠 Ejemplo completo:

```

let seccion = document.getElementById("contenedor");
let nuevoParrafo = document.createElement("p");
nuevoParrafo.innerText = "Este texto lo puso JavaScript.";
seccion.appendChild(nuevoParrafo);
```

4. Eliminar nodos del DOM
✅ removeChild()
Necesitás:

El elemento padre.

El elemento hijo que vas a borrar.

```
let padre = document.getElementById("contenedor");
let hijo = document.getElementById("parrafo1");
padre.removeChild(hijo);
```

5. Capturar datos desde formularios
✅ .value accede al valor ingresado en un input.

```
<input type="text" id="nombre">
```

```
let nombre = document.getElementById("nombre").value;
console.log("Ingresaste: " + nombre);
```

💻 Aplicación práctica (en base a lo que ya se viene trabajando)
Cada alumna debe:

Desde JS, crear un nuevo artículo (<article>) con título y texto, y agregarlo a su sección.

Agregar un bloque en el footer con enlaces a sus redes sociales.

Crear una nueva sección (por ejemplo “Servicios”) y agregarle 2 o 3 elementos.

Pueden usar este ejemplo como guía:

```
let nuevo = document.createElement("article");
nuevo.innerHTML = `
  <h3>Mi nuevo producto</h3>
  <p>Texto generado desde JS</p>
`;
document.getElementById("productos").appendChild(nuevo);
```



📝 Frase de cierre de clase
“Con el DOM podemos modificar cualquier parte de nuestra página desde JavaScript. Ahora tenemos el poder de crear contenido dinámico, como lo hacen las páginas reales.”