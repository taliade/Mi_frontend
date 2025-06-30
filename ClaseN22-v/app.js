let nombre = " Talia";
let edad = 32;
let ciudad = " Buenos Aires";


let persona ={
    nombre: "Talia",
    edad: 32,
    ciudad: "Buenos Aires"
}

// console.log(persona);
// console.log(persona.nombre);
// console.log(persona.edad);      
// console.log(persona.ciudad);


persona.nombre = "Talia Mendez";  // Modificar el nombre
console.log(persona.nombre);
persona.edad = 33;  // Modificar la edad
console.log(persona.edad);



let auto ={
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020,
    color: "Rojo",
    encender: function() {  /// Metodo dentro del objeto es encender
        return "El auto está encendido";
        
    }
}


console.log(auto);
console.log(auto.marca);    
console.log(auto.modelo);
console.log(auto.año);
console.log(auto.color);
console.log(auto.encender());
console.log("El auto está encendidolllll");





function personaCompleta(nombre, edad, ciudad) {
    this.nombre = nombre;
    this.edad = edad;
    this.ciudad = ciudad;
}
let registro1 = new personaCompleta("Talia", 32, "Buenos Aires");
let registro2 = new personaCompleta("Juan", 28, "Córdoba");
let registro3 = new personaCompleta("Ana", 25, "Mendoza");
console.log(registro1);
console.log(registro2);

let perro ={
    nombre: "Firulais",
    edad: 5,
    genero: "Macho",
    vacunas:true,
    entrenado:false //true o false    
}

console.log(perro);
console.log(perro.nombre);
console.log(perro.genero);
console.log(perro.entrenado);
console.log("El perro se llama: " + perro.nombre);

function perreria (nombre, edad, genero, vacunas, entrenado) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
    this.vacunas = vacunas;
    this.entrenado = entrenado;
}

let perro100 = new perreria("Negrito", 5, "Macho", true, false);
let perro101 = new perreria("Blanquito", 3, "Hembra", true, true);
let perro102 = new perreria("Luna", 2, "Hembra", false, true);
console.log(perro100);
console.log(perro101);
console.log(perro102);




// // Clave API personal (https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t)
const API_KEY = "ylX4blBYT9FaoVd6OhvR";

 fetch("https://api.thecatapi.com/v1/images/search?limit=5", {
 headers: {
    "x-api-key": API_KEY
  }
 })
  .then(response => response.json())
  .then(data => {
   const galeria = document.getElementById("galeria");

     data.forEach(gato => {
    const img = document.createElement("img");
      img.src = gato.url;
      galeria.appendChild(img);
    });
   })
  .catch(error => {
    console.error("Error al obtener las imágenes:", error);
  });
