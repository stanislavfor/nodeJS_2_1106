const readline = require("readline-sync");

module.exports = (max, attempt) => {
  return new Promise((resolve, reject) => {
    resolve(
      readline.questionInt(
        `Attempt ${attempt}. Input number from 1 to ${max}: `
      )
    );
  });
};
