const filehandler = require("./fileHandler");
const units = require("./units");
const moment = require("moment");

module.exports = (data) => {
  let { user, pc, winner } = data;
  let file = "./app/logs/log.txt";

  let logItem = `
    \n
        *** ROUND ***
        User: ${units[user]}; \n
        Pc: ${units[pc]}; \n
        Winner: ${winner}; \n
        time: ${moment().format("MMMM DD YYYY, hh:mm:ss")}; \n
        *** END ***
    `;
  filehandler.readAndWrite(file, logItem);
};
