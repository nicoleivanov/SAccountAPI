FROM mhart/alpine-node:9.2

WORKDIR /usr/app
COPY . .

RUN yarn install
# RUN yarn build

EXPOSE 7000
CMD node ./src/index.js