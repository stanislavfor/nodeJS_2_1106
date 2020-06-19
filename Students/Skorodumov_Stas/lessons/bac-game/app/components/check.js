var readline = require('readline-sync');

module.exports = function check(goal) {
    
     let bulls = 0;
     let cows = 0;
     let user = [...readline.question('Your variant: ')]; 

     user.forEach((ch, index) => {
         if (+ch === goal[index]) {
             bulls++
         } else if (goal.includes(+ch)) {
             cows++
         }
     });
    
    
     console.log ('\x1b[36m%s\x1b[0m', `Your variant: ${user} is equal to a result of: ${bulls} bulls and ${cows} cows.`)
     
     return bulls === 4 ? false : true
 }