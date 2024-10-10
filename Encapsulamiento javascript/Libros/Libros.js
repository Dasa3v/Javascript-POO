// Clase Libros con atributos privados
class Libros {
    // método constructor
    constructor(titulo, autor, isbn, editorial) {
        this._titulo = titulo; // privado (convención en JS usando _)
        this._autor = autor; // privado
        this._isbn = isbn; // privado
        this.editorial = editorial; // público
    }

    // método getter para título
    obtenerTitulo() {
        return this._titulo;
    }

    // método getter para autor
    obtenerAutor() {
        return this._autor;
    }

    // método getter para ISBN
    obtenerIsbn() {
        return this._isbn;
    }

    // método setter para título
    establecerTitulo(nuevoTitulo) {
        this._titulo = nuevoTitulo;
    }

    // método setter para autor
    establecerAutor(nuevoAutor) {
        this._autor = nuevoAutor;
    }

    // método para mostrar detalles del objeto
    mostrarDetalles() {
        document.write(`\nTitulo: ${this._titulo}<br>`);
        document.write(`Autor: ${this._autor}<br>`);
        document.write(`ISBN: ${this._isbn}<br>`);
        document.write(`Editorial: ${this.editorial}<br>`);
    }
}

// objeto
const libro = new Libros("El señor", "Mario marco", 1458867806, "Libertad");

// imprimir atributos públicos y privados
libro.mostrarDetalles();

document.write("<hr>");

// modificar atributos encapsulados usando setters y obtenerlos con getters
libro.establecerTitulo("La sombra"); // setter
document.write(`Titulo: ${libro.obtenerTitulo()}<br>`); // getter
libro.establecerAutor("Kendamar Luz"); // setter
document.write(`Autor: ${libro.obtenerAutor()}<br>`); // getter
document.write(`ISBN: ${libro.obtenerIsbn()}<br>`); // getter
document.write(`Editorial: ${libro.editorial}<br>`); // público
