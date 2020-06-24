module.exports = class AnswerService {
    constructor(answer) {
        this.answer = this.getNums(answer)
        this.answerAsArray = [...this.answer]
    }

    getNums(answer) {
        return answer.replace(/[^0-9,.]+/g, '') 
    }

    validate() {
        return this.answer.length == 4
    }
}