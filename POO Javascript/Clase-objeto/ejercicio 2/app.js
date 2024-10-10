// Defino la clase
class Perro {
    // Método constructor
    constructor(raza, color, tamaño, pelaje, esperanza_de_vida) {
        // Defino los atributos de instancia de la clase
        this.raza = raza;
        this.color = color;
        this.tamaño = tamaño;
        this.pelaje = pelaje;
        this.esperanza_de_vida = esperanza_de_vida;
    }

    // Método para mostrar detalles del perro
    mostrarDetalles() {
        document.write("<h3 class='text-warning'>Información de su perro</h3>");
        document.write("Raza: " + this.raza + "<br>");
        document.write("Color: " + this.color + "<br>");
        document.write("Tamaño: " + this.tamaño + "<br>");
        document.write("Pelaje: " + this.pelaje + "<br>");
        document.write("Esperanza de vida: " + this.esperanza_de_vida + "<br>");
        document.write("<hr>");
    }

    // Método para saber si el perro está feliz
    feliz() {
        let feliz = parseInt(prompt("Indique si su perro está moviendo la cola con usted, 1 para sí o 0 para no: "));

        if (feliz > 0) {
            document.write("El perro " + this.raza + " está feliz.<br>");
            document.write("Usted cuida bien de su perro y lo hace feliz.<br>");
        } else {
            document.write("El perro " + this.raza + " no se encuentra feliz, por favor dele atención.<br>");
        }
        document.write("<hr>");
    }
}

// Creamos los objetos a partir de instanciar la clase de Perro
const perro1 = new Perro("Golden retriever", "Dorado", "Mediano", "Abundante", "10 a 12 años");
const perro2 = new Perro("Husky siberiano", "Negro con gris y blanco", "Mediano", "Normal", "12 a 15 años");
const perro3 = new Perro("Pitcher", "Oscuro, marrón o gris", "Pequeño", "Poco", "12 a 16 años");

// Mostrar los detalles de cada perro y preguntar si está feliz
perro1.mostrarDetalles();
perro1.feliz();

perro2.mostrarDetalles();
perro2.feliz();

perro3.mostrarDetalles();
perro3.feliz();
