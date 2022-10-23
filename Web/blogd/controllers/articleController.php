<?php

if(isset($_POST['new'])){
    //comprobar todas las variables
    $image=basename($_FILES['image']['name']);
    $uploadfile = "views/images/" . $image;

    var_dump($_FILES['image']);

         ArticleRepository::addArticle($_POST['title'], $_POST['text'], $image);
    }



?>