# Documentacion de docker

## Lanzamos contenedores

#### Lanzamos un contenedor web y mysql con persistencia sobre una imagen que ya tien eun servicio ssh y apache, en linux
```
docker run --name server -it -v /home/jose/Docker/Web:/var/www/html -v /home/jose/Docker/BD:/var/lib/mysql -p 2222:22 -p 8080:80 -p 3306:3306 jose016al/server_web
```

#### Lanzamos un contenedor web y mysql con persistencia sobre una imagen que ya tien eun servicio ssh y apache, en windows
```
docker run --name server -it -v C:/Users/jose_/Docker/Web:/var/www/html -v C:/Users/jose_/Docker/BD:/var/lib/mysql -p 2222:22 -p 8080:80 -p 3306:3306 jose016al/server_web
```

#### Lnzamos un contenedor web con persistencia
```
docker run --name web -it -v /home/jose/Docker/Web:/var/www/html -p 2222:22 -p 8080:80 jose016al/server_web   
```

#### Lnzamos un contenedor mysql con persistencia
```
docker run --name bd -it -v /home/jose/BD:/var/lib/mysql -p 2222:22 -p 8080:80 -p 3306:3306 jose016al/server_web
```

## Procedemos a la instalacion del servidor mysql 

#### Actualizamos el contenedor
```
apt update
```
```
apt upgrade
```

#### Instalamos algunos paquetes que nos haran falta
```
apt install dialog
```
```
apt install apt-utils
```
```
apt install nano
```

#### Instalamos el servidor mysql
```
apt install mysql-server
```

#### Iniciamos el directorio del servidor y reiniciamos
```
usermod -d /var/lib/mysql/ mysql
```
```
service mysql restart
```

#### Creamos un usuario admin
```
CREATE USER 'admin'@'localhost' IDENTIFIED BY '211099';
```
```
GRANT ALL PRIVILEGES ON * . * TO 'admin'@'localhost';
```
```
FLUSH PRIVILEGES;
```

#### Creamos un usuario remoto
```
CREATE USER 'jose'@'%' IDENTIFIED BY '211099';
```
```
GRANT ALL PRIVILEGES ON * . * TO 'jose'@'%';
```
```
FLUSH PRIVILEGES;
```

#### Instalamos phpmyadmin
```
apt install phpmyadmin
```

#### Modificamos el arhcivo de configuracion de mysql para permitir aceso al usuario remoto
```
nano /etc/mysql/mysql.conf.d/mysqld.cnf
```
```
#bind-address = 127.0.0.1
```

#### Reiniciamos los servicios para comprobar que todo va bien 
```
service apache2 restart
```
```
service mysql restart
```