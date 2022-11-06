var ventana;

function abrir() {
    ventana = window.open();
}

function cerrar() {
    ventana.close();
    if (ventana.closed == true) {
        alert("La ventana se ha cerrado correctamnete");
    }
}

function segundoPlano() {
    // ventana.close();
    ventana = window.open("", "_blank", "width=400,height=400");
}

function moverVentana() {
    // segundoPlano();
    ventana.moveTo(300,300);
}

function cambiarTamano() {
    // segundoPlano();
    ventana.resizeTo(200,200);
}

function barraDesplazamiento() {
    segundoPlano();
    ventana.scrollTo(10,10);
}