const rls = require('readline-sync')
const dayjs = require('dayjs')

const { generator, check_repeats, check_result } = require('./functions')
const { RESET, BRIGHT, RED, GREEN, YELLOW } = require('./ansi_styles.js')
const { read_logs, write_logs } = require('./logger.js')
const { ENG, RUS } = require('./game_strings.js')

let TEXT = ENG

module.exports = class Game {
  constructor (difficulty = 4) {
    this.secret = ''
    this.hardness = difficulty // тут решаем сколько символов надо отгадывать
    this.turns = 0
    this.player_text = null
    this.debug = true
    this.isEnglish = true
    this.stats = []
    
    this._init(true)
  }

  _init (first) {
    console.clear();
    if (first) {
      this._splashScreen();
    }
    this.menu();
  }

  _splashScreen () {
    console.clear();
    console.log(
      '\n', BRIGHT, TEXT.GAMENAME, RESET, '\n\n',
      YELLOW + TEXT.RULES + RESET, '\n',
      TEXT.RULE1, '\n\n',
      TEXT.RULE2, '\n',
      TEXT.RULE3, '\n'
    );

    rls.keyInPause(TEXT.PRESSSPACE, {guide: false});
  }

  menu () {
    console.clear();
    console.log('\n', BRIGHT, YELLOW, TEXT.MENU_TEXT, RESET);
    const select = rls.keyInSelect([
      TEXT.MENU_PLAY,
      TEXT.MENU_DIFF.replace('%HARDNESS', YELLOW + this.hardness + RESET),
      TEXT.MENU_LANG.replace('%CURRENT', YELLOW + (this.isEnglish ? 'ENG' : 'RUS') + RESET),
      TEXT.MENU_SHOWSTATS,
      TEXT.MENU_CLEARSTATS,
      TEXT.EXIT
    ], TEXT.YOUR_CHOICE, { cancel: false });
    
    if (select === 0) this.play();
    else if (select === 1) this.set_difficulty();
    else if (select === 2) this.set_language();
    else if (select === 3) this.printStats();
    else if (select === 4) this.clearStats();
    else if (select > 4) this.exit();
  }

  play () {
    console.clear();
    this.game_reset();
    this.player_turn();
    this.afterGameMenu();
  }

  set_difficulty (key) {
    console.clear();
    console.log(
      '\n', BRIGHT, TEXT.DIFFICULTY_TEXT, RESET, '\n\n',
      `[${YELLOW}1${RESET}] <-- --> [${YELLOW}2${RESET}] ${TEXT.ACCEPT}: [${YELLOW + TEXT.SPACE + RESET}]\n\n`
    );
    while (true) {
      console.log('   \x1B[1A\x1B[K|' + GREEN + BRIGHT +
        (new Array(this.hardness + 1)).join('==') + RESET +
        (new Array(10 - this.hardness + 1)).join('..') + '| ' + YELLOW + this.hardness + RESET
      );
      
      key = rls.keyIn('', {hideEchoBack: true, mask: '', limit: '12 '});

      if (key === '1' && this.hardness > 1) this.hardness--;
      else if (key === '2' && this.hardness < 10) this.hardness++;
      else if (key === ' ') break; 
    }
    return this.menu();
  }

  set_language() {
    this.isEnglish = !this.isEnglish
    TEXT = this.isEnglish ? ENG : RUS;
    return this.menu();
  }
  
  game_reset () {
    this.secret = generator(this.hardness);
    console.log(BRIGHT + RED + 'DEBUG:' + RESET, 
      this.debug ? TEXT.DEBUG_TEXT.replace('%CODE', YELLOW + this.secret + RESET) : '',
    );
    this.turns = 0;
  }

  player_turn (text = '') {
    let input = rls.question((text ? text : TEXT.SOLVE_TEXT + '\n').replace('%X', YELLOW + this.hardness + RESET));
    this.turns++;

    if (input === '') {
      console.log(TEXT.SURRENDER
        .replace('%TURNS', GREEN + this.turns + RESET)
        .replace('%SECRET', YELLOW + this.secret + RESET)
      );
      write_logs({ date: dayjs().format('DD/MM/YYYY HH:mm:ss'), win: 0, turns: this.turns, secret: this.secret });
      return
    }

    if (input != null && input.length == this.hardness && !check_repeats(input)) {
      const { win, bulls, cows } = check_result(input, this.secret);
        if (win) {
          console.log(
            BRIGHT + GREEN + TEXT.WIN_TEXT1.replace('%SECRET', YELLOW + this.secret + GREEN), RESET + '\n' +
            TEXT.WIN_TEXT2.replace('%TURNS', YELLOW + this.turns + RESET)
          );
          write_logs({ date: dayjs().format('DD/MM/YYYY HH:mm:ss'), win, turns: this.turns, secret: this.secret });
        } else {
          this.player_turn(
            TEXT.SOLVE_TURN
              .replace('%INPUT', GREEN + BRIGHT + input + RESET)
              .replace('%BULLS', YELLOW + bulls + RESET)
              .replace('%COWS', YELLOW + cows + RESET)
            + '\n'
          );
        }
    } else {
      this.player_turn(TEXT.SOLVE_ERROR + '\n');
    }
  }

  printStats () {
    let stats = read_logs();
    let wins = 0, loses = 0, winrate, games = '';
    console.clear();
    console.log(BRIGHT, TEXT.STATS, RESET);

    if (stats.length) {
      stats.forEach(stat => {
        stat.win ? wins++ : loses++;
        games += stat.date + ' - ' + BRIGHT + (stat.win ? GREEN + TEXT.WIN : RED + TEXT.LOSE) + RESET + ' - ' + 
          TEXT.STAT_TEXT
            .replace('%SECRET', YELLOW + stat.secret + RESET)
            .replace('%TURNS', YELLOW + stat.turns + RESET)
            .replace('%HARDNESS', YELLOW + stat.secret.length + RESET + '\n')
      });
  
      winrate = (wins / (wins + loses) * 100).toFixed(0);
      console.log(
        TEXT.STATS_SUMMARY
          .replace('%ALL', YELLOW + (wins+loses) + RESET)
          .replace('%WINS', GREEN + wins + RESET)
          .replace('%WINRATE', GREEN + winrate + '%' + RESET)
          .replace('%LOSES', RED + loses + RESET)
        + '\n' + games + '\n'
      );
    } else {
      console.log(TEXT.NO_STATS);
    }

    rls.keyInPause(TEXT.PRESSSPACE, {guide: false});
    return this.menu();
  }

  clearStats () {
    write_logs();
    console.clear();
    console.log(YELLOW + TEXT.STATS_IS_CLEAR + RESET + '\n');
    rls.keyInPause(TEXT.PRESSSPACE, {guide: false});
    return this.menu();
  }

  afterGameMenu () {
    if (rls.keyInYNStrict(BRIGHT + TEXT.PLAY_AGAIN + RESET)) {
      return this.play();
    } else {
      return this.menu();
    }
  }

  exit () {
    console.log('\n', YELLOW, BRIGHT, TEXT.GAME, TEXT.EXIT, RESET, '\n');
  }
}
