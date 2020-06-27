const ansi = require('ansi');
const cursor = ansi(process.stdout);

module.exports = (text, type) => {
    if (type == 'alert') {
        cursor.black().bg.green().write(text).write('\n').reset();
    } else if (type == 'err') {
        cursor.white().bg.red().write(text).write('\n').reset();
    } else if (type == 'win') {
        cursor.black().bg.blue().write(text).write('\n').reset();
    } else if (type == 'next') {
        cursor.black().bg.magenta().write(text).write('\n').reset();
    } else if (type == 'hello') {
        cursor.black().bg.grey().write(text).write('\n').reset();
    }
};