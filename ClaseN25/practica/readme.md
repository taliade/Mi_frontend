📌 Pasos para completar la práctica
✅ 1. Agregar un artículo nuevo a la web desde JS

´´´
const seccion = document.querySelector("main"); // o donde quieras insertar

const nuevoArticulo = document.createElement("article");
nuevoArticulo.innerHTML = `
  <h3>Artículo generado desde JavaScript</h3>
  <p>Este artículo fue creado usando el DOM.</p>
`;

seccion.appendChild(nuevoArticulo);
´´´




✅ 2. Agregar links a redes sociales en el footer

´´´
const footer = document.querySelector("footer");

const redes = `
  <div id="redes">
    <a href="https://instagram.com/tu_usuario" target="_blank">Instagram</a> |
    <a href="https://facebook.com/tu_usuario" target="_blank">Facebook</a> |
    <a href="https://linkedin.com/in/tu_usuario" target="_blank">LinkedIn</a>
  </div>
`;
´´´

footer.innerHTML += redes;
✅ 3. Crear una sección nueva (ej: "Opiniones", "Testimonios", "Recomendados")

´´
const nuevaSeccion = document.createElement("section");
nuevaSeccion.innerHTML = `
  <h2>Testimonios</h2>
  <ul>
    <li>“Muy útil el curso, me encantó practicar con DOM.” – Ana</li>
    <li>“Me ayudó a entender cómo manipular el HTML desde JavaScript.” – Carla</li>
  </ul>
`;

document.body.appendChild(nuevaSeccion);
´´´


✅ Archivos necesarios
📄 index.html (ejemplo base)

´´´
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Mi Proyecto DOM</title>
</head>
<body>
  <main>
    <article>
      <h3>Artículo existente</h3>
      <p>Este es el artículo original del proyecto anterior.</p>
    </article>
  </main>
  <footer></footer>

  <script src="main.js"></script>
</body>
</html>
´´´ 