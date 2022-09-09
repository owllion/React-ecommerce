FROM node:lts-alpine as build

WORKDIR /app

COPY package*.json ./
RUN  npm install --legacy-peer-deps --omit=dev

COPY  . .

RUN npm run build

EXPOSE 5000

CMD ["npm","run","start"]

