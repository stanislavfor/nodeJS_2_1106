const fs = require('fs')


module.exports = {
    read(file) {
        fs.readFile (file, 'utf-8', (err, data) => !err ? data : err)
    },
    readAndWrite(file, data) {

            let logs
            fs.readFile (file, 'utf-8', (err, d) => {
                if (!err) {
                    logs = d
                    logs += data;
                    fs.writeFile(file, logs, err => { !err ? console.log('\x1b[36m%s\x1b[0m', 'Log updated') : console.log('\x1b[36m%s\x1b[0m', 'Err!') })
                }
            })
            

    }
}