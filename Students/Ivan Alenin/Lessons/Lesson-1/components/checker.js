
var checker = (user, pc) => {
    let i = user.toString() + pc.toString();

    return truthTable[i]
}

const truthTable = {
    '11': 0,
    '12': 1,
    '13': -1,
    '21': -1,
    '22': 0,
    '23': 1,
    '31': 1,
    '32': -1,
    '33': 0
}

module.exports = checker;