# Use Node.js 18.16.0 base image
FROM node:18.16.0

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install  --production

# Copy the rest of the application code
COPY . .
RUN npm run build
# Set the environment to production
ENV NODE_ENV=production
# Expose the application port (e.g., 3000)
EXPOSE 3000

# Define the command to run your application
CMD ["npm", "start"]