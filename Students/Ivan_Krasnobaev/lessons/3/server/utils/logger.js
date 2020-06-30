const fh = require("./fileHandler");
const moment = require("moment");

module.exports = (num, att, win = true) => {
  const file = "./server/logs/logs.json";
  const number = num.toString().replace(/\,/g, '');
  const result = win ? `выиграл c ${att} попытки` : 'проиграл';
  const log = {
    end: moment().format("DD.MMMM.YYYY HH:mm:ss"),
    number: number,
    result: result
  };
  const data = fh.rewrite(file, log);
};