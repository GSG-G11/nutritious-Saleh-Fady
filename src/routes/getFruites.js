const fruitesRouter = require('express').Router();
const { getFruites } = require('../controllers');

fruitesRouter.get('/', getFruites);

module.exports = fruitesRouter;
