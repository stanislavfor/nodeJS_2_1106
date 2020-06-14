let ansi = require('ansi');
let cursor = ansi(process.stdout);

module.exports = function (userChoice) {
  if (userChoice <= 3 && userChoice >= 1) {
    let computerChoice = Math.floor(Math.random() * Math.floor(3)) + 1;
    cursor.blue().write(`Ваш выбор: ${userChoice}, мой выбор = ${computerChoice} `).reset();
    let result = userChoice - computerChoice;
    if (result === 0) {
        cursor.green().write("Ничья").reset();
    } else if (result == -1 || result == 2) {
        cursor.red().write("Ты выиграл!").reset();
    } else {
        cursor.red().write("Ты проиграл!").reset();
    }
  } else {
    cursor.yellow().write(`Такого варианта не существует`).reset();
  }
};
