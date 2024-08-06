const add = function(num1, num2) {
	return num1+num2;
};

const subtract = function(num1, num2) {
	return num1-num2;
};

const sum = function(num_arr) {
	const sumOfNums = num_arr.reduce((total, currentNum) => {
    return total + currentNum;
  }, 0);
  return sumOfNums;
};

const multiply = function(num_arr) {
  const prodOfNums = num_arr.reduce((total, currentNum) => {
    return total * currentNum;
  }, 1);
  return prodOfNums;
};

const power = function(num, power) {
	return num ** power;
};

const factorial = function(num) {
	let i = 1;
  let total = 1;
  while (i <= num) {
    total *= i;
    i++;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
