class Number {
    constructor() {
        this.numArray = this.generateNum()
        this.numString = this.numAsString() 
    }

    numAsString() {
        let num = ''
        this.numArray.forEach(element => {
            num += element
        })   
        return num
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

}

module.exports = new Number()