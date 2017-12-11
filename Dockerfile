FROM node

# install dependencies first, in a different location for easier app bind mounting for local development
WORKDIR /home/node/
COPY package*.json ./
RUN npm install && npm cache clean --force
ENV PATH /home/node/node_modules/.bin:$PATH

WORKDIR /home/node/app
COPY . .

EXPOSE 3000