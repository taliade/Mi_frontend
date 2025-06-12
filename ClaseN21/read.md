function sumarGanancias(importes) {
    // Filtrar los importes que son ganancias (mayores que 0) y no superan $1,000
    const gananciasFiltradas = importes.filter(importe => importe > 0 && importe <= 1000);

    // Sumar las ganancias filtradas
    const sumaGanancias = gananciasFiltradas.reduce((acumulador, importe) => acumulador + importe, 0);

    return sumaGanancias;
}

// Ejemplo de uso:
const importes = [300, 500, -200, 1200, 800, -100, 1500, 400];
const resultado = sumarGanancias(importes);
console.log(resultado); // Salida: 2000




________

function verificarAsiento(asientosDisponibles, asientoSolicitado) {
    // Verificar si el asiento solicitado está en el conjunto de asientos disponibles
    if (asientosDisponibles.includes(asientoSolicitado)) {
        // Si está disponible, devolver mensaje de felicitaciones
        return `Felicitaciones, el asiento número ${asientoSolicitado} está disponible.`;
    } else {
        // Si no está disponible, devolver mensaje de asiento ocupado y cantidad de asientos disponibles
        return `Lo sentimos, el asiento número ${asientoSolicitado} está ocupado, pero aún quedan ${asientosDisponibles.length} asientos disponibles.`;
    }
}

// Ejemplo de uso:
const asientosDisponibles = [15, 28, 44, 45, 70];
const asientoSolicitado = 15;
const mensaje = verificarAsiento(asientosDisponibles, asientoSolicitado);
console.log(mensaje); // Salida: Felicitaciones, el asiento número 15 está disponible.



----------------- 


function reportePasajeros(numeroEstaciones) {
    let pasajeros = 200; // El tren sale de la estación Uno con 200 pasajeros
    const reporte = [];

    for (let estacion = 1; estacion <= numeroEstaciones; estacion++) {
        if (estacion === 5) {
            // Estación Olimpo: bajan 80 y suben 120
            pasajeros = pasajeros - 80 + 120;
        } else {
            // Otras estaciones: suben 50 y bajan 30
            pasajeros = pasajeros - 30 + 50;
        }

        // Agregar el reporte de la estación actual
        reporte.push(`Estación ${estacion}: ${pasajeros} pasajeros.`);
    }

    return reporte;
}

// Ejemplo de uso:
const numeroEstaciones = 7;
const reporte = reportePasajeros(numeroEstaciones);
console.log(reporte.join('\n'));
