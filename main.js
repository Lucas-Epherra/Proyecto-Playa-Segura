/* PLAYA SEGURA - simulador interactivo de una app para guardar las estadisticas del servicio de guardavidas en la temporada de verano */

// alert de bienvenida al simulador
alert("Bienvenido a playa segura.\nA continuacion ingrese su nombre de usuario.");

// Funcion flecha que muestra las opciones de usuario
const menu = () => {
    return ("Ingrese su numero de usuario:\n1 : Corresponde al encargado del turno mañana.\n2 : Corresponde al encargado del turno tarde.")
}

let cortarFuncion = true;
let admin;

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

