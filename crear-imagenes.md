### DOCKER FILES

Son intrucciones basicamente de como construir capas.

o son isntrucciones de como construir la imagen que va ejecutar nuestro codigo.

dockerisar es construir una imagen basada en nuestro codigo

construir una imagen:
docker build --tag <nombre-imagen>:version (. aqui path relativo de donde esta el dockerfile) 

 docker build -t alex146/cron-ticker:mapache .

al crear una buid los pasos dejan de estar cacheados cuando algo cambia.