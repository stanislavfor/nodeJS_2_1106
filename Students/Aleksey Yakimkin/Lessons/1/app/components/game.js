const readline = require('readline');

let colorizer = require("./colorText")

let textPresets = require("../assets/presets")

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
            resetStyleEnter()
            //finish = true
        }
    //}
    textPresets.bgYellow.text = `*** game over ***`
    colorizer(textPresets.bgYellow)
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
}