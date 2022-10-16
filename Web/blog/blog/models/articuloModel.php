<?php 

class Articulo{

    private $id;
    private $title;
    private $fecha;
    private $idUser;

    public function __construct($datos){

        $this->id = $datos['id'];
        $this->title= $datos['title'];
        $this->fecha= $datos['fecha'];
        $this->idUser= $datos['idUser'];

    }

    public function getId(){
        return $this->id;
    }
    
    public function getTitle(){
        return $this->title;
    }

    public function getFecha(){
        return $this->fecha;
    }

    public function getidUser(){
        return $this->idUser;
    }



}


?>