<?php

class CommentRepository{

    public static function getCommentsByArticle($idArticle){
        $db=Conectar::conexion();
        $comments = [];
		$result= $db->query("SELECT * FROM comments WHERE idArticle = ".$idArticle);
		while($datos=$result->fetch_assoc())
            $comments[] = new Comment($datos);
        return $comments;
    }
}

?>