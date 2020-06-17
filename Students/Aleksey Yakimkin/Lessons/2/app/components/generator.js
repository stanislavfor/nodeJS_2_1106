module.exports = () => {
    let val =  Math.floor (Math.random() * 9999) + ""
    if( val.length == 1){
        val = "000" + val
    }else if( val.length == 2 ){
        val = "00" + val
    }else if( val.length == 3 ){
        val = "0" + val
    }
    return val
}