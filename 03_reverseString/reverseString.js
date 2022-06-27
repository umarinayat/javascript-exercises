const reverseString = function(value) {
    let revString = '';
    for(let i = value.length - 1; i >= 0; i--){
        revString += value[i]
    }
    return revString
};

// Do not edit below this line
module.exports = reverseString;
