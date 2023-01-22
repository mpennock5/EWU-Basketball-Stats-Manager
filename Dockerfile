FROM node:latest

RUN mkdir -p /app

COPY . /app

RUN cd /app && yarn install

ENTRYPOINT ["yarn", "start"]

EXPOSE 3000
