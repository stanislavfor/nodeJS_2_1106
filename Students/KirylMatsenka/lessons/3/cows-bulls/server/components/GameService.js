module.exports = class GameService {
    constructor(number, answer) {
        this.cows = this.getCows(number, answer)
        this.bulls = this.getBulls(number, answer)
    }

    getCows(number, answer) {
        let cows = 0
        answer.forEach((answerNum, index) => {
            if (number.find((element, i) => answerNum == element && index != i)) {
                cows++
            }
        })
        return cows
    }

    getBulls(number, answer) {
        let bulls = 0
        answer.forEach((answerNum, index) => {
            if (number.find((element, i) => answerNum == element && index == i)) {
                bulls++
            }
        })
        return bulls
    }

    userWon() {
        return this.bulls == 4
    }

    messageClient() {
        return `Коровы: ${this.cows} Быки: ${this.bulls}`
    }

    messageConsole() {
        return `Коровы: ${this.cows}\nБыки: ${this.bulls}`
    }
}