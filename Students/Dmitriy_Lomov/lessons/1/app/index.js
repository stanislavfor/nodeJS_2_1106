
const inputRadio = require("./components/radioInput");
const checker = require("./components/checker");
const colorText = require("./utils/colorizer");
const logger = require("./utils/logger");
const units = require("./utils/units");

let game = () => {
  let user, pc;
  inputRadio()
    .then((userVariant) => {
      user = userVariant;
    })
    .then(() => {
      pc = Math.floor(Math.random() * 3) + 1;
    })
    .then(() => {
      let { text, check } = checker(user, pc, units);
      colorText(text, "alert");
      logger(check);
    });
};

game();

//1 - взять вариант пользователя
//2 - сгенерировать вариант компьютера
//3 - проверить
//4 - записать в лог

const inputRadio = require('./components/radioInput')
const checker = require('./components/checker')
const colorText = require('./utils/colorizer')
const logger = require('./utils/logger')

let units = {
    '1': 'Rock',
    '2': 'Scissors',
    '3': 'Paper'
};

let game = () => {
    let user, pc
    inputRadio()
        .then(userVariant => { user = userVariant })
        .then(() => {
            pc = Math.floor(Math.random() * 3) + 1;
        })
        .then(() => {
            let { text, check } = checker(user, pc, units);
            colorText(text, 'alert');
            logger(check);
        })
}

game();

