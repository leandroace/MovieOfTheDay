# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Proyecto de Despliegue en Kubernetes

## Descripción
Este proyecto consiste en una aplicación web desarrollada con React y Vite, empaquetada en una imagen Docker y desplegada en un clúster de Kubernetes utilizando K3s. La finalidad es aprender y demostrar cómo desplegar aplicaciones modernas utilizando contenedores y orquestación con Kubernetes.

---

## Estructura del Proyecto

```plaintext
root/
├── .github/                 # Configuraciones de GitHub (actions, templates, etc.)
├── coverage/                # Informes de cobertura de tests
├── dist/                    # Archivos generados tras la construcción
├── node_modules/            # Dependencias instaladas (no incluidas en el repositorio)
├── public/                  # Archivos estáticos públicos (favicon, imágenes, etc.)
├── src/                     # Código fuente de la aplicación
├── tests/                   # Pruebas unitarias e integración
├── .env                     # Variables de entorno (no subido al repositorio)
├── .gitignore               # Archivos y carpetas ignoradas por Git
├── babel.config.cjs         # Configuración de Babel
├── deployment.yaml          # Configuración para Kubernetes
├── Dockerfile               # Configuración para construir la imagen Docker
├── eslint.config.js         # Configuración de ESLint
├── index.html               # Archivo raíz para Vite
├── package-lock.json        # Detalle exacto de las dependencias
├── package.json             # Dependencias y scripts del proyecto
├── README.md                # Documentación principal del proyecto
├── sonar-project.properties # Configuración para análisis estático con SonarQube
├── tailwind.config.js       # Configuración para Tailwind CSS
├── vite.config.js           # Configuración de Vite
```
Instalación
Requisitos previos
Node.js v18 o superior
Docker
Kubernetes (K3s)
Kubectl

Clona este repositorio:

-git clone https://github.com/tu-usuario/tu-repositorio.git
-cd tu-repositorio

Instala las dependencias del proyecto:

-npm install

Crea un archivo .env con las variables necesarias.

Construye la imagen Docker:
-docker build -t my-app:latest .
-docker run -p 3000:3000 my-app:latest

Despliegue en Kubernetes

-kubectl apply -f deployment.yaml
