const removeFromArray = function(arr, ...values) {
    return arr.filter(item => {
        let toRemove = false;
        for (const value of values) {
            if (item === value) {
                toRemove = true;
            }
        }
        return toRemove ? false : true;
    });
};

// Do not edit below this line
module.exports = removeFromArray;
