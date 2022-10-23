<?php

class Comment{
    private $id;
    private $author;
    private $text;
    private $datetime;

    public function __construct($datos){
        $this->id=$datos['id'];
        $this->text=$datos['text'];
        $this->datetime=$datos['datetime'];
        $this->author = userRepository::getUserById($datos['idUser']);
    }
    
    public function getAuthor(){
        return $this->author;
    }
    public function getDatetime(){
        return $this->datetime;
    }
    public function getText(){
        return $this->text;
    }

}

?>