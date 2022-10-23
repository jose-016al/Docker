<?php
class Article{
    private $id;
    private $title;
    private $text;
    private $datetime;
    private $image;
    private $author;
    private $comments;

    public function __construct($datos){
        $this->id = $datos['id'];
        $this->title = $datos['title'];
        $this->text = $datos['text'];
        $this->datetime = $datos['datetime'];
        $this->image = $datos['image'];
        $this->author = userRepository::getUserById($datos['idUser']);
        $this->comments = commentRepository::getCommentsByArticle($datos['id']);
    }

    public function getTitle(){
        return $this->title;
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
    public function getComments(){
        return $this->comments;
    }
    public function getImage(){
        return $this->image;
    }

}

?>