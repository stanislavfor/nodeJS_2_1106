const {InputUsernum} = require('./components/inputNumber')
const checker = require('./components/checker')
const colorText = require('./utils/colorizer')
const logger = require('./utils/logger')
const getNum = require('./utils/getNum')
var clear = require('clear');
let turns = 10;
//let resultGame ={};
let pc = getNum();

let gameRaund = () => {
    InputUsernum([`Осталось ${turns} попыток. Введи число ?`]).then((d) => {
        let {
            check,
            text
        } = checker(d, pc, turns--);
    //  console.table(resultGame = {...resultGame, [turns] : {text}});
        colorText(text, 'alert');
        logger(check);
        check.winner == 'game' ? gameRaund() : console.log('game over');
    })
}
let game = () => { 
    console.log('Подсказка', pc.toString());
    gameRaund();
}
clear();
game();