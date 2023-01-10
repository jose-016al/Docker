var cadena = prompt("Introduce una cadena");
var cadena_neuva = "";

for (let i = cadena.length; i >= 0; i--) {
    cadena_neuva += cadena.charAt(i);
}

alert(cadena_neuva);