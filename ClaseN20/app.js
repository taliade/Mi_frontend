// // Lista de Reproducción de Spotify javascript

// const canciones = ["Bad Bunny - Monaco", "Duki - Rockstar", "Tini - La Loto"];

// for(let i = 0; i < canciones.length; i++) {
//     console.log(`🎵 Reproduciendo: ${canciones[i]}`);
// }




// for (let v=0; v < 10; v++) {
    
//         console.log(`Número: ${v} `);  // primer dato 0 es menor que 10, se imprime 0, itera Imcrementa ++ 
    
// }


let colectivoLlego = false;
let minutosEsperando = 0;

while (!colectivoLlego && minutosEsperando < 200) {
    console.log(`🚌 Esperando... ${minutosEsperando} minutos`);
    minutosEsperando++;
    
}


// let vuelta = 5;
// do {
// console.log('Contando: '  + vuelta);
// vuelta ++
// }while ( vuelta <= 4);


// function muestraTexto(){
//     for( let vuelta =0; vuelta < 5; vuelta++) {
//     console.log('Pasando la vuelta ' + vuelta);
//     //cuando llegue hasta la vuelta 5
// }
// }

// muestraTexto();
// // Llamada a la función





// function mostrarNumerosPareImpar(){
//     let numero = Number(prompt("Ingrese un número: "));
//     for (let i=0; i <= numero; i++){
//         if (i % 2 === 0) {
//             console.log(`${i} es un número par.`);
//         } else {
//             console.log(`${i} es un número impar.`);
//         }
//     }
// }

// mostrarNumerosPareImpar();
// // Llamada a la función para mostrar números pares e impares

function crearTablaDeMultiplicar(){
let nume = Number(prompt("Ingrese un número para crear su tabla de multiplicar: "));
    for(let i= 1; i <= 10; i++) {
    
    console.log(nume + ' * ' + i + ' = ' + nume * i); 
}
}


crearTablaDeMultiplicar();
// Llamada a la función para crear la tabla de multiplicar