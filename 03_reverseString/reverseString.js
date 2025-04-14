const reverseString = function(str) {
    let result = "";

    const chars = str.split("");
    while (chars.length) {
        result += chars.pop();
    }

    return result;
};

// Do not edit below this line
module.exports = reverseString;
