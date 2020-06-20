const readline = require('readline');
const game = require('./components/game');
const generate = require('./components/generator');
const checkInput = require('./components/checker');
const log = require('./utils/logger');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let quest = 'Быки и коровы\nЗагадано 4-х значное число\n';
let attempts = 1;
const number = Array();

for (let i = 0; i < 4; i++) {
    let num = generate();
    while (number.indexOf(num) !== -1) {
        num = generate();
    }
    number.push(num);
}

console.log(number);
// прошу прощения, что сделано через рекурсиюю вы на неё ругались.
// не хватает времени переделать ¯\_(ツ)_ /¯
function ask(q) {
    rl.question(q, (answer) => {
        // проверка ввода
        if (!checkInput(answer)) {
            rl.question('Некорректный ввод! Хотите выйти? y/n\n', (ans) => {
                if (ans === 'y') {
                    log(number, attempts, false);
                    rl.close();
                } else ask('Угадайте 4-х значное число\n');
            });
        }
        // проверка ответа
        if (game(answer, number) === true) {
            log(number, attempts);
            rl.close();
        } else {
            attempts++;
            quest = game(answer,number);
            ask(quest);
        }
    });
}

// запуск игры
ask(quest);