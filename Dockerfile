FROM node:lts-alpine as builder 

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install -g @angular/cli

RUN npm ci --legacy-peer-deps

CMD ["ng", "serve", "--host", "0.0.0.0"]
