// const readline = require('readline')
const rls = require('readline-sync')
const { ROCK, SCISSORS, PAPER, TEXT } = require('./game_constants.js')
const { RESET, BRIGHT, UNDERSCORE, RED, GREEN, YELLOW } = require('./ansi_styles.js')

module.exports = class Game {
  constructor () {
    this.stats = []
    this._init(true)
  }

  _init (first) {
    console.clear()
    if (first) {
      console.log(YELLOW, BRIGHT, TEXT.GAME, TEXT.GAMENAME, RESET)
    }
    this.play()
  }

  play () {
    let turn = rls.keyInSelect([...TEXT.ALL, TEXT.EXIT], TEXT.YOUR_CHOICE, { cancel: false })

    if (turn >= 3) return this.exit()
    
    this.printText('\n',TEXT.YOU_CHOSEN, GREEN, TEXT[turn])
    this.printText(TEXT.GAME, UNDERSCORE, TEXT.COMP_THINKING)

    setTimeout(() => {
      let compTurn = this.computerTurn()
      let result = this.checkResult(turn, compTurn)
      this.saveStats(result, turn, compTurn)

      this.afterGameMenu()
    }, 1000)
  }
  
  checkResult (playerTurn, npcTurn) {
    if (playerTurn === npcTurn) {
      console.log(TEXT.GAME, BRIGHT,  TEXT.TIE, RESET)
      return -1
    }
    let win = (playerTurn === ROCK && npcTurn === SCISSORS)
      || (playerTurn === SCISSORS && npcTurn === PAPER)
      || (playerTurn === PAPER && npcTurn === ROCK)
    console.log(TEXT.GAME, BRIGHT,  win ? `${GREEN + TEXT.WIN }` : `${RED + TEXT.LOSE }`, RESET)
    return win
  }

  saveStats (result, playerTurn, npcTurn) {
    this.stats.push({result, playerTurn, npcTurn})
  }

  printText (...args) {
    console.log(...args, RESET, '\n')
  }

  printStats () {
    console.clear()
    this.printText(BRIGHT, TEXT.STATS)
    this.stats.forEach((stat, index) => {
      this.printText(TEXT.STAT_PHRASE
        .replace('%NUM', index + 1)
        .replace('%RESULT', stat.result === -1 ? TEXT.TIE : stat.result ? TEXT.WIN : TEXT.LOSE )
        .replace('%PLAYER', TEXT[stat.playerTurn])
        .replace('%COMP', TEXT[stat.npcTurn])
      )
    })
  }

  computerTurn () {
    let figure = ~~(Math.random() * 3)
    this.printText(TEXT.COMP_CHOSEN, YELLOW, TEXT[figure])
    return figure
  }

  afterGameMenu () {
    let select = rls.keyInSelect([TEXT.PLAY_AGAIN, TEXT.SHOW_STATS, TEXT.EXIT], TEXT.YOUR_CHOICE, { cancel: false })

    if (select === 2) return this.exit()

    if (!select) return this._init()
      
      // ИНАЧЕ показываем статистику
    this.printStats()

    if (rls.keyInYNStrict(BRIGHT + TEXT.PLAY_AGAIN + RESET)) {
      return this._init()
    } else {
      return this.exit()
    }
  }

  exit () {
    this.printText('\n', YELLOW, BRIGHT, TEXT.GAME, TEXT.EXIT)
  }
}
