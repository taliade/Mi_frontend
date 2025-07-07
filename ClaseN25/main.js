let div = document.getElementById("app");
let parrafo = document.getElementById("parrafo1");
console.log(div.innerHTML);

console.log(parrafo.innerHTML);

let paises = document.getElementsByClassName("paises");
console.log(paises[0].innerHTML);
console.log(paises[1].innerHTML);
console.log(paises[2].innerHTML);


// Crear nodo de tipo Elemento, etiqueta p
let elementParrafo = document.createElement("p");
// Insertar HTML interno
elementParrafo .innerHTML = '<h2>¡Hola Mundo DESDE JS fui creado!</h2>';
// Añadir el nodo Element como hijo
document.body.appendChild(elementParrafo);

// Eliminar un elemento del DOM
let texto = document.getElementById("parrafo1");
//Elminando el propio elemento, referenciando al padre
parrafo.parentNode.removeChild(parrafo);
let paisees = document.getElementsByClassName("paises");
//Eliminando el primer elemento de clase paises
paisees[0].parentNode.removeChild(paisees[0]);
// Tomo el elemento padre "paisees" =aca lo estoy guardando al elemento html que es "paises.
 
 document.getElementById("nombre").value = "HOMERO";
document.getElementById("edad").value = 39;






// ✅ 1. Acceder a un elemento existente (repaso DOM I)
let tituloPrincipal = document.querySelector("h1");
console.log("Título:", tituloPrincipal.innerText);


// ✅ 2. Acceder por clase
let articulos = document.getElementsByClassName("producto"); // aún no hay clases .producto, se puede agregar
console.log("Cantidad de productos:", articulos.length);


// ✅ 3. Acceder por etiqueta
let secciones = document.getElementsByTagName("section");
console.log("Cantidad de secciones:", secciones.length);

// ✅ 4. Agregar un nuevo artículo (producto)
let contenedor = document.getElementById("lista-productos");
let nuevoArticulo = document.createElement("article");
nuevoArticulo.innerHTML = `
  <h3>Producto JS</h3>
  <p>Este producto fue creado con JavaScript.</p>
`;
contenedor.appendChild(nuevoArticulo);

// TODO: 5. Crear otra sección llamada “Servicios” con 2 ítems y agregarla al <main>
let main = document.querySelector("main");
let nuevaSeccion = document.createElement("section");

nuevaSeccion.innerHTML = `
  <h2>Servicios</h2>
  <ul>
    <li>Diseño UX</li>
    <li>Consultoría Web</li>
  </ul>
`;
main.appendChild(nuevaSeccion);

// TODO: 6. Agregar redes sociales en el footer (usar #redes)
let redes = document.getElementById("redes");
redes.innerHTML = `
  <a href="https://instagram.com" target="_blank">Instagram</a> |
  <a href="https://twitter.com" target="_blank">Twitter</a>
`;

// ✅ 7. Capturar datos desde inputs (si los agregás en HTML)
let nombreInput = document.createElement("input");
nombreInput.id = "nombre";
nombreInput.placeholder = "Ingresá tu nombre";
document.body.appendChild(nombreInput);

let boton = document.createElement("button");
boton.innerText = "Enviar";
document.body.appendChild(boton);

boton.addEventListener("click", () => {
  let valor = document.getElementById("nombre").value;
  alert("Hola " + valor + ", gracias por participar!");
});

// TODO: 8. Eliminar el primer producto existente
// Tip: podés acceder a `contenedor.firstChild` o usar getElementsByTagName("article")[0]

let primerArticulo = contenedor.getElementsByTagName("article")[0];
contenedor.removeChild(primerArticulo);
