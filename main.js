/* PLAYA SEGURA - simulador interactivo de una app para guardar las estadisticas del servicio de guardavidas en la temporada de verano */

//declaracion de variables
let cortarFuncion = true;
let admin;

//Declaracion de array con el estado del mar.
const estadoDelMar = ["Bueno", "Dudoso", "Peligroso", "Prohibido", "Rayos"]

//Declaracion de array con objetos dentro (indican la direccion de los vientos)
const vientos = [{
    norte: "Norte",
    noroeste: "Noroeste",
    noreste: "Noreste",
},
{
    sur: "Sur",
    suroeste: "Suroeste",
    sureste: "Sureste",
},
{
    oeste: "Oeste",
    este: "Este",
}
]

//Declaracion de codigos en un array (los codigos representan cada tipo de intervencion en la playa)
const codigos = ["Codigo 1","Codigo 2","Codigo 3","Codigo 4","Codigo 5","Codigo 6"]

// alert de bienvenida al simulador
alert("Bienvenido a playa segura.\nA continuacion ingrese su nombre de usuario.");

// Funcion flecha que muestra las opciones de usuario
const menu = () => {
    return ("Ingrese su numero de usuario:\n1 : Corresponde al encargado del turno mañana.\n2 : Corresponde al encargado del turno tarde.")
}

//funcion para filtrar el ingreso de los usuarios , permitiendo 1 o 2 solamente
function filtrarUsuarios() {
    while (cortarFuncion) {
        admin = prompt(menu());
        if (admin < 3 && admin > 0) {
            cortarFuncion == false;
            return admin;
        } else {
            alert("El usuario elegido es incorrecto.")
            continue;
        }
    }
}

//ver array de estado del mar
console.log(estadoDelMar);

//ver array con objetos que representa los vientos
console.log(vientos);

//ver array con objetos que representa los codigos
console.log(codigos);

console.log(filtrarUsuarios());