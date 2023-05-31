
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
