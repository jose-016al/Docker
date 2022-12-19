var numeros = prompt("Introduce dos numeros (separados por coma)");

numeros = numeros.split(',');

let a = numeros[0];
let b = numeros[1];

resta = (a, b) => 1-b;

document.write("El resultado de " + a + " - " + b + " es igual a " + resta(a,b));