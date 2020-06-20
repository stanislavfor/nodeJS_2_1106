function checker (user, pc, turns) {
    let winner = 'game';
    let bulls = 0;
    let cows = 0;
    for (let i = 0; i < 4; i++) {
        if (user[i] == pc[i]) {
            bulls++;
        } else if (pc.indexOf(+user[i]) >= 0) {
            cows++;
        }
    }
    if (turns == 1) {
        winner = 'loose'
    }
    if (bulls == 4) {
        winner = 'win'
    }
    return {
        text: `Status: ${winner} Bulls: ${bulls} ***** Cown: ${cows}`,
        check: {
            bulls,
            cows,
            winner,
            turns
        }
    }
}