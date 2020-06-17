const ansi = require('ansi');
const novar = require('./components/novar');
const check = require('./components/checked');

const cursor = ansi(process.stdout);
const strChoice = ['Камень','Ножницы','Бумага']
cursor.write('Игра камень, ножницы, бумага.' + '\n');
cursor.write('Ваш выбор: 1 - камень, 2 - ножницы, 3 - бумага, 0 - закончить' + '\n');

let choice = novar();

while(choice != 0) {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    cursor.write(`Компьютер: ${strChoice[computerChoice-1]} Вы: ${strChoice[choice-1]}` + '\n');
    cursor.write(check(choice, computerChoice) + '\n');

    choice = novar();
}