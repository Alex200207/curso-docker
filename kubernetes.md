# Introducción a Kubernetes

Kubernetes (K8S) es un sistema de orquestación para administrar grandes conjuntos de contenedores. Permite automatizar el despliegue, escalado y gestión de aplicaciones en contenedores.

## Conceptos básicos

- **Pod**: Es la unidad más básica en Kubernetes. Un pod puede contener uno o varios contenedores y define aspectos como el número de réplicas, la dirección IP y otros recursos asociados.
- **Nodo**: Es una máquina física o virtual donde se ejecutan los pods.
- **Cluster**: Conjunto de nodos gestionados por Kubernetes.
- **ReplicaSet**: Controla el número de réplicas de un pod que deben estar corriendo en todo momento.
- **Deployment**: Permite gestionar actualizaciones y el ciclo de vida de los pods de manera declarativa.
- **Service**: Expone los pods para permitir la comunicación interna o externa.

## Ventajas de Kubernetes

- Escalabilidad automática de aplicaciones.
- Alta disponibilidad y recuperación ante fallos.
- Gestión eficiente de recursos.
- Integración con diferentes proveedores de nube.

## Ejemplo de uso

```yaml
apiVersion: v1
kind: Pod
metadata:
    name: ejemplo-pod
spec:
    containers:
        - name: nginx
            image: nginx:latest
```

Este ejemplo crea un pod con un contenedor que ejecuta Nginx.

# Presentacion

 Kubernetes es una plataforma para aotomatizar el despliegue escala y manejo de contenedores. originalmente creado por google.

Que problemas resuelve??

Usuarios esperan un servicio 24/7.

los de it esperan hacer muchos despliegues en un dia sin detener el servicio que esta corriendo: permitiria tener cambios en caliente sin detener el servicio.

las companias esperan mayor eficiciencia de los recursos de la nube: todo el tiempo que este un servicio en la nube se esta facturando

un sistema tolerante a fallas en el mommento que algo salga mal: si la app crashe no se detenga.

Escala hacia arriba y hacia abajo segun demanda.

