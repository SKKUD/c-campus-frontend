FROM node:18.16.1-alpine

WORKDIR /app
COPY package.json /app/
COPY package-lock.json /app/

RUN apk update && apk add bash
RUN npm install
COPY . /app/
RUN npm run build
RUN npm install -g serve

CMD ["serve", "-s", "build", "-l", "3000"]

