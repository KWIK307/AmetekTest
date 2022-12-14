FROM node:16-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . ./

EXPOSE 9876

RUN npm run build

CMD ["node", "dist/index.js"]

