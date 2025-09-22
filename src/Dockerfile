# Stage 1: build
FROM node:18-alpine AS builder
WORKDIR /app

# Install dependencies (use package-lock.json if present for reproducible installs)
COPY package*.json ./
RUN npm ci --silent

# Copy source and build
COPY . .
RUN npm run build

# Stage 2: serve with nginx
FROM nginx:stable-alpine
# Remove default nginx content
RUN rm -rf /usr/share/nginx/html/*
# Copy built files from builder
COPY --from=builder /app/build /usr/share/nginx/html

# Copy custom nginx config (optional but recommended for SPA routing)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
