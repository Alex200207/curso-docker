# ¿Qué es BuildX?

BuildX es una extensión de Docker que proporciona una interfaz avanzada para la construcción de imágenes. Permite crear imágenes multiplataforma, aprovechar nuevas características del builder de Docker y gestionar múltiples entornos de construcción.

## Características principales

- **Soporte multiplataforma:** Permite construir imágenes para diferentes arquitecturas (x86, ARM, etc.) desde una misma máquina.
- **Drivers de construcción:** Utiliza distintos backends como Docker, BuildKit o Kubernetes.
- **Caché eficiente:** Optimiza el tiempo de construcción reutilizando capas previas.
- **Exportación flexible:** Permite exportar imágenes a diferentes destinos, como registros o archivos locales.
- **Soporte para Dockerfile avanzado:** Permite usar nuevas instrucciones y sintaxis mejorada.

BuildX es ideal para flujos de trabajo modernos de CI/CD y despliegues en la nube.

docker buildx ls : listar builds

crear un nuevo buildx 

docker buildx create --name mybuilder --driver docker-container --use
docker buildx inspect --bootstrap


docker buildx create \
  --name mybuilder \          # Nombre lógico del builder (solo una etiqueta)
  --driver docker-container \ # Indica que BuildKit correrá dentro de un contenedor Docker
  --use                       # Hace que este builder sea el activo por defecto


Arranca contenedor buildkit 
docker buildx inspect --bootstrap


inspeccionar las arquitecturas que l builder va trabar
docker buildx inspect

Genera una nueva imagen multi-arquitectura (amd64 y arm64) usando buildx
y la publica en el registry. El punto final (.) indica el contexto del build,
es decir, el directorio donde se encuentra el Dockerfile desde donde se
ejecuta el comando.


docker buildx build --platform linux/amd64,linux/arm64 `
-t alex146/cron-ticker:latest --push .

(recordar que ese punto al final va ejectar el docker file donde ejecuto el comando)