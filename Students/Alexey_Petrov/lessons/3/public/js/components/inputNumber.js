function InputUsernum() {
 let user = document.querySelector('#inp').value;
         let {
            check,
            text
        } = checker(user.split(''), pc, turns--);
        textView(text);
        logger(check);
   }


