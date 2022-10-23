<?php

class comentarioRepository {

    public static function getComentarios($id_articulo) {
        $comentarios = [];
        $db = Conectar::conexion();
        $result = $db -> query("SELECT * FROM comentarios WHERE id_articulo = '.$id_articulo.'");
        while ($datos = $result -> fetch_assoc()) {
            $comentarios[] = new Comentario($datos);
        }
        return $comentarios;
    }

    public static function addComentario($comentario, $id_articulo) {
        $db = Conectar::conexion();
        $id_user = $_SESSION['user'] -> getId();
        $q = 'INSERT INTO comentarios (comentario, fecha, id_user, id_articulo) VALUES("'.$comentario.'" ,NOW(), "'.$id_user.'", "'.$id_articulo.'")';
        $result = $db -> query($q);
    }

}

?>