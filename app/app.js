const express = require('express');
const ColourLovers = require('./ColourLovers');
const GeneralTrivia = require('./GeneralTrivia');

const app = express();

const morgan = require('morgan');
app.use(morgan('dev'));

app.get('/api/general', (request, response) => {
  const triviaBot = new GeneralTrivia();
  triviaBot.getGeneralQuestion().then((triviaData) => {
    response.status(200).send(triviaData);
  });
});

app.get('/api/colors', (request, response) => {
  const colorBot = new ColourLovers();
  colorBot.getColors().then((colorData) => {
    response.status(200).send(colorData);
  });
});


module.exports = app;
