FROM node:21-alpine

WORKDIR /todo

COPY public/ /todo/public/
COPY src/ /todo/src/
COPY package.json /todo/

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
