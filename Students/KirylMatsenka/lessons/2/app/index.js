const number = require('../components/Number')
const readline = require('readline')
const gameCounter = require('../components/GameCounter')
const fs = require('fs')
const loggerClass = require('../components/Logger')
const logger = new loggerClass('./logs/logs', fs)
const answerService = require('../components/AnswerService')
const gameService = require('../components/GameService')
const gameUtil = require('../components/utils/GameUtil')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.write('Поиграем в игру, вводите 4 цифры\n')
rl.write('Жми q чтобы выйти\n')

rl.on('line', input => {
    if(input == 'q') {
        logger.log(
            gameUtil.makeMessage(`Дизертир сдался.\nКолличество попыток: ${gameCounter.counter}\n`)
                )
        rl.close()
    }

    let answer = new answerService(input) 
    
    if(!answer.validate()) {
        console.log('4 цифры должно быть')
    } else {
        let game = new gameService(number.numArray, answer.answerAsArray)
        gameCounter.counter++

        console.log (game.messageConsole())

        if(game.userWon()) {
            console.log('Ура победа')

            logger.log(
                gameUtil.makeMessage(`Победа!!!\nКолличество попыток: ${gameCounter.counter}\n`)
                    )
            rl.close()
        }
    }

}).on('close', () => {
    console.log('Пока')
})