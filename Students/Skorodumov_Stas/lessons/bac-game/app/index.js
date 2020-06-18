const getRandomNumber = require('./components/randomNumberFile')
const check = require('./components/check')


     
let goal = getRandomNumber(); 
let rounds = 10;
let play = true;


while (play) {
 if (rounds >= 1) {             
     play = check(goal)
     console.log ('\x1b[36m%s\x1b[0m', (!play ? `You win! A Computers number ${goal}` : `In the game, ${--rounds} moves left.`))
 } else {
     console.log ('\x1b[36m%s\x1b[0m', `No victory, a number of Computer is ${goal}`)
     play = false
     return
 }
};
 