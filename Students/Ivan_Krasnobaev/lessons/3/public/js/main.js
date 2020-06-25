const answers = document.getElementById('answers');
const enter = document.getElementById('enter');
const withdraw = document.getElementById('withdraw');
const input = document.getElementById('inp');
const repeat = document.getElementById('repeat');
let attempts = 0;
let number = getNumber();

repeat.hidden = true;

console.log(number);

enter.addEventListener('click', function () {
    let p = document.createElement("p");

    p.innerText = checkInput(input.value) ? checkAnswer(input.value, number) : "Некорректный ввод";

    if (!checkInput(input.value)) p.innerText = "Некорректный ввод";
    else if (checkAnswer(input.value, number) !== true) {
        attempts++;
        p.innerText = checkAnswer(input.value, number);
    }
    else {
        attempts++;
        p.innerText = "Правильно! Загаданное число " + input.value;
        showHide([input, enter, withdraw, repeat]);
        log({ num: number, att: attempts, win: true });
    }
    answers.appendChild(p);
    answers.scroll(0, 9999);
    input.value = "";
});

withdraw.addEventListener('click', function () {
    showHide([input, enter, withdraw, repeat]);
    log({ num: number, att: attempts, win: false });
});

repeat.addEventListener('click', function () {
    answers.innerText = '';
    showHide([input, enter, withdraw, repeat]);
    number = getNumber();
    attempts = 0;
    console.log(number);
});


// прошу прощения, что сделано через рекурсиюю вы на неё ругались.
// не хватает времени переделать ¯\_(ツ)_ /¯
// function ask(q) {
//     rl.question(q, (answer) => {
//         // проверка ввода
//         if (!checkInput(answer)) {
//             rl.question('Некорректный ввод! Хотите выйти? y/n\n', (ans) => {
//                 if (ans === 'y') {
//                     log(number, attempts, false);
//                     rl.close();
//                 } else ask('Угадайте 4-х значное число\n');
//             });
//         }
//         // проверка ответа
//         if (game(answer, number) === true) {
//             log(number, attempts);
//             rl.close();
//         } else {
//             attempts++;
//             quest = game(answer,number);
//             ask(quest);
//         }
//     });
// }

// // запуск игры
// ask(quest);