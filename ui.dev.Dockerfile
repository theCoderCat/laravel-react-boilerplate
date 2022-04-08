FROM node:16
WORKDIR /app
COPY ./src/package.json /app
RUN npm install
COPY ./src /app
EXPOSE 80
CMD npm run watch-poll