FROM node:16-alpine
RUN apk update && apk add git && apk add sudo && apk add openrc --no-cache && apk add openssh
WORKDIR /app
COPY package.json .
RUN npm update
RUN yarn
COPY . .
CMD ["yarn", "run" ,"dev"] 

