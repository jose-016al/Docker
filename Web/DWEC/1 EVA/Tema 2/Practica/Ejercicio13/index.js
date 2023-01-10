var cadena = prompt("Introduce una cadena");
var contador_a = 0;
var contador_e = 0;
var contador_i = 0;
var contador_o = 0;
var contador_u = 0;
var vocales = 0;

for (let i = 0; i < cadena.length; i++) {
    if (cadena.charAt(i) == "a" || cadena.charAt(i) == "A") {
        contador_a++;
        vocales++;
    } else if (cadena.charAt(i) == "e" || cadena.charAt(i) == "E") {
        contador_e++;
        vocales++;
    } else if (cadena.charAt(i) == "i" || cadena.charAt(i) == "I") {
        contador_i++;
        vocales++;
    } else if (cadena.charAt(i) == "o" || cadena.charAt(i) == "O") {
        contador_o++;
        vocales++;
    } else if (cadena.charAt(i) == "u" || cadena.charAt(i) == "U") {
        contador_u++;
        vocales++;
    } 
}
alert("La letra 'a' aparece: " + contador_a + "\n" + 
"La letra 'e' aparece: " + contador_e + "\n" + 
"La letra 'i' aparece: " + contador_i + "\n" + 
"La letra 'o' aparece: " + contador_o + "\n" + 
"La letra 'u' aparece: " + contador_u + "\n" + 
"De " + cadena.length + " letras " + vocales + " son vocales");