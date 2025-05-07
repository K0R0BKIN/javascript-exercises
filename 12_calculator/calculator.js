const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, curr) => total + curr, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, curr) => total * curr, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  const factors = Array.from(Array(num), (_, i) => i+1);
  const total = factors.reduce((total, curr) => total*curr, 1);

  return total;
};

console.info(factorial(0))

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
