const fibonacci = function (position) {
    if (position == 0) {
        return 0;
    } else if (position < 0) {
        return "OOPS";
    } else {
        const seq = [1, 1];
        while (seq.length < position) {
            seq.push(seq.at(-2) + seq.at(-1));
        }
        return seq.at(-1);
    }
};

fibonacci(4);

// Do not edit below this line
module.exports = fibonacci;
