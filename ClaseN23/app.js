let celuJson = `{
  "Marca": "Samsung",
  "Modelo": "Galaxy Z Fold 4",
  "color": "azul",
  "precio": 1799.99
}`;




let jsonConvertido = JSON.parse(celuJson);
console.log(jsonConvertido);
//{ Marca: 'Samsung', Modelo: 'Galaxy Z Fold 4' }



let celular = { 
 marca: "Samsung", 
 modelo: "Galaxy Z Fold 4",
 color : "Rosa",
 precio: 500000 
 };

let datoConvertido = JSON.stringify(celular);
console.log(datoConvertido);
// '{"marca":"Samsung","modelo":"Galaxy Z Fold 4"}'


// Método -> localStorage.setItem(clave, valor)
// clave = nombre para identificar el elemento
// valor = valor/contenido del elemento (debe ser string)

localStorage.setItem('bienvenida', '¡Hola Code!');
localStorage.setItem('esValido', 'true');
localStorage.setItem('unNumero', 20);



console.log(localStorage.getItem('bienvenida')); // ¡Hola Code!
console.log(localStorage.getItem('esValido')); // true
console.log(localStorage.getItem('unNumero')); // 20
let mensaje = localStorage.getItem('bienvenida');
let bandera = localStorage.getItem('esValido');
let numero = localStorage.getItem('unNumero');
console.log(typeof mensaje); //string;
console.log(typeof bandera); //string;
console.log(typeof numero); //string;