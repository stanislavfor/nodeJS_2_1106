module.exports = () => {
    let number = [];
    for(let i = 0; i < 4; i++) {
        let randomNumber = Math.floor(Math.random() * 10);

        if(i == 0) {
            number[i] = randomNumber;
        } else {
            while(number.indexOf(randomNumber) != -1) {
                randomNumber = Math.floor(Math.random() * 10);
            };
            number[i] = randomNumber;
        };
    };
    return number;
};