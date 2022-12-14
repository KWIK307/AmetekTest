FROM node:16-alpine

RUN mkdir /app
WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 9876

RUN npm ci

CMD ["node", "dist/index.js"]


