FROM node:18-alpine

ENV HIGHCHARTS_SERVER_PORT = 4001
WORKDIR /app

COPY package*.json ./

RUN npm install lodash

RUN npm install

COPY . .

EXPOSE 4001

CMD ["node", "index.js"]