let fs = require('fs');
let writer = require('./writer');
let fileUrl = './server/db/logger.json';
let moment = require('moment');

module.exports = (itemName) => {
    fs.readFile(fileUrl, 'utf-8', (err, data) => {
        if (!err) {
            let log = JSON.stringify({
                time: moment().format('DD MM YYYY, h:mm:ss'),
                item: itemName
            }, null, ' ');

            let logs = JSON.parse(data);
            logs.push(log);
            writer(fileUrl, logs);
        }
    })
}