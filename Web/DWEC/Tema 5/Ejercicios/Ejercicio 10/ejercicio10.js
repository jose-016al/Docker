const numero = document.getElementById("numero") 

numero.addEventListener("keyup", mostrar, false);

function mostrar(e) {
    switch(e.key) {
        case "1":
            document.getElementById("ficha1").classList.remove("oculto");
            document.getElementById("ficha2").classList.add("oculto");
            document.getElementById("ficha3").classList.add("oculto");
            break;
        case "2":
            document.getElementById("ficha2").classList.remove("oculto");
            document.getElementById("ficha1").classList.add("oculto");
            document.getElementById("ficha3").classList.add("oculto");
            break;
        case "3":
            document.getElementById("ficha3").classList.remove("oculto");
            document.getElementById("ficha1").classList.add("oculto");
            document.getElementById("ficha2").classList.add("oculto");
            break;
    }
}