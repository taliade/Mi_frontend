Ejemplos Reales de Ciclos para la Clase
🔄 CICLO FOR - "Cuando sabés exactamente cuántas veces"
1. Lista de Reproducción de Spotify
javascriptconst canciones = ["Bad Bunny - Monaco", "Duki - Rockstar", "Tini - La Loto"];

for(let i = 0; i < canciones.length; i++) {
    console.log(`🎵 Reproduciendo: ${canciones[i]}`);
}
"Como cuando tu playlist tiene 20 canciones y querés que suenen todas"
2. Stories de Instagram
javascriptfor(let story = 1; story <= 8; story++) {
    console.log(`📸 Viendo story ${story}/8`);
    // Cada story dura 15 segundos
}
3. Repartir Cartas en Truco
javascriptconst jugadores = ["Ana", "Carlos", "María"];

for(let i = 0; i < jugadores.length; i++) {
    console.log(`🃏 Repartiendo 3 cartas a ${jugadores[i]}`);
}

⏳ CICLO WHILE - "Hasta que algo cambie"
1. Esperando el Colectivo
javascriptlet colectivoLlego = false;
let minutosEsperando = 0;

while (!colectivoLlego && minutosEsperando < 20) {
    console.log(`🚌 Esperando... ${minutosEsperando} minutos`);
    minutosEsperando++;
    
    // Simulamos que puede llegar en cualquier momento
    if (Math.random() > 0.8) {
        colectivoLlego = true;
        console.log("¡Por fin llegó el 60!");
    }
}
2. Jugando al Counter Strike javascript
let vida = 100;
let balaEnemiga = 25;

while (vida > 0) {
    console.log(`💚 Vida: ${vida}%`);
    vida -= balaEnemiga;
    console.log("¡Te dispararon!");
    
    if (vida <= 0) {
        console.log("💀 Game Over - Respawn en 5 segundos");
    }
}
3. Scrolleando TikTok javascript
let tiempoLibre = 30; // minutos
let videosVistos = 0;

while (tiempoLibre > 0) {
    console.log(`📱 Video ${videosVistos + 1} - Tiempo restante: ${tiempoLibre} min`);
    tiempoLibre -= 0.5; // cada video 30 segundos
    videosVistos++;
}

console.log(`🤯 Viste ${videosVistos} videos en 30 minutos!`);

🔁 DO WHILE - "Al menos una vez sí o sí"
1. Intentar Conectarse al WiFi
javascriptlet intentos = 0;
let conectado = false;

do {
    intentos++;
    console.log(`📶 Intento ${intentos} de conectar al WiFi...`);
    
    // A veces funciona, a veces no
    conectado = Math.random() > 0.6;
    
    if (conectado) {
        console.log("✅ ¡Conectado al WiFi!");
    } else {
        console.log("❌ Falló la conexión, reintentando...");
    }
    
} while (!conectado && intentos < 5);
2. Intentar Comprar Zapatillas en Oferta
javascriptlet stockDisponible = false;
let intentosCompra = 0;

do {
    intentosCompra++;
    console.log(`🛒 Intento ${intentosCompra}: Agregando al carrito...`);
    
    // Simula que a veces hay stock, a veces se agota
    stockDisponible = Math.random() > 0.7;
    
    if (!stockDisponible) {
        console.log("😔 Sin stock, reintentando en 1 segundo...");
    }
    
} while (!stockDisponible && intentosCompra < 10);

if (stockDisponible) {
    console.log("🎉 ¡Conseguiste las zapatillas!");
} else {
    console.log("😞 Se agotaron, será para la próxima...");
}

🚀 EJEMPLOS COMBINADOS - "En la vida real se mezclan"
1. Netflix: Buscando qué ver
javascriptconst peliculas = ["Stranger Things", "La Casa de Papel", "Elite", "Dark"];
let encontreAlgo = false;
let indicePelicula = 0;

// FOR para revisar cada película
for (let i = 0; i < peliculas.length && !encontreAlgo; i++) {
    console.log(`🎬 Revisando: ${peliculas[i]}`);
    
    // WHILE para leer la sinopsis
    let leyendoSinopsis = true;
    let segundos = 0;
    
    while (leyendoSinopsis && segundos < 10) {
        segundos++;
        if (segundos === 5) {
            console.log("🤔 Mmm... no me convence");
        }
        if (segundos === 10) {
            leyendoSinopsis = false;
        }
    }
    
    // A veces encontrás algo que te gusta
    if (Math.random() > 0.6) {
        encontreAlgo = true;
        console.log(`✅ ¡Perfecto! Voy a ver ${peliculas[i]}`);
    }
}

if (!encontreAlgo) {
    console.log("😅 Al final voy a ver Los Simpson... otra vez");
}
2. Pedidos Ya: Buscando restaurante
javascriptconst restaurantes = ["McDonald's", "Mostaza", "Pizza Libre", "Sushi Pop"];
let presupuesto = 2000;
let pedidoRealizado = false;

for (let i = 0; i < restaurantes.length && !pedidoRealizado; i++) {
    console.log(`🍕 Revisando menú de ${restaurantes[i]}`);
    
    let precio = Math.floor(Math.random() * 3000) + 500; // Entre $500 y $3500
    
    if (precio <= presupuesto) {
        console.log(`💰 Precio: $${precio} - ¡Perfecto!`);
        pedidoRealizado = true;
        
        // Esperando el delivery
        let tiempoEspera = 45; // minutos
        do {
            console.log(`🛵 Tu pedido llegará en ${tiempoEspera} minutos`);
            tiempoEspera -= 15;
        } while (tiempoEspera > 0);
        
        console.log("🎉 ¡Tu pedido ha llegado!");
        
    } else {
        console.log(`💸 Precio: $${precio} - Muy caro, siguiente...`);
    }
}





function mostrarVueltas() {
  for (let i = 1; i <= 5; i++) {
    console.log('Pasando la vuelta ' + i);
  }
}

// Ejecutar la función
mostrarVueltas();


// function contarImpares(hasta) {
//   let cantidad = 0;

//   for (let i = 0; i <= hasta; i++) {
//     if (i % 2 !== 0) {
//       cantidad++;
//     }
//   }

//   console.log("Cantidad de números impares desde 0 hasta " + hasta + ": " + cantidad);
// }

// // Ejemplo de ejecución
// contarImpares(10); // Debería mostrar: Cantidad de números impares desde 0 hasta 10: 5


// function mostrarTabla(numero) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(numero + ' * ' + i + ' = ' + (numero * i));
//   }
// }

// // Ejemplo de ejecución
 mostrarTabla(7); // Mostrará la tabla del 7 del 1 al 10
