document.addEventListener('DOMContentLoaded', () => {
    // ... tu código existente ...

    

    btnGuardar.addEventListener('click', async () => {
        contenedorFormLibro.classList.add('none');

        for (let i = 0; i < inputLibro.length; i++) {
            calificacion = parseInt(inputLibro[i].value);
            puntuaciones.push(calificacion);
            suma += calificacion;
        }

        puntajeLibro = (suma / puntuaciones.length);
        calificaciones.length = 0;
        puntuaciones = [];
        suma = 0;

        const nombre = document.getElementById('nombreLibro').value;
        const genero = document.getElementById('generoLibro').value;

        const libroData = await fetchBookData(nombre);

        const nuevoLibro = new Libro(
            nombre,
            genero,
            puntajeLibro,
            libroData.description,
            libroData.thumbnail
        );

        guardarLibro(nuevoLibro);
        mostrarLibros();
    });

    

    // ... tu código existente ...
});
