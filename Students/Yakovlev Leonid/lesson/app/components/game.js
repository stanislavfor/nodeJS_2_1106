let ansi = require('ansi');

let cursor = ansi(process.stdout);

let obj = {
    t1: 'Камень',
    t2: 'Ножницы',
    t3: 'Бумага'
}

const choiceOfThePerson = function (obj) {
    let keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
};

const choosingComputer = function (obj) {
    let keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
};

let choice1 = choiceOfThePerson(obj);

const colorizeAnswerPerson = () => {    
    if (choice1 === "Камень") {
        return `${cursor.black().bg.red().write("Твой выбор: " + choice1 + '\n').reset()}`;
    }else if (choice1 === "Бумага") {
        return `${cursor.black().bg.blue().write("Твой выбор: " + choice1 + '\n').reset()}`;
    }else if (choice1 === "Ножницы") {
        return `${cursor.black().bg.yellow().write("Твой выбор: " + choice1 + '\n').reset()}`;
    }
}

colorizeAnswerPerson();

let choice2 = choosingComputer(obj);

const colorizeAnswerComputer = () => {    
    if (choice2 === "Камень") {
        return `${cursor.black().bg.red().write("Выбор компьютера: " + choice2 + '\n').reset()}`;
    }else if (choice2 === "Бумага") {
        return `${cursor.black().bg.blue().write("Выбор компьютера: " + choice2 + '\n').reset()}`;
    }else if (choice2 === "Ножницы") {
        return `${cursor.black().bg.yellow().write("Выбор компьютера: " + choice2 + '\n').reset()}`;
    }
}

colorizeAnswerComputer();

const complete = (choice1, choice2) => {
    if (choice1 === choice2) {
        return `${cursor.black().bg.yellow().write("Никто не победил!" + '\n').reset()}`;
      }else if (choice1 === "Камень") {
        if (choice2 === "Ножницы") {
            return `${cursor.black().bg.yellow().write("Камень победил!" + '\n').reset()}`;
        }
        else {
            return `${cursor.black().bg.yellow().write("Бумага победила!" + '\n').reset()}`;
        }
    }else if (choice1 === "Бумага") {
        if (choice2 === "Камень") {
            return `${cursor.black().bg.yellow().write("Бумага победила!" + '\n').reset()}`;
        }
        else {
          return `${cursor.black().bg.yellow().write("Ножницы победили!" + '\n').reset()}`;
        }
    }else if (choice1 === "Ножницы") {
        if (choice2 === "Бумага") {
            return `${cursor.black().bg.yellow().write("Ножницы победили!" + '\n').reset()}`;
        }
        else {
             return `${cursor.black().bg.yellow().write("Камень победил!" + '\n').reset()}`;
        }
    }    
}

complete(choice1, choice2);





