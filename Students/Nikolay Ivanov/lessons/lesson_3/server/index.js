const express = require('express')

const server = express();
server.use(express.json());
//server.use('/', express.static('./server'))
server.post('/', (req, res) => {
    // let str = req.body.text;
    // str = 'Server has received: ' + str;

    res.json({ answer: 'test' })
});
server.get('/', (req, res) => {
    let str = req.body.text;
    str = 'Server has received: ' + str;

    res.json({ answer: str })
});

server.listen(0, () => {
    console.log('server at 8080')
});
