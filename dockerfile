FROM node:9.0.0

ENV HOME=/home/app

COPY package.json package-lock.json yarn.lock $HOME/area016/

WORKDIR $HOME/area016

RUN npm install --silent --progress=false

COPY . $HOME/area016

CMD ["npm run", "dev"]