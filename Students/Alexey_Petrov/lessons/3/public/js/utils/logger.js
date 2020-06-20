function logger(item) {
    fetch('/', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({text: item})
       
    })
    .then(data => console.log(data))
}




// const filehantler = require('./fileHandler')
// const moment = require('moment')

// module.exports = (data) =>{
//     let {bulls, cows, winner,turns} = data;
//     let file = './app/logs/log.txt'

//     let logItem = `
//     \n
//     *** ROUND ${turns}; ***
//     Bulls: ${bulls};     Cows: ${cows}; 
//     Status: ${winner};
//     time: ${moment().format('MMM DD YYYY, hh:mm:ss')};
//       *** END ***
//     `
//     filehantler(file, logItem);
// }