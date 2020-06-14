const readline = require('readline');
const game = require('./components/game');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
  
rl.question('Ваш выбор: 1 - камень, 2 - ножницы, 3 - бумага\n', (answer) => {
    game(+answer);
    rl.close();
});