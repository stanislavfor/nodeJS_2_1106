module.exports = function() {
    const readline = require('readline-sync');

    let result = parseInt(readline.question("?"));
    while(result < 0 || result > 3) {
        console.log('Введи 1, 2 или 3');
        result = parseInt(readline.question("?"));
    }
    return parseInt(result);    
}