# aqui agregares instrucciones para crear la imagen
# imagen base : es un pequeño linux con node instalado configurado para correr aplicaciones nodejs
FROM node:19.2-alpine3.16 
# eligir directorio de trabajo
WORKDIR /app
# copy es para copiar archivos desde tu pc a la imagen
# destino ultimo luagar donde se copian los archivos en la imagen
# pp.js package.json son los archivos que se copian
# el ./ significa el directorio actual de trabajo en la imagen
COPY app.js package.json ./

# ejecutra procedimientos para instalar dependencias
RUN npm install

# ejecutar la aplicacion
CMD [ "node", "app.js" ]