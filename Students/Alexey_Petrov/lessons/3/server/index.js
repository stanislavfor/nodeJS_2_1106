const express = require('express');
const server = express();
server.use(express.json());

// server.get('/', (reg, res)=>{
//     res.write('<h1>Hello!</h1>');
//     res.end();
// })

// server.get('/json', (reg, res) =>{
//     res.json({a: 1, b: 2});
// })
server.use('/', express.static('./public'));

server.post('/', (req, res) => {
    let str = req.body.text;
    str = 'Server has received: ' + str;
    res.json({ answer: str })
})

server.listen(8080, () => {
    console.log('server at 8080');
})