<?php

//cargamos el modelo
require_once("models/UserModel.php");
require_once("models/UserRepository.php");
require_once("models/ArticleModel.php");
require_once("models/ArticleRepository.php");
require_once("models/CommentModel.php");
require_once("models/CommentRepository.php");

session_start();


if(!isset($_SESSION['user'])){
    $datos['id']=0;
    $datos['name']="";
    $datos['rol']=0;
    $_SESSION['user'] = new User($datos);
}
if(isset($_GET['login'])) {
    require_once('controllers/LoginController.php');
    die();
}

if(isset($_GET['article'])){
    require_once('controllers/articleController.php');
}

$articles = ArticleRepository::getArticles();

// cargar la vista
require_once("views/mainView.phtml");
?>