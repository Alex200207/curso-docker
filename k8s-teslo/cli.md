# iniciar minikube primero por si no lo esta 
minikube start

# ver ip de nuestro cluster

kubectl get all

# con este comando

kubectl apply -f postgres-config.yml

si precionas tab
kubectl apply -f .\postgres-config.yml

# lo mismo pero con secrets

kubectl apply -f .\postgres-secrets.yml

# ahora con nuestro deployment 

kubectl apply -f .\postgres.yml

# revisar estado 

kubectl get all

![alt text](image.png)

es posible que la primera ves no este listo pues puede que este descargando imagen y configurando contenedor.

# ver informacion sobre el pod

kubectl describe deployment.apps/postgres-deployment

# ver los logs
 
 kubectl logs pod/postgres-deployment-656cfb5fd4-8nd94

 # exponer servicio 

  minikube service pg-admin-service