const readline = require('readline');


let colorizer = require("./colorText")

let textPresets = require("../assets/presets")

let http = require("http")
let colorizer = require("./colorText")

let textError = {
    text: "",
    colorText: 'black',
    colorBg: 'red',
}
let textRedYell = {
    text: "",
    colorText: 'yellow',
    colorBg: 'red',
}
let textBlue = {
    text: "",
    colorText: 'black',
    colorBg:'blue'
}
let bgYellow = {
    text: "",
    colorText: 'black',
    colorBg:'yellow'
}
let textYellow = {
    text: "",
    colorText: 'yellow',
    colorBg:'black'
}
let textStandart = {
    text: "",
}

let variants = ["Камень", "Ножницы", "Бумага"]

//function getTextFromCommandLine(){
module.exports = function(){
    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

    rl.question('0-камень, 1-ножницы, 2-бумага, 3-выход\n', (variant) => {
    // TODO: Log the answer in a database
    gameMain(variant)

    rl.close();
    });
}

//Камень ножницы бумага через цикл While
function gameMain(variant){
    //let finish = false

    //while(!finish){
        let robotVarian = randomize()
        //let variant = +prompt("0-камень, 1-ножницы, 2-бумага, 3-выход")
        if(variants[variant] !== undefined && variant != null){
            findOut(robotVarian, variant, variants)
        }else{

            textPresets.textYellow.text = `Exit`
            colorizer(textPresets.textYellow)
            textYellow.text = `Exit`
            colorizer(textYellow)

            resetStyleEnter()
            //finish = true
        }
    //}

    textPresets.bgYellow.text = `*** game over ***`
    colorizer(textPresets.bgYellow)

    bgYellow.text = `*** game over ***`
    colorizer(bgYellow)

    resetStyleEnter()

}

//Сравниваем вводы
function findOut(robotVarian, variant, variants){
    //0 - камень
    //1 - ножницы
    //2 - бумага
    textBlue.text = `Робот ${variants[robotVarian]}`
    colorizer(textBlue)

    textPresets.textStandart.text = ` : `
    colorizer(textPresets.textStandart)

    textStandart.text = ` : `
    colorizer(textStandart)


    textRedYell.text = `Игрок ${variants[variant]}`
    colorizer(textRedYell)

    resetStyleEnter()

    if(robotVarian == 0 && variant==0 || robotVarian == 1 && variant==1 || robotVarian == 2 && variant==2){

        textPresets.textStandart.text = `Результат: Ничья`
        colorizer(textPresets.textStandart)
    }else if(robotVarian == 0 && variant==1 || robotVarian == 1 && variant==2 || robotVarian == 2 && variant==0){
        textPresets.textError.text = `Результат: Игрок проиграл!`
        colorizer(textPresets.textError)
    }else if(robotVarian == 0 && variant==2 || robotVarian == 1 && variant==0 || robotVarian == 2 && variant==1){
        textPresets.textYello.text = `Результат: Игрок выиграл!`
        colorizer(textPresets.textYello)

        textStandart.text = `Результат: Ничья`
        colorizer(textStandart)
    }else if(robotVarian == 0 && variant==1 || robotVarian == 1 && variant==2 || robotVarian == 2 && variant==0){
        textError.text = `Результат: Игрок проиграл!`
        colorizer(textError)
    }else if(robotVarian == 0 && variant==2 || robotVarian == 1 && variant==0 || robotVarian == 2 && variant==1){
        textYellow.text = `Результат: Игрок выиграл!`
        colorizer(textYellow)

    }
    resetStyleEnter()
}

//Генерируется случайное число 0 1 2
function randomize(){
    return Math.floor (Math.random() * 3)
}

function resetStyleEnter() {
    //reset

    textPresets.textStandart.text = `\n`
    colorizer(textPresets.textStandart)

    textStandart.text = `\n`
    colorizer(textStandart)
}