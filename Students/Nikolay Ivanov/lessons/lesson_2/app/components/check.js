module.exports = (yourNumber, secretNumber) => {
    let answer = {
        cows: 0,
        bulls: 0
    };
    yourNumber.forEach(element => {
        if(secretNumber.indexOf(element) != -1) {
            if(secretNumber.indexOf(element) === yourNumber.indexOf(element))
                answer.bulls++;
            else
                answer.cows++;
        }
    });
    return answer;
}
