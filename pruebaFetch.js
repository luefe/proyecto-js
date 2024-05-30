
//USO DE LIBRERÍA: ALERTA PARA GUARDAR LOS CAMBIOS

Swal.fire({
    title: "La calificación final de *libro* es *puntaje* ¿Desea guardar este libro?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Save",
    denyButtonText: `Don't save`
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire("Saved!", "", "success");
    } else if (result.isDenied) {
      Swal.fire("Changes are not saved", "", "info");
    }
  });

