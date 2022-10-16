<?php

if(isset($_POST['logeo'])){

   

    
    if(isset($_POST['user']) && isset($_POST['password'])){
        
        $bd=Conectar::conexion();
        $q='SELECT * FROM users WHERE username="'.$_POST['user'].'";';
        $result=$bd->query($q);
        if($datos=$result->fetch_assoc()){
            if($datos['password']==$_POST['password']){
                $_SESSION['user'] = new User($datos);
                require_once("views/mainView.phtml");
                die();
                }else{
                    $error="Contraseña incorrecta";
                }
        }else{
            $error="usuario incorrecto";
        }
    }
}else if(isset($_POST['registro'])){

    if(isset($_POST['user']) && isset($_POST['password']) && isset($_POST['password2'])){


        if($_POST['password']==$_POST['password2']){

            $bd=Conectar::conexion();
            $q="INSERT INTO `users` (`id`, `username`, `password`) VALUES (NULL, '".$_POST['user']."', '".$_POST['password']."');";    
        
        if($result=$bd->query($q)){
          $error="usuario registrado:";
            
        
        } 

        }else{
            $error="Las contraseñas no coinciden";

        }

            
      }    
    }


if(isset($_GET['logout'])){

unset($_SESSION['user']);

header("location:index.php");
}
    

require_once("views/loginView.phtml");
die();
?>