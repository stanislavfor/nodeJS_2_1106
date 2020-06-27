module.exports = (player, number) => {
    let systemNumber = [false, 0, 0];

    for (let i = 0; i < number.length; i++) {
        if (player[i] == number[i]) {
            systemNumber[1]++
        } else if (number.indexOf(player[i]) != -1) {
            systemNumber[2]++
        };

        if (systemNumber[1] == 4) {
            systemNumber[0] = true;
        };
    };
    return systemNumber;
}