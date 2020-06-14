const ansi = require('ansi');
const inquirer = require('inquirer');
const pcTry = require('../components/pc');
const check = require('../components/checker');

cursor = ansi(process.stdout);

let vars = [
{name:'Камень', value: '1'},
{name:'Ножницы', value: '2'},
{name:'Бумага', value: '3'}
];

let result = {
    '-1': 'Вы проиграли',
    '0': 'Ничья',
    '1': 'Вы выиграли'
}

var questions = [{
    type: 'list',
    name: 'try',
    message: "Давай играть! '/n' Камень? Ножницы? Бумага?",
    choices: vars
}]

let user, pc

inquirer.prompt(questions)
    .then(answers => { user = answers['try']})
    .then(() => {pc = pcTry()})
    .then(() => {
    console.log(`You: ${user}, PC: ${pc}, result: ${check(user,  pc)}`)
    console.log(`You: ${vars[user-1].name}, PC: ${vars[pc-1].name}, result: ${result[check(user,  pc)]}`)
    });
