'use strict'

require('dotenv').config();

const verifyEnv = require("./middleware/verifyEnv");

verifyEnv();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser')

const expressServer = express();
expressServer.use(express.urlencoded({ extended: true }));
expressServer.use(cookieParser());
expressServer.use(express.json());
expressServer.use(cors());
expressServer.use(morgan('common'));

require('./routes/auth.routes')(expressServer);
require('./routes/user.routes')(expressServer);
  
// set port, listen for requests
expressServer.listen(process.env.MY_PORT, () => {
    console.log(`Server is running on port ${process.env.MY_PORT}.`);
});