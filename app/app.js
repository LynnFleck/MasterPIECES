const express = require('express');
const GeneralTrivia = require('./GeneralTrivia');
const AnimalTrivia = require('./AnimalTrivia');

const app = express();

const morgan = require('morgan');
app.use(morgan('dev'));

app.get('/api/general', (request, response) => {
  const triviaBot = new GeneralTrivia();
  triviaBot.getGeneralQuestion().then((triviaData) => {
    response.status(200).send(triviaData);
  });
});

app.get('/api/animals', (request, response) => {
  const triviaBot = new AnimalTrivia();
  triviaBot.getAnimalQuestion().then((triviaData) => {
    response.status(200).send(triviaData);
  });
});


module.exports = app;
