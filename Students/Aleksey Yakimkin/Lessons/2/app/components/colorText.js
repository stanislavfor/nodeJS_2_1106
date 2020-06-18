let ansi = require("ansi")

//cursor.green().bg.blue().write('green text').reset()

module.exports = {
    print: (par) => {
    let cursor = ansi(process.stdout)

    if ( par.colorText !== undefined && par.colorBg !== undefined ){
        return `${cursor[par.colorText]().bg[par.colorBg]().write(par.text).reset()}`
    }else if ( par.colorBg === undefined && par.colorBg === null ){
        return `${cursor[par.colorText]().bg.black().write(par.text).reset()}`
    }else if ( par.colorText === undefined && par.colorText === null ){
        return `${cursor.white().bg[par.colorBg]().write(par.text).reset()}`
    }else{
        return `${cursor.white().bg.black().write(par.text).reset()}`
    }
    },
    resetStyleEnter: () => {
        //reset styles
        return `${ansi(process.stdout).white().bg.black().write("\n").reset()}`
    }
}