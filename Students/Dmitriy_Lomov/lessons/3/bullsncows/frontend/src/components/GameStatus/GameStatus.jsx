import React from "react";
import Statistics from "../Statistics";
import ResultsView from "../ResultsView";

export default function GameStatus({
  attempts,
  gameStatus,
  rounds,
  bulls,
  cows,
  initGame,
  showModal,
  guess,
}) {
  if (gameStatus && rounds > 0) {
    return (
      <Statistics
        bulls={bulls}
        cows={cows}
        rounds={rounds}
        attempts={attempts}
      />
    );
  } else {
    return (
      <ResultsView
        initGame={initGame}
        guess={guess}
        showModal={showModal}
        checkWinner={rounds > 0 ? true : false}
      />
    );
  }
}
