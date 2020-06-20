const fileHandler = require("./fileHandler");
const moment = require("moment");

module.exports = (user, pc, round, bulls, cows) => {
  let file = "./app/logs/log.txt";

  let logItem = `
    \n
        *** ROUND ***
        User: ${user}; \n
        Pc: ${pc}; \n
        Bulls: ${bulls}; \n
        Cows: ${cows}; \n
        Round: ${round}; \n
        time: ${moment().format("MMMM DD YYYY, hh:mm:ss")}; \n
        *** END ***
    `;
  fileHandler(file, logItem);
};
