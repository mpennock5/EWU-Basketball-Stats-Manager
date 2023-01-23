FROM node:latest

RUN yarn install

RUN mkdir -p /app

COPY package.json /app

COPY ./app /app/app

COPY ./build /app/build

RUN cd /app && yarn install

ENTRYPOINT ["yarn", "--cwd", "/app", "run", "dev"]

EXPOSE 3000
