module.exports = () => {
    let number = [];
    while(number.length < 4) {
        let randomNumber = Math.floor(Math.random() * 10);

        if(number.length == 0) {
            number.push(randomNumber);
        } else {
            while(number.indexOf(randomNumber) != -1) {
                randomNumber = Math.floor(Math.random() * 10);
            };
            number.push(randomNumber);
        };
    };
    return number;
};