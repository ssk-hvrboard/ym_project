# Build stage
FROM node:18-alpine as build

WORKDIR /app

# Package dosyalarını kopyala
COPY package*.json ./

# Bağımlılıkları yükle
RUN npm ci

# Uygulama kodlarını kopyala
COPY . .

# Production build oluştur
RUN npm run build

# Production stage
FROM nginx:alpine

# Build dosyalarını nginx'e kopyala
COPY --from=build /app/build /usr/share/nginx/html

# Nginx konfigürasyonu
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Port 80'i aç
EXPOSE 80

# Nginx'i başlat
CMD ["nginx", "-g", "daemon off;"] 