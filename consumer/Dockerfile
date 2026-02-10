FROM node:20-alpine

WORKDIR /app

COPY consumer/package*.json ./
RUN npm install

COPY consumer/ .
COPY proto/ ../proto/

RUN npm run build

CMD ["node", "dist/main.js"]
