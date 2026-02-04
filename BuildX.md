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

docker buildx create --name mybuilder --driver docker-container --bootstrap mybuilder
