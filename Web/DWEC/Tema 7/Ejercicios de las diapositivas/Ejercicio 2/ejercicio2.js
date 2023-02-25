function cambiarFondo() {
    return new Promise((resolve) => {
        setTimeout(() => {
            document.querySelector('body').style.backgroundColor = "red";
            resolve();
        }, 3000);
    });
}

cambiarFondo().then(() => {
    console.log("Se ha cambiado el color de fondo");
});