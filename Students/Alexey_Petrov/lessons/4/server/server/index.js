let express = require('express');
let fs = require('fs');

let writer = require('./Utils/writer');
let logger = require('./Utils/logger');


let server = express();
server.use(express.json()); //popozje


server.post('/game', (req, res) => {
logger(req.body);
});
server.get('/game', (req, res) => {
    fs.readFile('./server/db/logger.json', 'utf-8', (err, data) => {
        if (!err) {
            res.send(data);
        }
    })
});



server.listen(8080, () => {
    console.log('Server is running at port 8080')
});