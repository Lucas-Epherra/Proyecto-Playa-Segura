/* PLAYA SEGURA - simulador interactivo de una app para guardar las estadisticas del servicio de guardavidas en la temporada de verano */

//declaracion de variables
let cortarFuncion = true;
let user;

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
alert("Bienvenido a playa segura.\nA continuacion ingrese su numero de usuario.");

// Funcion flecha que muestra las opciones de usuario
const menu = () => {
    return ("Ingrese su numero de usuario:\n1 : Corresponde al encargado del turno mañana.\n2 : Corresponde al encargado del turno tarde.")
}

//funcion para validar el ingreso de los usuarios , permitiendo 1 o 2 solamente
function validarUsuario() {
    while (cortarFuncion == true) {
        user = prompt(menu());
        if (user < 3 && user > 0) {
            cortarFuncion == false;
            return user;
        } else {
            alert("El usuario elegido es incorrecto.")
            continue;
        }
    }
}

//muestra el numero del usuario que ingreso
console.log(user);

//realizar la conversion de user; 1 a encargado de la mañana , y de 2 a encargado de la tarde 

//mostrar un alert dandole la bienvenida al encargado segun el numero ingresado

//a continuacion mostrar prompt que pida el ingreso de la bandera de estado del mar ( permitiendo solo las 5 que estan dentro del array) ( si no es como array tendre que guardarlas como variables)

//se puede mostrar la entrada a travez de un alert o console.log

//luego la entrada debe ser guardada en un objeto

//luego de la bandera se pedira por medio de prompt ingresar la direccion del viento durante el turno indicado
// y se guardara en una variable o objeto o algo... y se mostrara mediante alert o console.log

//luego mediante otro prompt se pedira ingresar el codigo de la intervencion realizada

// esa entrada se guardara y se le iran sumando en acumulacion el resto de codigos ingresados mas adelante ( no se si los guardare en un objeto o como)

// y se ira mostrando mediante alert o console.log

//ver array de estado del mar
console.log(estadoDelMar);

//ver array con objetos que representa los vientos
console.log(vientos);

//ver array con objetos que representa los codigos
console.log(codigos);

console.log(validarUsuario());
