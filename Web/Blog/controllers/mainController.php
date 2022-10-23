<?php

//cargamos el modelo
require_once('models/UserModel.php');
require_once('models/articuloModel.php');
require_once('models/ArticuloRepository.php');
require_once('models/comentarioModel.php');
require_once('models/comentarioRepository.php');
require_once('models/userRepository.php');

session_start();

if(!isset($_SESSION['user'])) {
    $datos['id'] = 0;
    $datos['name'] = "";
    $datos['id_rol'] = 1;
    $_SESSION['user'] = new User($datos);
}

$articulos = ArticuloRepository::getArticulos();

if (isset($_GET['admin'])) {
   require_once("controllers/userController.php");
}

if (isset($_GET['comentario'])) {
    require_once('controllers/ComentarioController.php');
}

if (isset($_GET['añadir'])) {
    require_once('controllers/ArticuloController.php');
}

if(isset($_GET['login'])) {
    require_once('controllers/loginController.php');
    die();
}

// cargar la vista
require_once("views/mainView.phtml");
?>