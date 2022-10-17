<?php 
class Articulo {

        // VARIABLES
    private $id;
    private $title;
    private $contenido;
    private $fecha;
    private $autor;
    private $imagen;
    private $id_user;

        // CONSTRUCTOR
    public function __construct($datos) {
        $this->id = $datos['id'];
        $this->title = $datos['title'];
        $this->title = $datos['contenido'];
        $this->fecha = $datos['fecha'];
        $this->title = $datos['autor'];
        $this->title = $datos['imagen'];
        $this->idUser = $datos['id_user'];
    }

        // METODOS GETTERS
    public function getId(){
        return $this->id;
    }
    
    public function getTitle(){
        return $this->title;
    }

    public function getContenido(){
        return $this->contenido;
    }

    public function getFecha(){
        return $this->fecha;
    }

    public function getAutor(){
        return $this->autor;
    }

    public function getImagen(){
        return $this->Imagen;
    }

    public function getidd_user(){
        return $this->id_user;
    }

}
?>