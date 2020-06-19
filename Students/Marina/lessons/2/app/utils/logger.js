const fh = require("./fileHandler");
const moment = require("moment");

module.exports = (pc, attempts, win) => {
  let file = "./app/logs/log.txt";
  let result = win ? `выиграл c ${attempts.length} попытки` : 'проиграл';
  let logItem = `
    *** start ${moment().format("DD.MM.YYYY hh:mm:ss")} ***
    Загаданное число: ${pc}
    Пользователь ${result}
    ************** end **************
    `;
  fh.readAndWrite(file, logItem);
};
