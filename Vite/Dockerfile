FROM node:22.20.0
WORKDIR /code
COPY package.json /code/package.json
COPY package-lock.json /code/package-lock.json
RUN npm install
RUN npm install -g serve
COPY . /code
RUN npm run build
EXPOSE 3000
CMD [ "serve", "-s", "dist" ]