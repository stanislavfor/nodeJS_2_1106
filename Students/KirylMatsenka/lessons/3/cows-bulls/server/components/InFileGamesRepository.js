module.exports = class InFileGamesRepository {
    constructor(fs, json) {
        this.fs = fs
        this.json = json
    }

    save(game) {
        let games = this.getGames()
        
        games[this.generateId()] = game

        this.fs.writeFile(this.json, JSON.stringify(games), function(e) {
            if (e) {
                console.log(e)
                return false
            }
        })

        return true
    }
    
    getGames() {
        let rawData = this.fs.readFileSync(this.json)
        return JSON.parse(rawData)
    }

    generateId() {
        return Date.now()
    }
    
}