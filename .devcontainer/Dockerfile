FROM node:18-alpine

RUN apk update && apk add git

RUN mkdir /EWU-Basketball-Stats-Manager
COPY . /EWU-Basketball-Stats-Manager

RUN yarn install --frozen-lockfile
