let ansi = require('ansi');

module.exports = function(par) {
    let cursor = ansi(process.stdout);
    if (!par.colorBg) {
        return `${cursor[par.colorText]().write(par.text + '\n').reset()}`;
    } else if (!par.colorText) {
        return `${cursor.black().bg[par.colorBg]().write(par.text + '\n').reset()}\n`;
    } else if (!par.colorBg, !par.colorText) {
        return `${cursor.write(par.text + '\n').reset()}\n`;
    } else {
        return `${cursor[par.colorText]().bg[par.colorBg]().write(par.text + '\n').reset()}`;
    }
}
