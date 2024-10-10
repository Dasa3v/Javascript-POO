// Clase Productos con atributos privados
class Productos {
    // método constructor
    constructor(nombre, precio,cantidad,categoria) {
        this._nombre = nombre; // privado (convención en JS usando _)
        this._precio = precio; // privado
        this.cantidad = cantidad; // público
        this.categoria = categoria; // público
    }

    // método getter para nombres
    obtenerNombre() {
        return this._nombre;
    }

    // método getter para apellidos
    obtenerPrecio() {
        return this._precio;
    }

    // método setter para nombres
    establecerNombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }

    // método setter para apellidos
    establecerPrecio(nuevoPrecio) {
        this._precio = nuevoPrecio;
    }

    // método para mostrar detalles del objeto
    mostrarDetalles() {
        document.write(`\nNombre del producto: ${this._nombre}<br>`);
        document.write(`Precio del producto: ${this._precio}<br>`);
        document.write(`Cantidad de productos: ${this.cantidad}<br>`);
        document.write(`Categoria del producto: ${this.categoria}<br>`);
    }
}

// objeto
const producto = new Productos("Avon", 1500, 200, "Humectante");

// imprimir atributos públicos y privados
producto.mostrarDetalles();

document.write("<hr>");

// modificar atributos encapsulados usando setters y obtenerlos con getters
producto.establecerNombre("Milagro"); // setter
document.write(`Nombre del producto: ${producto.obtenerNombre()}<br>`); // getter
producto.establecerPrecio("3250"); // setter
document.write(`Precio del producto: ${producto.obtenerPrecio()}<br>`); // getter
document.write(`Cantidad del producto: ${producto.cantidad}<br>`); // público
document.write(`Categoria del producto: ${producto.categoria}<br>`); // público
