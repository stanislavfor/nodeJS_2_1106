
var pcTry = () => {
    return randomInteger(1, 3)
}

function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

module.exports = pcTry;