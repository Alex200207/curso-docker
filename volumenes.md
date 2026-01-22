# Volumenes

Un volumen en Docker es un mecanismo utilizado para almacenar datos de manera persistente que necesitan sobrevivir más allá del ciclo de vida de un contenedor. 

## 3 tipos de volumenes.
### Named Volumenes: el mas usado, se le asigna un nombre al volumen
- Crear volumen nuevo
`docker volume create todo-bd`
- Lista volumenes creados
`docker volume ls`
- Insperccionar el volumen especifico
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
