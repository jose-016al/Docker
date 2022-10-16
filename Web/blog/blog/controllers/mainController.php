<?php

//cargamos el modelo
require_once('models/UserModel.php');
require_once('models/articuloModel.php');
require_once('models/ArticuloRepository.php');

session_start();


if(!isset($_SESSION['user'])){
    $datos['id']=0;
    $datos['username']="";
    $_SESSION['user'] = new User($datos);
}




// if(isset($_POST['busca'])){
    
//      $articulos=ArticuloRepository::findArticulo($_POST['busca']);



// }
//  else{

 
     $articulos = ArticuloRepository::getArticulos();
    // }


if(isset($_GET['login'])) {
    require_once('controllers/loginController.php');
    die();
}

if(isset($_GET['añadir'])) {
    require_once('controllers/añadirController.php');
    die();
}








// cargar la vista
require_once("views/mainView.phtml");
?>