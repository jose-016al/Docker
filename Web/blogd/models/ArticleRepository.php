<?php

class ArticleRepository{

    public static function getArticles(){
        $db=Conectar::conexion();
        $articles = [];
		$result= $db->query("SELECT * FROM articles");
		while($datos=$result->fetch_assoc())
            $articles[] = new Article($datos);
        return $articles;
    }

    public static function addArticle($ti,$te,$im){
        echo "INSERT INTO articles VALUES (NULL, '".$ti."', '".$te."', NOW(), '".$im."', ".$_SESSION['user']->getId().")";
        $db=Conectar::conexion();
		if($result= $db->query("INSERT INTO articles VALUES (NULL, '".$ti."', '".$te."', NOW(), '".$im."', ".$_SESSION['user']->getId().")"))
            return $db->insert_id;
        else return NULL;
    }


}

?>