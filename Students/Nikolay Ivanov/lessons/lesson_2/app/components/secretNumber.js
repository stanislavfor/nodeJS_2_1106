module.exports = () => {
    let result = [];
    let digit;
    for (let i = 0; i < 4; i++) {
        while(result.indexOf(
            digit = Math.floor(Math.random() * 9)) != -1);
        result.push(digit);
    }
    return result;
}