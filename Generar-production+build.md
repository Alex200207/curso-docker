# 🔨 Construye las imágenes definidas en docker-compose.prod.yml
# -f docker-compose.prod.yml  → Le dice a Docker que use ese archivo específico
# build                       → Construye las imágenes (ejecuta los Dockerfile)
# Esto NO levanta los contenedores, solo crea/actualiza las imágenes
docker compose -f docker-compose.prod.yml build


# 🚀 Levanta los contenedores usando docker-compose.prod.yml
# -f docker-compose.prod.yml  → Usa el archivo de configuración de producción
# up                          → Crea y ejecuta los contenedores
# Si las imágenes no existen, las construye automáticamente
docker compose -f docker-compose.prod.yml up
