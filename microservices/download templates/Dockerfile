FROM node:18-alpine

ENV CREATE_CHART_SERVER_PORT = 4002
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4002

CMD ["node", "index.js"]