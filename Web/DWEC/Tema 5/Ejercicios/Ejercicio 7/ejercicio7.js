const elemento = document.getElementById('container');

elemento.addEventListener('mouseup', showCoords, false);

function showCoords(e) {
    let x = e.pageX;
    let y = e.pageY;
    let texto;

    if (x < 630 && y < 300) {t7
        texto = "izquierda arriba";
    } else if (x < 630 &&  y > 300) {
        texto = "izquierda abajo";
    } else if (x > 630 && y < 300) {
        texto = "derecha arriba";
    } else {
        texto = "derecha abajo";
    }

    document.getElementById("resultado").innerHTML = texto;
}

