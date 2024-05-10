//alert('¡HOLA!');


let opcionElegida;
let datoInvalido = true;
const categoriasLibros = ['Trama y argumento.', 'Escritura/diálogos.', 'Desarrollo de personajes.', 'Originalidad/creatividad.', 'Final']
const categoriasPeliculas = ['Trama y argumento', 'Actuaciones', 'Diálogos', 'Desarrollo de personajes', 'Fotografía', 'Banda sonora', 'Originalidad/creatividad', 'Final']
const puntuaciones = [0, 1, 2, 3, 4, 5];
const generos = [];
const libros = [];
const peliculas = [];


let libroNombre= '';
let libroGenero= '';
let calificacion=0
let calificaciones = [];
let suma = 0
let puntajeLibro= 0

function calificar(pregunta) {


    while (datoInvalido) {
        let preg = prompt(`${pregunta} \nIngrese una puntuación entre 0 y 5:`)
        let pregNro = parseInt(preg);
        if (pregNro >= 0 && pregNro <= 5) {
            datoInvalido == true;
            return pregNro;
        } else if (isNaN(pregNro) || preg != Number || preg == null) {
            datoInvalido = confirm('Por favor, ingrese una opción válida (número entre 0 y 5) o presiona "Cancelar" para salir.')

        } else {
            datoInvalido = confirm('Por favor, ingrese una opción válida (número entre 0 y 5) o presiona "Cancelar" para salir.')
        }
    }


}


function calificarLibro() {
    libroNombre = prompt('Nombre del libro.');
    libroGenero = prompt('Género.');
    for (let i=0; i < categoriasLibros.length; i++){
        calificacion= calificar(categoriasLibros[i]);
        calificaciones.push(calificacion);
    suma += calificacion;
    };
    return (`${libroNombre}`)

}

const promediarLibro = () => {   
    return (suma/calificaciones.length);
}

const anadirLibros = () => {
    const libro = { libro: libroNombre, genero: libroGenero, puntaje: puntajeLibro }
    libros.push(libro)
}

function mostrarLibros() {
    for (let i = 0; i < libros.length; i++) {
        let mostrarLibro = `Libro: ${libros[i].libro}.\n Género: ${libros[i].genero}.\n Puntaje: ${libros[i].puntaje}.`;
        console.log(mostrarLibro);

    }
    let JSONLibro = JSON.stringify(libros)
    alert(`Tus libros: \n ${JSONLibro}`)
}

function almacenarLibros() {
    JSONLibro = JSON.stringify(libros)
    localStorage.setItem('Libros', JSONLibro);

}


while (datoInvalido) {
    opcionElegida = prompt("¿Qué deseas hacer? \n 1. Ver mis libros \n 2. Ver mis películas. \n 3. Calificar nuevo libro. \n 4. Calificar nueva pelíula.");

    if (opcionElegida == 1) {//acá van a ir enlistados y ordenados por promedio creciente los libros ya calificados, con su respectivo género y puntaje
        datoInvalido = true;
        
        console.table(libros)
        mostrarLibros()
    } else if (opcionElegida == 2) {
        datoInvalido = true;
        
        alert('Tus películas:');//idem "tus libros"
    } else if (opcionElegida == 3) {
       datoInvalido = true;
        
       calificarLibro();
        puntajeLibro = promediarLibro();
        alert(`La calificacion final de ${libroNombre} es de ${puntajeLibro} estrellas`);
        anadirLibros()
        almacenarLibros()

    } else if (opcionElegida == 4) {
        datoInvalido = true;
        let pelicula = prompt('Nombre de la película. ');
        /*let generoP = prompt('Género.');*/ //Para más adelante
        let f = calificar(categoriasPeliculas[0]);
        let g = calificar(categoriasPeliculas[1]);
        let h = calificar(categoriasPeliculas[2]);
        let i = calificar(categoriasPeliculas[3]);
        let j = calificar(categoriasPeliculas[4]);
        let k = calificar(categoriasPeliculas[5]);
        let l = calificar(categoriasPeliculas[6]);
        let m = calificar(categoriasPeliculas[7])
        function promediarPelicula() {
            return ((f + g + h + i + j + k + l + m) / 8);
        }


        let puntajePelicula = promediarPelicula();
        alert(`La calificacion final de ${pelicula} es de ${puntajePelicula} estrellas`)


    } else {
        datoInvalido = confirm('Por favor, ingrese una opción válida (1, 2, 3 o 4) o presiona "Cancelar" para salir.');
    }


}
