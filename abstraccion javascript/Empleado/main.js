// --- Empleados ---
// Clase abstracta Empleado
class Empleado {
    calcular_salario() {
        throw new Error("Este método debe ser implementado por una subclase");
    }
}

class EmpleadoTiempoCompleto extends Empleado {
    constructor(nombre, horas_de_trabajo, salario_hora) {
        super();
        this.nombre = nombre;
        this.horas_de_trabajo = horas_de_trabajo;
        this.salario_hora = salario_hora;
    }

    calcular_salario() {
        return this.horas_de_trabajo * this.salario_hora;
    }
}

class EmpleadoPorHoras extends Empleado {
    constructor(nombre, horas_de_trabajo, salario_hora) {
        super();
        this.nombre = nombre;
        this.horas_de_trabajo = horas_de_trabajo;
        this.salario_hora = salario_hora;
    }

    calcular_salario() {
        return this.horas_de_trabajo * this.salario_hora;
    }
}

// Función para mostrar los resultados en el HTML
function mostrarResultado() {
    const output = document.getElementById('output');
    output.innerHTML = ''; // Limpiar el contenido anterior

    // Crear instancias de empleados
    const empleadoTC = new EmpleadoTiempoCompleto("Juan", 40, 50);
    const empleadoPH = new EmpleadoPorHoras("Ana", 20, 25);

    // Mostrar los resultados en el contenedor output
    output.innerHTML += `<p>Salario total de ${empleadoTC.nombre} es de: ${empleadoTC.calcular_salario()} dolares</p>`;
    output.innerHTML += `<p>Salario total de ${empleadoPH.nombre} es de: ${empleadoPH.calcular_salario()} dolares</p>`;
}

// Ejecutar la función cuando se cargue la página
window.onload = mostrarResultado;
