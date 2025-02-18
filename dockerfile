# Étape 1: Utiliser une image Node.js pour la construction de l'application
FROM node:20 AS build

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de configuration
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code source
COPY . .

# Construire l'application React
RUN npm run build

# Étape 2: Utiliser Nginx pour servir l'application
FROM nginx:alpine

# Copier le build généré par React dans le répertoire où Nginx s'attend à trouver les fichiers statiques
COPY --from=build /app/dist /usr/share/nginx/html

# Exposer le port 80 pour que l'application soit accessible
EXPOSE 9093

# Démarrer le serveur Nginx
CMD ["nginx", "-g", "daemon off;"]
