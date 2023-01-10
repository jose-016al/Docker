var numeros = [];
function generarArray() {
    let cadena = document.forms[0].numeros.value;
    numeros = cadena.split(',');
    numeros.sort(function(a, b){return a - b});
}

function enviar() {
        // Obtener un array sin valores duplicados 
    const sinDuplicados = [...new Set(numeros)];

    let p = document.getElementById("resultado");
    p.innerHTML += "<h2>" + sinDuplicados + "</h2>";
}