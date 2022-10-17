<?php

if (isset($_POST['añadir'])) {
    ArticuloRepository::añadir($_POST['title'],$_POST['contenido']);
    echo 'Articulo añadido';
}

require_once("views/RegistroView.phtml");
die();

?>