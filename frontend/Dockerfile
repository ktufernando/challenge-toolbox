FROM node:16-alpine

WORKDIR /app

ADD . /app

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]