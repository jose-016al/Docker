<?php
echo 'hola';
if (isset($_POST['logeo'])) {
    if ($_POST['user'] && $_POST['password']) {
        $db = Conectar::conexion();
        $result = $db -> query = ('SELECT * FROM users WHERE name =' . $_POST['user']);
        if ($datos = $result -> fetch_assoc()) {
            if ($datos['password'] == $_POST['password']) {
                $_SESSION['user'] = new User($datos);
                require_once("views/mainView.phtml");
                die();
            } else $error = 'contraseña incorrecta';
        }
    }
}

require_once("views/loginView.phtml");
die();

?>