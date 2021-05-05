FROM node:14-alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY index.js ./

RUN yarn install

EXPOSE 80
CMD ["node", "index.js"]
