const fileHandler = require('./fileHandler');
const moment = require('moment');
const  path = require('path')

module.exports = (data) => {
    let {user, win} = data;
    let time = moment().format('MM DD YYYY, hh:mm:ss');
    let file = path.resolve(__dirname, 'log.txt');
    console.log(file);

    let logItem = {user, win, time}
        // `game:{user: ${user},
        //     win: ${win},
        //     time: ${moment().format('MM DD YYYY, hh:mm:ss')},
        //     }`;
    // console.log(logItem, fileHandler);

    fileHandler.readAndWrite(file, JSON.stringify(logItem));
};