var numeros = [];
function generarArray() {
    let cadena = document.forms[0].numeros.value;
    numeros = cadena.split(',');
    
}

function enviar() {
    var numerosDuplicados = [];
    // for (let i = 0; i < numeros.length; i++) {
    //     numerosDuplicados.push(numeros[i] * 2);
    // }
    // for (let i in numeros) {
    //     numerosDuplicados.push(i * 2);
    // }
    for (let i of numeros) {
        numerosDuplicados.push(i * 2);
    }
    var p = document.getElementById("resultado");
    p.innerHTML += "<h2>Array original: " + numeros + "</h2>";
    p.innerHTML += "<h2>Array con numeros duplicados: "  + numerosDuplicados + "</h2>";

    var numerosMap = new Map();
    let texto = "";
    for (let i of numeros) {
        numerosMap.set(i, i * 2);            
        texto += numerosMap.get(i) + ',';        
    }
    console.log(texto);
    p.innerHTML += "<h1>Usando Map</h1>"
    p.innerHTML += "<h2>Array original: " + numeros + "</h2>";
    p.innerHTML += "<h2>Array con numeros duplicados: "  + texto + "</h2>";
}