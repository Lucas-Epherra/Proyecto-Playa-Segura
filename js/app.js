//Declaracion de array con el estado del mar.
const estadoDelMar = ["Bueno", "Dudoso", "Peligroso", "Prohibido", "Rayos"]

//Declaracion de codigos en un array (los codigos representan cada tipo de intervencion en la playa)
const codigos = ["Codigo 1","Codigo 2","Codigo 3","Codigo 4","Codigo 5","Codigo 6"]

//Declaracion de vientos
const vientos = ["Norte","Noreste","Noroeste","Este","Oeste","Sur","Sureste","Suroeste"]

class Product {
    constructor(fecha,puesto,viento,estadoMar,codigos) {
      this.fecha = fecha;
      this.puesto = puesto;
      this.viento = viento;
      this.estadoMar = estadoMar;
      this.codigos = codigos;
    }

  }

  class UI {
    addProduct(product) {
      const productList = document.getElementById('product-list');
      const element = document.createElement('div');
      element.innerHTML = 
          <div class="card text-center mb-4">
              <div class="card-body">
             
              <strong>Product Name</strong> : ${product.name}
              <strong>Product Price</strong> : ${product.price}
              <strong>Product Year</strong> : ${product.year}
  
              <a href="#" class="btn btn-danger" name="delete">Delete</a>
              
              </div>
          </div>
          ;
      productList.appendChild(element);

    }

    resetForm() {
      document.getElementById('reset').reset();
    }

  }

  //DOM events


  //Submit event
  document.getElementById('enviar')
    .addEventListener('click', function (e) {

      const fecha = document.getElementById('fecha').value;
      const puesto = document.getElementById('puesto').value;
      const viento = document.getElementById('viento').value;
      const estadoMar = document.getElementById('estadoMar').value;
      const codigos = document.getElementById('codigos').value;

      const product = new Product(fecha,puesto,viento,estadoMar,codigos);

      const ui = new UI();
      ui.addProduct(product);
      ui.resetForm();
      ui.showMessage('Producto agregado', 'danger');


      e.preventDefault();
    });

  //Click event
  document.getElementById('product-list').addEventListener('click', function (e) {
    const ui = new UI();
    ui.deleteProduct(e.target);
  });
 

  const agregarStorage = () => {

    localStorage.setItem("puesto",seleccionarPuesto.value)
    localStorage.setItem("viento",seleccionarViento.value)
    localStorage.setItem("estado del mar",seleccionarEstadoDelMar.value)
    localStorage.setItem("codigo",seleccionarCodigos.value)

  }

  //evento enviar

  let seleccion = document.getElementById("seleccionar");

  let btn = document.getElementById("enviar");

  btn.addEventListener("click",agregarStorage) 