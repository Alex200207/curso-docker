# Volumenes

Un volumen en Docker es un mecanismo utilizado para almacenar datos de manera persistente que necesitan sobrevivir más allá del ciclo de vida de un contenedor. 

## 3 tipos de volumenes.
### Named Volumenes: el mas usado, se le asigna un nombre al volumen

- Crear volumen nuevo o espacio en la computadora
`docker volume create todo-bd`
- Lista volumenes creados
`docker volume ls`
- Inspeccionar el volumen especifico
`docker volume inspect todo-bd`
- remueve todos los volumenes no usados
`docker volume prune`
- remueve uno o mas volumenes especificados
`docker volume rm VOLUME_NAME`
- Usar un volumen al correr un contenedor
`docker run -v todo-db:/etc/todos getting-started`

### Bind volumes - Vincula volumenes
Bind volume trabaja con paths absolutos conecta una carpeta o archivo real de tu máquina con una ruta dentro del contenedor.
o mejor dicho vincula un file system del equipo con uno del contenedor

apple
`docker run -dp 3000:3000 \ 
    -w /app -v "$(pwd):/app" \ 
    node:18-alpine \ 
    sh -c "yarn install && yarn run dev"`
win
`docker run -dp 3000:3000 ` 
    -w /app -v "$(pwd):/app" ` 
    node:18-alpine ` 
    sh -c "yarn install && yarn run dev" `

### anonymus volume

es un volumen de Docker sin nombre, que Docker crea automáticamente cuando un contenedor lo necesita y tú no le das un nombre.

### crear contendor con volumen 

docker container run `
--name world-db `
-e MARIADB_USER=example-user `
-e MARIADB_PASSWORD=user-password `
-e MARIADB_ROOT_PASSWORD=root-secret-password `
-e MARIADB_DATABASE=world-db `
-dp 3308:3306 `
--volume world-db:/var/lib/mysql `
--network world-app `
mariadb:jammy

-volume nuestro host: contenedor

## ver puerto ocupado
netstat -ano | findstr :8080
## obtener nombre del proceso
Get-Process -Id 6072

### correr php my admin forma visual de correr la base de datos

`phpmyadmin:5.2.0-apache` version

docker container run `
--name phpmyadmin `
-d `
-e PMA_ARBITRARY=1 `
-p 8080:80 `
--network world-app `
phpmyadmin:5.2.0-apache