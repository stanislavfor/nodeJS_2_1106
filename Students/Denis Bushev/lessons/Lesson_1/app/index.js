let game = require('./components/game');
let readline = require('readline');

let r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('Выберите один из вариантов: \n 1: Камень \n 2: Бумага \n 3: Ножницы \n > ', (answer) => {
    game(answer);
    r1.close();
});