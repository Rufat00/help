# Use the official Node.js 14 image as a base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Clone the repository
RUN git clone https://github.com/Rufat00/help.git .

# Install app dependencies
RUN npm install

# Expose the port your app runs on
EXPOSE 3000

# Command to run your app using npm
CMD ["npm", "start"]
