const Radio = require('prompt-radio');

module.exports = () => {
    const prompt = new Radio({
        name: 'Rock, Scissors, Paper',

        message: '1 - Rock, 2 - Scissors, 3 - Paper',

        message: '1 - R, 2 - S, 3 - P',

        default: '1',
        choices: ['1', '2', '3']
    });

    return prompt.run().then(ans => ans)
};