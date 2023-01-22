FROM node:18-alpine

RUN apk update && apk add git

RUN mkdir /EWU-Basketball-Stats-Manager
COPY . /EWU-Basketball-Stats-Manager
WORKDIR /EWU-Basketball-Stats-Manager
ENV PATH /EWU-Basketball-Stats-Manager/node_modules/.bin:$PATH

RUN yarn
