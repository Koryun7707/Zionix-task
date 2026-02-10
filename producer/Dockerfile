FROM node:20-alpine

WORKDIR /app

COPY producer/package*.json ./
RUN npm install

COPY producer/ .
COPY proto/ ../proto/

RUN npm run build

CMD ["node", "dist/main.js"]
