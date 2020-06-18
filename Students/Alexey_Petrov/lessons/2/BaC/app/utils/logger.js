const filehantler = require('./fileHandler')
const moment = require('moment')

module.exports = (data) =>{
    let {bulls, cows, winner,turns} = data;
    let file = './app/logs/log.txt'

    let logItem = `
    \n
    *** ROUND ${turns}; ***
    Bulls: ${bulls};     Cows: ${cows}; 
    Status: ${winner};
    time: ${moment().format('MMM DD YYYY, hh:mm:ss')};
      *** END ***
    `
    filehantler(file, logItem);
}