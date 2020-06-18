const fileHandler = require('./fileHandler')
const moment = require('moment')

module.exports = (user,cows,bulls,status) => {
    let file = './app/logs/log.txt'

    let logItem = `
    \n
        *** ROUND ***\n
        User enters: ${user};\n
        Cows: ${cows};\n
        Bulls: ${bulls};\n
        Status: ${status};\n
        time: ${moment().format('NNNN DD YYYY, hh:mm:ss')}\n

    `
    fileHandler.readAndWrite(file,logItem)
}