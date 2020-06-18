let ansi = require('ansi');
let cursor = ansi(process.stdout);

// cursor.green().write('Green text').reset();
// cursor.yellow().write('Yellow text').reset();
// cursor.black().bg.blue().write('Red text').reset();

module.exports = function(par) {
    let cursor = ansi(process.stdout);
    if (!par.colorBg) {
        return `${cursor[par.colorText]().write(par.text + '\n').reset()}`;
    } else if (!par.colorText) {
        return `${cursor.black().bg[par.colorBg]().write(par.text + '\n').reset()}`;
    } else if (!par.colorBg, !par.colorText) {
        return `${cursor.write(par.text + '\n').reset()}`;
    } else {
        return `${cursor[par.colorText]().bg[par.colorBg]().write(par.text + '\n').reset()}`;
    }
}