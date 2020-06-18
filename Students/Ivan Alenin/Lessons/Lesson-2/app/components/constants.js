module.exports = {
    vars: [
        {name: 'Орел', value: '0'},
        {name: 'Решка', value: '1'}
    ],
    result: {
        loose: 'Не угадали!',
        win: 'Верно!'
    },
    questions: {
        type: 'list',
        name: 'try',
        message: "Давай играть! '/n' Орел или решка?",
        choices: module.exports.vars
    }
};
