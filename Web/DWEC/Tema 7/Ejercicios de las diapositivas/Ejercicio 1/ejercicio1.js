    // ejercicio 1 - primera parte
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
delay(3000).then(() => alert('se ejecuta después de 3 segundos'));

    // ejercicio 1 - segunda parte
function escribe(texto) {
    document.getElementById("demo").innerHTML = texto;
}

function tiempo() {
    return new Promise((resolve) => {
        setTimeout(() => {
            escribe("He esperado 4 segundos!!!");
            resolve();
        }, 4000);
    });
}

tiempo().then(() => {
    console.log("texto escrito");
});