import React, { Component } from "react";

import Header from "../../components/Header";
import GameStatus from "../../components/GameStatus";
import MainView from "../../components/MainView";

import randomizer from "../../utils/randomizer";
import checker from "../../utils/checker";

class App extends Component {
  constructor() {
    super();
    this.state = {
      guess: [],
      attempt: [],
      bulls: 0,
      cows: 0,
      rounds: 5,
      gameStatus: true,
    };
  }

  initGame = () => {
    const guessNumber = randomizer();

    this.setState({
      guess: guessNumber,
      attempt: [],
      bulls: 0,
      cows: 0,
      rounds: 5,
      gameStatus: true,
    });
  };

  checkAttempt = async (bulls, cows, value) => {
    const { rounds } = this.state;
    const isWin = checker(bulls, rounds);

    await this.setState((state) => {
      return {
        gameStatus: isWin,
        attempt: value,
        bulls: bulls,
        cows: cows,
        rounds: state.rounds - 1,
      };
    });

    if (!isWin || rounds === 1) {
      this.postLog();
    }
  };

  postLog = () => {
    const { guess, attempt, rounds, gameStatus } = this.state;

    return fetch("/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ guess, attempt, rounds, gameStatus }),
    }).then((d) => d.json());
  };

  render() {
    const { guess, attempt, bulls, cows, gameStatus, rounds } = this.state;

    return (
      <div className="container">
        <Header initGame={this.initGame} guess={guess} />
        <GameStatus
          attempt={attempt}
          bulls={bulls}
          cows={cows}
          gameStatus={gameStatus}
          rounds={rounds}
          initGame={this.initGame}
          showModal={!gameStatus || rounds === 0 ? true : false}
        />
        <MainView guess={guess} checkAttempt={this.checkAttempt} />
      </div>
    );
  }
}

export default App;
