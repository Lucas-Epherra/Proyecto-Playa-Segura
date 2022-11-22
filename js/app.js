
//Declaraciones
let fecha = [],
    puesto = [],
    viento = [],
    mar = [],
    codigo = [];

let cantidadDatos;
let fila;

let celdaFecha,
    celdaPuesto,
    celdaViento,
    celdaMar,
    celdaCodigo;

let nodoTextoFecha,
    nodoTextoPuesto,
    nodoTextoViento,
    nodoTextoMar,
    nodoTextoCodigo;

//funcion para agregar cada valor del formulario al local storage
const agregarStorage = () => {

    localStorage.setItem("fecha", JSON.stringify(formFecha.value))
    localStorage.setItem("puesto", JSON.stringify(seleccionarPuesto.value))
    localStorage.setItem("viento", JSON.stringify(seleccionarViento.value))
    localStorage.setItem("estado del mar", JSON.stringify(seleccionarEstadoDelMar.value))
    localStorage.setItem("codigo", JSON.stringify(seleccionarCodigos.value))

    llenarTabla();
}

// funcion para recuperar los elementos del storage y mostrarlos en la tabla

const llenarTabla = () => {

    tbody = document.getElementById('tbody')

    tbody.innerHTML = '';

    fecha = JSON.parse(localStorage.getItem("fecha"));
    puesto = JSON.parse(localStorage.getItem("puesto"));
    viento = JSON.parse(localStorage.getItem("viento"));
    mar = JSON.parse(localStorage.getItem("estado del mar"));
    codigo = JSON.parse(localStorage.getItem("codigo"));

    cantidadDatos = viento.length;

    for (let i = 0; i < cantidadDatos; i++) {

        fila = document.createElement('tr');

        celdaFecha = document.createElement('td');
        celdaPuesto = document.createElement('td');
        celdaViento = document.createElement('td');
        celdaMar = document.createElement('td');
        celdaCodigo = document.createElement('td');

        nodoTextoFecha = document.createTextNode(fecha[i]);
        nodoTextoPuesto = document.createTextNode(puesto[i]);
        nodoTextoViento = document.createTextNode(viento[i]);
        nodoTextoMar = document.createTextNode(mar[i]);
        nodoTextoCodigo = document.createTextNode(codigo[i]);

        celdaFecha.appendChild(nodoTextoFecha);
        celdaPuesto.appendChild(nodoTextoPuesto);
        celdaViento.appendChild(nodoTextoViento);
        celdaMar.appendChild(nodoTextoMar);
        celdaCodigo.appendChild(nodoTextoCodigo);

        fila.appendChild(celdaFecha);
        fila.appendChild(celdaPuesto);
        fila.appendChild(celdaViento);
        fila.appendChild(celdaMar);
        fila.appendChild(celdaCodigo);

        tbody.appendChild(fila);
    }

}

//evento enviar

let seleccion = document.getElementById("seleccionar");

let btn = document.getElementById("enviar");

btn.addEventListener("click", agregarStorage) 