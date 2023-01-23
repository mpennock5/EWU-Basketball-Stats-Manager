FROM node:latest

RUN mkdir -p /app

COPY package.json /app
CMD yarn run build

COPY ./app /app/app

COPY ./build /app/build

RUN cd /app && yarn install

ENTRYPOINT ["yarn", "--cwd", "/app", "run", "dev"]

EXPOSE 3000
