const fetch = require('node-fetch');

const searchFruits = (req, res) => {
  const fruitName = req.body.name;
  const obj = {};
  fetch(`https://www.fruityvice.com/api/fruit/${fruitName}`)
    .then((response) => response.json())
    .then((data) => (obj.data = data))
    .then((resp) => {
      if (resp.name) {
        fetch(
          `https://api.codetabs.com/v1/proxy/?quest=https://imsea.herokuapp.com/api/10?q=${resp.name}`
        )
          .then((response) => response.json())
          .then((imageData) => {
            obj.image = imageData.results[0];
            res.send(obj);
          });
      } else {
        res.send(obj);
      }
    })
    .catch((err) => {
      res.status(404).send(err);
    });
};
module.exports = searchFruits;
