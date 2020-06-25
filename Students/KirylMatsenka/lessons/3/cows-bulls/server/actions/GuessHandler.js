const AnswerService = require('../components/AnswerService')
const GameService = require('../components/GameService')
const GameCounter = require('../components/GameCounter')

module.exports = class GuessHandler {
    static handle(req, res, number) {
        if (!req.body.answer) {
            res.status = 400
            res.send({message: 'Нужен ответ'})
            return
        }

        let answer = new AnswerService(req.body.answer)
        
        if (!answer.validate()) {
            res.status(400) 
            res.send({message: 'Вы должны ввести 4 цифры'})
            return
        }

        let game = new GameService(number.numArray, answer.answerAsArray)

        GameCounter.counter++

        let data = {
            number: number,
            message: game.messageClient(), 
            userWon: game.userWon(), 
            counter: GameCounter.counter
        }

        res.send(data)
    }
}