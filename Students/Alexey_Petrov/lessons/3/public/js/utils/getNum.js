function getNum(){
  let number = [];
    while ( number.length < 4) {
        let newNum = Math.floor(Math.random() * 10);
        if (number.indexOf(newNum) < 0){
            number.push(newNum);
        }
    }

    return number;
}