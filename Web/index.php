<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Practica 1</title>
        <?php
            $i[1] = "img/foto1.jpg";
            $i[2] = "img/foto2.jpg";
            $i[3] = "img/foto3.jpg";
        ?>
    </head>
    <body>
        <?php
            if (isset($_GET['i'])) {
                if ($_GET['i'] <= count($i)) {
                    echo '<img src="img/'.$_GET['i'].'.jpg"' width="100px";
                }
            }
        ?>
    </body>
</html>