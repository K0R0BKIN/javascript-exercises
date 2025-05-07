const convertToCelsius = function(fahrenheit) {
  const celsius = (fahrenheit - 32) * 5/9;
  const celsiusRounded = Number.parseFloat(celsius.toFixed(1));
  return celsiusRounded;
};

const convertToFahrenheit = function(celsius) {
  const fahrenheit = celsius * 9/5 + 32;
  const fahrenheitRounded = Number.parseFloat(fahrenheit.toFixed(1));
  return fahrenheitRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
