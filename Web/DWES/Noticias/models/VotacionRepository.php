<?php
class VotacionRepository {

    public static function getLikes($id) {
        $db = Conectar::conexion();
        $result = $db -> query("SELECT SUM(voto_like) AS likes FROM votaciones WHERE id_noticia = $id");
        return $result->fetch_object()->likes;
    }

    public static function getDislikes($id) {
        $db = Conectar::conexion();
        $result = $db -> query("SELECT SUM(voto_dislike) AS dislikes FROM votaciones WHERE id_noticia = $id");
        return $result->fetch_object()->dislikes;
    }

    public static function votarLike($id_user, $id_noticia) {
        $db = Conectar::conexion();
        $q = "INSERT INTO votaciones(voto_like, voto_dislike, id_user, id_noticia) VALUES (1, 0, $id_user, $id_noticia);";
        $result = $db -> query($q);
    }

    public static function votarDisLike($id_user, $id_noticia) {
        $db = Conectar::conexion();
        $q = "INSERT INTO votaciones(voto_like, voto_dislike, id_user, id_noticia) VALUES (0, 1, $id_user, $id_noticia);";
        $result = $db -> query($q);
    }

    public static function getVotoUsuario($id_user, $id_noticia) {
        $db = Conectar::conexion();
        $result = $db -> query("SELECT id_user, id_noticia FROM votaciones WHERE id_user = $id_user AND id_noticia = $id_noticia");
        return $result->num_rows;
    }

}
?>