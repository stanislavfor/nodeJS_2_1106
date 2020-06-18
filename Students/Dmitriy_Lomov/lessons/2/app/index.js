const prompt = require("prompt");
const randomizer = require("./utils/randomizer");
const colorizer = require("./utils/colorizer");
const logger = require("./utils/logger");

let pcNum = randomizer();
console.log(pcNum);

const properties = [
  {
    name: "userAttempt",
    validator: /\b\d{4}\b/,
    warning: "Введите четырёхзначное число",
    required: true,
  },
];
prompt.start();

game();

let rounds = 10;

function game() {
  prompt.get(properties, (err, result) => {
    if (err) {
      return onErr(err);
    }
    
    let bulls = 0;
    let cows = 0;

    const attempt = [...result.userAttempt];

    for (var i = 0; i < 4; i++) {
      if (+attempt[i] === pcNum[i]) {
        bulls++;
      } else if (pcNum.indexOf(+attempt[i]) >= 0) {
        cows++;
      }
    }

    colorizer(`Твой вариант ${attempt}`, "attempt");
    colorizer(`Быков - ${bulls}`, "bulls");
    colorizer(`Коров - ${cows}`, "cows");

    logger(attempt, pcNum, rounds, bulls, cows);

    if (bulls !== 4 && rounds !== 0) {
      colorizer(`У тебя осталось ${rounds--} попыток`, "rounds");
      game();
    } else if (rounds === 0) {
      colorizer("You lose! :(", "lose");
    } else {
      colorizer("YOU WIN!!!", "winner");
    }
  });
}

function onErr(err) {
  console.log(err);
  return 1;
}
