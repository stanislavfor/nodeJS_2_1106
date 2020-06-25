let fs = require("fs");

module.exports = function (fileUrl, data) {
  fs.writeFile(fileUrl, JSON.stringify(data, null, " "), (err) => null);
};
