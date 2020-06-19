const readline = require('readline');
const game = require('./components/game');
const generate = require('./components/generator');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let quest = 'Быки и коровы\nЗагадано 4-х значное число\n';
const number = Array();
for (let i = 0; i < 4; i++) {
    let num = generate();
    while (number.indexOf(num) !== -1) {
        num = generate();
    }
    number.push(num);
}
//console.log(number);
function ask(q) {
    rl.question(q, (answer) => {
        if (game(answer,number) === true) {
            rl.close();
            return true;
        } else {
            quest = game(answer,number);
            ask(quest);
        }
    });
}

ask(quest);