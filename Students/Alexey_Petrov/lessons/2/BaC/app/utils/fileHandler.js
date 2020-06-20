const fs = require('fs')
const ansi = require('./colorizer')

module.exports = (file, data) =>{
           fs.appendFile(file, data, { encoding: 'utf8' }, () => {});

    }
