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

function abrirAuxiliar() {
    let name = prompt("Introduce un nombre para la nueva pagina");
    window.name = "hola";
    ventana = window.open("./auxiliar.html");
    document.getElementById('apartado_c').innerHTML += '<h3>El nombre de la ventana es: ' + window.name + '</h3>';
}