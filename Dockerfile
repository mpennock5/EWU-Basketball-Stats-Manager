FROM node:16-alpine
RUN apk update && apk add git
WORKDIR /app

COPY package.json .
RUN npm update
RUN yarn
COPY . .
CMD ["yarn", "run" ,"dev"] 

