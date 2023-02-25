const elemento = document.getElementById("container");

elemento.addEventListener("click", boton, false);

function boton(e) {
    alert(e.target.id);
}