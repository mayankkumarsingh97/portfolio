# Stage 1: Build React app
FROM node:22-slim AS builder

WORKDIR /app

# Copy only package.json + lock for caching
COPY package*.json ./

# Install dependencies
RUN npm ci --legacy-peer-deps 

# Copy the rest of the code
COPY . .

# Build React app
RUN npm run build


# Stage 2: Minimal Node.js image for serving
FROM node:22-slim

WORKDIR /app

# Install 'serve' globally (tiny static file server)
RUN npm install -g serve

# Copy only the build folder from builder stage
COPY --from=builder /app/build ./build

# Expose port 3000
EXPOSE 3000

# Serve React build folder
CMD ["serve", "-s", "build", "-l", "3000"]

