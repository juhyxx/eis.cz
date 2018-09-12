FROM node:6

EXPOSE 3333
WORKDIR  /usr/src/app
COPY . /usr/src/app
RUN yarn install

CMD ["yarn", "run", "start"]