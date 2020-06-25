let express = require('express')
let router = express.Router()
const InFileGamesRepository = require('../components/InFileGamesRepository')
const fs = require('fs')

let GamesRepository = new InFileGamesRepository(fs, 'server/db/db.json')

router.get('/', (req, res) => {
    let games = GamesRepository.getGames()
    res.json(games)
})

router.post('/', (req, res) => {
    let game = {
        game: (new Date()).toString(),
        message: req.body.message,
    } 

    if (GamesRepository.save(game)) {
        res.send(JSON.stringify({message: 'ok'}))
    } else {
        res.status = 500
        res.send(JSON.stringify({message: 'Ошибка сервера'}))
    }
})
module.exports = router