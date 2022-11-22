//Declaracion de array con el estado del mar.
const estadoDelMar = ["Bueno", "Dudoso", "Peligroso", "Prohibido", "Rayos"]

//Declaracion de codigos en un array (los codigos representan cada tipo de intervencion en la playa)
const codigos = ["Codigo 1", "Codigo 2", "Codigo 3", "Codigo 4", "Codigo 5", "Codigo 6"]

//Declaracion de vientos
const vientos = ["Norte", "Noreste", "Noroeste", "Este", "Oeste", "Sur", "Sureste", "Suroeste"]

//funcion para agregar cada valor del formulario al local storage
const agregarStorage = () => {

    localStorage.setItem("puesto", seleccionarPuesto.value)
    localStorage.setItem("viento", seleccionarViento.value)
    localStorage.setItem("estado del mar", seleccionarEstadoDelMar.value)
    localStorage.setItem("codigo", seleccionarCodigos.value)

}

//evento enviar

let seleccion = document.getElementById("seleccionar");

let btn = document.getElementById("enviar");

btn.addEventListener("click", agregarStorage) 

// funcion para recuperar los elementos del storage y mostrarlos en la tabla