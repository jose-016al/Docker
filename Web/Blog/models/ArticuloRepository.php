<?php
class ArticuloRepository {

    public static function getArticulos() {
        $articulos = [];
        $db = Conectar::conexion();
        $result = $db -> query("SELECT * FROM articulos");
        while ($datos = $result -> fetch_assoc()) {
            $articulos[] = new Articulo($datos);
        }
        return $articulos;
    }

    public static function addArticulo($title, $contenido, $imagen) {
        $db = Conectar::conexion();
        $id_user = $_SESSION['user'] -> getId();
        $q = 'INSERT INTO articulos (title, fecha, contenido, imagen, id_user) VALUES("'.$title.'" ,NOW(), "'.$contenido.'", "'.$imagen.'", "'.$id_user.'")';
        $result = $db -> query($q);
    }


}
?>