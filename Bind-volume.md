# Explicación línea por línea

- `docker container run \`` — Inicia la ejecución de un contenedor Docker; el carácter `` ` `` al final indica continuación de línea (PowerShell).
- `--name nest-app \`` — Asigna el nombre `nest-app` al contenedor.
- `-w /app \`` — Establece `/app` como directorio de trabajo dentro del contenedor.
- `-p 80:3000 \`` — Mapea el puerto `3000` del contenedor al puerto `80` del host (host:contenedor).
- `-v "$(pwd)":/app \`` — Monta (bind mount) el directorio actual del host en `/app` dentro del contenedor; `$(pwd)` obtiene la ruta de trabajo actual en shells compatibles.
- `node:16-alpine3.16 \`` — Especifica la imagen Docker a usar: Node.js 16 sobre Alpine Linux 3.16.
- `sh -c "yarn install && yarn start:dev"` — Ejecuta un shell que primero instala dependencias con `yarn install` y después arranca la app en modo desarrollo con `yarn start:dev`.

docker container run `
--name nest-app `
-w /app `
-p 80:3000 `
-v "$(pwd)":/app `
node:18-alpine `
sh -c "yarn install && yarn start:dev"

### powershell 

docker run `
--name nest-app `
-w /app `
-p 80:3000 `
-v "${PWD}:/app" `
node:18-alpine `
sh -c "yarn install && yarn start:dev"

## ver sus logs por si se pierde
docker container ls log -f id aqui