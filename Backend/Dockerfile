FROM node:17-alpine

ENV PORT=4000

ENV DB=mongodb+srv://prabashwara65:kl1CXRBERZ2M9kb4@cluster0.yggo8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

RUN npm install -g nodemon

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4000

CMD [ "npm"  , "start"]