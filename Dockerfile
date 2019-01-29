FROM node:8
RUN mkdir /practice_docker
WORKDIR /practice_docker
COPY package.json /practice_docker
RUN npm i
COPY . /practice_docker
EXPOSE 3000
CMD ["npm", "start"]