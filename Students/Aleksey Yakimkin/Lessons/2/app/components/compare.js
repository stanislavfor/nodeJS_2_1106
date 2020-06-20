module.exports = function(gamerNumber, robotNumber){
    let cows = 0
    let bulls = 0
    gamerNumber = gamerNumber + ""
    let excludePosition = [];
    for( let i=0; i< robotNumber.length; i++){
        for( let j=0; j< gamerNumber.length; j++){
            if(!excludePosition.includes(j)){
                if( robotNumber[i] == gamerNumber[j] && i == j){
                    bulls++
                    excludePosition.push(j)
                }else if (robotNumber[i] == gamerNumber[j] && i != j){
                    cows++
                }
            }
        }
    }

    return {cows:cows,bulls:bulls}
}