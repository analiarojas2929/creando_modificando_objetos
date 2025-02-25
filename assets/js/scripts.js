// Definición de la clase Paciente
class Paciente {
    constructor(nombre, edad, diagnostico) {
        this._nombre = nombre;
        this._edad = edad;
        this._diagnostico = diagnostico;
    }

    // Getters
    get nombre() {
        return this._nombre;
    }

    get edad() {
        return this._edad;
    }

    get diagnostico() {
        return this._diagnostico;
    }

    mostrarDatos() {
        return `Nombre: ${this._nombre}, Edad: ${this._edad}, Diagnóstico: ${this._diagnostico}`;
    }

    // Método para buscar un paciente por su nombre
    static buscarPorNombre(pacientes, nombre) {
        return pacientes.filter(paciente => paciente.nombre.toLowerCase().includes(nombre.toLowerCase()));
    }
}

// Array para almacenar los pacientes
let pacientes = [];

// Función para agregar un paciente
function agregarPaciente(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const diagnostico = document.getElementById('diagnostico').value;

    const nuevoPaciente = new Paciente(nombre, edad, diagnostico);
    pacientes.push(nuevoPaciente);

    actualizarListaPacientes();
    document.getElementById('formularioPaciente').reset();
}

// Función para actualizar la lista de pacientes en el HTML
function actualizarListaPacientes() {
    const listaPacientes = document.getElementById('listaPacientes');
    listaPacientes.innerHTML = '';
    pacientes.forEach(paciente => {
        const li = document.createElement('li');
        li.textContent = paciente.mostrarDatos();
        listaPacientes.appendChild(li);
    });
}

// Función para buscar paciente por nombre
function buscarPacientePorNombre() {
    const nombreBuscado = document.getElementById('buscarNombre').value;
    const resultados = Paciente.buscarPorNombre(pacientes, nombreBuscado);
    const listaPacientes = document.getElementById('listaPacientes');
    listaPacientes.innerHTML = '';

    if (resultados.length > 0) {
        resultados.forEach(paciente => {
            const li = document.createElement('li');
            li.textContent = paciente.mostrarDatos();
            listaPacientes.appendChild(li);
        });
    } else {
        listaPacientes.innerHTML = '<li>Paciente no encontrado</li>';
    }
}

// Event listeners
document.getElementById('formularioPaciente').addEventListener('submit', agregarPaciente);
document.getElementById('buscarPaciente').addEventListener('click', buscarPacientePorNombre);
