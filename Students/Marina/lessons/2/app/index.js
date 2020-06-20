const game = require("./components/game");
const minimist = require("minimist");

let argv = minimist(process.argv.slice(2), {
  alias: { number: "n", attempts: "a" },
});
let max_number = typeof argv.number === "number" && argv.number > 1 ? argv.number : 10;
let max_attempts = typeof argv.attempts === "number" && argv.attempts > 0 ? argv.attempts : 3;
game(max_number, max_attempts);
