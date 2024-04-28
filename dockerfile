FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build-dev
EXPOSE 5000
CMD ["npm", "run", "start:dev"]