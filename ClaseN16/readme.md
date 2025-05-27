## condicional 


let edad = 18;
if (edad >= 18) {
  console.log("Podés entrar al evento.");
}



***** 

Mini proyecto: Cambiar fondo de color según la hora del día
<button onclick="cambiarFondo()">¿Es de día o de noche?</button>

<script>
function cambiarFondo() {
  const hora = new Date().getHours();
  if (hora >= 6 && hora < 18) {
    document.body.style.backgroundColor = "#FFD700"; // Amarillo
    console.log("Es de día");
  } else {
    document.body.style.backgroundColor = "#2F4F4F"; // Gris oscuro
    console.log("Es de noche");
  }
}
</script>


***** 

### Condiciones + IF else
### Semaforo : 
let color = prompt("¿Qué color ves en el semáforo?");

if (color === "rojo") {
  console.log("Frená");
} else if (color === "amarillo") {
  console.log("Preparáte");
} else if (color === "verde") {
  console.log("Avanzá");
} else {
  console.log("Color no reconocido");
}

***

### If ternario : es una Oracion

let comida = prompt("¿Querés pizza o ensalada?");
comida === "pizza"
  ? console.log("¡Excelente elección!")
  : console.log("Bueno... saludable al menos 😅");


*** 

### Switch + Bonus 
#### Ejemplo: Destino turístico

<select id="destino">
  <option value="1">Canadá</option>
  <option value="2">España</option>
  <option value="3">Bariloche</option>
  <option value="4">Japón</option>
</select>
<button onclick="mostrarDestino()">Ver destino</button>
<p id="mensaje"></p>

<script>
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
</script>


### Bonus: nuevo alert con<dialog>
### se puede reemplazar el alert()

<button onclick="mostrarDialogo()">Mostrar diálogo</button>

<dialog id="miDialogo">
  <p>¡Hola! Este es un diálogo moderno 💬</p>
  <button onclick="cerrarDialogo()">Cerrar</button>
</dialog>

<script>
function mostrarDialogo() {
  document.getElementById("miDialogo").showModal();
}

function cerrarDialogo() {
  document.getElementById("miDialogo").close();
}
</script>

