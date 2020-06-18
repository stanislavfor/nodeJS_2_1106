module.exports = {
    // проверка на содержащиеся повторные символы
    check_repeats (str) {
        for (let i = 0; i < str.length - 1; i++) {
            if (str.indexOf(str[i], i + 1) >= 0) {
                return true;
            }
        }
        
        return false;
    },
    // генерация пароля из второго аргумента без повторяющихся символов
    generator (length, passlist = "0123456789") {
        let base = Array.from(passlist);
        let res = '';
        if (isNaN(length) || length < 1) length = 4;
        if (length > base.length) length = base.length;
      
        for (let i = 0; i < length; i++) {
            n = Math.floor(Math.random() * base.length);
            res += base[n];
            base.splice(n, 1);
        }
      
        return res;
    },
    // проверка количества вхождений первого элемента во втором
    check_result (input, secret) {
        let bulls = 0, cows = 0;
        for (let i = 0; i < secret.length; i++) {
            if (input[i] == secret[i]) {
                bulls++;
            } else if (secret.indexOf(input[i]) >= 0) {
                cows++;
            }
        }

        return (bulls == secret.length) ? { win: 1 } : { bulls, cows };
      }
} 
