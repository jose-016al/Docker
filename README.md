# Documentacion de docker

## Para lanzar un contenedor web y mysql con persistencia
'''
docker run --name server -it -v /home/jose/Docker/Web:/var/www/html -v /home/jose/Docker/BD:/var/lib/mysql -p 2222:22 -p 8080:80 -p 3306:3306 jose016al/server_web
'''