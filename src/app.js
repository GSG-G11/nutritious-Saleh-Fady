const express = require('express');
const { fruitesRouter , searchRouter} = require('./routes');

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/getFruites', fruitesRouter);
app.use('/search', searchRouter);
module.exports = app;
