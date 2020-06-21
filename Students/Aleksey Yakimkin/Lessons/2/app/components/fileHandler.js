const fs = require('fs')
const ansi = require('./colorText2')

module.exports = {
    read(file, data) {
        fs.readFile (file, 'utf-8', (err,data) => !err ? data : err)
    },
    async readAndWrite(file,data) {
        try {
            let logs = await this.read(file)
            logs += data;

            fs.writeFile(file,logs, err => {err ? ansi.print('error', 'Err!') : "" })

            //fs.writeFile(file,logs, err => {!err ? ansi.print('alert','\nLog updated\n') : ansi.print('error', 'Err!')})
        }catch(err) {
            console.log(err)
        }
    }
}