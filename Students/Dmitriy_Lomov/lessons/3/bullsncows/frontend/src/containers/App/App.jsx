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
      attempts: [],
      bulls: 0,
      cows: 0,
      rounds: 10,
      gameStatus: true,
    };
  }

  initGame = () => {
    const guessNumber = randomizer();

    this.setState({
      guess: guessNumber,
      attempts: [],
      bulls: 0,
      cows: 0,
      rounds: 10,
      gameStatus: true,
    });
  };

  checkAttempt = async (bulls, cows, value) => {
    const { rounds, attempts } = this.state;
    const isWin = checker(bulls, rounds);

    await this.setState((state) => {
      return {
        gameStatus: isWin,
        attempts: [...attempts, { attempt: value, bulls: bulls, cows: cows }],
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
    const { guess, attempts, rounds, gameStatus } = this.state;

    return fetch("/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ guess, attempts, rounds, gameStatus }),
    }).then((d) => d.json());
  };

  render() {
    const { guess, attempts, bulls, cows, gameStatus, rounds } = this.state;

    return (
      <div className="container">
        <Header initGame={this.initGame} guess={guess} />
        <GameStatus
          guess={guess}
          attempts={attempts}
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
