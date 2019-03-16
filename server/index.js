const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');

const router = require('./router');

const server = express();

const port = 3000;

server.use(morgan('dev'));
server.use(bodyParser.json());

server.use('/', express.static(path.join(__dirname, '/../client/dist')));

// server.get('/name', (req, res) => {
//   res.send('Yongsoo');
// });

server.use('/api', router);

server.listen(port, () => console.log(`Connected to port ${port}!`));
