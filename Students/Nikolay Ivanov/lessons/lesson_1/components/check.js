module.exports = function(you,computer) {
    const youWin = 'Вы выиграли!!!', compWin = 'Компьютер выиграл!!!';
    let result;

    if(you !== computer) {
        switch(you) {
            case 1: 
                result = computer === 2 ? youWin:compWin;
                break;
            case 2: 
                result = computer === 3 ? youWin:compWin;
                break;
            case 3: 
                result = computer === 1 ? youWin:compWin;
                break;
        }
    } else result = 'Ничья!!!';
    return result;
}