FROM node:14
WORKDIR /app
COPY package*.json .
RUN npm install
RUN npm install express
COPY . /app
EXPOSE 8081
CMD ["node", "studregnode.js"]
