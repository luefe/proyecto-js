const verLibros = document.querySelector('.verLibros');
const puntuarLibro = document.querySelector('.puntuarLibro');
const inputLibro = document.getElementsByClassName('inputLibro')
const formLibro = document.getElementById('formLibro');
let inputValue = document.getElementsByClassName('inputValue');
const contenedorFormLibro = document.getElementById('contenedorFormLibro')
const librosLista = document.getElementById('librosLista')
const btnGuardar = document.getElementById('btnGuardar')
const btnSalir = document.getElementById('btnSalir')
let nombreLibro = document.getElementById('nombreLibro')
let generoLibro = document.getElementById('generoLibro')
let tablaLibros = document.getElementById('tablaLibros');

let calificaciones = [];
let suma = 0;
let calificacion
let puntajeLibro
let puntuaciones = []

class Libro {
    constructor(nombre, genero, puntaje) {
        this.nombre = nombre;
        this.genero = genero;
        this.puntaje = puntaje;
    }
}

//funciones de storage
function guardarLocalStorage() {
    localStorage.setItem('librosPuntuados', JSON.stringify(calificaciones));
}

function cargarLocalStorage() {
    const librosGuardados = localStorage.getItem('librosPuntuados');
    if (librosGuardados) {
        calificaciones = JSON.parse(librosGuardados);
        mostrarLibros();
    }
}

//Guardar cada libro
function guardarLibro(libro) {
    calificaciones.push(libro);
}

// Función para mostrar los libros puntuados en la tabla
const mostrarLibros= function() {

    calificaciones.forEach(libro => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${libro.nombre}</td>
            <td>${libro.genero}</td>
            <td>${libro.puntaje.toFixed(2)}</td>
        `;
        librosPuntuados.appendChild(row);
    });
    guardarLocalStorage();
}

//Va mostrando el valor de input ingresado
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

//Hace que aparezca el formulario al clickear en "AÑADIR LIBROS"
puntuarLibro.addEventListener ('click', ()=>{
    contenedorFormLibro.classList.remove('none')
    librosLista.classList.add('none')
})

//Muestra los libros al clickear en "VER LIBROS"
verLibros.addEventListener ('click', ()=>{
    librosLista.classList.remove('none')
    contenedorFormLibro.classList.add('none')

})

//Qué hacer al guardar cambios
btnGuardar.addEventListener('click', ()=>{
    contenedorFormLibro.classList.add('none')

    for (let i = 0; i < inputLibro.length; i++) {

        calificacion = parseInt(inputLibro[i].value)//para asegurar que el value sea un numero
        puntuaciones.push(calificacion)

        suma += calificacion;
        puntajeLibro = (suma / puntuaciones.length)

    };

    calificaciones.length = 0;
    puntuaciones= []; //reinicia para futuras sumas
    suma = 0 //reinicia para futuras sumas
    const nombre = document.getElementById('nombreLibro').value;
    const genero = document.getElementById('generoLibro').value;
    const puntajePromedio = puntajeLibro

    const nuevoLibro = new Libro(nombre, genero, puntajePromedio);
    guardarLibro(nuevoLibro);
    mostrarLibros()
})



//Va mostrando el valor de input ingresado
for (let i = 0; i < inputLibro.length; i++) {
    inputLibro[i].addEventListener('input', () => {
        inputValue[i].innerHTML = inputLibro[i].value;
    })
}

//Botón salir
btnSalir.addEventListener('click', ()=>{
    librosLista.classList.add('none')
})

/*IMPLEMENTACIONES PRÓXIMAS */

//Validaciones en el formulario, asegurar que no se repiten nombres de libros
//Hacer la parte de películas
//Añadir función de remover libros de la tabla
//Mejorar estilos
