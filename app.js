// jshint esversion: 7

const express = require('express');
const app = express();


app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
 res.sendFile(__dirname + '/signup.html');
});

app.listen(3000, () => {
  console.log(`Listening port 3000 now.`);
});