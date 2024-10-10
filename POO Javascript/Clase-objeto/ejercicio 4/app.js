// Defino la clase
class Empleado {
    // Método constructor
    constructor(nombre, edad, cargo, experiencia, sueldo) {
        // Defino los atributos de instancia de la clase
        this.nombre = nombre;
        this.edad = edad;
        this.cargo = cargo;
        this.experiencia = experiencia;
        this.sueldo = sueldo;
    }

    // Método para mostrar detalles del empleado
    mostrarDetalles() {
        document.write("<h3 class='text-warning'>Información del empleado</h3>");
        document.write("Nombre: " + this.nombre + "<br>");
        document.write("Edad: " + this.edad + "<br>");
        document.write("Cargo: " + this.cargo + "<br>");
        document.write("Experiencia: " + this.experiencia + "<br>");
        document.write("Sueldo: " + this.sueldo + "<br>");
        document.write("<hr>");
    }

    // Método para verificar si el empleado declara impuestos
    impuesto() {
        let sueldoNumerico = parseInt(this.sueldo.replace(" de pesos", "")); // Convierto el sueldo a número
        if (sueldoNumerico > 1500000) {
            document.write("El empleado: " + this.nombre + " declara impuestos con cada sueldo que gana.<br>");
        } else {
            document.write("El empleado " + this.nombre + " no declara impuestos por su bajo sueldo.<br>");
        }
        document.write("<hr>");
    }
}

// Creamos los objetos a partir de instanciar la clase de Empleado
const empleado1 = new Empleado("Luis Fernando", "38", "Constructor", "10 años", "1100000 de pesos");
const empleado2 = new Empleado("Maria Mercado", "28", "Policía", "5 años", "3000000 de pesos");
const empleado3 = new Empleado("Jorge Suarez", "30", "Abogado", "2 años", "5000000 de pesos");

// Mostrar los detalles de cada objeto y verificar si declaran impuestos
empleado1.mostrarDetalles();
empleado1.impuesto();

empleado2.mostrarDetalles();
empleado2.impuesto();

empleado3.mostrarDetalles();
empleado3.impuesto();
