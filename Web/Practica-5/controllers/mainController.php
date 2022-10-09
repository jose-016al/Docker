<?php

//cargamos el modelo
require_once('models/UserModel.php');

session_start();


if(!isset($_SESSION['user'])){
    $datos['id']=0;
    $datos['name']="";
    $_SESSION['user'] = new User($datos);
}


if(isset($_GET['login'])) {
    require_once('controllers/loginController.php');
    die();
}


// cargar la vista
require_once("views/mainView.phtml");
?>