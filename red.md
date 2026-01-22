# Redes de contenedores
En Docker, cada contenedor puede comunicarse con otros contenedores o con el exterior mediante redes.

Una red de Docker es básicamente un canal virtual que permite que los contenedores se hablen entre sí o con tu máquina host, de manera segura y controlada.
## comandos
- Crear una nueva red
`docker network create todo-app`
- Mostrar redes 
`docker network ls `
- Purgar redes no utilizadas
`docker network prune`
- Inspeccionar una red
`ocker network inspect <NAME o ID>`

- Correr una imagen y unirla a la red 
`docker run -d \ 
    --network todo-app --network-alias mysql \ 
    -v todo-mysql-data:/var/lib/mysql \ 
    -e MYSQL_ROOT_PASSWORD=secret \ 
    -e MYSQL_DATABASE=todos \ 
    mysql:8.0

   ###  powershell

    docker run -d ` 
    --network todo-app --network-alias mysql ` 
    -v todo-mysql-data:/var/lib/mysql ` 
    -e MYSQL_ROOT_PASSWORD=secret ` 
    -e MYSQL_DATABASE=todos ` 
    mysql:8.0

### conectar dos contenedor en una misma red para que hablen entre si

docker network  connect (nombre de la red) (ID del contendor a unir a la red)