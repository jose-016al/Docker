# Docker ![Docker](.docker.png)

## Tabla de contenidos
- [Instalacion de Docker en Arch Linux](#instalacion-de-Docker-en-arch-linux)
- [DockerHub](#dockerhub)
- [Comandos basicos de Docker](#comandos-basicos-de-docker)
  - [Contenedores](#contenedores)
  - [Imagenes](#imagenes)
  - [Persistencia](#persistencia)
  - [Generar imagenes](#generar-imagenes)
- [Contenedor SSH](#contenedor-ssh)
- [Contenedor Apache](#contenedor-apache)
- [Contenedor Mariadb](#contenedor-mariadb)
- [Contenedor Nodejs & NPM](#contenedor-nodejs--npm)
- [Contenedor Symfony](#contenedor-symfony)

Para simplificar y agilizar el inicio de contenedores, es útil contar con un script que automatice esta tarea, ofreciendo comodidad y eficiencia
```bash
#!/bin/bash
sudo systemctl start docker
docker start server
docker exec -u user -it server /bin/bash
```
 
# Instalacion de Docker en Arch Llnux
Habilitamos el modulo loop
```bash
sudo tee /etc/modules-load.d/loop.conf <<< "loop"
```
```bash
modprobe loop
```
```bash
lsmod | grep loop
```
Procedemos a la instalacion de Docker
```bash
sudo pacman -S docker
```
Para poder ejecutar contenedores de docker sin tener permisos root 
```bash
sudo groupadd docker
```
```bash
sudo usermod -aG docker $USER
```
```bash
newgrp docker
```
Para habilitar el servicio usamos start o enable para que este siempre iniciado
```bash
sudo systemctl start docker
```

# DockerHub
Hacer login en **[DockerHub](https://hub.docker.com/))**
```bash
docker login
```
O hacer logout
```bash
docker logout
```

# Comandos basicos de Docker

## Contenedores
Lanzar un contenedor, seria conveniente ponerle un nombre con "--name"
```bash
docker run --name ubuntu -it ubuntu /bin/bash
```
Ver los contenedores que estan en ejecucion
```bash
docker ps
```
Ver todos los contenedores, ya esten en ejecucion o parados 
```bash
docker ps -a
```
Iniciar o parar un contenedor
```bash
docker start "nombre_contenedor"
```
```bash
docker stop "nombre_contenedor"
```
Obtener una terminal en un contenedor 
```bash
docker exec -it server /bin/bash
```
Copiar ficheros desde nuestra sistema al contenedor de docker
```bash
docker cp prueba.html server:/usr/local/apache2/htdocs/index.html
```
```bash
docker cp server:/usr/local/apache2/htdocs/index.html $HOME/test.html
```

## Imagenes
Descargar una imagen, al final especificamos la version, si no especificamos nada descarga la ultima version
```bash
docker pull ubuntu:18.04
```
Ver las imagenes descargadas
```bash
docker images
```
Borrar imagenes, con "-a" borramos todas las imagenes sin usar
```bash
docker rmi ubuntu
```
```bash
docker image prune -a
```

## Persistencia
Los bind mount nos permite enlazar una directorio del host con un directorio del contenedor
```bash
docker run --name server -v /home/usuario/web:/usr/local/apache2/htdocs -p 80:80 httpd
```
```bash
docker run --name server -p 80:80 --mount type=bind,src=/home/usuario/web,dst=/usr/local/apache2/htdocs httpd
```

## Generar imagenes
Creacion de una imagen a partir del contenedor, podemos especificar versiones con ":"
```bash
docker commit server jose016al/ubuntu
```
Subir la imagen creada a dockerhub 
```bash
docker push jose016al/ubuntu
```

# Contenedor SSH
Lanzamos un contenedor de ubuntu, con el puerto 22 para poder comunicarnos 
```bash
docker run --name server -it -p 2222:22 ubuntu
```
Actualizamos el contenedor 
```bash
apt update
```
```bash
apt upgrade
```
Instalamos los paquetes necesarios
```bash
apt install iproute2
```
```bash
apt install openssh-server
```
```bash
apt install sudo
```
```bash
apt install nano
```
Creacion de un usuario
```bash
useradd -m user
```
```bash
passwd user
```
```bash
usermod -aG sudo user
```
```bash
chsh -s /bin/bash user
```
Reiniciar el servicio ssh
```bash
service ssh restart
```

# Contenedor Apache
Partimos del contenedor anterior, esta vez con persistencia y abriendo los puertos 22 y 80
```bash
docker run --name server -it -v ~/GitHub:/var/www/html -p 2222:22 -p 8080:80 jose016al/ssh
```
Actualizar el contenedor 
```bash
apt update
```
```bash
apt upgrade
```
Instalamos los paquetes necesarios
```bash
apt install apache2 
```
```bash
apt install php
```
Reiniar los servicios
```bash
service ssh restart
```
```bash
service apache2 restart
```

# Contenedor Mariadb
Partimos del contenedor anterior, con persistencia y abriendo los puertos 22, 80 y 3306  
```bash
docker run --name server -it -v ~/GitHub:/var/www/html -p 2222:22 -p 8080:80 -p 3306:3306 jose016al/apache
```
Actualizar el contenedor
```bash
apt update
```
```bash
apt upgrade
```
Instalacion de los paquetes necesarios
```bash
apt install dialog
```
```bash
apt install apt-utils
```
```bash
apt install mariadb-server
```
```bash
service mariadb restart
```
Configuramos la seguridad
```bash
mysql_secure_installation
```
> ENTER, Y, N, Y, Y. Y Y

Inicializamos el directorio raiz y reiniciamos el servicio, si fuese neceario
```bash
usermod -d /var/lib/mysql/ mysql
```
```bash
service mariadb restart
```
Creamos un usuario admin y uno remoto
```bash
GRANT ALL ON *.* TO 'admin'@'localhost' IDENTIFIED BY 'admin' WITH GRANT OPTION;
```
```bash
FLUSH PRIVILEGES;
```
Creamos el usuario remoto
```bash
GRANT ALL ON *.* TO 'user'@'%' IDENTIFIED BY 'user' WITH GRANT OPTION;
```
```bash
FLUSH PRIVILEGES;
```
Instalacion de phpmyamdin
```bash
apt install phpmyadmin
```
Modificamos el fichero de configuracion de mysql para permitir aceso al usuario remoto
```
nano /etc/mysql/mariadb.conf.d/50-server.cnf
```
```bash
# bind-address = 127.0.0.1  
```
Para habilitar el registro de errores de PHP, debemos modificar el archivo php.ini
```bash
sudo nano /etc/php/8.1/apache2/php.ini
```
Usando 'Ctrl + W', buscamos estas opciones que están desactivadas (off) y las activamos (on)
```bash
display_errors = On
display_startup_errors = On
```

# Contenedor Nodejs & NPM
Partimos del contenedor anterior, con persistencia y abriendo los puertos 22, 80, 3306 y 3000
```bash
docker run --name server -it -v ~/GitHub:/var/www/html -p 2222:22  -p 3000:3000 -p 5173:5173 jose016al/ssh
```
Actualizar el contenedor
```bash
apt update
```
```bash
apt upgrade
```
Instalacion de los paquetes necesarios
```bash
apt install nodejs npm
```
Si las versiones más recientes de Node.js no están disponibles a través de apt, podemos optar por instalar un gestor de versiones de Node.js, como Node Version Manager (NVM)
```bash
npm install -g n
```
Una vez que tengamos el gestor instalado, podremos actualizar Node.js a su última versión con el siguiente comando
```bash
sudo n latest
```
Es posible que en algunos proyectos sea necesario instalar reaact-scripts
```bash
npm install react-scripts --save
```

# Contenedor Symfony
Partimos del contenedor anterior, con persistencia y abriendo los puertos 22, 80, 3306 y 3000
```bash
docker run --name server -it -v ~/github:/var/www/html -p 2222:22 -p 8080:80 -p 3306:3306 -p 3000:3000 -p 8000:8000 jose016al/symfony
```
Actualizar el contenedor
```bash
apt update
```
```bash
apt upgrade
```
Instalacion de los paquetes necesarios
```bash
apt install libapache2-mod-php php-common php-sqlite3 php-mysql php-gmp php-curl php-intl php-mbstring php-xmlrpc php-soap php-ldap php-gd php-bcmath php-xml php-cli php-zip curl git
```
Descargamos el paquete de composer de la web
```bash
curl -sS https://getcomposer.org/installer | sudo php -- --install-dir-/usr/local/bin -- filename-composer
```
Instalamos composer
```bash
apt install composer
```
```bash
curl -1sLf 'https://dl.cloudsmith.io/public/symfony/stable/setup.deb.sh' | sudo -E bash
```
```bash
apt install -y symfony-cli
```
Si queremos inicar un proyecto ya creado, debemos seguir los pasos
```bash
composer install
```
Crear la base de datos una vez hayamos modificado el fichero .env con nuestras credenciales
```bash
php bin/console doctrine:database:create
```
```bash
php bin/console doctrine:schema:create
```