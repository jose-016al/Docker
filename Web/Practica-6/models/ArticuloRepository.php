<?php
class ArticuloRepository {

    public static function AddArticulo($title, $contenido) {
        $db = Conectar::conexion();
        $q = "INSERT INTO articulos (title, contenido) VALUES ('.$title.');";
        $result = $db -> query($q);
        
    }

}
?>