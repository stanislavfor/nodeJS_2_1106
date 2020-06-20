const prompt = require('prompt');
const ansi = require('./utils/colorizer');
const dictionary = require('./utils/dictionary');
const generatorNumber = require('./components/generator');
const checkNumber = require('./components/checkNumber');
const logger = require('./utils/logger');

const properties = [
    {
      name: "player",
      validator: /[0-9]{4}/,
      warning: "Что-то у тебя не получилось, наверное промахнулся(",
      required: true,
    },
];
let number = generatorNumber();
let guess = 0;
console.log(number);

prompt.start();
ansi(dictionary.hello, 'hello');
game();

function game() {
    prompt.get(properties, (err, result) => {
        if (err) {
            return onErr();
        }

        const player = result.player;

        let check = checkNumber(player, number);

        if (check[0]) {
            guess++;
            ansi(dictionary.win + '\n' + dictionary.guess + guess, 'win');
            logger(player, number, guess);
        } else {
            guess++;
            ansi(dictionary.bulls + check[1] + '\n' + dictionary.cows + check[2], 'next');
            game();
        };
    })
};

function onErr(err) {
    console.log(err);
    return 1;
};