'use strict'

require('dotenv').config();

const verifyEnv = require("./middleware/verifyEnv");

verifyEnv();

const db = require("./models");

db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
  initial();
});

function initial() {
  // add more init code here as needed
}