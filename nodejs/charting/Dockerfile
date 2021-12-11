# This is our base community provided image,
# with some minimal distribution of linux
# that comes with NodeJs v10 (and npm) already installed
FROM node:12

# Use this directory _inside_ your Docker container
# as the base directory of all the next actions
WORKDIR /usr/src/app

# Copy your app's code from the host (your computer) to the container.
# This assumes a typical setup in which the Dockerfile
# is in the root of your project
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of your App's source files
COPY . .

# Tell Docker that your app will be working in the port 8080
# so we should open it up to the outside
EXPOSE 8080

# Run your app.
# CMD signals Docker that this is the thing that we want to run,
# if this executable fails then the whole container will exit.
CMD [ "node", "index.js" ]
