// A place to store the sensitive informations.

const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  key: process.env.API_KEY,
  listID: process.env.LIST_ID
};