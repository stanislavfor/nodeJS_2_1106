const readline = require('readline');
const InputUsernum = function(vote) {
    return new Promise(async resolve => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(vote, (answer) => {
            rl.close();
            resolve(answer);
        });
    })
}
module.exports = {
    InputUsernum
}