const inquirer = require('inquirer');
const check = require('./components/checker');
const constants = require('./components/constants');
const colorText = require('./utils/colorizer')
const logger = require('./utils/logger')


let user, pc;
constants.questions.choices = constants.vars;


inquirer.prompt(constants.questions)
    .then(answers => { user = answers['try'];})
    .then(() => {
        let result = check(user);
        console.log(user, result)
        colorText(result.text, 'alert');
        logger(result.check);
    });
