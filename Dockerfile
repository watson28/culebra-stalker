FROM node

# install dependencies first, in a different location for easier app bind mounting for local development
WORKDIR /home/node/
COPY package*.json ./
RUN yarn install && yarn cache clean
ENV PATH /home/node/node_modules/.bin:$PATH

WORKDIR /home/node/app
COPY . .

EXPOSE 3000