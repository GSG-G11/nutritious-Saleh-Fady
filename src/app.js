const express = require('express');
const { fruitesRouter, searchRouter } = require('./routes');
const { notFound, serverError } = require('./controllers');

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/getFruites', fruitesRouter);
app.use('/search', searchRouter);
app.use(notFound);
app.use(serverError);
module.exports = app;
