// Selecciona el contenedor donde se mostrará la salida
const output = document.getElementById("output");

// Clase Medico
class Medico {
    constructor(nombre, especialidad, experiencia) {
        this.nombre = nombre;
        this.especialidad = especialidad;
        this.experiencia = experiencia;
        this.horas_trabajadas = prompt("¿Cuántas horas de trabajo tiene?:");
    }

    mostrarInfo() {
        output.innerHTML += `<hr>`;
        output.innerHTML += `Soy un Médico<br>`;
        output.innerHTML += `Mi nombre es: ${this.nombre}<br>`;
        output.innerHTML += `Me especializo en: ${this.especialidad}<br>`;
        output.innerHTML += `Mi experiencia laboral es de: ${this.experiencia} años<br>`;
        output.innerHTML += `Trabajo un total de: ${this.horas_trabajadas} horas en total<br><br>`;
    }
}

// Clase Ingeniero
class Ingeniero {
    constructor(nombre, especialidad, proyectos) {
        this.nombre = nombre;
        this.especialidad = especialidad;
        this.proyectos = proyectos;
        this.horas_trabajadas = prompt("¿Cuántas horas de trabajo tiene?: ");
    }

    mostrarInfo() {
        output.innerHTML += `<hr>`;
        output.innerHTML += `Soy un Ingeniero<br>`;
        output.innerHTML += `Me llamo: ${this.nombre}<br>`;
        output.innerHTML += `Mi especialidad es: ${this.especialidad}<br>`;
        output.innerHTML += `He trabajado en: ${this.proyectos} proyectos<br>`;
        output.innerHTML += `Trabajo un total de: ${this.horas_trabajadas} horas en total<br><br>`;
    }
}

// Clase Docente
class Docente {
    constructor(nombre, materia, años_experiencia) {
        this.nombre = nombre;
        this.materia = materia;
        this.años_experiencia = años_experiencia;
        this.horas_trabajadas = prompt("¿Cuántas horas de trabajo tiene?: ");
    }

    mostrarInfo() {
        output.innerHTML += `<hr>`;
        output.innerHTML += `Hola, soy un Docente<br>`;
        output.innerHTML += `Me llamo: ${this.nombre}<br>`;
        output.innerHTML += `Mi materia es: ${this.materia}<br>`;
        output.innerHTML += `Tengo ${this.años_experiencia} años de experiencia<br>`;
        output.innerHTML += `Trabajo un total de: ${this.horas_trabajadas} horas en total<br><br>`;
    }
}

// Función que muestra la Descripción de cualquier tipo de objeto
function mostrarDescripcion(profesional) {
    profesional.mostrarInfo();
}

// Instancias de cada clase
const objetoMedico = new Medico("Dr. Juan Pérez", "Cardiología", 10);
const objetoIngeniero = new Ingeniero("Ing. María López", "Civil", 5);
const objetoDocente = new Docente("Profe Carlos Rodríguez", "Matemáticas", 8);

// Llamado al método mostrarInfo para cada objeto
mostrarDescripcion(objetoMedico);
mostrarDescripcion(objetoIngeniero);
mostrarDescripcion(objetoDocente);
