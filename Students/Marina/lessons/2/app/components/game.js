const input = require("./textInput");
const checker = require("./checker");
const logger = require("../utils/logger");
const generator = require("./generator");

module.exports = async function (max_number, max_attempts) {
  let pc = generator(max_number),
    win = false,
    attempts = [];

  console.log(
    `Компьютер загадал число от 1 до ${max_number}. Угадай его. У тебя ${max_attempts} попытки.`
  );
  while (!win && attempts.length < max_attempts) {
    await input(max_number, attempts.length + 1)
          .then((text) => {
            attempts.push(text);
            if (checker(text, pc)) {
              console.log("Ты угадал");
              win = true;
            } else {
              console.log("Не верно");
            }
          });
  }
  if (!win) {
      console.log(`Увы... ты проиграл. Загаданное число: ${pc}`);
  }
  logger(pc, attempts, win);
};