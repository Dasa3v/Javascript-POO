// Defino la clase
class Motos {
    // Método constructor
    constructor(marca, modelo, añoFabrica, tipo, cilindraje) {
        // Defino los atributos de instancia de la clase
        this.marca = marca;
        this.modelo = modelo;
        this.añoFabrica = añoFabrica;
        this.tipo = tipo;
        this.cilindraje = cilindraje;
    }

    // Método para mostrar detalles de la moto
    mostrarDetalles() {
        document.write("<h3 class='text-warning'>Información de la moto</h3>");
        document.write("Marca: " + this.marca + "<br>");
        document.write("Modelo: " + this.modelo + "<br>");
        document.write("Año de fábrica: " + this.añoFabrica + "<br>");
        document.write("Tipo: " + this.tipo + "<br>");
        document.write("Cilindraje: " + this.cilindraje + "<br>");
        document.write("<hr>");
    }

    // Método para verificar el tipo de combustible
    combustible() {
        let tipoCombustible = parseInt(prompt("Indique el tipo de combustible que usa su moto, 0: Eléctrica, 1: Gasolina, 2: Diésel: "));
        if (tipoCombustible === 1 || tipoCombustible === 2) {
            document.write("Su moto tipo: " + this.tipo + " quema combustible por lo que debe llenar su tanque cada cierta distancia .<br>");
        } else if (tipoCombustible === 0) {
            document.write("Su moto " + this.tipo + " requiere recargarse en una instalación eléctrica cada cierto tiempo y distancia.<br>");
        } else {
            document.write("Error, por favor elija la opción correcta.<br>");
        }
        document.write("<hr>");
    }
}

// Creamos los objetos a partir de instanciar la clase de Motos
const moto1 = new Motos("Honda", "Invicta 150", "2017", "Deportiva", "150 Cc");
const moto2 = new Motos("Victory", "Life 125", "2023", "Scooter", "125 Cc");
const moto3 = new Motos("Yamaha", "Xtz 250", "2014", "Enduro", "250 Cc");

// Mostrar los detalles de cada objeto y verificar el tipo de combustible
moto1.mostrarDetalles();
moto1.combustible();

moto2.mostrarDetalles();
moto2.combustible();

moto3.mostrarDetalles();
moto3.combustible();
