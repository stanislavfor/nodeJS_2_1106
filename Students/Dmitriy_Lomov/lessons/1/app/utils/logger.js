const filehandler = require('./fileHandler')
const moment = require('moment')

module.exports = (data) => {
    let { user, pc, winner } = data;
    let file = './app/logs/log.txt'

    let logItem = `
    \n
        *** ROUND ***
        User: ${user}; \n
        Pc: ${pc}; \n
        Winner: ${winner}; \n
        time: ${moment().format('MMMM DD YYYY, hh:mm:ss')}; \n
        *** END ***
    `
    filehandler.readAndWrite(file, logItem);
}