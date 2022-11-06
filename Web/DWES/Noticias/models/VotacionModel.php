<?php 

class Votacion {

    private $id;
    private $voto_like;
    private $voto_dislike;
    private $id_user;
    private $id_noticia;

    public function __construct($datos) {
        $this -> id = $datos['id'];
        $this -> voto_like = $datos['voto_like'];
        $this -> voto_dislike = $datos['voto_dislike'];
        $this -> id_user = userRepository::buscarUser($datos['id_user']);
        $this -> id_noticia = $datos['id_noticia'];
    }

    public function getId() {
        return $this -> id;
    }
    
    public function getVoto_like() {
        return $this -> voto_like;
    }

    public function getVoto_dislike() {
        return $this -> voto_dislike;
    }
    
    public function getId_user() {
        return $this -> id_user;
    }

    public function getId_noticia() {
        return $this -> id_noticia;
    }

}
?>