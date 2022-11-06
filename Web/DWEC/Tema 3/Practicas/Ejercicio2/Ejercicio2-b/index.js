var imagenes = document.images;
console.log(imagenes);

// no condigo mostrar los enlaces de las imagenes, desde el inspector si estan donde deberian 
for (let index = 0; index < imagenes.length; index++) {
    var src = document.getElementById(index).src;
        let text = document.createElement("div");
        text.textContent = "Ruta de la imagen " + index + ": " + src;
        document.getElementById(index).appendChild(text);
}