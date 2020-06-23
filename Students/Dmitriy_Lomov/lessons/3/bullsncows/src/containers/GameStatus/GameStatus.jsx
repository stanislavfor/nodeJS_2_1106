import React from "react";
import Statistics from "../../components/Statistics";
import ResultsView from "../../components/ResultsView";

export default function GameStatus({
  attempt,
  gameStatus,
  rounds,
  bulls,
  cows,
  initGame,
  showModal,
}) {
  if (gameStatus && rounds > 0) {
    return (
      <Statistics bulls={bulls} cows={cows} rounds={rounds} attempt={attempt} />
    );
  } else {
    return (
      <ResultsView
        initGame={initGame}
        showModal={showModal}
        checkWinner={rounds > 0 ? true : false}
      />
    );
  }
}
