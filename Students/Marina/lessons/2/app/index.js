const input = require("./components/textInput");
const checker = require("./components/checker");
const logger = require("./utils/logger");
const generator = require("./components/generator");

let game = async function (max_number, max_attempts) {
  let pc = generator(max_number),
    win = false,
    attempts = [];

  console.log(
    `Компьютер загадал число. Угадай его. У тебя ${max_attempts} попытки.`
  );
  while (!win && attempts.length < max_attempts) {
    await input(max_number, attempts.length + 1).then((text) => {
      attempts.push(text);
      if (checker(text, pc)) {
        console.log("Ты угадал");
        win = true;
      } else {
        console.log("Не верно");
      }
    });
  }
  logger(pc, attempts, win);
};

game(10, 3);
