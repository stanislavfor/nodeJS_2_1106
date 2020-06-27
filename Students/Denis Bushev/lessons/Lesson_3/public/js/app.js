let view = {
    displayMessage: function(msg) {
        let messageArea = document.getElementById('text');
        messageArea.classList.add('text');
        messageArea.innerHTML = msg;   
    }
};

let model = {
    number: [],
    playIsRun: true,
    guess: 0,

    generatorNumber: function() {
        while(this.number.length < 4) {
            let randomNumber = Math.floor(Math.random() * 10);
    
            if(this.number.length == 0) {
                this.number.push(randomNumber);
            } else {
                while(this.number.indexOf(randomNumber) != -1) {
                    randomNumber = Math.floor(Math.random() * 10);
                };
                this.number.push(randomNumber);
            };
        };
    },

    checkNumber: function(arg) {
        let systemNumber = [false, 0, 0];

        for(let i = 0; i < this.number.length; i++) {
            if(arg[i] == this.number[i]) {
                systemNumber[1]++;
            } else if(this.number.indexOf(arg[i]) != -1) {
                systemNumber[2]++;
            };
        
            if(systemNumber[1] == 4) {
                systemNumber[0] = true;
            };
        };
        return systemNumber;
    }
};

let controller = {
    guess: 0,
    processGuess: function(arg) {
        let play = arg;
        this.guess++;
        if (isNaN(parseInt(play)) || play.length != 4) {
            view.displayMessage('Вы ввели некоректное число!');
        } else {
            let game = model.checkNumber(play);
            if (game[0]) {
                view.displayMessage('Вы выйграли! ' + 'Количество попыток: ' + this.guess);
            } else {
                view.displayMessage('Количество быков: ' + game[1] + ' количество коров: ' + game[2]);
            }
        }
    }
};

function init() {
    let inButton = document.getElementById('input_button');
    inButton.onclick = handleButton;
    let guessInput = document.getElementById('input');
    guessInput.onkeydown = handleKeyButton;
    let number = document.getElementById('help_link');
    number.onclick = helpNumber;

    model.generatorNumber();
};

function handleKeyButton(e) {
    let inButton = document.getElementById('input_button');
    if (e.keyCode === 13) {
        inButton.click();
        return false;
    };
};

function handleButton() {
    let guessInput = document.getElementById('input');
    let guess = guessInput.value;
    controller.processGuess(guess);
};

function helpNumber() {
    alert('Загаданное число: \n' + model.number);
};

window.onload = init;