const fetch = require('node-fetch');

const getFruites = (req, res) => {
  fetch('https://www.fruityvice.com/api/fruit/all')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      res.send(data);
    });
};

module.exports = getFruites;
