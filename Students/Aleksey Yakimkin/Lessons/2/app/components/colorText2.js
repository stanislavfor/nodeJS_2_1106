let ansi = require("ansi")

//cursor.green().bg.blue().write('green text').reset()

module.exports = {
    print: (type,text) => {
        let cursor = ansi(process.stdout)

        if ( type == "alert" ){
            return `${cursor.green().bg.black().write(text).reset()}\n`
        }else if ( type == "error"){
            return `${cursor.red().bg.black().write(text).reset()}\n`
        }else if ( type == ""){
            return `${cursor.white().bg.black().write(text).reset()}\n`
        }
    },
    resetStyleEnter: () => {
        //reset styles
        return `${ansi(process.stdout).white().bg.black().write("\n").reset()}`
    }
}