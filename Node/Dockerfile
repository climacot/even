FROM node:22.20.0
WORKDIR /code
COPY package.json /code/package.json
COPY package-lock.json /code/package-lock.json
RUN npm install
COPY . /code
RUN npm run build
EXPOSE 4000
CMD ["npm", "run", "start"]