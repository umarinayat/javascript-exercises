const sumAll = function(firstInt, secondInt) {
    let result = 0;
    if(firstInt < 0 || secondInt < 0 || typeof(firstInt) !== "number" || typeof(secondInt) !== "number"){
        return "ERROR"
    }
    else if(firstInt > secondInt){
        for(let i = secondInt; i <= firstInt; i++){
            result = result + i
        }
    }
    else {
    for(let i = firstInt; i <= secondInt; i++){
        result = result + i
    }}
    return result;
};

// Do not edit below this line
module.exports = sumAll;
