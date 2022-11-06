var cadena = prompt("Introduce una cadena");
var cadena_neuva = "";

for (let i = 0; i < cadena.length; i++) {
    if (i == cadena.length - 1) {
        cadena_neuva += cadena.charAt(i);
    } else {
        cadena_neuva += cadena.charAt(i) + "-";
    }
}

alert(cadena_neuva);