# Use the official Node.js image as the base image
FROM node:16-alpine as build-stage

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Build the application
RUN npm run build

# Use a lightweight Node.js image for the production stage
FROM node:16-alpine as production-stage

# Set the working directory to /app
WORKDIR /app

# Install serve, a simple static file server
RUN npm install -g serve

# Copy the build output from the build stage
COPY --from=build-stage /app/build /app

# Expose port 5000 for the application to listen on
EXPOSE 5000

# Run the serve command to serve the application
CMD ["serve", "-s", "/app", "-l", "5000"]