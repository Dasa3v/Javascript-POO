// Selecciona el contenedor donde se mostrará la salida
const output = document.getElementById("output");

// Clase Guitarra
class Guitarra {
    constructor(marca, modelo, tipo_sonido) {
        this.marca = marca;
        this.modelo = modelo;
        this.tipo_sonido = tipo_sonido;
        this.puede_tocar = prompt("¿Puedes tocar la guitarra? (sí/no): ");
    }

    tocar() {
        output.innerHTML += `<hr>`;
        output.innerHTML += `Soy una Guitarra<br>`;
        output.innerHTML += `Marca: ${this.marca}<br>`;
        output.innerHTML += `Modelo: ${this.modelo}<br>`;
        output.innerHTML += `Tipo de sonido: ${this.tipo_sonido}<br>`;
        output.innerHTML += `¿Puedes tocarla?: ${this.puede_tocar}<br><br>`;
    }
}

// Clase Piano
class Piano {
    constructor(marca, modelo, tipo_sonido) {
        this.marca = marca;
        this.modelo = modelo;
        this.tipo_sonido = tipo_sonido;
        this.puede_tocar = prompt("¿Puedes tocar el piano? (sí/no): ");
    }

    tocar() {
        output.innerHTML += `<hr>`;
        output.innerHTML += `Soy un Piano<br>`;
        output.innerHTML += `Marca: ${this.marca}<br>`;
        output.innerHTML += `Modelo: ${this.modelo}<br>`;
        output.innerHTML += `Tipo de sonido: ${this.tipo_sonido}<br>`;
        output.innerHTML += `¿Puedes tocarlo?: ${this.puede_tocar}<br><br>`;
    }
}

// Clase Trompeta
class Trompeta {
    constructor(marca, modelo, tipo_sonido) {
        this.marca = marca;
        this.modelo = modelo;
        this.tipo_sonido = tipo_sonido;
        this.puede_tocar = prompt("¿Puedes tocar la trompeta? (sí/no): ");
    }

    tocar() {
        output.innerHTML += `<hr>`;
        output.innerHTML += `Soy una Trompeta<br>`;
        output.innerHTML += `Marca: ${this.marca}<br>`;
        output.innerHTML += `Modelo: ${this.modelo}<br>`;
        output.innerHTML += `Tipo de sonido: ${this.tipo_sonido}<br>`;
        output.innerHTML += `¿Puedes tocarla?: ${this.puede_tocar}<br><br>`;
    }
}

// Función que permite tocar cualquier tipo de instrumento
function tocarInstrumento(instrumento) {
    instrumento.tocar();
}

// Instancias de cada clase
const guitarra = new Guitarra("Fender", "Stratocaster", "Cuerda");
const piano = new Piano("Yamaha", "U1", "Teclas");
const trompeta = new Trompeta("Bach", "Stradivarius", "Viento");

// Llamado al método tocar para cada instrumento
tocarInstrumento(guitarra);
tocarInstrumento(piano);
tocarInstrumento(trompeta);
