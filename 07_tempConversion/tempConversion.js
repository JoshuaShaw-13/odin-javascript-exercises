const convertToCelsius = function(fVal) {
  let cVal = (fVal - 32) / 1.8;
  return Math.round(cVal * 10) / 10;
};

const convertToFahrenheit = function(cVal) {
  let fVal = (cVal * 1.8) + 32;
  return Math.round(fVal * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};