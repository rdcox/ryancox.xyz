# Use the official Node.js 14 image as the base image
FROM node:19

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the app dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Expose the port your React app is listening on (e.g., 3000)
EXPOSE 3000

# Start the React app
CMD ["npm", "run", "start"]
