const repeatString = function(string, times) {
    if(times < 0) return 'ERROR';
    let finalString = "";
    for(let counter = 0; counter < times; counter++){
        finalString += string;
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
