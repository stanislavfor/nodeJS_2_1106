const max = 9999;
const min = 1000;
export default {
  generateSecretNumber() {
    let number;
    do {
      number = Math.floor(Math.random() * (max - min + 1)) + min;
      console.log(`gen ${number}`);
    } while (!this.isNumberCorrect(number));
    return number;
  },
  isNumberCorrect(number) {
    if (!Array.isArray(number)) {
      if (typeof number == "number" && number >= 1000 && number <= 9999) {
        number = Array.from(number.toString());
      } else {
        throw "Illegal number";
      }
    }
    let checked = true;
    number.forEach((item, i, arr) => {
      if (arr.some((val, j) => i !== j && item === val)) {
        checked = false;
      }
    });
    return checked;
  },
  compareNumbers(number, secretNumber) {
    number = Array.from(number.toString());
    secretNumber = Array.from(secretNumber.toString());
    let cows = 0,
      bulls = 0;
    number.forEach((item, i) => {
      if (secretNumber.some((val, j) => i === j && item === val)) {
        bulls++;
      }
      if (secretNumber.some((val, j) => i !== j && item === val)) {
        cows++;
      }
    });
    return { cows: cows, bulls: bulls };
  },
};
