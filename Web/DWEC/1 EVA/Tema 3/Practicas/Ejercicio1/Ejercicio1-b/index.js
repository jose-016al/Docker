var ventana;

function abrir() {
    ventana = window.open();
}

function cierra() {
    ventana.close();
}

function comprobar() {
    if (ventana == undefined) {
        alert("No se ha abierto ninguna ventana");
    } else {
        let isCerrada = ventana.closed;
        if (isCerrada == true) {
            alert("La ventana se ha cerrado correctamente");
        } else if (isCerrada == false) {
            alert("La ventana no se ha cerrado");
        }
    }
}