#build stage
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install --f

COPY . .

EXPOSE 3000

CMD [ "npm","run","start:dev" ]