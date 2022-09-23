<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Practica 4</h1>

    <?php
        $username = $_POST['username'];
        $passw = $_POST['password'];

        require_once("db.php");
        $bd = Conectar::conexion();

        $q = "SELECT * FROM usuarios WHERE nombre = $_POST['username'] == $username";
        $results = $bd -> query($q);


        echo '<form method="POST" action="index.php">
                <label>usuarios</label>
                <input type="text" name="username">
                <label>Contraseña</label>
                <input type="text" name="passwordq">
                <input type="submit" name="login">
            </form>';


    ?>

    <?php
        $_GET['u'];
        $_GET['c'];
        $usuario = 'jose';
        $password = '1234';
        if (isset($_GET['u']) && $_GET['c']) {
            if ($_GET['u'] == $usuario && $_GET['c'] == $password) {
                echo '<h1>Login correcto</h1>';
            }
        }
    ?>
</body>
</html>