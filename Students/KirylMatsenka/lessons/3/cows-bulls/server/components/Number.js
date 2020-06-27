class Number {
    constructor() {
        this.numArray = this.generateNum()
        this.numString = this.numAsString() 
    }

    numAsString() {
        return this.numArray.join('')
    }

    generateNum() {
        let nums = []
        while(nums.length < 4) {
            let num = Math.floor(Math.random() * 9) + 1
            if (nums.find(element => element === num)) {
                continue
            }
            nums.push(num)
        }
        return nums
    }

    generateNew() {
        this.numArray = this.generateNum()
        this.numString = this.numAsString()
    }

}

module.exports = new Number()