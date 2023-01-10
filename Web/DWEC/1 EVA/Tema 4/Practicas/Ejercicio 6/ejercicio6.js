var numeros = [];
function enviar() {
    let n = document.forms[0].numero.value;

    for (let i = 1; i <= n; i++) {
        numeros.push(i);
    }
    
    return numeros.reverse();
}

function mostrar() {
    let p = document.getElementById("resultado");
    p.innerHTML = "<h2>" + enviar() + "</h2>";
}
