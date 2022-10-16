<?php

class User{
    private $id;
    private $name;

    public function __construct ($datos){
        $this->id = $datos['id'];
        $this->name = $datos['username'];
        
    }

    public function getId(){
        return $this->id;
    }
    
    public function getName(){
        return $this->name;
    }
} 

?>