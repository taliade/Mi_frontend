/*

Utilizando el mismo proyecto con el que trabajamos la clase enterior:
-Agregar un artículo nuevo a la web desde js, mediante los métodos aprendidos hoy.
-Agregar links a redes sociales en el footer.
-Crear una sección nueva, como la de "productos", pero de otra índole, y agregarle contenido a gusto.

*/ 

let articuloNuevo = document.createElement('article');

articuloNuevo.innerHTML = '<img src="./website-design-icon.png" alt="Product Image"><br><h3>Graphic Desing Course</h3><br><a href="#">More</a>';
let seccion = document.querySelector('.products')
seccion.appendChild(articuloNuevo);

let links = document.createElement('nav');
links.innerHTML = '<a href="#">Facebook</a> <a href="#">Instagram</a> <a href="#">Whatsapp</a>';
let contenedor = document.querySelector('footer');
contenedor.appendChild(links);

let seccionNueva = document.createElement('section');
seccionNueva.innerHTML = '<h2>Más buscados</h2><br><article class="curso"><img src="./website-design-icon.png" alt="Product Image"><br><h3>Back-end Course</h3><br><a href="#">More</a></article>';

let padre = document.querySelector('main');
padre.appendChild(seccionNueva);