module.exports = function() {
    const readline = require('readline-sync');

    let result = parseInt(readline.question("?"));
    while(result < 0 || result > 3) {
        console.log('Выбрал что-то не то...');
        result = parseInt(readline.question("?"));
    }
    return parseInt(result);    
}