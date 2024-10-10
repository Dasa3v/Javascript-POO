// Defino la clase
class Celular {
    // Método constructor
    constructor(nombre, marca, modelo, color, procesador) {
        // Defino los atributos de instancia de la clase
        this.nombre = nombre;
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.procesador = procesador;
    }

    // Método para mostrar detalles del celular
    mostrarDetalles() {
        document.write("<h3 class='text-warning'>Dispositivo Móvil</h3>");
        document.write("Nombre: " + this.nombre + "<br>");
        document.write("Marca: " + this.marca + "<br>");
        document.write("Modelo: " + this.modelo + "<br>");
        document.write("Color: " + this.color + "<br>");
        document.write("Procesador: " + this.procesador + "<br>");
        document.write("<hr>");
    }

    // Método para encender el celular, el usuario ingresa la carga
    encender() {
        let energia = parseInt(prompt("Digite el valor de la carga del celular " + this.modelo + ": "));

        if (energia > 0) {
            document.write("El celular " + this.modelo + " se puede encender<br>");
            document.write("|||||||||||||||||||| " + energia + "% de carga<br>");
        } else {
            document.write("El celular " + this.modelo + " no se puede encender<br>");
            document.write("|||||||||||||||||||| 0% de carga<br>");
        }
        document.write("<hr>");
    }
}

// Creamos los objetos a partir de instanciar la clase de celular
const objeto1 = new Celular("infinix", "smart", "smart8", "negro", "octa-core");
const objeto2 = new Celular("redmi", "xiaomi", "redmi 13", "blanco", "Mediatek Helio G91 ultra");
const objeto3 = new Celular("Galaxy", "samsung", "A25", "gris", "Exynos 1280");

// Mostrar los detalles de cada objeto y permitir que el usuario ingrese la carga
objeto1.mostrarDetalles();
objeto1.encender();

objeto2.mostrarDetalles();
objeto2.encender();

objeto3.mostrarDetalles();
objeto3.encender();
