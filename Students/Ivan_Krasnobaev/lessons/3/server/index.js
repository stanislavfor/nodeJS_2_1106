const express = require('express');
const log = require('./utils/logger');

const server = express();
server.use(express.json());

server.use('/', express.static('./public'));

server.post('/', (req, res) => {
  console.log(req.body);
  log(req.body.num, req.body.att, req.body.win);

  //res.json({ answer: str });
});

server.listen(8080, () => {
  console.log('server at 8080');
});