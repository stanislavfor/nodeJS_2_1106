const fh = require("./fileHandler");
const moment = require("moment");

module.exports = (num, att, win = true) => {
  let file = "./hw/logs/log.txt";
  let number = num.toString().replace(/\,/g, '');
  let result = win ? `выиграл c ${att} попытки` : 'сдался';
  let logItem = `
    *** start ${moment().format("DD.MMMM.YYYY hh:mm:ss")} ***
    Загаданное число: ${number}
    Пользователь ${result}
    ************** end **************
    `;
  fh.readAndWrite(file, logItem);
};