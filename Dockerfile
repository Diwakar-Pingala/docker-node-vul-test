FROM node:22.3-bullseye-slim
WORKDIR /app
ADD package*.json ./
RUN npm install
ADD . .
CMD node index.js