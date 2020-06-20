module.exports = function getRandomNumber () {
     
     let arr = []

     while (arr.length < 4) {
         let num = Math.floor (Math.random () * 10)
         if (arr.indexOf (num) < 0) {
             arr.push (num)
         }
         
     }
     return arr
 }