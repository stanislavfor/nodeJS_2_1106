const express = require('express');
const fs = require('fs');
const logger = require('./utils/logger');
const fh = require('./utils/fileHandler');

const server = express();
server.use(express.json());
//server.use('/', express.static('./server'))
server.get('/log/', (req, res) => {
    // console.log('getlog');
    // let result = fh.read('./log.txt');
    // console.log(result)
    fs.readFile('./log.txt', 'utf-8', (err, data) => {
        if (!err) {
            res.send(data);
        }
    })
});
server.post('/log/', (req, res) => {
    logger(req.body);
    res.send('ok');
});

server.listen(8080, () => {
    console.log('server at 8080')
});
