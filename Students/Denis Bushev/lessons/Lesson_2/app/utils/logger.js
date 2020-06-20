const fileHandler = require('./fileHandler');
const moment = require('moment');

module.exports = (player, number, guess) => {
    let file = './app/logs/log.txt';

    let logItem = `
        ***ROUND*** \n
            player: ${player}, \n
            number: ${number}, \n
            guess: ${guess}, \n
            time: ${moment().format('MMMM DD YYYY, hh:mm:ss')}; \n
        ***END***
    `
    fileHandler.readAndWrite(file, logItem);
};