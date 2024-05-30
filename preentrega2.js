/* ENTREGA FINAL!!! AGREGAR 1 LIBRERÍA Y 1 FETCH */

document.addEventListener('DOMContentLoaded', () => {

    const verLibros = document.querySelector('.verLibros');
    const puntuarLibro = document.querySelector('.puntuarLibro');
    const inputLibro = document.querySelectorAll('.inputLibro');
    const formLibro = document.getElementById('formLibro');
    const contenedorFormLibro = document.getElementById('contenedorFormLibro');
    const librosLista = document.getElementById('librosLista');
    const btnGuardarL = document.getElementById('btnGuardarL');
    const btnSalir1 = document.getElementById('btnSalir1');
    const btnSalir2 = document.getElementById('btnSalir2');
    const nombreL = document.getElementById('nombreLibro');
    const generoL = document.getElementById('generoLibro');
    const tablaLibros = document.getElementById('tablaLibros');
    let requerido = document.getElementsByClassName('requerido')

    const verPeliculas = document.querySelector('.verPeliculas');
    const puntuarPelicula = document.querySelector('.puntuarPelicula');
    const inputPelicula = document.querySelectorAll('.inputPelicula');
    const formPelicula = document.getElementById('formPelicula');
    const contenedorFormPelicula = document.getElementById('contenedorFormPelicula');
    const peliculasLista = document.getElementById('peliculasLista');
    const btnSalir3 = document.getElementById('btnSalir3');
    const btnSalir4 = document.getElementById('btnSalir4');
    const nombreP = document.getElementById('nombrePelicula');
    const generoP = document.getElementById('generoPelicula');
    const tablaPelicula = document.getElementById('tablaPeliculas');
    const btnGuardarP = document.getElementById('btnGuardarP');

    let calificacionesP = [];
    let calificacionesL = [];
    let suma = 0;
    let calificacionP;
    let calificacionL;
    let puntajeL;
    let puntajeP;
    let puntuacionesP = [];
    let puntuacionesL = [];

    class Libro {
        constructor(nombre, genero, puntaje) {
            this.nombre = nombre;
            this.genero = genero;
            this.puntaje = puntaje;
        }
    }

    class Pelicula {
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
            calificacionesL = JSON.parse(librosGuardados);
        }
        const peliculasGuardadas = localStorage.getItem('peliculasPuntuadas');
        if (peliculasGuardadas) {
            calificacionesP = JSON.parse(peliculasGuardadas);
        }
    }

    function guardarLocalStorageL() {
        localStorage.setItem('librosPuntuados', JSON.stringify(calificacionesL));
    }
    function guardarLocalStorageP() {
        localStorage.setItem('peliculasPuntuadas', JSON.stringify(calificacionesP));
    }

    // Guardar cada libro/pelicula
    function guardarLibro(libro) {
        calificacionesL.push(libro);
        guardarLocalStorageL();
    }

    function guardarPeliculas(pelicula) {
        calificacionesP.push(pelicula);
        guardarLocalStorageP();
    }

    // Función para mostrar los libros puntuados en la tabla
    const mostrarLibros = function () {
        // Limpiar la tabla antes de agregar nuevas filas, evita duplicaciones
        tablaLibros.innerHTML = '';
        calificacionesL.forEach(libro => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${libro.nombre}</td>
                <td>${libro.genero}</td>
                <td>${libro.puntaje.toFixed(2)}</td>
            `;
            tablaLibros.appendChild(row);
        });
    }

    const mostrarPeliculas = function () {
        // Limpiar la tabla antes de agregar nuevas filas
        tablaPelicula.innerHTML = '';
        calificacionesP.forEach(pelicula => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${pelicula.nombre}</td>
                <td>${pelicula.genero}</td>
                <td>${pelicula.puntaje.toFixed(2)}</td>
            `;
            tablaPelicula.appendChild(row);
        });
    }

    // Va mostrando el valor de input ingresado
    
    inputLibro.forEach(input => {
        input.addEventListener('input', (event) => {
            event.target.previousElementSibling.textContent = event.target.value;
        });
    });

    inputPelicula.forEach(input => {
        input.addEventListener('input', (event) => {
            event.target.previousElementSibling.textContent = event.target.value;
        });
    });

    //Prevenir que se recargue la página al cerrar los formularios
    formLibro.addEventListener('submit', (e) => {
        e.preventDefault();
    });

    formPelicula.addEventListener('submit', (e) => {
        e.preventDefault();
    });

    btnSalir1.addEventListener('click', (e) => {
        e.preventDefault();
    });

    btnSalir3.addEventListener('click', (e) => {
        e.preventDefault();
    });

    // Mostrar formulario para añadir libros/peliculas
    puntuarLibro.addEventListener('click', () => {
        contenedorFormLibro.classList.remove('none');
        librosLista.classList.add('none');
        peliculasLista.classList.add('none');
        contenedorFormPelicula.classList.add('none');
    });

    puntuarPelicula.addEventListener('click', () => {
        contenedorFormPelicula.classList.remove('none');
        librosLista.classList.add('none');
        peliculasLista.classList.add('none');
        contenedorFormLibro.classList.add('none');
    });

    // Muestra los libros al clickear en "VER LIBROS"
    verLibros.addEventListener('click', () => {
        mostrarLibros(); // Mostrar los libros cargados
        librosLista.classList.remove('none');
        contenedorFormLibro.classList.add('none');
        peliculasLista.classList.add('none');
        contenedorFormPelicula.classList.add('none');
    });

    verPeliculas.addEventListener('click', () => {
        mostrarPeliculas(); // Mostrar las peliculas cargadas
        peliculasLista.classList.remove('none');
        librosLista.classList.add('none');
        contenedorFormLibro.classList.add('none');
        contenedorFormPelicula.classList.add('none');
    });

    // Qué hacer al guardar cambios
    btnGuardarL.addEventListener('click', () => {

        if (nombreL.length < 2 || generoL.length < 5) {
            
            requerido[0].innerHTML = '<p>Campo requerido</p>'
        } else {
            contenedorFormLibro.classList.add('none');

            for (let i = 0; i < inputLibro.length; i++) {
                calificacionL = parseInt(inputLibro[i].value); // para asegurar que el value sea un número
                puntuacionesL.push(calificacionL);

                suma += calificacionL;
                puntajeL = (suma / puntuacionesL.length);
            }

            puntuacionesL = []; // reinicia para futuras sumas
            suma = 0; // reinicia para futuras sumas
            const nombre = document.getElementById('nombreLibro').value;
            const genero = document.getElementById('generoLibro').value;
            const puntajePromedioL = puntajeL;

            const nuevoLibro = new Libro(nombre, genero, puntajePromedioL);
            guardarLibro(nuevoLibro);
            mostrarLibros();
            inputValue = 0;
        }
    });

    btnGuardarP.addEventListener('click', () => {

        if (nombreP.length < 2 || generoP.length < 5) {
            
            requerido[0].innerHTML = '<p>Campo requerido</p>'
        } else {
            contenedorFormPelicula.classList.add('none');

            for (let i = 0; i < inputLibro.length; i++) {
                calificacionP = parseInt(inputPelicula[i].value); // para asegurar que el value sea un número
                puntuacionesP.push(calificacionP);

                suma += calificacionP;
                puntajeP = (suma / puntuacionesP.length);
            }

            puntuacionesP = []; // reinicia para futuras sumas
            suma = 0; // reinicia para futuras sumas
            const nombre = document.getElementById('nombrePelicula').value;
            const genero = document.getElementById('generoPelicula').value;
            const puntajePromedioP = puntajeP;

            const nuevaPelicula = new Pelicula(nombre, genero, puntajePromedioP);
            guardarPeliculas(nuevaPelicula);
            mostrarPeliculas();
            
        }
    });

    // Botón salir
    btnSalir1.addEventListener('click', () => {
        contenedorFormLibro.classList.add('none');
    });

    btnSalir2.addEventListener('click', () => {
        librosLista.classList.add('none');
    });

    btnSalir3.addEventListener('click', () => {
        contenedorFormPelicula.classList.add('none');
    });

    btnSalir4.addEventListener('click', () => {
        peliculasLista.classList.add('none');
    });

    // Inicialización
    cargarLocalStorage();
    mostrarLibros(); // Mostrar los libros después de cargarlos
});

/*IMPLEMENTACIONES PRÓXIMAS */

//Añadir función de remover libros o películas de la tabla
//Mejorar estilos
//Mostrar el promedio antes o después de guardar
//Clasificar por género
//Ordenar por promedio
//Poner opciones de géneros en lugar de entrada de texto
//Incorporar el toast o modal cuando se guarda un nuevo libro para decir el promedio
//Resetear valores predeterminados del form al guardar
//Agregar animaciones, dinamimsmo, suavizar las transiciones
//Cambiar input range por estrellas u otro ícono (como libritos y claquetas)