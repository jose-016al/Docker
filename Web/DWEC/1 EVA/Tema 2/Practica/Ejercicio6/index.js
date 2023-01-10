const num = parseInt(Math.random() * 999 + 1); // se genera el numero aleatorio
let salir = true;
let contador = 0;

do {
    let intr = window.prompt("Introduce Un numero");
    if (isNaN(intr)) {
        alert("No es un numero, vuelve a introducirlo");
    } else {
        if (intr === null) { //Si el usuario ha cancelado
            break;
        }

        if(intr == num) {
            alert("Has acertado!");
            salir = false;
        } else if (intr > num) {
            if (!window.confirm("El numero es menor que el que has introducido")) {
                salir = false;
                contador++;
            }
        } else if (intr<num) {
            if (!window.confirm("El numero es mayor que el que has introducido")) {
                salir = false;
                contador++;
            }
        }
    }

} while (salir);

document.write("Intentos :" + contador);
