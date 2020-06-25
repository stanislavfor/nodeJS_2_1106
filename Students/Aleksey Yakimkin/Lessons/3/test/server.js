const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
// const history = require('connect-history-api-fallback');
const path = require('path');

const app = express();

const staticFile = express.static(path.join(__dirname + '/front'));
app.use(bodyParser.json());
app.use(staticFile);
// app.use(history());
// app.use(staticFile);

app.get('/api/log', (req, res) => {
    fs.readFile('./data/log.json', 'utf-8', (err, data) => {
        res.send(data);
    });
});

app.post('/api/log', (req, res) => {
    fs.readFile('./data/log.json', 'utf-8', (err, data) => {
        const logArr = JSON.parse(data);
        const logItem = req.body;
        console.log(req.body);
        logArr.push(logItem);
        fs.writeFile('./data/log.json', JSON.stringify(logArr), (err) => {
        // fs.writeFile('./data/log.json', JSON.stringify(req.bod), (err) => {
            if (err) {
                res.status(500).send();
                return;
            }
            res.send(logArr);
        });
    });
})

app.listen(3000, () => {
    console.log("server is running on port 3000");
});
