
module.exports = function(user) {
//console.log(par);
const variables = {
    	    "1": 'КАМЕНЬ',
    	    "2": 'НОЖНИЦЫ',
    	    "3": 'БУМАГА'
}

let pc = Math.round(0.5 + Math.random() * (3));


let winner
if (user<4 && user>0 ){
    if((user == 1 && pc == 2)||(user == 2 && pc == 3)||(user == 3 && pc == 1)) {
        winner = 'Ты'
    } else if (user == pc) {
        winner = 'Ничья'
    } else {
        winner = 'Бот'
    }
    console.log(` Ты:${variables[user]}. БОТ:${variables[pc]} \n Выйграл: ${winner}`, '!!!!');
}else{
    console.log("Мы с оленями не играем");
}



}