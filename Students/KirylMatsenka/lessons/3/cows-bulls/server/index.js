const express = require('express')
const fallback = require('express-history-api-fallback')
const GuessHandler = require('./actions/GuessHandler')
const Number = require('./components/Number')
const GameCounter = require('./components/GameCounter')

const app = express ()

app.use (express.json ())
app.use ('/', express.static ('dist'))
app.use('/api/games', require('./routes/games'))
app.use (fallback ('index.html', { root: 'dist' }))

app.post('/generate', (req, res) => {
    Number.generateNew()
    res.send(JSON.stringify({message: 'Число заново сгенерировано'}))
})

app.post('/guess', (req, res) => {    
    res.send(GuessHandler.handle(req, res, Number, GameCounter))
})

app.listen (8080, () => {
    console.log ('should work')
})