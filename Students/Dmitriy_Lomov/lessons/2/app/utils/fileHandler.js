const fs = require("fs");
const colorizer = require("./colorizer");

module.exports = (file, data) => {
  let logs;
  fs.readFile(file, "utf-8", (err, d) => {
    if (!err) {
      logs = d;
      logs += data;
      fs.writeFile(file, logs, (err) => {
        !err ? colorizer("Log updated", "alert") : colorizer("Log error!", "error");
      });
    }
  });
};
