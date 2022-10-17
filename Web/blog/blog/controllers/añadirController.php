<?php

if(isset($_POST['añadir'])) {
    ArticuloRepository::añadir($_POST['title'],$_POST['fecha']);
    echo 'Articulo añadido';
}

require_once("views/añadirView.phtml");
die();

?>