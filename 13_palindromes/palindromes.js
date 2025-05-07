const palindromes = function (str) {
    const chars = str
        .trim()
        .split("")
        .filter(c => c.match(/[A-za-z0-9]/))
        .map(c => c.toLowerCase());

    const charStr = chars.join("");
    const reverseCharStr = chars.reverse().join("");
    return charStr === reverseCharStr;
};

palindromes('Racecar!');

// Do not edit below this line
module.exports = palindromes;
