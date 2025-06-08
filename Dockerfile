# Use Node.js image
FROM node:latest

# Set working directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source files
COPY . .

# Expose port
EXPOSE 3000

# Run the app
CMD ["node", "server.js"]
