# Use the official Node.js 19 image as the base image
FROM node:19

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the app dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your NestJS app is listening on (e.g., 3000)
EXPOSE 3000

# Start the NestJS app
CMD ["npm", "run", "start"]
