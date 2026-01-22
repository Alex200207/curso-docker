# ¿Qué es Docker?

Docker permite empaquetar, distribuir y ejecutar aplicaciones en contenedores. Una imagen es una plantilla inmutable que contiene el sistema de archivos y la configuración necesaria para ejecutar una aplicación.

## Conceptos clave

- Imagen: snapshot de una aplicación y su entorno (read-only).
- Contenedor: instancia en ejecución de una imagen; aislada y ligera.
- Dockerfile: instrucciones para construir una imagen.
- Registro: almacén de imágenes (Docker Hub, registros privados).
- Volúmenes: almacenamiento persistente compartido entre host y contenedores.
- Redes: conectividad entre contenedores y con el exterior.
- Compose: define y ejecuta aplicaciones multi-contenedor (docker-compose.yml).

## Buenas prácticas

- Mantener imágenes pequeñas (multi-stage builds).
- Usar versiones explícitas de bases e imágenes.
- Separar datos en volúmenes, no en la imagen.
- Exponer solo los puertos necesarios.
- Firmar y escanear imágenes por seguridad.

## Beneficios

- cada contenedor esta aislado de los demas.
- Es posible ejecutar varias instancias de la misma version o diferentes versiones sin configuraciones adicionales.
- con un comando ,puedes descargar,levantar y correr todo lo que necesitas
- cada contenedor contiene todo lo que necesesita para ejecutarse.
- Indiferente al sistema operativo HOST.

comandos
docker pull hola-mundo descragar una imagen
docker container ls ver contenedores (forma nueva)
docker ps forma antigua
docker container ls -a ver todos los contendores

docker container rm (elimina uno o varios contenedores)

docker image ls (muestra imagenes)

docker image ls -a (mostrar todas)

docker image rm (elimina una o varias imagenes)

docker container stop identificador aqui

docker container start indentificador aqui

docker container run -d : correro proyecto desenlazado de la consola
docker container run -d -p 80:80 publicar para que se comunique en el puerto 80
mapea el puerto 80 de mi equipo con el puerto que expone el contenedor

docker container run -dp 80:80 forma corta

docker container run --name some-postgres -dp 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword  postgres : creacion de contendor de postgres

docker container run `
> --name postgres-alpha `
> -e POSTGRES_PASSWORD=mypass1 `
> -dp 5432:5432 ` compuador:contenedor
> postgres  crear comando en varias lineas basta con agrgar en powershell un espacio y (`)
