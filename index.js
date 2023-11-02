const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello world! I am in digital ocean now');
});
const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});