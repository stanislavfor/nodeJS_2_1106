let fs = require("fs");
let moment = require("moment");
let writer = require("./writer");
let fileUrl = "./server/logs/logs.json";

module.exports = async (inputData) => {
  await fs.readFile(fileUrl, "utf-8", (err, data) => {
    try {
      if (!err) {
        const { guess, attempt, rounds, gameStatus } = inputData;
        let resultText;

        if (!gameStatus) {
          resultText = "Player WIN";
        } else {
          resultText = "Player lose.";
        }

        const log = {
          guessedNumber: guess,
          userAttempt: attempt,
          roundsLeft: rounds,
          gameStatus: resultText,
          time: moment().format("DD MM YYYY, h:mm:ss"),
        };

        const logs = !data || data.length === 0 ? [] : JSON.parse(data);

        logs.push(log);

        writer(fileUrl, logs);

        return true;
      }
    } catch (err) {
      console.log(err);
      return false;
    }
  });
};
