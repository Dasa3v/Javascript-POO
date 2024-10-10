// Defino la clase
class Figuras {
    // Método constructor
    constructor(lados, nombre, calcularArea, color, forma) {
        // Defino los atributos de instancia de la clase
        this.lados = lados;
        this.nombre = nombre;
        this.calcularArea = calcularArea;
        this.color = color;
        this.forma = forma;
    }

    // Método para mostrar detalles de la figura
    mostrarDetalles() {
        document.write("<h3 class='text-warning'>Información de la figura</h3>");
        document.write("Lados: " + this.lados + "<br>");
        document.write("Nombre: " + this.nombre + "<br>");
        document.write("Fórmula para calcular el área: " + this.calcularArea + "<br>");
        document.write("Color: " + this.color + "<br>");
        document.write("Forma: " + this.forma + "<br>");
        document.write("<hr>");
    }

    // Método para verificar si la figura se puede medir
    medir() {
        if (this.lados > 0) {
            document.write("La figura " + this.nombre + " tiene " + this.lados + " lados, por lo que se puede medir y calcular.<br>");
        } else {
            document.write("La figura " + this.nombre + " es un círculo, por lo que no tiene lados que se puedan medir.<br>");
        }
        document.write("<hr>");
    }
}

// Creamos los objetos a partir de instanciar la clase de Figuras
const figura1 = new Figuras(4, "Rectángulo", "A = largo x ancho", "Verde", "Rectangular");
const figura2 = new Figuras(3, "Triángulo", "A = 0,5 (base x altura)", "Amarillo", "Triangular");
const figura3 = new Figuras(6, "Hexágono", "A = (3√3S2)/2", "Rojo", "Hexagonal");
const figura4 = new Figuras(0, "Círculo", "A = πr²", "Azul", "Circular");

// Mostrar los detalles de cada objeto y verificar si se pueden medir
figura1.mostrarDetalles();
figura1.medir();

figura2.mostrarDetalles();
figura2.medir();

figura3.mostrarDetalles();
figura3.medir();

figura4.mostrarDetalles();
figura4.medir();
