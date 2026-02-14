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
docker buildx inspect mybuilder --bootstrap


inspeccionar las arquitecturas que l builder va trabar
docker buildx inspect

docker buildx imagetools inspect imagen:tag

Genera una nueva imagen multi-arquitectura (amd64 y arm64) usando buildx
y la publica en el registry. El punto final (.) indica el contexto del build,
es decir, el directorio donde se encuentra el Dockerfile desde donde se
ejecuta el comando.


docker buildx build --platform linux/amd64,linux/arm64 `
-t alex146/cron-ticker:latest --push .

docker buildx build --platform linux/amd64 `
-t alex146/teslo-shop:1.0.0 `
--push .


(recordar que ese punto al final va ejectar el docker file donde ejecuto el comando)




# 1️⃣ Cambiar al contexto Docker por defecto
# (necesario si el builder activo depende de otro contexto)
docker context use default

# 2️⃣ Cambiar al builder "default"
# (no se puede eliminar un builder que está en uso)
docker buildx use default

# 3️⃣ Verificar builders disponibles
# El * debe estar en "default"
docker buildx ls

# 4️⃣ Eliminar el builder personalizado
docker buildx rm mybuilder

# 5️⃣ (Opcional) Volver al contexto de Docker Desktop
docker context use desktop-linux

# 6️⃣ (Opcional) Volver al builder de Docker Desktop
docker buildx use desktop-linux



# 🐳 Docker Context – Chuletario rápido

## ¿Qué es un Docker Context?
Un **Docker context** define **a qué Docker daemon te conectas**.
En otras palabras:
> “¿Dónde se ejecutan mis comandos `docker`?”

Puede ser:
- Docker local
- Docker Desktop
- Un servidor remoto
- Un Docker vía SSH

---

## Listar contextos disponibles
```bash
docker context ls
```

El * indica el contexto activo

Cambiar de contexto
docker context use default

docker context use desktop-linux

Ver detalles de un contexto
docker context inspect default

Crear un contexto (ejemplo remoto)
docker context create my-remote \
--docker "host=ssh://user@server"

Eliminar un contexto
docker context rm my-remote

Relación con buildx (idea clave)
Docker Context → Docker daemon
Docker Buildx  → Builder (BuildKit) dentro del contexto


Siempre:

Seleccionas contexto

Luego seleccionas builder