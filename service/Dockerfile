FROM node:10.16.0-alpine
RUN mkdir -p /app/config /app/src
WORKDIR /app
ADD package*.json ./
COPY tsconfig.json /app/tsconfig.json
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm install
COPY . /app
CMD [ "npm", "run", "start" ]