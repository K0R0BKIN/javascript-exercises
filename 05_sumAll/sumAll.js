const sumAll = function(a, b) {
    // Validate input
    const args = [...arguments];
    if (!args.every(arg => Number.isInteger(arg) && arg >= 0)) return "ERROR";
    
    // Calculate sum
    let sum = 0;
    for (let index = Math.min(a, b); index <= Math.max(a, b); index++) {
        sum += index;
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
