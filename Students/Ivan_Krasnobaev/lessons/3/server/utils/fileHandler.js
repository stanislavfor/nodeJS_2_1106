const fs = require("fs");

module.exports = {
  read(file) {
    return fs.readFile(file, "utf-8", (err, data) => (!err ? data : err));
  },
  readAndWrite(file, data) {
    fs.readFile(file, "utf-8", (err, file_data) => {
      if (!err) {
        fs.writeFile(file, file_data + data, (err) =>
          !err ? "log updated" : "Error"
        );
      } else console.log(`Error read file: ${err}`);
    });
  },
};