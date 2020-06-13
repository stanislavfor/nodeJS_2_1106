const game = require('./components/game');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Выберите: (1)Камень, (2)Ножницы, (3)Бумага \n =>', (answer) => {
    game(answer);
    rl.close();
});