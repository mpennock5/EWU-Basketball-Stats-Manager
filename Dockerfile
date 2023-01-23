FROM node:16-alpine
RUN apk update && apk add git
WORKDIR /usr/server/app

COPY package.json .
RUN npm install
COPY . .
RUN npm run build
ENV NODE_ENV=production
CMD ["yarn", "run" ,"dev"] 

