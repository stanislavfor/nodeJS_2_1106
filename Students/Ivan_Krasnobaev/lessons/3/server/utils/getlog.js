const fh = require("./fileHandler");

module.exports = () => {
  const file = "./server/logs/logs.json";
  return fh.read(file);
};