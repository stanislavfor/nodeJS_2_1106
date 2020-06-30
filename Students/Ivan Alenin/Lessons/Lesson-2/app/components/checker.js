const randOneZero = require('./generator');
const constants = require('./constants');
// Function for check right answer
module.exports = (user) => {
    let win = user == randOneZero();
    // console.log(user, win);
    return {
        text: win === true ? constants.result.win : constants.result.loose,
        check: {user, win}
    };
};