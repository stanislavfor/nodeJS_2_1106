let ansi = require('ansi');
let cursor = ansi(process.stdout);

module.exports = function(player) {
    let options = {
        1: 'Камень',
        2: 'Бумага',
        3: 'Ножницы'
    };
    let win;
    let bot = Math.floor(Math.random() * (4 - 1) + 1);

    if (player < 4 && player > 0) {
        if ((player == 1 && bot == 3) || (player == 2 && bot == 1) || (player == 3 && bot == 2)) {
            win = 'Ты выйграл!!!';
        } else if (player == bot) {
            win = 'Ничья';
        } else {
            win = 'Бот тебя обыграл =)))';
        };
        console.log(`${'Ты выбросил: ' + options[player]}`)
        console.log(`${cursor.black().bg.red().write('Бот выкидывает > ' + options[bot] + '\n' + 'Итог: ' + win).reset()}`);
     } else {
         console.log('Введеные тобою число даже близко не подходит');
     };
};