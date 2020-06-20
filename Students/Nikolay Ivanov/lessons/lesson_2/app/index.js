// 1 - сгенерировать четырёхзначное число с неповторяющимися цифрами
// 2 - получить от пользователя ответ
// 3 - проверить ответ
// 4 - выдать результат
// 5 - если пользователь не угадал число, вернуться на пункт 2

const getSecretNumber = require('./components/secretNumber');
const input = require('./components/input');
const check = require('./components/check');

let answer = {
    cows: 0,
    bulls: 0
};

const game = () => {
    console.log('Игра "Быки и Коровы".');
    const secretNumber = getSecretNumber();
    while(answer.bulls != 4) {
        let yourNumber = input();
        answer = check(yourNumber, secretNumber);
        console.log(`Быки: ${answer.bulls} Коровы: ${answer.cows}`);
    }
    console.log('Это правильный ответ!!!');
}

game();