
const Producto = function(nombre,precio,cantidad,img){
    this.nombre= nombre;
    this.precio = precio;
    this. cantidad = cantidad;
    this.img = img;
}

let producto1= new Producto ("Pañales", 15000, 1, img/imagendepañales.jpg)
let producto2= new Producto ("Articulos higiene", 5000, 1 , img/imagendearticuloshigiene.jpg)
let producto3= new Producto ("Leche Multivitaminica", 3000, 1 , img/imagendeleche.jpg)
let producto4= new Producto ("Pantuflas", 3000, 1 , img/imagendepantuflas.jpg)
let producto5= new Producto ("Neceser", 2500, 1 , img/imagendeneceser.jpg)
let producto6= new Producto ("Pastillero", 2000, 1 , img/imagendepastillero.jpg)



let lista = [producto1,producto2,producto3,producto4,producto5,producto6]

function agregarProducto() { 
    const form = document.createElement('form');

    form.innerHTML = `
      <label for="nombre-input">Nombre:</label>
      <input id="nombre-input" type="text" required>
      
      <label for="precio-input">Precio:</label>
      <input id="precio-input" type="number" step="0.01" required>
      
      <label for="cantidad-input">Cantidad:</label>
      <input id="cantidad-input" type="number" step="1" required>
      
      <button type="submit">Agregar</button>
    `;
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const nombreInput = document.getElementById('nombre-input').value.trim();
      const precioInput = parseFloat(document.getElementById('precio-input').value);
      const stockInput = parseInt(document.getElementById('cantidad-input').value);
  
      if (isNaN(precioInput) || isNaN(stockInput) || nombreInput === '') {
        alert('Por favor ingresa valores válidos.');
        return;
      }
  
      const producto = new Producto(nombreInput, precioInput, stockInput);
  
      if (lista.some((elemento) => elemento.nombre === producto.nombre)) {
        alert('El producto ya existe en la lista.');
        return;
      }
  
      lista.push(producto);
  
  
      localStorage.setItem("productos", JSON.stringify(lista));
  
      alert(`Se ha agregado el producto "${producto.nombre}" a la lista.`);
  
      console.table(lista);
  
      const container = document.createElement('div');
      container.classList.add('card-container');
  
      lista.forEach((producto) => {
        const card = document.createElement('div');
        card.classList.add('card');
  
        const nombre = document.createElement('h2');
        nombre.textContent = producto.nombre;
        card.appendChild(nombre);
  
        const precio = document.createElement('p');
        precio.textContent = `Precio: ${producto.precio}`;
        card.appendChild(precio);
  
        const stock = document.createElement('p');
        stock.textContent = `Cantidad: ${producto.cantidad}`;
        card.appendChild(stock);
  
        container.appendChild(card);
      });
  
      const body = document.querySelector('body');
      body.appendChild(container);
  
      form.reset();
    });
  
    const body = document.querySelector('body');
    body.appendChild(form);
  }







  const agregarBtn = document.getElementById("agregar");
  agregarBtn.addEventListener("click", () => {
    agregarProducto();
  });



  const filtrarBtn = document.getElementById("filtrar");
  filtrarBtn.addEventListener("click", () => {
    filtrarProductos();
  });