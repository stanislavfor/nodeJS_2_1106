function game() {

    let goal = getRandomNumber()
    let rounds = 10
    let play = true

    while (play) {
        if (rounds >= 1) {
            play = check(goal)
            console.log(!play ? `You win! A Computers number ${goal}` : `In the game, ${--rounds} moves left.`)
        } else {
            console.log(`No victory, a number of Computer is ${goal}`)
            play = false
            return
        }
    }
};

function check(goal) {
    let bulls = 0
    let cows = 0
    let user = [...prompt('Your variant:')]

    user.forEach((ch, index) => {
        if (+ch === goal[index]) {
            bulls++
        } else if (goal.includes(+ch)) {
            cows++
        }
    })

    console.log(`Your variant: ${user} is equal to a result of: \n ${bulls} bulls and ${cows} cows.`)

    return bulls === 4 ? false : true
};

function getRandomNumber() {
    let arr = []

    while (arr.length < 4) {
        let arr = []

        while (arr.length < 4) {
            let num = Math.floor(Math.random() * 10)
            if (arr.indexOf(num) < 0) {
                arr.push(num)
            }

        }
        return arr
    }
};
