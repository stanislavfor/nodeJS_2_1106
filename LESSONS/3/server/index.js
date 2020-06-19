const express = require('express')

const server = express()
server.use(express.json())

// server.get('/', (req, res) => {
//     res.write('<h1>Hello</h1>');
//     res.end();
// })

// server.get('/json', (req, res) => {
//     res.json({a: 1, b: 2})
// });

server.use('/', express.static('./public'));

server.post('/', (req, res) => {
    let str = req.body.text;
    str = 'Server has received: ' + str;

    res.json({ answer: str })
})

server.listen(8080, () => {
    console.log('server at 8080')
})

// const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.url == '/') {
//         res.write('Main page');
//         res.end();
//     }

//     if (req.url == '/notmain') {
//         res.write('<h1>Not main</h1>');
//         res.end();
//     }
// });

// server.listen(8080);