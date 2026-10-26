"use strict";
// 1. INTERFAZ DE RESERVACIONES
Object.defineProperty(exports, "__esModule", { value: true });
// 2. ARREGLO INICIAL
const reservaciones = [
    {
        id: 1,
        cliente: "Ernesto Huezo",
        personas: 4,
        zona: "Interior"
    },
    {
        id: 2,
        cliente: "David Ferman",
        personas: 6,
        zona: "Terraza"
    },
    {
        id: 3,
        cliente: "Ruben Fuentes",
        personas: 5,
        zona: "Interior"
    },
    {
        id: 4,
        cliente: "Angeline Torres",
        personas: 3,
        zona: "Terraza"
    }
];
// 3. REGISTRAR NUEVAS RESERVACIONES
// Se agrega una reservacion normal al final
reservaciones.push({
    id: 5,
    cliente: "Fernando Guevara",
    personas: 2,
    zona: "Interior"
});
// Se agrega una reservacion prioritaria al inicio
reservaciones.unshift({
    id: 6,
    cliente: "Valeria Hernandez",
    personas: 7,
    zona: "Terraza"
});
// Mostrar la lista antes de atender
console.log("===== LISTA ANTES DE ATENDER =====");
console.log(reservaciones);
// 4. FUNCION PARA ATENDER UNA RESERVACION
function atenderReservacion(lista) {
    const atendida = lista.shift();
    if (atendida !== undefined) {
        console.log("===== RESERVACION ATENDIDA =====");
        console.log("Cliente:", atendida.cliente);
        console.log("Personas:", atendida.personas);
    }
    else {
        console.log("No hay reservaciones pendientes para atender");
    }
}
// Primera llamada - Atiende la primera reservacion
atenderReservacion(reservaciones);
// Segunda llamada - Atiende la siguiente reservación
atenderReservacion(reservaciones);
// Tercera llamada con un arreglo vacio para demostrar el caso
const listaVacia = [];
atenderReservacion(listaVacia);
// 5. BUSCAR RESERVACION POR IDENTIFICADOR
// Caso en el que sí existe
const reservacionEncontrada = reservaciones.find((reservacion) => reservacion.id === 2);
console.log("===== BUSQUEDA POR ID: 2 =====");
if (reservacionEncontrada !== undefined) {
    console.log("Reservacion encontrada:");
    console.log(reservacionEncontrada);
}
else {
    console.log("No existe una reservacion con ese identificador");
}
// Caso en el que no existe
const reservacionNoEncontrada = reservaciones.find((reservacion) => reservacion.id === 99);
console.log("===== BUSQUEDA POR ID: 99 =====");
if (reservacionNoEncontrada !== undefined) {
    console.log("Reservacion encontrada:");
    console.log(reservacionNoEncontrada);
}
else {
    console.log("No existe una reservacion con ese identificador");
}
// 6. FILTRAR RESERVACIONES DE TERRAZA CON 5 O MÁS PERSONAS
// Guardamos la cantidad original inmediatamente antes de filtrar
const cantidadAntesDelFiltro = reservaciones.length;
const reservacionesTerraza = reservaciones.filter((reservacion) => reservacion.zona === "Terraza" && reservacion.personas >= 5);
// Mostrar directamente el arreglo filtrado
console.log("===== RESERVACIONES DE TERRAZA CON 5 O MÁS PERSONAS =====");
if (reservacionesTerraza.length > 0) {
    console.log(reservacionesTerraza);
}
else {
    console.log("No hay reservaciones que cumplan ambas condiciones");
}
// 7. COMPROBAR QUE FILTER NO MODIFICO EL ARREGLO ORIGINAL
const cantidadDespuesDelFiltro = reservaciones.length;
console.log("===== COMPROBACION DEL FILTRO =====");
console.log("Cantidad antes de filtrar:", cantidadAntesDelFiltro);
console.log("Cantidad despues de filtrar:", cantidadDespuesDelFiltro);
if (cantidadAntesDelFiltro === cantidadDespuesDelFiltro) {
    console.log("El filtro no elimino reservaciones del arreglo original");
}
else {
    console.log("La cantidad del arreglo original cambio");
}
// 8. ESTADO FINAL
console.log("===== ESTADO FINAL =====");
console.log("Reservaciones pendientes:", reservaciones);
console.log("Cantidad de reservaciones pendientes:", reservaciones.length);
console.log("Cantidad de coincidencias del filtro:", reservacionesTerraza.length);
