Para subir una imagen a dockerhub se necesita una cuenta
ir a docker repositorios y agregar un repositorio , agregar un nombre y esta la eleccion de ser publica o privada aun que solo se nos ofrece la oportunidad gratuita de 1 solo repositorio privado.

renombramos primero nuestra imagen con el nombre del repositorio
nombre de imagen / nombre de repositorio
docker image tag cron-ticker alex146/cron-ticker

docker push alex200207/cron-ticker con esto subimos la imagen 