# primer stage ---------------------------------------------------------- dependencias de desarrollo
# con as le damos un nombre al stage para referenciarlo despues
# este servidor con la distribucion alpine tendra esta primera etapa
FROM node:20-alpine3.16 as deps
WORKDIR /app
COPY package.json ./
RUN npm install

# segundo stage -----------------------------------------------------
    # Build y testing
FROM node:20-alpine3.16 as builder
# elegir directorio de trabajo es como hacer el cd a la carpeta app
WORKDIR /app
# hacer referencia a la etapa anterior
# copiar los node_modules desde la etapa deps
COPY --from=deps /app/node_modules ./node_modules
# copair todo lo que se encuentre en mi host al contenedor
COPY . .
RUN npm run test
# tercer stage ------------------------------------------------------
# dependencias de produccion
FROM node:20-alpine3.16 as prod-deps
WORKDIR /app
COPY package.json ./
RUN npm install --production

# etapa final ------------------------------------------------------
# ejecutar la aplicacion
FROM node:20-alpine3.16 as runner
WORKDIR /app
COPY --from=prod-deps /app/node_modules ./node_modules
COPY app.js ./
# va copiar lo que este dentro tasks a la carpeta tasks dentro del contenedor
COPY tasks ./tasks
CMD [ "node", "app.js" ]
