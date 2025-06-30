# Práctica Clase 22 - Objetos Literales y Constructores en JavaScript

## 🧠 Objetivos
- Comprender el uso de objetos literales en JavaScript.
- Diferenciar entre objetos literales y objetos construidos con funciones constructoras.
- Aplicar métodos y propiedades.
- Utilizar `this` y `new` para instanciar objetos.
- Manipular datos de objetos y simular cambios de estado.

## 🛠 Actividades

### 1. Crear un objeto `perro`
Crear un objeto literal llamado `perro` con las siguientes propiedades:
- `nombre` (string)
- `edad` (number)
- `género` (string)
- `vacunado` (boolean)
- `entrenado` (boolean)

🧪 Mostrar en consola:
```js
console.log(perro.nombre);
console.log(perro.genero);
console.log(perro.entrenado);


--------------------------

Crear un objeto pokemon
Dado este objeto inicial:

let pokemon = {
  energia: 100,
  experiencia: 10,
  nombre: "Pikachu"
};
Agregarle un método entrenar que:

Reciba horas como parámetro

Reste a energia las horas × 5

Sume a experiencia las horas × 2

✅ Ejemplo:

pokemon.entrenar(3);
console.log(pokemon.energia);      // 85
console.log(pokemon.experiencia);  // 16


