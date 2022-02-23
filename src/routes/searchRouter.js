const searchRouter = require('express').Router();
const { searchFruits } = require('../controllers');

searchRouter.post('/', searchFruits);

module.exports = searchRouter;
