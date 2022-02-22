const path = require('path');

const serverError = (err, req, res, next) => {
  const file = path.join(__dirname, '..', '..', 'public/html/500.html');
  res.status(500).sendFile(file);
};
module.exports = serverError;
