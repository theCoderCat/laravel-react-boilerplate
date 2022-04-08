FROM node:16
WORKDIR /app
COPY ./src/package.json /app
RUN npm install
COPY ./src /app
RUN npm run prod
EXPOSE 80