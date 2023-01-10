var cadenas = [], ventana;
function ejer5() {
    let cadena = document.forms[0].cadena.value;
    cadenas = cadena.split(' '); 
}

function ventana() {
    ventana = window.open("./auxiliar.html", "_blank", "width=400,height=400");
    let datos = document.getElementById("datos");
    datos.innerHTML += "<p>a. Numero de palabras: " + cadenas.length + "</p>";
    datos.innerHTML += "<p>b. Primera palabra: " + cadenas[0] + "</p>";
    datos.innerHTML += "<p>c. Ultima palabra: " + cadenas[cadenas.length - 1] + "</p>";
    datos.innerHTML += "<p>d. las palabras colocadas en orden inverso: " + cadenas.reverse() + "</p>";
    datos.innerHTML += "<p>e. las palabras ordenadas de la a a la z: " + cadenas.sort() + "</p>";
    datos.innerHTML += "<p>e. las palabras ordenadas de la z a la a: " + cadenas.reverse() + "</p>";
}