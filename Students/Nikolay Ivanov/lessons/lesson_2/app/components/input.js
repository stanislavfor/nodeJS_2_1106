module.exports = () => {
    const readline = require('readline-sync');
    
    let result = readline.question('Введите четырёхзначное число:');
    result = result.split('').map(item => +item);
    while(!checkResult(result)){
        console.log('Число должно быть четырёхзначным и содержать неповторяющиеся цифры');
        result = readline.question('Введите четырёхзначное число:');
        result = result.split('').map(item => +item);
    }
    return result;
}

checkResult = (result) => {
    let newArr = result.slice();
    if(result.length != 4) return false;
    for (let i = 0; i < result.length-1; i++) {
        const element = newArr.shift();
        if(newArr.indexOf(element) != -1) return false;
    }
    return true;
}