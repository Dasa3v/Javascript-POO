// --- Tareas de Empleados ---
// Clase abstracta TareaEmpleado
class TareaEmpleado {
    realizar_tarea() {
        throw new Error("Este método debe ser implementado por una subclase");
    }
}

class Ingeniero extends TareaEmpleado {
    constructor(nombre, especialidad, sueldo) {
        super();
        this.nombre = nombre;
        this.especialidad = especialidad;
        this.sueldo = sueldo;
    }

    realizar_tarea() {
        return `Ingeniero ${this.nombre} está trabajando en un proyecto de ${this.especialidad}.`;
    }
}

class Doctor extends TareaEmpleado {
    constructor(nombre, especialidad, sueldo) {
        super();
        this.nombre = nombre;
        this.especialidad = especialidad;
        this.sueldo = sueldo;
    }

    realizar_tarea() {
        return `Doctor ${this.nombre} está tratando a pacientes en el área de ${this.especialidad}.`;
    }
}

// Función para mostrar los resultados en el HTML
function mostrarResultado() {
    const output = document.getElementById('output');
    output.innerHTML = ''; // Limpiar el contenido anterior

    // Crear instancias de Ingeniero y Doctor
    const ingeniero = new Ingeniero("Carlos", "Ingeniería Civil", 3200000);
    const doctor = new Doctor("María", "Cirugia", 4550000);

    // Mostrar los resultados en el contenedor output
    output.innerHTML += `<p>Tarea: ${ingeniero.realizar_tarea()}</p>`;
    output.innerHTML += `<p>Tarea: ${doctor.realizar_tarea()}</p>`;
}

// Ejecutar la función cuando se cargue la página
window.onload = mostrarResultado;
