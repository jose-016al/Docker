<?php
if(isset($_POST['añadir'])){

echo("hola");

ArticuloRepository::añadir($_POST['title'],$_POST['fecha']);



}
require_once("views/añadirView.phtml");
die();

?>