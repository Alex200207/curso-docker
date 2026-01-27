# Docker Compose

Docker Compose es una herramienta para definir y ejecutar aplicaciones multicontenedor de Docker usando un archivo de configuración (normalmente `docker-compose.yml`). Permite describir servicios, redes y volúmenes en un formato declarativo y lanzar toda la pila con un solo comando (`docker compose up`).

## Conceptos clave

- Servicio: un contenedor lógico definido en el archivo (ej. `web`, `db`).
- Imagen: referencia a una imagen Docker (`image:`) o a la construcción local (`build:`).
- Volúmenes: persistencia de datos entre contenedores y host.
- Redes: comunicación entre servicios aislada por proyecto.
- Dependencias: orden básico de arranque (`depends_on`), no garantiza salud.
- Perfiles y escalado: `profiles` para entornos y `docker compose up --scale` para réplicas.

## Formato YAML (docker-compose.yml)

- YAML es sensible a espacios; usar indentación consistente (2 espacios recomendados).
- Estructura principal: `version` (opcional en Compose v2+), `services`, `networks`, `volumes`.
- Valores comunes: `ports`, `environment`, `volumes`, `depends_on`, `command`, `build`.

## Ejemplo mínimo

```yaml
version: "3.9"
services:
  web:
    image: nginx:alpine
    ports:
      - "8080:80"
    volumes:
      - ./html:/usr/share/nginx/html:ro

  db:
    image: postgres:15
    environment:
      POSTGRES_PASSWORD: example
    volumes:
      - db_data:/var/lib/postgresql/data

volumes:
  db_data:
```
