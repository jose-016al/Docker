    // Variables
var nombre = prompt("introduce tu nombre por favor:");
var Apellidos = prompt("introduce tus Apellidos por favor:");
var salario = prompt("introduce tu salario por favor:");
var edad = prompt("introduce tu edad por favor:");

    // Converiiones a numeros
salario = parseInt(salario);
edad = parseInt(edad);

    // Escribimos el html
document.write("<h2>Nombre: " + nombre + "</h2>");
document.write("<h2>Apellidos: " + Apellidos + "</h2>");
document.write("<h2>Edad: " + edad + "</h2>");

if (salario >= 2000) {
    document.write("<h2>Salario: " + salario + "</h2>");
}

if (salario >= 1000 && salario <= 2000) {
    if (edad > 45){
        var salarioaumento = salario * 3 / 100;
        let salariof1 = salario + salarioaumento;
        document.write("<h2>Salario: " + salariof1 + "</h2>");
    } else {
        var salarioaumento = salario * 10 / 100;
        let salariof1= salario + salarioaumento;
        document.write("<h2>Salario: " + salariof1 + "</h2>");
    }
}
if (salario<1000) {
    if (edad < 30) {
        var salario = 1100;
        document.write("<h2>Salario: " + salario + "</h2>");
    }
    if (edad >= 30 && edad <= 45) {
        var salarioaumento= salario * 3 / 100;
        let salariof1= salario + salarioaumento;
        document.write("<h2>Salario: " + salariof1 + "</h2>");
    }
    if (edad > 45) {
        var salarioaumento= salario * 45 / 100;
        let salariof1= salario + salarioaumento;
        document.write("<h2>Salario: " + salariof1 + "</h2>");
    }
}