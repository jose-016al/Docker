<?php

class ArticuloRepository{

    public static function getArticulos(){

        $articulos=[];
        $db=Conectar::conexion();
        $result=$db->query("SELECT * FROM articulos");
        
        
        while($datos=$result->fetch_assoc()){
        
        
            $articulos[]=new Articulo($datos);
        
        }
        return $articulos;
        
    }

    public static function findArticulo($b){
        

       
        $articulos=[];
        $db=Conectar::conexion();
        $result=$db->query("SELECT * FROM articulos  WHERE title='".$b."'");
        
        
        if($datos=$result->fetch_assoc()){
            
        
        
            $articulos[]=new Articulo($datos);
        
        }
        return $articulos;



    }

    public function añadir($title,$fecha){
        
        echo("hola");
       
        $articulos=[];
        $db=Conectar::conexion();
        $idUser=$_SESSION['user']->getId();

        $q="INSERT INTO `articulos` ( `title`, `fecha`, `idUser`) VALUES ('".$title."', '".$fecha."','".$idUser."');"; 
       echo($q);
        $result=$db->query($q);
        
       

    }

    public function eliminar($id){
        
        echo("hola");
       
        $articulos=[];
        $db=Conectar::conexion();

        $q="DELETE FROM `articulos` WHERE id='".$id."';";
       
        $result=$db->query($q);
       

    }


}

?>