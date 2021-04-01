// jshint esversion: 7

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.write(`<h1>This is my Newsletter!</h1>`);
  res.send();
});

app.listen(3000, () => {
  console.log(`Listening port 3000 now.`);
});