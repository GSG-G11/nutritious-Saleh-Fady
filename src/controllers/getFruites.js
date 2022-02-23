const fetch = require('node-fetch');

const getFruites = (req, res) => {
  fetch('https://www.fruityvice.com/api/fruit/all')
    .then((response) => response.json())
    .then((data) => data.slice(5, 12))
    .then((data) => {
      res.send(data);
    })
    .catch((err) => res.status(404).send(err));
};

module.exports = getFruites;
