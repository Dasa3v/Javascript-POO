// Selecciona el contenedor donde se mostrará la salida
const output = document.getElementById("output");

// Clase Carro
class Carro {
    constructor(marca, modelo, año, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.color = color;
    }

    mostrarInfo() {
        output.innerHTML += `<hr>`;
        output.innerHTML += `Soy un Carro<br>`;
        output.innerHTML += `Marca: ${this.marca}<br>`;
        output.innerHTML += `Modelo: ${this.modelo}<br>`;
        output.innerHTML += `Del año: ${this.año}<br>`;
        output.innerHTML += `De color: ${this.color}<br>`;
    }
}

// Clase Moto
class Moto {
    constructor(marca, modelo, año, cilindrada) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.cilindrada = cilindrada;
    }

    mostrarInfo() {
        output.innerHTML += `<hr>`;
        output.innerHTML += `Soy una Moto<br>`;
        output.innerHTML += `Marca: ${this.marca}<br>`;
        output.innerHTML += `Modelo: ${this.modelo}<br>`;
        output.innerHTML += `Del año: ${this.año}<br>`;
        output.innerHTML += `De cilindraje de: ${this.cilindrada}<br>`;
    }
}

// Clase Bicicleta
class Bicicleta {
    constructor(marca, tipo, num_velocidades) {
        this.marca = marca;
        this.tipo = tipo;
        this.num_velocidades = num_velocidades;
    }

    mostrarInfo() {
        output.innerHTML += `<hr>`;
        output.innerHTML += `Hola, soy una Bicicleta<br>`;
        output.innerHTML += `Marca: ${this.marca}<br>`;
        output.innerHTML += `Tipo: ${this.tipo}<br>`;
        output.innerHTML += `Un total de ${this.num_velocidades} velocidades<br>`;
    }
}

// Función que muestra la Descripción de cualquier tipo de objeto
function mostrarDescripcion(vehiculo) {
    vehiculo.mostrarInfo();
}

// Instancias de cada clase
const objetocarro = new Carro("Toyota", "Corolla", 2022, "Rojo");
const objetomoto = new Moto("Yamaha", "MT-03", 2021, 321);
const objetobicicleta = new Bicicleta("Giant", "Montaña", 21);

// Llamado al método mostrarInfo para cada objeto
mostrarDescripcion(objetocarro);
mostrarDescripcion(objetomoto);
mostrarDescripcion(objetobicicleta);
