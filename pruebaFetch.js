document.addEventListener('DOMContentLoaded', () => {

    const verLibros = document.querySelector('.verLibros');
    const puntuarLibro = document.querySelector('.puntuarLibro');
    const inputLibro = document.getElementsByClassName('inputLibro');
    const formLibro = document.getElementById('formLibro');
    let inputValue = document.getElementsByClassName('inputValue');
    const contenedorFormLibro = document.getElementById('contenedorFormLibro');
    const librosLista = document.getElementById('librosLista');
    const btnGuardar = document.getElementById('btnGuardar');
    const btnSalir = document.getElementById('btnSalir');
    let nombreLibro = document.getElementById('nombreLibro');
    let generoLibro = document.getElementById('generoLibro');
    let tablaLibros = document.getElementById('librosPuntuados'); // Corregido id de la tabla

    let calificaciones = [];
    let suma = 0;
    let calificacion;
    let puntajeLibro;
    let puntuaciones = [];

    class Libro {
        constructor(nombre, genero, puntaje) {
            this.nombre = nombre;
            this.genero = genero;
            this.puntaje = puntaje;
        }
    }

    // Funciones de storage
    function cargarLocalStorage() {
        const librosGuardados = localStorage.getItem('librosPuntuados');
        if (librosGuardados) {
            calificaciones = JSON.parse(librosGuardados);
        }
    }

    function guardarLocalStorage() {
        localStorage.setItem('librosPuntuados', JSON.stringify(calificaciones));
    }

    // Guardar cada libro
    function guardarLibro(libro) {
        calificaciones.push(libro);
        guardarLocalStorage();
    }

    // Función para mostrar los libros puntuados en la tabla
    function mostrarLibros() {
        // Limpiar la tabla antes de agregar los libros
        tablaLibros.innerHTML = ''; 

        calificaciones.forEach(libro => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${libro.nombre}</td>
                <td>${libro.genero}</td>
                <td>${libro.puntaje.toFixed(2)}</td>
            `;
            tablaLibros.appendChild(row);
        });
    }

    // Va mostrando el valor de input ingresado
    for (let i = 0; i < inputLibro.length; i++) {
        inputLibro[i].addEventListener('input', () => {
            inputValue[i].innerHTML = inputLibro[i].value;
        })
    }

    formLibro.addEventListener('submit', (e) => {
        e.preventDefault();
    });

    // Mostrar formulario para añadir libros
    puntuarLibro.addEventListener('click', () => {
        contenedorFormLibro.classList.remove('none');
        librosLista.classList.add('none');
    });

    // Muestra los libros al clickear en "VER LIBROS"
    verLibros.addEventListener('click', () => {
        mostrarLibros(); // Mostrar los libros cargados
        librosLista.classList.remove('none');
        contenedorFormLibro.classList.add('none');
    });

    // Qué hacer al guardar cambios
    btnGuardar.addEventListener('click', () => {
        contenedorFormLibro.classList.add('none');

        for (let i = 0; i < inputLibro.length; i++) {
            calificacion = parseInt(inputLibro[i].value); // para asegurar que el value sea un número
            puntuaciones.push(calificacion);

            suma += calificacion;
            puntajeLibro = (suma / puntuaciones.length);
        }

        calificaciones.length = 0;
        puntuaciones = []; // reinicia para futuras sumas
        suma = 0; // reinicia para futuras sumas
        const nombre = document.getElementById('nombreLibro').value;
        const genero = document.getElementById('generoLibro').value;
        const puntajePromedio = puntajeLibro;

        const nuevoLibro = new Libro(nombre, genero, puntajePromedio);
        guardarLibro(nuevoLibro);
        mostrarLibros();
    });

    // Botón salir
    btnSalir.addEventListener('click', () => {
        librosLista.classList.add('none');
    });

    // Inicialización
    cargarLocalStorage();
    mostrarLibros(); // Mostrar los libros después de cargarlos
});