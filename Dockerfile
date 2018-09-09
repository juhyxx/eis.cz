FROM node:6

WORKDIR  /usr/src/app
COPY . /usr/src/app
RUN yarn install
EXPOSE 3333
CMD yarn start