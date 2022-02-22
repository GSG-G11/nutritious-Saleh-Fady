const fetch = require('node-fetch');

const getFruites = (req, res) => {
  fetch('https://www.fruityvice.com/api/fruit/all')
    .then((response) => response.json())
    .then((data) => data.splice(0, 6))
    .then((data) => {
      res.send(data);
    });
};

module.exports = getFruites;
