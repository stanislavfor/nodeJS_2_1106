class GameUtil {
    makeMessage(data) {
        return `
            Игра: ${new Date()}\n
            ${data}
        `
    }
}

module.exports = new GameUtil()