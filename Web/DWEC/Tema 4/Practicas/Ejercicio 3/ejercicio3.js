var a = [], b = [];
function generarPrimerArray() {
    let cadena = document.forms[0].valores1.value;
    a = cadena.split(',');
}

function generarSegundoArray() {
    let cadena = document.forms[0].valores2.value;
    b = cadena.split(',');
    if (b.length != a.length) {
        alert("Debe ser del mismo tamaño");    
    }
}

function aleatorio() {
    let aleatorio;
    for (let i in a) {
        aleatorio = Math.floor((Math.random() * (100 - 0)) + 0);
        b.push(aleatorio);
    }
    let cadena = b.toString();
    b = cadena.split(',');
}

function concatenar() {
    var concatenados = [];
    for (let i = 0; i < a.length; i++) {
        concatenados.push(a[i] + i) + concatenados.push(b[i] + i);
    }
    let p = document.getElementById("resultado");
    p.innerHTML = "<h2>"+concatenados+"</h2";
}

function reinicar() {
    location.reload();
}