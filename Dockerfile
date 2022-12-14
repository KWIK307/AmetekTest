FROM node:16-alpine

RUN mkdir /app
WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 9876

CMD ["node", "dist/index.js"]


