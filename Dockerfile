# Cambiar a una imagen base más reciente
FROM node:18-alpine

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar archivos del proyecto
COPY package*.json ./
RUN npm install
COPY . .

# Construir la aplicación
RUN npm run build

# Exponer el puerto
EXPOSE 3000

# Comando por defecto
CMD ["npm", "run", "preview"]
