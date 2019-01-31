FROM node:alpine
RUN mkdir /practice_docker
WORKDIR /practice_docker
COPY package.json /practice_docker
RUN npm i --quiet
COPY . /practice_docker
EXPOSE 3000
CMD ["npm", "start"]