# aqui agregares instrucciones para crear la imagen
# imagen base : es un pequeño linux con node instalado configurado para correr aplicaciones nodejs
# con --platform se elige la arquitectura de la imagen
# FROM --platform=linux/amd64 node:20-alpine3.16 
# usa variable de entorno especial para elegir la plataforma de construccion
 FROM --platform=$BUILDPLATFORM node:20-alpine3.16 
# FROM node:20-alpine3.16 
# eligir directorio de trabajo es como hacer el cd a la carpeta app
WORKDIR /app
# copy es para copiar archivos desde tu pc a la imagen
# destino ultimo luagar donde se copian los archivos en la imagen
# app.js package.json son los archivos que se copian
# el ./ significa el directorio actual de trabajo en la imagen
COPY package.json ./
# ejecutra procedimientos para instalar dependencias
RUN npm install
# un solo paso copia todo
COPY . . 


# realizar testing si falla la imagen no se crea
RUN npm run test

# si todo pasa eliminar dependencias de desarrollo
# rf borrar todos los derictorios forzadamente
# && para ejecutar varios comandos en una sola linea
RUN rm -rf tests && rm -rf node_modules
# instala unicamente las dependencias de produccion
RUN npm install --production

# ejecutar la aplicacion
CMD [ "node", "app.js" ]