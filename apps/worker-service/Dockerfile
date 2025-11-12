FROM node:20-alpine

RUN apk update
RUN apk upgrade
RUN apk add --no-cache ffmpeg


WORKDIR /app

COPY package*.json ./

RUN npm install -g npm@9

RUN rm package-lock.json 
RUN npm install 

COPY . .

RUN npm run build

CMD [ "npm", "start" ]