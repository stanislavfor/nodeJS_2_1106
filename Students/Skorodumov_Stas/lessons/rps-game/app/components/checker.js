module.exports = (user, pc, units) => {
    let winner;

    if ((user == 'Rock' && pc == 'Scissors') || (user == 'Scissors' && pc == 'Paper') || (user == 'Paper' && pc == 'Rock')) {
        winner = 'You';
    } else if (user == pc) {
        winner = 'Nobody';
    } else {
        winner = 'Computer';
    }

    return {
        text:`${winner} wins! \n User chose: ${user} \n PC chose: ${pc}`,
        check: { user, pc, winner }
    }
}
