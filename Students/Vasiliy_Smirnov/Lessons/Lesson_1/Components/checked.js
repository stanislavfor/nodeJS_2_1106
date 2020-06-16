
module.exports = function(user,pc) {
    const winuser = 'Вы выиграли!!!';
    const winpc = 'Компьютер выиграл!!!';
    let result;

    if(user !== pc) {
        switch(user) {
            case 1: 
                result = pc === 2 ? winuser:winpc;
                break;
            case 2: 
                result = pc === 3 ? winuser:winpc;
                break;
            case 3: 
                result = pc === 1 ? winuser:winpc;
                break;
        }
    } else result = 'Ничья!!!';
    return result;
}