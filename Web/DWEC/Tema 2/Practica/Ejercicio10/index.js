var fila = prompt("Introduce el numero de filas que quieres:");
var columnas = prompt("Introduce el numero de columnas que quieres:");

fila = parseInt(fila);
columnas = parseInt(columnas);
let numero = fila * columnas;

document.write("<table border = 2>");
 
for (i = 1; i <= fila; i++) {
    document.write("<tr>");
    for (j = 1; j <= columnas; j++) {
        document.write("<td>" + numero + "</td>");
        numero--;
    }
    document.write("</tr>");
}

document.write("</table>");