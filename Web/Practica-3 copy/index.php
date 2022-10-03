<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Practica 3</title>
        <link rel="stylesheet" href="style.css">
        <?php
        session_start(); 
        if (isset($_SESSION['sesion'])) {
            echo "Estas usando la cuenta de: ".$_SESSION["sesion"]; 
        }
        
        $_GET["seccion"];
        $menu = [
            "./?seccion=inicio" => "Inicio",
            "./?seccion=galeria" => "Galeria",
            "./?seccion=contacto" => "Contacto",
            "./?seccion=blog" => "Blog",
            "./?seccion=registro" => "Registro",
            "./?seccion=login" => "Login",
            "./?seccion=logout" => "Log out"
        ];
        $galeria = [
            "./img/foto1.jpg",
            "./img/foto2.jpg",
            "./img/foto3.jpg",
            "./img/foto4.jpg",
            "./img/foto5.jpg",
            "./img/foto6.jpg",
            "./img/foto7.jpg",
            "./img/foto8.jpg",
            "./img/foto9.jpg"
        ];
        // Comprobacion de la base de datos
        require_once("db.php");
        $bd = Conectar::conexion();
        // if ($bd) echo "conectado";
        $q = "SELECT * FROM users;";
        $result = $bd -> query($q);
        ?>
    </head>
    <body>
        <header>
            <h1>Practica 3</h1>
            <nav>
                <?php
                echo '<ul>';
                    foreach ($menu as $indice => $valor) {
                        echo '<li class=enlaces><a href=' . $indice . '>' . $valor .  '</a></li>';
                    }
                echo '</ul>';
                ?>
            </nav>
        </header>
        <section>
            <?php
            if (isset($_GET["seccion"])) {
                switch ($_GET["seccion"]) {
                    case "inicio":
                        echo "<p>Esta es mi pagina web</p>";
                        echo '<img src=" ' . "./img/foto1.jpg" . ' " width ="50%">';
                        break;
                    case "galeria":
                        echo '<table>';
                        foreach ($galeria as $indice => $imagen) {
                            if ($indice % 3 == 0) {
                                echo '<tr>';
                            }
                            echo '<td>
                            <a href='. $imagen .'>
                            <img src=" ' . $imagen . ' " width ="100%" height="250px"></a>
                            </td>';
                        }
                        echo '</tr></table>';
                        break;
                    case "contacto":
                        echo '
                        <form action="">
                            <label>Nombre</label>
                            <input type="text">
                            <label>Apellidos</label>
                            <input type="text">
                            <label>Telefono</label>
                            <input type="text">
                            <label>Email</label>
                            <input type="email">
                        </form>
                        ';
                        break;
                    case "blog":
                        $q = "SELECT * FROM blog";
                        $results = $bd -> query($q);

                        echo '<div id="blog">';
                        while ($datos = $results -> fetch_assoc()) {
                            echo '<div id="articulo"><h2>'. $datos['titulo'] .'</h2> <br>';
                            echo '<p>'.$datos['contenido'] . '</p><br>';
                            echo '<img src=" ' . $datos['imagen'] . ' " width ="50%">';            
                            echo '<div id="fecha"><p> Autor: '.$datos['autor'] . '</p>';
                            echo '<p> Fecha: '.$datos['fecha'] . '</p></div>';
                        }
                        echo '</div>';
                        break;
                    case "registro":
                        echo '<div id="formulario"><h2>Registro</h2><form method="POST" action="./?seccion=registro">
                            <label>Nombre: </label>
                            <input type="text" name="name">
                            <label>Contraseña: </label>
                            <input type="password" name="password">
                            <input type="submit" value="Registrarse">
                        </form></div>';
                        // ---------REGISTRO---------
                        $new_name = $_POST['name'];
                        $new_password = $_POST['password'];

                        $q = "SELECT * FROM users";
                        $results = $bd -> query($q);
                        $datos = $results -> fetch_assoc();

                        if (isset($new_name) && isset($new_password)) {
                            if ($new_name == $datos['name']) {
                                echo '<h2>El usuario ya existe</h2>';
                            } else if ($new_name == null || $new_password == null) {
                                echo '<h2>Has dejado algun campo vacio</h2>';
                            } else {
                                echo '<h2>Se ha creado el usuario correctamente</h2>';
                                $q = "INSERT INTO users(name, password) VALUES('".$new_name."','".$new_password."')";
                                $results = $bd -> query($q);
                            }
                        } 
                        break;
                    case "login":
                        echo '<div id="formulario"><h2>Login</h2><form method="POST" action="./?seccion=login">
                            <label>Nombre: </label>
                            <input type="text" name="name">
                            <label>Contraseña: </label>
                            <input type="password" name="password">
                            <input type="submit" value="Iniciar sesion">
                        </form></div>';
                        // ---------LOGIN---------
                        $name = $_POST['name'];
                        $password = $_POST['password'];

                        $q = "SELECT * FROM users";
                        $results = $bd -> query($q);
                        $datos = $results -> fetch_assoc();

                        if (isset($name) && isset($password)) {
                            if ($name == null || $password == null) {
                                echo '<h2>Has dejado algun campo vacio</h2>';
                            } else if ($name == $datos['name'] && $password == $datos['password']) {
                                echo '<h2>Login correcto</h2>';
                                $_SESSION["sesion"] = $datos['name']; 
                            } else {
                                echo '<h2>Usuario o contraseña incorrectas</h2>';
                            }
                        }  
                        break;
                    case "logout":
                        session_unset();
                        break;
                }
            } else {
                echo "<p>Esta es mi pagina web</p>";
                echo '<img src=" ' . "./img/foto1.jpg" . ' " width ="50%">';
            }
            ?>
        </section>
    </body>
</html>