const reverseString = function(str) {
    let result = "";

    for (let index = str.length - 1; index >= 0; index--) {
        result += str[index];
    }

    return result;
};

// Do not edit below this line
module.exports = reverseString;
