const items = {
  1: "Камень",
  2: "Ножницы",
  3: "Бумага"
};

module.exports = function (num) {
  if (num <= 3 && num >= 1) {
    let pc = Math.floor(Math.random() * Math.floor(3)) + 1;
    let result = num - pc;
    let winner = "Ничья!";

    if (result == -1 || result == 2) winner = "Вы победили!";
    else if (result !== 0) winner = "Вы проиграли!";

    console.log('Вы выбрали: ' + items[num] + ', у компьютера: ' + items[pc] + '. ' + winner);
  } else {
    console.log('Некорректный ввод');
  }
};