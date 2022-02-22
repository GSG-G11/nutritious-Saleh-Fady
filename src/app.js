const express = require('express');
const { fruitesRouter } = require('./routes');

const app = express();
app.use(express.static('public'));

app.use('/getFruites', fruitesRouter);

module.exports = app;
