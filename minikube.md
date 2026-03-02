# Instalación de Minikube

Enlace aquí:  
[https://minikube.sigs.k8s.io/docs/](https://minikube.sigs.k8s.io/docs/)

Minikube es una tecnología diseñada para quienes están comenzando con Kubernetes, permitiendo una configuración rápida y sencilla.

Básicamente, creamos un contenedor preconfigurado con Kubernetes para administrar nuestro cluster.

## Comandos básicos

### Instalación

```bash
# Descargar e instalar Minikube (Linux)
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube

# Descargar e instalar Minikube (Windows)
choco install minikube
```

### Crear un cluster

```bash
minikube start
```

### Verificar el estado del cluster

```bash
minikube status
```

### Acceder al dashboard de Kubernetes

```bash
minikube dashboard
```

### Limpiar completamente

```bash
minikube delete --all
```
