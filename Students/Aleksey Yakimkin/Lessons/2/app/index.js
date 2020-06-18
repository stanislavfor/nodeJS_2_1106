let generator = require("./components/generator")
let compare = require("./components/compare")
let textPresets = require("./assets/presets")
let colorizer = require("./components/colorText")
let log = require("./components/logger")

game = () => {
    //let textPresets = require("./assets/presets")
    let gamerNumber = ""
    let robotNumber = generator()

    var stdin = process.stdin;

    stdin.setRawMode( true );
    stdin.resume();
    stdin.setEncoding( 'utf8' );

    textPresets.textYellow.text = `Игра 'Быки и коровы'\nУгадайте 4х значное число. Для выхода нажмите ctrl+c\n`
    colorizer.print(textPresets.textYellow)

    colorizer.resetStyleEnter()

    textPresets.textYellow.text = `Угадайте число: `
    colorizer.print(textPresets.textYellow)

    stdin.on( 'data', function( key ){
      // ctrl-c ( end of text )
      if ( key === '\u0003' ) {
        colorizer.resetStyleEnter()
        textPresets.bgYellow.text = `*** GAME OVER ***`
        colorizer.print(textPresets.bgYellow)
        colorizer.resetStyleEnter()
        process.exit();
      }
      gamerNumber = gamerNumber + key;
      process.stdout.write( key );
      if ( gamerNumber.length == 4 ){
        process.stdout.write( "\n"  );
        if ( gamerNumber == robotNumber ){
            //gamer - winner
            //process.stdout.write(`Вы угадали!\n` )
            textPresets.textYellow.text = `Вы угадали!`
            colorizer.print(textPresets.textYellow)
            colorizer.resetStyleEnter()
            process.exit();
            log(gamerNumber,0,4,"Вы выиграли!")
        }else{
            let {cows,bulls} = compare(gamerNumber, robotNumber )
            //process.stdout.write(`Проверка robot: ${robotNumber}; key: ${gamerNumber};\n` )

            textPresets.textBlue.text = `Коров: ${cows}`
            colorizer.print(textPresets.textBlue)

            textPresets.textStandart.text = `   `
            colorizer.print(textPresets.textStandart)

            textPresets.textRedYell.text = `Быков: ${bulls}`
            colorizer.print(textPresets.textRedYell)
            colorizer.resetStyleEnter()
            colorizer.resetStyleEnter()

            log(gamerNumber,cows,bulls,"Игрок не угадал")

            textPresets.textYellow.text = `Новая попытка: `
            colorizer.print(textPresets.textYellow)

            // let promise = new Promise((resolve, reject) => {
            //     log(gamerNumber,cows,bulls,"Игрок не угадал")
            //     resolve("log updated")
            //     return "log updated"
            // });
            // promise.then((val) => {
            //     //console.log("!!!" + val)
            //     textPresets.textYellow.text = `Новая попытка: `
            //     colorizer.print(textPresets.textYellow)
            //     ///colorizer.resetStyleEnter()
            // })

            

        }
        gamerNumber = ""
      }

    });
    

}

game()