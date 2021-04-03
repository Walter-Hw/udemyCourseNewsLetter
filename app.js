const express = require('express');
const https = require('https');
const { key } = require('./config');
const { listID } = require('./config');

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
 res.sendFile(__dirname + '/signup.html');
});

app.post('/', (req, res) => {

  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  const data = {
    members: [
      {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  };

  const jsonData = JSON.stringify(data);

  const url = `https://us1.api.mailchimp.com/3.0/lists/${listID}`;
  const options = {
    method: 'POST',
    auth: `walter:${key}`
  };

  const request = https.request(url, options, (response) => {

    if (response.statusCode === 200) {
      res.sendFile(__dirname + '/success.html');
    } else {
      res.sendFile(__dirname + '/failure.html');
    }
    response.on('data', (data) => {
      console.log(JSON.parse(data));
    });
  });
  
  //request.write(jsonData);
  request.end();

});

app.post('/failure', (req, res) => {
  res.redirect('/');
});

app.listen(process.env.PORT = 3000, () => {
  console.log(`Listening port 3000 now.`);
});
