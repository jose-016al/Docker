// Variables globales
const player = document.getElementById("player");
const time = document.querySelector("#time");
const duracion = document.querySelector("#duracion");
const name = document.querySelector("#name");
const barraProgreso = document.querySelector("#barraProgreso");
const ol = document.querySelector('ol');
const separacion = document.createElement('p');
const deleteAllButton = document.createElement('button');
let archivosSave = [];

// Valores gloabales que requieren valores por defecto
let contador = 0, tiempo;
name.innerHTML = "Selecciona un archivo...";
separacion.innerHTML = " / ";
separacion.id = "separacion";
let desordenar = false;
deleteAllButton.id = "deleteAll";
ol.parentElement.appendChild(deleteAllButton);
let archivos = [];
let aleatorio = 0;

// ---------------Eventos---------------

/**
 * Este evento se encarga de la carga de ficheros, introduciendolos en un array
 */
const inputSeleccion = document.querySelector("#inputSeleccion");
inputSeleccion.addEventListener("change", (e) => {
    let file = inputSeleccion.files[0];
    if (file.type === "video/mp4" || file.type === "video/ogg") {
        for (let i = 0; i < inputSeleccion.files.length; i++) {
            archivos.push(inputSeleccion.files[i]);
        }
        inputSeleccion.value = "";
        deleteAllButton.textContent = `Eliminar ${archivos.length} archvios`;
        lista();
        if (player.paused) {
            player.src = URL.createObjectURL(archivos[contador]);
            reproductor();
        }
    } else if (file.type === "application/json") {
        console.log(inputSeleccion.files[0]);
    } else {
        alert("El fichero no puede cargarse por que no es compatible");
    }
});

/**
 * Estos dos eventos se encargar de la gestion de pausa y reproduccion por eso llaman a la funcion reproduccion
 */
const playButton = document.querySelector("#play");
playButton.addEventListener("click", reproductor);
player.addEventListener("click", reproductor);

/**
 * Este evento se encarga de que la reproduccion continue una vez finalizado el video
 */
player.addEventListener("ended", () => {
    if (desordenar == true) {
        aleatorio = Math.floor(Math.random() * ((archivos.length - 1) - 0) + 0);
        while (aleatorio == contador) {
            aleatorio = Math.floor(Math.random() * ((archivos.length - 1) - 0) + 0);
        }
        contador = aleatorio % archivos.length;
    } else {
        contador = (contador + 1) % archivos.length;
    }
    player.src = URL.createObjectURL(archivos[contador]);
    player.load();
    reproductor();
});

/**
 * Este evento se encarga de pasar a la siguiente reproduccion en la lista
 */
const nextButton = document.querySelector("#next");
nextButton.addEventListener("click", () => {
    if (desordenar == true) {
        aleatorio = Math.floor(Math.random() * ((archivos.length - 1) - 0) + 0);
        while (aleatorio == contador) {
            aleatorio = Math.floor(Math.random() * ((archivos.length - 1) - 0) + 0);
        }
        contador = aleatorio % archivos.length;
    } else {
        contador = (contador + 1) % archivos.length;
    }
    player.src = URL.createObjectURL(archivos[contador]);
    player.load();
    reproductor();
});

/**
 * Este evento se encarga de pasar al video anterior en el orden de reproduccion 
 */
const previousButton = document.querySelector("#previous");
previousButton.addEventListener("click", () => {
    if (desordenar == true) {
        aleatorio = Math.floor(Math.random() * ((archivos.length - 1) - 0) + 0);
        while (aleatorio == contador) {
            aleatorio = Math.floor(Math.random() * ((archivos.length - 1) - 0) + 0);
        }
        contador = aleatorio % archivos.length;
    } else {
        contador = (contador - 1) % archivos.length;
    }
    player.src = URL.createObjectURL(archivos[contador]);
    player.load();
    reproductor();
});

/**
 * Este evento se encarga de rellenar la barra de progreso segun vaya avanzado la cancion
 */
player.addEventListener("timeupdate", () => {
    const porcentajeCompleto = (player.currentTime / player.duration) * 97;
    barraProgreso.style.width = porcentajeCompleto + "%";
})

/**
 * Este evento se encarga de reproducir el video que se selecciona en la lista 
 */
ol.addEventListener("click", (e) => {
    for (let i = 0; i < archivos.length; i++) {
        if (archivos[i].name == e.target.innerText) {
            contador = (contador = i) % archivos.length;
            player.src = URL.createObjectURL(archivos[contador]);
            player.load();
            reproductor();
        }
    }
});

/**
 * Este evento usa un boolean para determinar si la reproduccion seguira un orden aleatorio o no
 */
const aleatorioButton = document.querySelector("#aleatorio");
aleatorioButton.addEventListener("click", () => {
    if (desordenar == false) {
        desordenar = true;
        aleatorioButton.style.backgroundColor = "rgba(255, 255, 255, 0.20)";
    } else {
        desordenar = false;
        aleatorioButton.style.backgroundColor = "rgba(255, 255, 255, 0.0)";
    }
});

/**
 * Este evento se encarga de controlar el volumen por medio de un input range (slider)
 */
const volumenButton = document.querySelector("#volumen");
volumenButton.addEventListener("input", () => {
    player.volume = volumenButton.value;
});

/**
 * Este evento se encarga de mostrar el input range (slider)
 */
const mostrarVolumen = document.querySelector("#mostrarVolumen");
mostrarVolumen.addEventListener("click", () => {
    volumenButton.style.display == "block" ? volumenButton.style.display = "none" : volumenButton.style.display = "block";
});

// ---------------Funciones---------------

/**
 * Esta funcion se encarga de la gestion de la reproduccion y asignacion de algunos valores, gestiona la pausa y reproduccion 
 */
function reproductor() {
    const imgPlayButton = document.querySelector('#imgPlayButton');
    if (player.paused) {
        player.play();
        imgPlayButton.src = "img/pause.png";
        name.innerHTML = archivos[contador].name;
        tiempo = setInterval(updateTime, 1000);
        subtitulos();
        player.addEventListener('loadedmetadata', () => {
            duracion.parentElement.insertBefore(separacion, duracion);
            duracion.innerHTML = formatearDuracion(player.duration);
            lista();
        });
    } else {
        player.pause();
        imgPlayButton.src = "img/play.png";
    }
}

/**
 * Esta funcion se encargar de actualizar el tiempo de la cancion y escribirlo en el DOM, esta funcion es necesaria para el setInterval
 */
function updateTime() {
    time.innerHTML = formatearDuracion(player.currentTime);
}

/**
 * Esta funcion se encargar de darle formato al tiempo de la cancion 
 * @param {Number} segundos Pasamos los segundos de la cancion (currentime) o la duracion de la cancion (duration
 * @returns Devuelve el tiempo formateado de la cancion en minutos:segundos, segundos
 */
function formatearDuracion(segundos) {
    const minutos = Math.floor(segundos / 60);
    segundos = Math.floor(segundos % 60);
    return minutos + ":" + (segundos < 10 ? "0" + segundos : segundos);
}

/**
 * Esta funcion de encarga de llenar la lista con los ficheros cargados en el array y de la eliminacion del array
 */
function lista() {
    ol.innerHTML = "";
    for (let i = 0; i < archivos.length; i++) {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.innerHTML = archivos[i].name;
        li.appendChild(p);
        li.appendChild(deleteFile());
        ol.appendChild(li);
        if (archivos[contador].name == p.innerText) {
            p.classList.add('escuchando');
        } else {
            p.classList.remove('escuchando');
        }
    }

    if (archivos.length == 0) {
        deleteAllButton.style.display = "none";
    } else {
        deleteAllButton.style.display = "block";

        deleteAllButton.addEventListener("click", () => {
            archivos = [];
            reset();
            return;
        });
    }
}

/**
 * Esta funcion se encarga de crear un boton de eliminacion de fichero por cada uno de ellos
 * @returns retorna un boton para eliminar el fichero
 */
function deleteFile() {
    const boton_delete = document.createElement('buttom');
    boton_delete.textContent = "X";
    boton_delete.id = "boton_delete";

    boton_delete.addEventListener("click", (e) => {
        const elemento_eliminar = e.target.parentElement;

        // Gestion de archivos eliminados
        let eliminar = elemento_eliminar.querySelector('p').textContent;
        for (let i = 0; i < archivos.length; i++) {
            if (archivos[i].name == eliminar) {
                archivos.splice(i, 1);
                if (eliminar == name.innerText) {
                    if (archivos.length == 0) {
                        reset();
                        return;
                    }
                    contador = (contador + 1) % archivos.length;
                    player.src = URL.createObjectURL(archivos[contador]);
                    player.load();
                    reproductor();
                }
                deleteAllButton.textContent = `Eliminar ${archivos.length} archvios`;
            }
        }
        ol.removeChild(elemento_eliminar);
    });
    return boton_delete;
}

/**
 * Gestion de valores por defecto para la eliminacion de la lista 
 */
function reset() {
    contador = 0;
    name.innerHTML = "Selecciona archivos";
    barraProgreso.style.width = "0%";
    ol.innerHTML = "";
    duracion.innerHTML = "";
    player.load();
}

/**
 * Este evento se encarga de la gestion de los subtitulos 
 */


function subtitulos() {
    const subtitlesButton = document.querySelector('#subtitles');
    subtitlesButton.addEventListener("click", () => {
        const track = document.createElement("track");
        const sinSubtitulos = document.createElement('p');
        sinSubtitulos.id = "sinSubtitulos";
        subtitlesButton.style.backgroundColor = "rgba(255, 255, 255, 0.20)";
        if (name.innerText == "pista6.mp4") {
            sinSubtitulos.style.display == "block" ? sinSubtitulos.style.display = "none" : sinSubtitulos.style.display = "block";
            track.src = "subtitulos/subtitulos.vtt";
            track.kind = "subtitles";
            track.label = "Subtítulos";
            track.srclang = "es";
            player.appendChild(track);
            let subtitulos = player.textTracks[0];
            subtitulos.mode = subtitlesButton.mode == "showing" ? "hidden" : "showing";
            console.log(subtitulos.mode);
        } else {
            sinSubtitulos.textContent = "No hay subtitulos para este video";
            player.parentElement.appendChild(sinSubtitulos);
            track.style.display == "block" ? track.style.display = "none" : track.style.display = "block";
        }
    });
}