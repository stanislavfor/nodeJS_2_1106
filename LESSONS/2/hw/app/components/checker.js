module.exports = (user, pc, units) => {
    let winner;

    if ((user == 1 && pc == 2) || (user == 2 && pc == 3) || (user == 3 && pc == 1)) {
        winner = 'Neo';
    } else if (user == pc) {
        winner = 'Nobody';
    } else {
        winner = 'SkyNet';
    }

    return {
        text:`${winner} wins! \n User: ${units[user]} \n PC: ${units[pc]}`,
        check: { user, pc, winner }
    }
}
