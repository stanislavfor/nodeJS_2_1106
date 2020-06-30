const fs = require('fs')

module.exports = {
    read(file) {
        let logs = fs.readFileSync (file, 'utf-8');
        return logs;
    },
    readAndWrite(file, data) {
            let logs;
            fs.readFile (file, 'utf-8', (err, d) => {
                if (!err) {
                    logs = d
                    logs += data;
                    fs.writeFile(file, logs, err => { console.log(err) })
                } else {
                    console.log('cant read file');
                }
            });
            console.log('readAndWrite');
    }
}