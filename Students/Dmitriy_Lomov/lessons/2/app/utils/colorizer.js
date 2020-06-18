const ansi = require("ansi");
const cursor = ansi(process.stdout);

module.exports = (text, type) => {
  if (type === "winner") {
    cursor.black().bg.green().write(text).reset();
  } else if (type === "lose") {
    cursor.black().bg.magenta().write(text).reset();
  } else if (type === "bulls") {
    cursor.green().write(text).write("\n").reset();
  } else if (type === "cows") {
    cursor.yellow().write(text).write("\n").reset();
  } else if (type === "attempt") {
    cursor.cyan().write(text).write("\n").reset();
  } else if (type === "rounds") {
    cursor.black().bg.white().write(text).reset();
  } else if (type === "alert") {
    cursor.white().bg.black().write("\n").write(text).write("\n").reset();
  } else if (type === "error") {
    cursor.black().bg.red().write("\n").write(text).reset();
  }
};
