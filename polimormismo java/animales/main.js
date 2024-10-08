// Selecciona el contenedor donde se mostrará la salida
const output = document.getElementById("output");

// Clase Perro
class Perro {
    constructor(raza, tamaño, sonido, color) {
        this.raza = raza;
        this.tamaño = tamaño;
        this.sonido = sonido;
        this.color = color;
    }

    descripcion() {
        output.innerHTML += "Soy un Perro<br>";
        output.innerHTML += `De raza: ${this.raza}<br>`;
        output.innerHTML += `Tamaño: ${this.tamaño}<br>`;
        output.innerHTML += `El sonido que hago es: ${this.sonido}<br>`;
        output.innerHTML += `De color: ${this.color}<br>`;
        output.innerHTML += "----------------------------------------------------------------------<br>";
    }
}

// Clase Gato
class Gato {
    constructor(raza, sonido, color) {
        this.raza = raza;
        this.sonido = sonido;
        this.color = color;
    }

    descripcion() {
        output.innerHTML += "<hr>";
        output.innerHTML += "Soy un Gato<br>";
        output.innerHTML += `De raza: ${this.raza}<br>`;
        output.innerHTML += `El sonido que hago es: ${this.sonido}<br>`;
        output.innerHTML += `De color: ${this.color}<br>`;
        output.innerHTML += "----------------------------------------------------------------------<br>";
    }
}

// Clase Pajaro
class Pajaro {
    constructor(raza, voladora, color, sonido) {
        this.raza = raza;
        this.voladora = voladora;
        this.color = color;
        this.sonido = sonido;
    }

    descripcion() {
        output.innerHTML += "<hr>";
        output.innerHTML += "Soy un Pajaro<br>";
        output.innerHTML += `De raza: ${this.raza}<br>`;
        output.innerHTML += `Puedo volar?: ${this.voladora}<br>`;
        output.innerHTML += `De color: ${this.color}<br>`;
        output.innerHTML += `El sonido que hago es: ${this.sonido}<br>`;
        output.innerHTML += "----------------------------------------------------------------------<br>";
    }
}

// Función que muestra la descripción de cualquier tipo de animal
function mostrarDescripcion(animal) {
    animal.descripcion();
}

// Instancias de cada clase
const perro = new Perro("Labrador", "grande", "guau guau", "cafe");
const gato = new Gato("Siames", "miau miau", "blanco");
const pajaro = new Pajaro("pollito", "No", "amarillo", "pio pio");

// Llamado al método descripcion para cada animal
mostrarDescripcion(perro);
mostrarDescripcion(gato);
mostrarDescripcion(pajaro);
