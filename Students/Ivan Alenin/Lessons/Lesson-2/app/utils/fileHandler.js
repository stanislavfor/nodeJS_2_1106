const fs = require('fs');
const ansi = require('./colorizer');

module.exports = {
    read(file) {
        fs.readFile(file, 'utf-8', (err, data) => !err ? data : err);
    },
    readAndWrite(file, data) {

        let logs;
        fs.readFile(file, 'utf-8', (err, d) => {
            if (!err) {
                logs = d;
                logs += data;
                logs += '\n'
                fs.writeFile(file, logs, err => { !err ? ansi('Log updated', 'alert') : ansi('Err!', 'error'); });
            }
        });


    }
};