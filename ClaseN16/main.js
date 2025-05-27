
// /// Ejemplos : 

// let  unValor = 22;   // unvalor es un numero  dato number


// let unValorDiferente = "22"; // unvalorDiferente es un dato string porque esta entre comilla.


// if (unValor === unValorDiferente){   /// == comparo el dato '22'  === Eetrictamente igualdad de tipos de datos
//     console.log("Estos numeros son iguales");
// }else {
//     console.log("Estos numeros son diferentes");
// }


// let color = prompt("¿Qué color ves en el semáforo? (Escribirlo en minuscula)");

// if (color === "rojo") {
//   console.log("Frená");
// } else if (color === "amarillo") {   /// comparacion es  ==  /// === mismo tipo de dato
//   console.log("Preparáte");
// } else if (color === "verde") {
//   console.log("Avanzá");
// } else {
//   console.log("Color no reconocido");
// }


// let comida = prompt("¿Querés pizza o ensalada?");
// comida === "pizza"
//   ? console.log("¡Excelente elección!")
//   : console.log("Bueno... saludable al menos 😅");


function mostrarDestino() {
  const seleccion = Number(document.getElementById("destino").value);
  let mensaje = "";

  switch (seleccion) {
    case 1:
      mensaje = "Un excelente destino para aprender a esquiar";
      break;
    case 2:
      mensaje = "Hermoso destino para recorrer calles con adoquines";
      break;
    case 3:
      mensaje = "Muy buen destino para excursiones en el hielo!";
      break;
    case 4:
      mensaje = "Precioso destino para conocer cientos de tiendas";
      break;
    default:
      mensaje = "Elegí un número del 1 al 4";
  }

  document.getElementById("mensaje").innerText = mensaje;
}


function mostrarDialogo() {
  document.getElementById("miDialogo").showModal();
}

function cerrarDialogo() {
  document.getElementById("miDialogo").close();
}