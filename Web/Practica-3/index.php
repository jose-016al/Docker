<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Practica 3</title>
        <?php
        $_GET["seccion"];
        ?>
    </head>
    <body>
        <h1>Practica 3</h1>
        <nav>
            <ol><a href="index.php">inicio</a></ol>
            <ol><a href="contacto.html">contacto</a></ol>
            <ol><a href="galeria.php">galeria</a></ol>
        </nav>
        
        <?php
            if ($_GET["seccion"] == "inicio") {
                // <p>Esta es mi pagina web</p>
                echo '<img src=" ' . "img/foto1.jpg" . ' " width ="100%">';
            } else if ($_GET["seccion"] == "galeria") {
                $galeria = [
                    "img/foto1.jpg",
                    "img/foto2.jpg",
                    "img/foto3.jpg"
                ];
                foreach ($galeria as $imagen) {
                    echo '<img src=" ' . $imagen . ' " width ="100%">';
                }
            } else if ($_GET["seccion"] == "contacto") {
                
            }
        ?>
    </body>
</html>