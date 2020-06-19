const Radio = require('prompt-radio')

const checker = require('./components/checker')
const logger = require('./components/logger')


let units = {
    '1': 'Rock',
    '2': 'Scissors',
    '3': 'Paper'
};

const prompt = new Radio({
        name: 'Rock, Scissors, Paper',
        message: 'Select down from the list',
        type: 'radio',       
        choices: ['Rock', 'Scissors', 'Paper']
    });


let user, pc;

prompt.run()
    .then(answer => { user = answer })
    .then(() => { pc = units[Math.floor(Math.random() * 3) + 1] })
    .then(() => {
        let { text, check } = checker(user, pc);
        console.log('\x1b[36m%s\x1b[0m', text);
        logger(check);
    });


