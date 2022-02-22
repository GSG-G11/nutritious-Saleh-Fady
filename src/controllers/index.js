const getFruites = require('./getFruites');
const searchFruits = require('./searchFruits');
const notFound = require('./404');
const serverError = require('./serverError');

module.exports = {
  getFruites,
  searchFruits,
  notFound,
  serverError,
};
