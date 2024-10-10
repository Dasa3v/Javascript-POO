// Defino la clase
class Carro {
    // Método constructor
    constructor(marca, modelo, color, año_fabrica, tipo_carro) {
        // Defino los atributos de instancia de la clase
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.año_fabrica = año_fabrica;
        this.tipo_carro = tipo_carro;
    }

    // Método para mostrar detalles del carro
    mostrarDetalles() {
        document.write("<h3 class='text-warning'>Información de su carro</h3>");
        document.write("Marca: " + this.marca + "<br>");
        document.write("Modelo: " + this.modelo + "<br>");
        document.write("Color: " + this.color + "<br>");
        document.write("Año de fabricación: " + this.año_fabrica + "<br>");
        document.write("Tipo de carro: " + this.tipo_carro + "<br>");
        document.write("<hr>");
    }

    // Método para verificar si tiene la tecnomecánica al día
    tecnomecanica() {
        let tecnomecanica = parseInt(prompt("¿Su carro tiene la tecnomecánica al día? Use 1 para sí o 0 para no: "));

        if (tecnomecanica > 0) {
            document.write("El carro " + this.modelo + " tiene la tecnomecánica al día.<br>");
        } else {
            document.write("El carro " + this.modelo + " no tiene la tecnomecánica al día. <br>");
            document.write("Por favor consiga la tecnomecánica o su carro será confiscado.<br>");
        }
        document.write("<hr>");
    }
}

// Creamos los objetos a partir de instanciar la clase de Carro
const carro1 = new Carro("Ford", "Diecast", "Azul con blanco", "2005", "Carreras");
const carro2 = new Carro("Hyundai", "i10-GImt", "Rojo", "2013", "Familiar");
const carro3 = new Carro("Toyota", "Prado 4.0 Tx-l Fl", "Blanco", "2022", "Todo terreno");

// Mostrar los detalles de cada objeto y preguntar si tienen la tecnomecánica al día
carro1.mostrarDetalles();
carro1.tecnomecanica();

carro2.mostrarDetalles();
carro2.tecnomecanica();

carro3.mostrarDetalles();
carro3.tecnomecanica();
