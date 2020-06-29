const filehandler = require('./fileHandler')

module.exports = (data) => {
    let { time, isWin, secretNumber, attempts } = data;
    let file = './log.txt'
    console.log(data)
    let logItem = `${time}\tРезультат: ${isWin? 'Выиграл':'Проиграл'}\tЗагаданное число: ${secretNumber}\tПопыток использовано: ${attempts}\n`
    filehandler.readAndWrite(file, logItem);
    console.log('logger');
}