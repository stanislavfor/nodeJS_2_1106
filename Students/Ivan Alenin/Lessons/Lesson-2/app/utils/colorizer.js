const ansi = require('ansi')
const cursor = ansi(process.stdout)

module.exports = (text, type) => {
    if (type == 'alert') {
        cursor.black().bg.green().write(text).reset().write('\n')
    } else if (type == 'err') {
        cursor.white().bg.red().write(text).reset().write('\n')
    }
}