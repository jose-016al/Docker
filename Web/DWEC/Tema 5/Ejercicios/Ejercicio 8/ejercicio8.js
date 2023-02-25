const textarea = document.getElementById("limitar");

textarea.addEventListener("keypress", limitar, false);

function limitar() {
    const limite = 5;

        // Comparamos el limite con el valor de textarea.lentgth
    if (textarea.value.length >= limite) {
        textarea.value = textarea.value.substring(0, limite);
            // Si el limite ha sido superado lanzamos un alert para informar al usuario
        if (textarea.value.length == limite) {
            alert(`Has alcanzado el numero maximo de ${limite} caracteres`);
        }
    }

}