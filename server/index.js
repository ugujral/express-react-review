const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');

const server = express();

const port = 3000;

server.use(morgan('dev'));
server.use(bodyParser.json());

server.listen(port, () => console.log(`Connected to port ${port}!`));
