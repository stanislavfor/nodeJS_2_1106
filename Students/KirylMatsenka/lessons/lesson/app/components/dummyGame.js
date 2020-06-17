let readline = require('readline');
let generator = require('./generator');
let colorizer = require('./colorText');

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let t1 = {
    text: 'Вы выиграли',
    colorText: 'green'
}

let t2 = {
    text: 'Вы проиграли',
    colorText: 'red'
}

module.exports = function () {
    rl.question('Выберите камень: 1, ножницы: 2, бумага: 3\n', (answer) => {  
        if (generator() === +answer) {
            colorizer(t1)
        } else {
            colorizer(t2)
        }
        rl.close();
      });
}
