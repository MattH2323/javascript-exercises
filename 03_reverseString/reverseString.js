const reverseString = function(string) {
    let splittedString = string.split("");
    let reversedString = "";
    for(let counter = splittedString.length-1; counter >= 0; counter--){
        reversedString += splittedString[counter];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
