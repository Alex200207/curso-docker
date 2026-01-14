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
- Indifernete al sistema operativo HOST.
