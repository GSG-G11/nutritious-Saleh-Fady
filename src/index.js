const app = require('./app');

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`the server runing on http://localhost:${port} .....`);
});
